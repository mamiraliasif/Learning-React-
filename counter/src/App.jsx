import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

 let addCount = () => {
  // setCount(count + 1)
  if(count >= 0 && count < 20)   {
    setCount(count + 1)
  }
  else{
    setCount(20)
  }
 }

 let removeCount = () => {
  if(count <= 0)
  {
    setCount(0);
  }
  else {
  setCount(count - 1)
 }
}
  

  return (
    <>
        <h1>Counter Project </h1>
        <h3>Count {count}</h3>
        <button onClick={addCount}>Add count</button>
        <br />
        <br />
        <button onClick={removeCount}>Add count</button>
        

    </>
  )
}

export default App
