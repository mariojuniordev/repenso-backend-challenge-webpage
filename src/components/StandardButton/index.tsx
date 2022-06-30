import { Button } from "../UI/Button/index";
import { Text } from "../UI/Text/index"

interface StandardButtonProps {
  onClick: () => void;
  label: string;
}

export default function StandardButton(props: StandardButtonProps) {
  return (
    <Button p="16px" maxWidth="350px" onClick={props.onClick} width="100%" height="50px" borderRadius="50px">
    <Text textAlign="center" fontWeight="bold" fontSize="18px" color="var(--white)">
      { props.label }
    </Text>
  </Button>
  )
}
