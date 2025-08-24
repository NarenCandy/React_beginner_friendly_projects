import { useState } from "react";
import '../style.css'

import React from 'react'

const ToggleColor = () => {
    const [backgroundColor, setbgColor] = useState("white")
    const [color, setColor] = useState("#1b1b1b")
    const [buttonStyle , setButtonStyle] = useState("white")

  function handleClick() {
    setbgColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setColor(color === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  }
  return (
    <section style = {{ backgroundColor, color: color}}>
        <button onClick={handleClick} 
        style={{
            buttonStyle,color: color,
          border: `2px solid ${color}`,
        }}>
            {backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
            
        </button>
        <section className="content">

            <h1>

                Welcome To A <br /> Real World..
            </h1>
        </section>

    </section>
  )
}

export default ToggleColor