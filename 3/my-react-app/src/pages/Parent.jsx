import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment {count}</button>

        <Child name="Shraddha" />
    </div>
  )
}

export default Parent