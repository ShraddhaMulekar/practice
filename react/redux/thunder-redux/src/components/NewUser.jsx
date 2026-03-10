import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/users/userSlice'

const NewUser = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch()
  return (
    <div>
      <input 
        type="text" 
        placeholder='Enter you name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <button onClick={()=>dispatch(addUser({id:Date.now(), name:name}))}>
        Add
      </button>
    </div>
  )
}

export default NewUser
