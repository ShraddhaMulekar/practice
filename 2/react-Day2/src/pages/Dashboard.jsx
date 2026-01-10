import React from 'react'
import {useNavigate} from "react-router-dom"
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const navigate = useNavigate()
  const {user, logout} = useAuth()

  // const handleLogout =()=>{
  //   localStorage.removeItem("token")
  //   navigate("/login")
  // }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome {user?.name} to Dashboard you are logged in successful!</p>
      {/* <button onClick={handleLogout}>LogOut</button> */}
      <button onClick={logout}>LogOut</button>
    </div>
  )
}

export default Dashboard