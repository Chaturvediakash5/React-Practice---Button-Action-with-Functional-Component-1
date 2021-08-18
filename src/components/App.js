import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[phidden,setHidden]=useState(true);
  return (
    <div id="main">
      <button id="click" onClick={()=>{
        setHidden(!phidden);
      }}>Click me</button>
      {phidden?null:
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool.
       This makes me so happy</p>}
    </div>
  );
}


export default App;
