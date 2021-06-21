import React from 'react'
import Typewriter from 'typewriter-effect';

function Typingloop() {
    return (<>
        <div style = {{color : "black",fontFamily:"cursive" ,fontSize:"50px"}}>
            
        <Typewriter
  options={{
    strings: ['i am a developer', 'i am a software engineer',"i am a frontend developer","i am backend developer"],
    autoStart: true,
    loop: true,
    cursor:" "
  }}
/>

        </div>
        </>
    )
}

export default Typingloop

