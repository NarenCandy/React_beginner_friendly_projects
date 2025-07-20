import React, { useState } from 'react'
import '../style.css'

const Counter = () => {

    const [count , setCount]= useState(0);
    const increment = ()=>setCount(count + 1);
    const decrement = ()=>setCount(count - 1);
  return (
    <div className='container'>
        <div className="number">
        {count}
        </div>

    <div className='btns-container'>
        <button className='increment' onClick={increment}>+</button>
        <button className='increment' onClick={decrement}>-</button>

    </div>
    
    </div>
  )
}

export default Counter