import { useEffect, useState } from "react"
import styled from "styled-components";
import { useRouter } from "../../node_modules/next/router";
import StandardButton from "../components/StandardButton/index";
import Table from "../components/Table/index";
import { Flex } from "../components/UI/Flex/index";
import { Heading } from "../components/UI/Heading/index";
import { Text } from "../components/UI/Text/index";
import { TopTenData } from "../dtos/index";
import { api } from "../services/api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 32px;
  background-image: linear-gradient(to right,  var(--blue), var(--pink));

  button {
    background-image: linear-gradient(to right,  var(--pink), var(--blue));
    margin-top: 32px;

    :hover {
      filter: brightness(0.8);
      transition: 0.5s;
    }
  }
`
export default function TopTenTable() {
  const [topTenData, setTopTenData] = useState<TopTenData | null>(null);

  const arrTableLabels = ['Name', 'Email', 'Phone Number', 'Points'];

  const router = useRouter();

  useEffect(() => {
    api.get('/top10')
    .then(response => setTopTenData(response.data))
  }, [])

  async function onSubmit() {
    await api.get('/new-competition')
    .then(response => console.log(response.data))

    router.push('/')
  }

  if (!topTenData) {
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Heading textAlign="center">Loading...</Heading>
    </Flex>
  }

  return (
    <Container>
      <Text textAlign="center" color="var(--white)" fontWeight="bold" fontSize="50px" mb="32px">
        CONGRATULATIONS TO THE WINNERS!
      </Text>

      <Table
        tableHeaders={arrTableLabels}
        data={topTenData}
      />

      <StandardButton
        label="Start New Competition"
        onClick={onSubmit}
      />
    </Container>
  )
}
