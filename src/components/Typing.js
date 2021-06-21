
import React from 'react'
import Typewriter from 'typewriter-effect';

function Typing() {
    return (
        <div style = {{color : "#B29E3F",fontFamily:"cursive" ,fontSize:"15px",backgroundColor:"black"}}>




<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString("welcome to my website").start()
      
  }}
/>

        </div>
    )
}

export default Typing



         