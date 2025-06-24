import React, { use } from 'react'
import { useState } from 'react'

function Hook() {
    
        
    const increment=()=>{
        const [count,setCount]=useState(0)
        setCount((count)=>(count+1))
    }
  return (
   <>
   <p>count:{count}</p>
   <button onClick={increment}>Increment</button>
   </>
  )
}

export default Hook