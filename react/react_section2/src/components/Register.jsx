import { useState } from "react";

const Register = () =>{
    
    const [name, setName] = useState("이름");
    const onChangeName = (e)=>{
        setName(e.target.value);
    }
    const [birth, setBirth] = useState("2024-07-03");
    const onChangeBirth = (e)=>{
        setBirth(e.target.value);
    }
    const [country, setCountry] = useState("");
    const onChangeNation = (e)=>{
        setCountry(e.target.value);
    }
    const [bio, setBio] = useState("자기소개");
    const onChangeBio = (e)=>{
        setBio(e.target.value);
    }
    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} placeholder={"이름"}/>
                {name}
            </div>
            <div>
                <input value={birth} onChange={onChangeBirth} type="date"/>
                {birth}
            </div>
            <div>
                <select onChange={onChangeNation} value={country}>
                    <option>선택하세요</option>
                    <option>대한민국</option>
                    <option>일본</option>
                    <option>미국</option>
                </select>
                {country}
            </div>
            <div>
                <textarea onChange={onChangeBio} cols={70} rows={2} >{bio}</textarea>               
            </div>
        </div>
    );
}

export default Register