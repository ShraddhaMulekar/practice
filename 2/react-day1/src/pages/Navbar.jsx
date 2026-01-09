import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/about")}>About</button>
        <button onClick={()=>navigate("/counter")}>Counter</button>
        <button onClick={()=>navigate("/users")}>Users</button>
        <button onClick={()=>navigate("/form")}>form</button>
        <button onClick={()=>navigate("/demo")}>CleanUp Demo</button>
    </div>
  )
}

export default Navbar