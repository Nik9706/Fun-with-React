import { useState } from 'react'
import './index.css'
import Card from './Card.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-500 text-black p-4 py-3 rounded-3xl text-center '>Fun With React </h1>
    <Card username="Fun aur React"/>
    <br/>
    <Card username ="learning with react"/>
    </>
  )
}

export default App
 