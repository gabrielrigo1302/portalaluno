import { StyledLabel } from './styles'

interface LabelProps {
  message: string,
  size?: string,
  weight?: string,
  textColor?: string
}

export const Label = (props: LabelProps) => {
  const { message, size, weight, textColor } = props;

  return (
    <StyledLabel size={size} weight={weight} textColor={textColor}>
      { message }
    </StyledLabel>
  )
}
