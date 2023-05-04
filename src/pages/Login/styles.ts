import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme['purple-900']};
  margin: 0px;
`

export const LoginBody = styled.div`
  height: 90%;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const LoginForm = styled.div`
  width: 50%;
  height: 75%;
  background: ${(props) => props.theme['white']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 12px 25px 12px 25px;
`

export const LoginFormHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LoginFormBody = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const LoginFormFooter = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`