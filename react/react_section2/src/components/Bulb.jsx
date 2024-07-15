import { useState } from 'react'



const Bulb = () => {
    const [light, setLight] = useState("OFF");
    console.log(light)
    return (
      <div>
        {light === "ON" ? (
          <h1 className='on' >ON</h1>
        ) : (
          <h1 className='off' >OFF</h1>
        )}
         <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
           
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
         </div>
    );
  };
  
  export default Bulb