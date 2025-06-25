import { useState } from 'react'

import './index.css'
function App() {
  const [color, setColor] = useState("olive")

  return (
    
     <div className='w-full h-screen duration-200'
     style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-10 px-2" >
      <div className='fixed flex flex-wrap justify-center bg-white rounded-3xl gap-3 px-3 py-2'>
      <button onClick={()=>setColor("red")}className='outline-none text-white px-4 py-1 rounded-3xl'
      style={{backgroundColor:"red"}}>Red</button>
     
      <button onClick={()=>setColor("Green")}className='outline-none text-white px-4 py-1 rounded-3xl'
      style={{backgroundColor:"green"}}>Green</button>
       <button onClick={()=>setColor("Black")}className='outline-none text-white px-4 py-1 rounded-3xl'
      style={{backgroundColor:"black"}}>Black</button>
       <button onClick={()=>setColor("Yellow")} className='outline-none text-white px-4 py-1 rounded-3xl'
      style={{backgroundColor:"yellow"}}>Yellow</button>
       <button onClick={()=>setColor("Pink")} className='outline-none text-white px-4 py-1 rounded-3xl'
      style={{backgroundColor:"pink"}}>Pink</button>
      </div>
      </div>
      </div>
     
    
  )
}

export default App
