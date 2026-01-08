import React, { useState } from 'react'
import Button from './Button'

const Couter = () => {
    const [count, setCount] = useState(0)
    const handleInc = ()=>{
        setCount((prev)=>prev+1)
    }
    const handleDec = ()=>{
        if(count > 0){
            setCount((prev)=>prev-1)
        }        
    }
  return (
    <div>
        <h1>Counter</h1>
        <div>
            <h2>{count}</h2>
            {/* <button text="Increment" onClick={handleInc}>+</button>
            <button text="Decrement" onClick={handleDec}>-</button> */}

            <Button text="Increment" onClick={handleInc} />
            <Button text="Decrement" onClick={handleDec} />

        </div>

    </div>
  )
}

export default Couter