import { useState } from 'react'
import './App.css'
import Couter from './components/Couter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Couter />
    </>
  )
}

export default App
