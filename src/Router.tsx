import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";

export default function Router() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Login/>}/>
          <Route path='/register' element={<></>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
