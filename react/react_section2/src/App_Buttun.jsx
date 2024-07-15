import './App.css'
import {Button, Button1} from './components/Button'
import Header from './components/Header'

function App() {
  const buttonProps = {
    text : "뼈해장국",
    color : "deeppink",
    a : "1",
    b : "2",
    c : "3",
  }

  return (
    <>
     <Button {...buttonProps} >
        <div>자식요소2</div>
        <div>자식요소1</div>
     </Button>
     <Button text={"카페"} />
     <Button text={"블로그"} />
     <Button1 text={"유포터블"} >
      <Header />
     </Button1>
    </>
  )
}

export default App
