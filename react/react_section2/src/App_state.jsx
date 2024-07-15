import './App.css'
import Bulb from './components/Bulb';
import Counter from './components/Counter';

function App() {
  //인자값 2개를 반환하는 함수 (스태이트상태, 스태이트함수)
  //const state = useState(0);
  //console.log(state)
   
  return (
   
    <>
   
        <Bulb  />
       
        <Counter />
       
    </>
  )
}

export default App
