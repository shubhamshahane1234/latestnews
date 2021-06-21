import React from 'react';
import Bounce from 'react-reveal/Bounce';
import "./Bn.css"

class JumpExample extends React.Component {
  render() {
    return (
      <div >
   <Bounce>
         <h2 id = "bnews"style ={{ marginLeft:"35%",marginTop:"100px", fontFamily:"'Playfair Display",fontSize:"5vw"}}>  Daily Latest News </h2>
        </Bounce>
        
      </div>
     
    );
  }
}

export default JumpExample;