import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] =useState(10)

//let counter=10

function AddValue(){

//counter=counter+1
if(counter>20)
{
alert("cannot got more than that")
}
else
  setCounter(counter+1)


console.log('counter',counter)
}
function RemoveValue(){
  if(counter>0){
    setCounter(counter-1)
  }
else 
  alert('cannot go negative')
}

  return (
    <>
    <h1>the value of counter{counter}</h1>
    <button onClick={AddValue}>Add value{counter}</button>
    <br/>
    <button onClick={RemoveValue}>remove value{counter}</button>

    <h1>the value of the footer{counter}</h1>
  
    </>
  )
}

export default App
