import { useState } from "react"
import styled from "styled-components"
import { useRouter } from "../../node_modules/next/router"
import { Button } from "../components/UI/Button/index"
import { Flex } from "../components/UI/Flex/index"
import { Input } from "../components/UI/Input/index"
import { Text } from "../components/UI/Text/index"
import { api } from "../services/api"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

const CardContainer = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  gap: 48px;

  -webkit-box-shadow: 7px 9px 7px -2px rgba(0,0,0,0.71);
  box-shadow: 7px 9px 7px -2px rgba(0,0,0,0.71);

  input {
    height: 50px;
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--gray);
  }

  button {
    background-image: linear-gradient(to right, var(--blue), var(--pink));

    :hover {
      filter: brightness(0.8);
      transition: 0.5s;
    }
  }
`

export default function FormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const router = useRouter();

  async function onSubmit() {
    let statusCode: number;

    if (!name || !email || !phone) {
      alert('Fill all Form Fields to Proceed!')
      return;
    }

    const data = {
      name,
      email,
      phone
    }

    const referredEmail = router.query

    console.log(referredEmail)

    await api.post('/signup', data)
    .then(response => statusCode = response.status)

    if (statusCode === 201) {
      alert('Successfully registered!')
      router.push(`/sharepage/?email=${data.email}`)
    } else {
      alert('Person already registered!')
    }

    if (referredEmail) {
      await api.post('/referred', referredEmail)
      .then(response => console.log(response.data))
    }
  }

  return (
    <Container>
      <Text maxWidth="500px" mb="32px" fontWeight="bold" textAlign="center" color="var(--white)" fontSize="32px">
        Sign Up To Participate on a Carbon Compensation Competition!
      </Text>
      <CardContainer>
        <Text textAlign="center" variant="h2">CARBON COMPENSATIONS FORM</Text>

        <Flex flexDirection="column" gap="50px" width="100%" >
          <Flex flexDirection="column" width="100%">
            <Text>Name</Text>
            <Input
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Flex>

          <Flex flexDirection="column" width="100%">
            <Text>E-mail</Text>
            <Input
              placeholder="Your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Flex>

          <Flex flexDirection="column" width="100%">
            <Text>Phone Number</Text>
            <Input
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Flex>
        </Flex>

        <Button onClick={onSubmit} width="100%" height="50px" borderRadius="50px">
          <Text fontWeight="bold" fontSize="18px" color="var(--white)" >Sign Up</Text>
        </Button>

      </CardContainer>
    </Container>
  )
}
