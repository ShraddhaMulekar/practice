import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Navbar from './pages/Navbar'
import Dashboard from "./pages/Dashboard"
import Signin from './pages/Signin'
import Login from './pages/Login'
import LogOut from './pages/LogOut'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='register' element={<Signin />} />
      <Route path='login' element={<Login />} />
      <Route path='logout' element={<LogOut />} />
    </Routes>
    </>
  )
}

export default App
