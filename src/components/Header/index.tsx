import { Label } from '../Label'
import { HeaderContainer } from './styles'

interface HeaderProps {
  message: string,
  size?: string,
  weight?: string,
  textColor?: string
}

export const Header = (props: HeaderProps) => {
  const { message, size, textColor, weight } = props;

  return (
    <HeaderContainer>
      <Label 
        message={message}
        size={size}
        weight={weight}
        textColor={textColor}
      />
    </HeaderContainer>
  )
}