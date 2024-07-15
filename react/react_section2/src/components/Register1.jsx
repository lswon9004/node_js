import { useState,useRef } from "react";

const Register = () =>{
    //통합
    const [input,setInput] = useState({
        name:"김자바",
        birth : "2021-01-01",
        country:"대한민국",
        bio:"자기소개"
    });
    //const refObj = useRef(0);
    // console.log(refObj.current);
    // console.log("Register-랜더링")
    // let count = 0;
    // console.log("count :"+count);
    // count++
    // console.log("count++ :"+count)
    const countRef = useRef(0);
    const inputRef = useRef();
    const onChange = (e)=>{
        countRef.current++;
        console.log(countRef.current);
        console.log(e.target.name+" : "+e.target.value)
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        });
    }
    

const onSubmit = () => {
  if (input.name === "") {
    //console.log(inputRef.current);
    inputRef.current.focus();
  }
};

    return(
        <div>
            {/* <div>
                <button onClick={()=>{ console.log(refObj.current);refObj.current+=1;}}>ss</button>
            </div> */}
            <div>
                <input ref={inputRef} name="name" value={input.name} onChange={onChange} />
                {input.name}
            </div>
            <div>
                <input name="birth" value={input.birth} onChange={onChange} type="date"/>
                {input.birth}
            </div>
            <div>
                <select name="country" onChange={onChange} value={input.country}>
                    <option>선택하세요</option>
                    <option>대한민국</option>
                    <option>일본</option>
                    <option>미국</option>
                </select>
                {input.country}
            </div>
            <div>
                <textarea name="bio" onChange={onChange} cols={70} rows={2} value={input.bio}/>           
            </div>
            <div>
                <button onClick={onSubmit}>제출</button>
            </div>
        </div>
    );
}

export default Register