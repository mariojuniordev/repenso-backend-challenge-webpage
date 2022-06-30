import styled from "styled-components"
import { Button } from "../components/UI/Button/index"
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

  const shareData = async () => {
    if(navigator.share) {
      try {
        await navigator.share({
            title: 'Carbon Compensations Competition!',
            text: 'Hi there! Give Your Contribution To Spread The News About Carbon Compensations!',
            url: 'http://localhost:3000'
          }
        )
      } catch (error) {
        console.log(`Ops! Algo deu errado! ${error}`)
      }
    } else {
      alert('Web Share não é suportado neste browser!')
    }
  }

  return (
    <Container>
      <Heading color="var(--white)">CONGRATULATIONS!</Heading>
      <Heading textAlign="center" variant="h2" color="var(--white)">You just received:</Heading>
      <Text color="var(--white)" fontSize="100px">1</Text>
      <Heading variant="h1" color="var(--white)">POINT</Heading>
      <Heading textAlign="center" variant="h2" color="var(--white)">For Your Contribution!</Heading>

      <Heading textAlign="center" variant="h2" color="var(--white)">
        Share it With Your Friends to Earn More Points!
      </Heading>

      <Button mt="32px" maxWidth="350px" onClick={shareData} width="100%" height="50px" borderRadius="50px">
        <Text textAlign="center" fontWeight="bold" fontSize="18px" color="var(--white)">SHARE</Text>
      </Button>

    </Container>
  )
}
