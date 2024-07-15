import useInput from "../Hooks/useInput";

//const state = useState(); ERROR

const HookExam = ()=>{

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();
  //   if(true){
  //     const state = useState(); // 조건부로 호출될 수는 없다.
  //   }  
  
    //  const onChange = (e) => {
    //   console.log(e.target.value);
    //   setInput(e.target.value);
    //  } 
  
    //  const onChange2 = (e) => {
    //   console.log(e.target.value);
    //   setInput2(e.target.value);
    // };
  
    return (
      <div>
          <input value={input} onChange={onChange} /><br />
          <input value={input2} onChange={onChange2} />
      </div>
    );
  
}

export default HookExam;