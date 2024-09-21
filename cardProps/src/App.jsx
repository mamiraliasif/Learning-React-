import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const[count,setCount] =  useState(0)

  return (
    <>
      <h1 className='bg-green-300 text-black p-5'>Tailwind Project with Props</h1>
      <br />
      <br />
      <Card userName = "Iphone 15" btnType = "clickMe" />
      <br /><br />
      <Card userName = "Iphone 14" />



    </>
  )
}

export default App
