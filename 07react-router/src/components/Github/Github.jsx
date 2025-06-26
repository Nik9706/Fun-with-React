import React, { useEffect } from 'react'
import { useState } from 'react'
const Github = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/nik9706')
    .then(response=>response.json()).then(data=>{
      setData(data)
      

    })

  },[])
  return (
    <div className='text-center bg-gray-700 text-white'>Github Followers:{data.followers}</div>
  )
}

export default Github