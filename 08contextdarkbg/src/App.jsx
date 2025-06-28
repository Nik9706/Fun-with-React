import { useState } from 'react'

import './App.css'
import UserContextProvider from './assets/context/UserContextProvider'
import User from './assets/components/Login'
import Profile from './assets/components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
   <User/>
   <Profile/>
    </UserContextProvider>
  )
}

export default App
