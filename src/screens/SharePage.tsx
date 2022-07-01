import styled from "styled-components"
import { useRouter } from "../../node_modules/next/router"
import StandardButton from "../components/StandardButton/index"
import { Button } from "../components/UI/Button/index"
import { Flex } from "../components/UI/Flex/index"
import { Heading } from "../components/UI/Heading/index"
import { Text } from "../components/UI/Text/index"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 16px;

  button {
    background-image: linear-gradient(to right, var(--blue), var(--pink));

    :hover {
      filter: brightness(0.8);
      transition: 0.5s;
    }
  }
`

export default function SharePage() {

  const router = useRouter();

  console.log(router.query)

  const shareData = async () => {
    if(navigator.share) {
        await navigator.share({
            title: 'Carbon Compensations Competition!',
            text: 'Hi there! Give Your Contribution To Spread The News About Carbon Compensations!',
            url: `https://repenso-backend-challenge-webpage.vercel.app/?email=${router.query.email}`
          }
        )
    } else {
      alert('Web Share is not supported by this browser!')
    }
  }

  return (
    <Container>
      <Heading color="var(--white)">CONGRATULATIONS!</Heading>
      <Heading textAlign="center" variant="h2" color="var(--white)">You just received:</Heading>
      <Text color="var(--white)" fontSize="100px">1</Text>
      <Heading variant="h1" color="var(--white)">POINT</Heading>
      <Heading textAlign="center" variant="h2" color="var(--white)">For Your Contribution!</Heading>

      <Text mt="24px" maxWidth="400px" fontWeight="bold" textAlign="center" variant="h2" color="var(--white)">
        Share it With Your Friends to Earn More Points!
      </Text>

      <Flex mt="32px" gap="16px" alignItems="center" flexDirection="column" width="100%">
        <StandardButton
          onClick={shareData}
          label="SHARE"
        />

        <StandardButton
          onClick={() => router.push('/top10')}
          label="End Competition and See Winners"
        />
      </Flex>

    </Container>
  )
}
