// use ref allows to persist the value between re- renders. it is used to store mutable value does not causese the re-renders when get updated or modifieds .it can direclty access the dom elements 
//if we want to count how many times the component gets re-renders using the useState we will stuck in indifine loop as it self causes re-renders we will use ref
import React from 'react'
import {useState,useEffect,useRef}from 'react'
const UseRef = () => {
 const [inputvalue,setInputvalue]=useState()
 const count=useRef(0)

 useEffect(()=>{
    count.current=count.current+1})
 return(
    <>
    <input
    type="text"
    value={inputvalue}
    onChange={(e)=>setInputvalue(e.target.value)} />
    <h1>number the component re-renders:- {count.current}</h1>
    </>
 
 )
}

export default UseRef