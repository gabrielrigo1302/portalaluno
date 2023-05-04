/* eslint-disable @typescript-eslint/no-empty-function */ //remover quando adicionar a função para o segundo botão
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { Label } from "../../components/Label"
import { defaultFontSize, defaultFontWeight, defaultTheme } from "../../styles/default";
import { LoginBody, LoginContainer, LoginFormBody, LoginForm, LoginFormHeader, LoginFormFooter } from "./styles"
import { useNavigate } from "react-router-dom";
import { CheckBox } from "../../components/CheckBox";

export default function Login() {
  const [unity, setUnity] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);
  const [allowLogin, setAllowLogin] = useState(false);
  const [keepLogged, setKeepLogged] = useState(false);
  
  const navigate = useNavigate();

  const updateUnity = (unity: string) => setUnity(unity);
  const updateUser = (user: string) => setUser(user);
  const updatePassword = (password: string) => setPassword(password);  
  
  const updateKeepLogged = () => {
    console.log('keepLogged --- ', keepLogged);
    setKeepLogged(!keepLogged);
  }
  
  const login = () => {
    setLogged(true);
  };


  useEffect(() => {
    logged && navigate('/home');
  }, [logged, navigate])

  useEffect(() => {
    if (unity && user && password) {
      setAllowLogin(true);
    } else {
      setAllowLogin(false);
    }
  }, [unity, user, password])

  return (
    <LoginContainer>
      <Header 
        message="Portal do Aluno" 
        size={defaultFontSize.big}
        textColor={defaultTheme["purple-900"]}
        weight={defaultFontWeight.bold} 
      />
      <LoginBody>
        <LoginForm>
          <LoginFormHeader>
            <Label message="Login"/>
          </LoginFormHeader>
          <LoginFormBody>
            <Input 
              message="Unidade" 
              size={defaultFontSize.small}
              onChange={updateUnity}
              value={unity}
            />
            <Input 
              message="Usuário" 
              size={defaultFontSize.small}
              onChange={updateUser}
              value={user}
            />
            <Input 
              message="Senha" 
              size={defaultFontSize.small}
              onChange={updatePassword}
              value={password}
            />
          </LoginFormBody>
          <LoginFormFooter>
            <CheckBox message="Lembrar meu login nesta máquina." onClick={updateKeepLogged}/>
            <Button message="Cadastrar" enabled={false} onClick={() => {}}/>
            <Button message="Entrar" enabled={allowLogin} onClick={login}/>
          </LoginFormFooter>
        </LoginForm>
      </LoginBody>
    </LoginContainer>
  )
}
