import React from 'react'
import { useState, useEffect } from 'react'
import Zoom from 'react-reveal/Zoom';

function Useeffectapi() {

  const [users, setUsers] = useState([])


  const getUsers = async () => {
    const response = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");
    const data = await response.json();
    const dayta = data.articles
    setUsers(dayta)
    //   console.log(dayta)
  }


  useEffect(() =>
    getUsers())













  return (<>
    {users.map((val) => {
      return (
        <Zoom>
          <div className="card" style={{
             margin: "50px", display: "inline-grid", width: "400px"
          }}>
            <img style={{ width: "400px", height: "250px" }} src={val.urlToImage} className="card-img-top" alt="" />
            <div className="card-body" style= {{height:"auto"}} >
              <h5 style={{ textAlign: "justify" }} className="card-title">{val.title}</h5>
              {/* <p className="card-text">{val.description}</p> */}
              <a href={val.url} className="btn btn-info">Read More</a>

            </div>
          </div>
        </Zoom>

      )
    }









    )}

  </>)





}

export default Useeffectapi
