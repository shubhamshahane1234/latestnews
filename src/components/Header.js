import React from 'react'
import logo from "./image/logo.png"
import {Link}   from "react-router-dom";
// to change state use or update state       useState()
// to do after rendering component .....useEffect()
// to pass data through multiple level..... useContext()


function Header() {
  
    return (
        <>
            
        
            <nav  >
    <div class="nav-wrapper" style=  {{backgroundColor:"#27a69a"}}>
      <a href="#!" class="brand-logo center"><img style = {{marginLeft:"15px",marginTop:"5px"}} width = "50px" height="50px"  src = {logo}/></a>
      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">
<div style = {{ width: "35px",
  height: "5px",
  backgroundColor: "black",
  marginTop:"20px",}}></div>
<div style = {{ width: "35px",
  height: "5px",
  backgroundColor: "black",
  margin: "6px 0"}}></div>
<div style = {{ width: "35px",
  height: "5px",
  backgroundColor: "black",
  margin: "6px 0"}}></div></i></a>
      <ul class="right hide-on-med-and-down">
          
      <li><Link to="/">Home</Link></li>
        <li><Link to="badges.html">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contactus">ContactUs</Link></li>
      </ul>
    </div>
  </nav>
         
  <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class = "background" style = {{backgroundColor : "#27a69a"}}>
    
      </div>
      <a href="#user"><img class="circle" style = {{marginLeft:"15px",marginTop:"5px"}} width = "50px" height="50px" src={logo}/></a>
      <a href="#name"><span class="white-text name">Latest News</span></a>
    
    </div></li>
    
    <li><Link to="/">Home</Link></li>
        <li><Link to="badges.html">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contactus">ContactUs</Link></li>
  </ul>
          
            
  



        </>
    )
}
export default Header
