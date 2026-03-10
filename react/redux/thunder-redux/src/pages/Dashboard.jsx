import React from 'react'
import NewUser from '../components/NewUser'
import { UserList } from '../components/UserList'

const Dashboard = () => {
  return (
    <div>
        <NewUser />
        <UserList />
    </div>
  )
}

export default Dashboard