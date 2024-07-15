import './App.css'
import Viewer from './Components/Viewer'
import Controller from './Components/Controller'
import { useState } from "react";
import { useEffect, useRef } from 'react';
import Even from './Components/Even';

function App() {
  const [count, setCount] = useState(1);
  const [input, setInput] =useState("");
  const isMount=useRef(false);
  useEffect(() => {
    console.log("mount");
  }, []);
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  }); //deps를 생략하면 update

  const handleButtonClick =(value)=>{
    setCount(count+value);
  }
  return (
    <>
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
      <input value={input} onChange={(e) => {setInput(e.target.value); }} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={handleButtonClick} />
      </section>
    </div>
    </>
  )
}

export default App
