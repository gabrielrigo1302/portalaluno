import styled from 'styled-components'
import { defaultFontSize, defaultFontWeight, defaultFont } from '../../styles/default'

interface Props {
  size?: string,
  weight?: string,
}

export const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  line-height: 2;
  margin: 10px 0px 10px 0px; 
`

export const InputField = styled.input<Props>`
  line-height: 2;
  box-sizing: border-box;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 5px;
  border-color: ${(props) => props.theme['purple-900']};
  font-family: ${defaultFont.font};
  font-size: ${(props) => props.size || defaultFontSize.small};
  font-weight: ${(props) => props.weight || defaultFontWeight.normal};
  &:focus {
    background: ${(props) => props.theme['white']};
  }
`