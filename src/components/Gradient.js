import React from 'react'
import Typewriter from 'typewriter-effect';

function Gradient() {
  return (
    <>
      <div style={{ backgroundImage: "linear-gradient(to right,#E7E292, #C8DC8B)", height: "500px", margin: "100px" }}>
        <h1 style={{ marginLeft: "70px", position: "relative", top: "100px", fontFamily: "cursive" }}>Hello, { <div style = {{color : "#B29E3F",fontFamily:"cursive" ,fontSize:"50px"}}>
            
            <Typewriter
      options={{
        strings: ['i am a web developer', 'i am a frontend developer',"i am a backend developer"],
        autoStart: true,
        loop: true,
        cursor:" "
      }}
    />
    
            </div>}</h1>

{/* just a sample of typerwrite code */}
        {/* <div style={{ color: "#45347B", fontFamily: "cursive", fontSize: "60px", position: 'absolute', left: "400px" }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('<h1>i am a web developer</h1>').pauseFor(2000).deleteAll().typeString("software engineer").start()

            }}
          />
        </div> */}







        <img id = "parrot"style={{ height: "499px", width: "330px", position: "absolute", top: "265px", left: "1090px", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #729A9A" }} src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbG9yZnVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </div>
    </>
  )
}

export default Gradient
