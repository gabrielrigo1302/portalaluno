import { Button } from "./components/Button"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Button/>}>
          <Route path='/register' element={<Button/>}/>
          <Route path='/home' element={<Button/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
