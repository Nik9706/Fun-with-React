import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
