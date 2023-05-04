import styled from 'styled-components'
import { defaultFont, defaultFontSize, defaultFontWeight, defaultTheme } from "../../styles/default";

interface Props {
  size?: string,
  weight?: string,
  textColor?: string
}

export const StyledLabel = styled.label<Props>`
  width: 100%;
  font-size: ${(props) => props.size || defaultFontSize.medium};
  color: ${(props) => props.textColor || defaultTheme['purple-900'] };
  align-content: center;
  font-family: ${defaultFont.font};
  font-weight: ${(props) => props.weight || defaultFontWeight.normal};
  letter-spacing: 2px;
`