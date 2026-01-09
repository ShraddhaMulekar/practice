import { useState } from 'react'
import './App.css'
import Couter from './components/Couter'
import Form from './components/Form'
import User from './components/User'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './pages/Navbar'
import NotFound from './pages/NotFound'
import UserDetail from './pages/UserDetail'

function App() {

  return (
    <>
    <Navbar  />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/counter' element={<Couter />} />
      <Route path='/form' element={<Form />} />
      <Route path='/users' element={<User />} />
      <Route path='/user/:id' element={<UserDetail />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
    </>
  )
}

export default App
