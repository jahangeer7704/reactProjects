import { useState,useEffect } from "react";
import "./main.css";

 let Background = () => {
    let [colorValue, setColorValue] = useState("purple");
    let [inputColor, setInputColor] = useState("");
    let [textColor, setTextColor] = useState(true);
    useEffect(()=>{
      window.addEventListener("keyup",(e)=>{
          if(e.key==="Enter"){
  setColorValue(inputColor)
       }
      })
      
        },[inputColor])
    let textColorSet = textColor ? "white" : "black";
    function handleColor() {
      setColorValue(inputColor);
    }
    function handleInput(e){
  setInputColor(e.target.value)
    }
    function fontChanger() {
      setTextColor(!textColor);
    }
  
    let colors = {
      backgroundColor: colorValue,
      color: textColorSet,
    };
  
    return (
        
      <div className="parent">
    <h1 style={{color:colorValue}}>Type the Color in your Mind</h1>

        <div style={colors} className="circle">
          {colorValue}
        </div>
        <div>
          <input
            type="text"
            defaultValue={colorValue}
            placeholder="Type any color"
            onChange={(e)=>{handleInput(e)}}
          />
          <button onClick={handleColor}>Enter</button>
        </div>
        <button className="toggle" onClick={fontChanger}>
          Toggle Text
        </button>
      </div>
    );
  };
  
  export default Background