
import './App.css';
import "./components/Header"
import Header from './components/Header';
import Count from './components/Count';
import Cards from './components/Cards';
import Sdata from "./components/Sdata"
import Useeffectapi from './components/Useeffectapi';
import JumpExample from './components/JumpExample';
import Gradient from './components/Gradient';
import Typing from "./components/Typing"
import Typingloop from './components/Typingloop';
import About from './components/About';
import Footer from './components/Footer';
import Contactus from './components/Contactus';
import Newsgradient from './components/Newsgradient';
import React, { useEffect } from "react";
import Workingheader from './components/Workingheader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
 
function card(val){
  return(<Cards name = {val.name}
  age = {val.age}
  img = {val.img}  />)
}

  return( 
    <>
    <Router>
 <Header/>
 {/* <Workingheader/> */}


 <Switch>
          <Route exact path="/about" render = {() => {return(<>     <About />    </>)}}>
          
          </Route>





          <Route exact path="/" render = {() => {return(<> 

  <Typing/>
 {/* <Typingloop/> */}
  {/* <Gradient/> */}
  <Newsgradient/>
 <JumpExample/>
 <Useeffectapi/> 
 {/* <div style = {{margin:"100px"}}>{Sdata.map(card)}</div>
 <Count/><br></br>   */}
       </>)}}>
          
          </Route>


          <Route exact path="/contactus" render = {() => {return(<>   <Contactus/>   </>)}}>
          
          </Route>










</Switch>









<Footer/>








</Router>
  </>

   ) }

export default App;
