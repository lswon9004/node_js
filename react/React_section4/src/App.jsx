
import './App.css'
import { useState } from 'react'
import Count from './Components/Count';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Count count={count} onClickButton={setCount} />
    </>
  )
}

export default App
