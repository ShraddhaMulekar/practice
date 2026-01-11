import React from 'react'
import useFetch from '../hooks/useFetch'

const Users = () => {
    const {data, loading, error} = useFetch("https://fakestoreapi.com/users")
    console.log({data})
    
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;
  return (
    <>
        {
            data.map((user)=>(
                <p key={user.id}>{user.username}</p>
            ))
        }
    </>
  )
}

export default Users