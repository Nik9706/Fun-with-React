import { useState } from 'react'

function App() {
  
const [count,setCount]=useState(0)
  function addValue(){
    if (count==30) {
      alert("Count cannot be greater than 30");
      return;
    }
    else {
    setCount(count+1)
  }

  }
  function removeValue(){
    if (count == 0) {
      alert("Count cannot be less than zero");
      return;
    }
    else{
    setCount(count-1)
  }}

  return (
    <>
      <h1>Fun with react</h1>
      <h2>Counter: {count} </h2>
      <button onClick={addValue}>Add value:{count}</button>
      <br/>
      <button onClick={removeValue}>Remove Value:{count} </button>
      <p>the value of Counter {count}</p>
    </>
  )
}

export default App
