
import './App.css'
import Card from './Card'

function App() {
const images={
  size:"20px",
  image:"horse image"
}

  return (
    <>
    <h1 className='font-bold text-3xl underline'> Welcome to tailwind image</h1>
    <Card  username="Nitesh Dwivedi" click="Click here to learn more" />
    <Card  username="hitesh" click="to know more click here" />
    <Card/>
    </>
  )
}

export default App
