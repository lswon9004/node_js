import { useState } from "react";

const Register = () =>{
    //통합
    const [input,setInput] = useState({
        name:"김자바",
        birth : "2021-01-01",
        country:"대한민국",
        bio:"자기소개"
    });
    

    const onChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        });
    }
    
    return(
        <div>
            <div>
                <input name="name" value={input.name} onChange={onChange} />
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
        </div>
    );
}

export default Register