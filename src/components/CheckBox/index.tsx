import { StyledCheckBoxContainer, StyledCheckBox } from "./styles";

interface CheckBoxProps {
  message: string,
  onClick: () => void
}

export const CheckBox = (props: CheckBoxProps) => {
  const { message, onClick } = props;

  return( 
    <StyledCheckBoxContainer>
      <StyledCheckBox type="checkbox" onClick={() => onClick()}/>
      {message}
    </StyledCheckBoxContainer>
  )
}
