import React, { useState } from 'react'

const Couter = () => {
    const [count, setCount] = useState(0)
    const handleInc = ()=>{
        setCount((prev)=>prev+1)
    }
    const handleDec = ()=>{
        if(count === 0){
            setCount((prev)=>prev===0)
        }
        setCount((prev)=>prev-1)
    }
  return (
    <div>
        <h1>Counter</h1>
        <div>
            <button onClick={handleInc}>+</button>
            <h2>{count}</h2>
            <button onClick={handleDec}>-</button>
        </div>

    </div>
  )
}

export default Couter