import React from 'react'
import Typewriter from 'typewriter-effect';

function Newsgradient() {
    return (
        <>
            <div style={{maxWidth:"100%",  backgroundImage:`url(${"https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3BhcGVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", height: "100vh" ,display:"flow-root"}}>
                <h1 style={{fontSize:"5vw", marginLeft: "70px", position: "relative", top: "100px", fontFamily: "cursive" }}>Hello, {<div style={{  fontSize:"5vw",color: "black", fontFamily: "cursive"}}>

                    <Typewriter
                        options={{
                            strings: ['i am a web developer', 'i am a frontend developer', "i am a backend developer"],
                            autoStart: true,
                            loop: true,
                            cursor: " "
                        }}
                    />

                </div>}</h1>

                {/* <img id="parrot" style={{ position: "absolute", top: "265px", left: "1090px", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #729A9A" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEMiDWtfT3tgMfKhM37oJg9vthWl3dkmI8Q&usqp=CAU" /> */}
            </div>

        </>
    )
}

export default Newsgradient
