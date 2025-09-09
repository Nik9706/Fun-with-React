import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { href } from 'react-router-dom'

// function MyApp(){
//   return <h1>Welcome to custom react</h1>

// }

// const createElement={
//     type:"a",
//     props:{
//         href:"www.google.com",
//         target:"_blank",

//     },
//     children:"click me to visit to google"
// }
// const anotherCreateElement=(
//   <a href='https://www.google.com' target='_blank'>Click to visit on google </a>
// )

// const reactElement=React.createElement(
//   "a",
//   {href:'https://www.google.com',target:"_blank"}
//     ,'click me to visit google'
//     )

createRoot(document.getElementById('root')).render(
  


<App/>


)
