import styled from 'styled-components'
import { defaultFont, defaultFontSize, defaultFontWeight } from '../../styles/default'

export const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  background: ${(props) => props.theme['blue-200']};
  color: ${(props) => props.theme['blue-400']};
  border-radius: 12px;
  border-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${defaultFont.font};
  font-size: ${defaultFontSize.small};
  font-weight: ${defaultFontWeight.normal};
  letter-spacing: 2.5px;

  &:disabled {
    color: ${(props) => props.theme['gray-300']};
    background: ${(props) => props.theme['gray-200']};
  }

  &:active {
    background: ${(props) => props.theme['blue-300']};
  }
`