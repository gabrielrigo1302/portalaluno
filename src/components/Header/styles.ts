import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 10vh;
  background: ${(props) => props.theme['purple-500']};
  border-radius: 8px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`