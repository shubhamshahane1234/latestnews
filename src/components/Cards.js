import React from 'react'
import Zoom from 'react-reveal/Zoom';


function Cards(props) {
    return (
        <>


       <Zoom> 
        
<div className="card" style={{width: "18rem", display:"inline-grid",margin:"20px",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #729A9A"}}>
  <img className="card-img-top" src={props.img} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.age}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</Zoom>








            
        </>
    )
}

export default Cards
