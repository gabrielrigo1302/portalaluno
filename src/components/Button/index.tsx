import { StyledButton } from "./styles";

interface ButtonProps {
  enabled?: boolean,
  message: string,
  onClick: () => void
}

export const Button = (props: ButtonProps) => {
  const { message, enabled, onClick } = props;

  return(  
    <StyledButton disabled={!enabled} onClick={() => onClick()}>
      {message}
    </StyledButton>
  )
}
