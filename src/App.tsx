import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './containers/Login'
import { Signup } from './containers/Signup'
import { DashBoard } from './containers/DashBoard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<DashBoard/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
