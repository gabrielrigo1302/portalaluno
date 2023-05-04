import styled from 'styled-components'
import { defaultFont, defaultFontSize, defaultFontWeight } from '../../styles/default'

export const StyledCheckBoxContainer = styled.label`
  width: 280px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${defaultFont.font};
  font-size: ${defaultFontSize.tiny};
  font-weight: ${defaultFontWeight.normal};
`

export const StyledCheckBox = styled.input`
  width: 40px;
`
