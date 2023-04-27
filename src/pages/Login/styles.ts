import styled from 'styled-components'

export const LoginContainer = styled.div`
  max-width: 74rem;
  height: 90vh;
  margin: auto;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const LoginBody = styled.div`
  height: 100%;
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