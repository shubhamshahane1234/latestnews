import React from 'react'
import {Link}   from "react-router-dom";
import logo from "./image/logo.png"


function Workingheader() {
    return (
        <>
<nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center"><img style = {{marginLeft:"15px",marginTop:"5px"}} width = "50px" height="50px"  src = {logo}/></a>
      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
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
      <div class="background black">
        <img src="images/office.jpg"/>
      </div>
      <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    
    <li><Link to="/">Home</Link></li>
        <li><Link to="badges.html">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contactus">ContactUs</Link></li>
  </ul>
          
            
        </>
    )
}

export default Workingheader
