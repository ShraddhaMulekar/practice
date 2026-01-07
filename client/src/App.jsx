import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Navbar from './pages/Navbar'
import Dashboard from "./pages/Dashboard"
import Signin from './pages/Signin'
import Login from './pages/Login'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='register' element={<Signin />} />
      <Route path='login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App
