import * as React from "react";

interface AuthContextType {
  auth: {
    authed:
    
  }
}

export const authContext = React.createContext({} as );

function useAuth() {
  const [authed, setAuthed] = React.useState(false);

  return {
    authed,
    login() {
      return new Promise<void>((res) => {
        setAuthed(true);
        res();
      });
    },
    logout() {
      return new Promise<void>((res) => {
        setAuthed(false);
        res();
      });
    },
  };
}

export function AuthProvider({ children }: any) {
  const auth = useAuth();

  return (<authContext.Provider value={auth}>{children}</authContext.Provider>);
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}