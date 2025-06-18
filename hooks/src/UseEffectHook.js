import React from 'react'
import {useState,useEffect} from 'react'
const UseEffectHook = () => {
    const[count,setCount]=useState(0)
    useEffect(() => {
      setTimeout(function(){
        setCount((count)=>(count+1))
      },1000)
    })
    
  return (
    <div>i have rendred the count {count}</div>
  )
}

export default UseEffectHook