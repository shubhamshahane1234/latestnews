import React from 'react'
import {useState} from "react"
import {useEffect} from "react"
import Jump from 'react-reveal/Jump';
function Count() {

const [count, setcount] = useState(0)
useEffect(() => { 
  var boo =window.confirm("submitted")
  console.log(boo)
  if (boo == true){
      alert("THANKS FOR SUBMITTION")
  }  else{alert("fuck off")}

   
})
    

function inc(){
    setcount(count + 1)
}
function dec(){
    setcount(count - 1)
}


    return (
        <>   <Jump>
            <h1 id = "h1">{count}</h1>
            </Jump>
            <button  onClick = {inc}>increase number</button>
            <button onClick = {dec}>decrease number</button>
          
          

        </>
    )
}

export default Count
