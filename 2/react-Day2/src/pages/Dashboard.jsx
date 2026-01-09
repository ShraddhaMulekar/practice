import React from 'react'
import {useNavigate} from "react-router-dom"

const Dashboard = () => {
  const navigate = useNavigate()

  const handleLogout =()=>{
    localStorage.removeItem("token")
    navigate("/login")
  }
  
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to Dashboard you are logged in successful!</p>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Dashboard