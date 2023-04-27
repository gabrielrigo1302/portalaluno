import { Label } from '../Label';
import { InputField, StyledInput } from './styles';

interface InputProps {
  message: string,
  onChange: (event: string) => void,
  value: string,
  size?: string,
  weight?: string,
  textColor?: string
}

export const Input = (props: InputProps) => {
  const { message, size, weight, textColor, onChange, value } = props;

  return (
    <StyledInput>
      <Label 
        message={message} 
        size={size} 
        weight={weight} 
        textColor={textColor}
      />
      <InputField 
        onChange={(event) => onChange(event.target.value)}
        placeholder={value}
      />
    </StyledInput>
  )
}
