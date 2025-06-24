import React from 'react'

import Custom from './Custom'
import { createElement } from 'react'

function App() {
  function Redner(){
   return <div>
    <h1> Welcome to react </h1>
    </div>
  }

//   const createElement={
//     type:"a",
//     props:{
//         href:"www.google.com",
//         target:"_blank",

//     },
//     children:"click me to visit to google"
// }
const reactElement = React.createElement(
  'a',
  { 
    href: 'https://google.com', target: '_blank'
  }, 
  "click on me to visit google"
)
 

  return (
    <>
     <Custom/>
     <Redner/>
     <reactElement/>     
    </>
  )
}

export default App
