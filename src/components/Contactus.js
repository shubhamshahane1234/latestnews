import React from 'react'

function Contactus() {
    return (
        <>
        <h2 style= {{fontSize:"4vw"}}>Contactus</h2>


<form class = "p-5 " style = {{width:"500px",margin:"50px",marginBottom:"185px"}}>
  <div class="mb-3 w-50">
    <div >NAME :</div>
    <input type="email" placeholder="name here" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3 w-50">
    <div>SURNAME :</div>
    <input type="text" placeholder="surname here" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3 w-50">
    <div >PHONE NUMBER :</div>
    <input type="text"  placeholder="phone number here" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3 w-50">
    <div >COMMENT HERE :</div>
    <textarea class="form-control" placeholder="comment here" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  <button type="submit"  class="btn btn-primary">Submit</button>
</form>

            
        </>
    )
}

export default Contactus
