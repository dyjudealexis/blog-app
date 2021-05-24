
import './style.css'
import React, { useEffect, useState } from "react";
import Axios from "axios";

/**
* @author
* @function Update
**/

const Update = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //const [username, setUsername] = useState("");
//
  //useEffect(() => {
  //  console.log(localStorage.getItem("username"));
  //  setUsername(localStorage.getItem("username"));
  //  console.log(username);
  //}, [localStorage.getItem("username")]);
//
  //const [uploads, setUploads] = useState([]);
//
  //useEffect(() => {
  //  Axios.get("http://localhost:4000/login", {
  //    username: username,
  //  }).then((response) => {
  //    setUploads(response.data);
  //    
  //  });
  //}, []);

  const update1 = (id) => {
    if(username ==="" && password===""){
      alert("Please update first.")
    }

    if(username ===""){

    }
    else{
      Axios.put("https://judealexis-dy.herokuapp.com/user/update-username", {
      username: username,
      id: id,
      }).then((response) => {
      alert("Username updated, login again.")
      console.log(response);
      localStorage.setItem("no_set","0")
      window.location.replace("/login")
    });
    }
    if(password ===""){

    }
    else{
      Axios.put("https://judealexis-dy.herokuapp.com/user/update-password", {
      password: password,
      id: id,
      }).then((response) => {
        alert("Password updated, login again.")
      console.log(response);
      localStorage.setItem("no_set","0")
      window.location.replace("/login")
    });
    }
  };

  return(

    

    <div className="container">
      
        <div className="row">
        
         
            <div className="col-md-8">
            
        <article className="media content-section">
        <div className="media-body">
            <div className="article-metadata">
            <h2>Profile Info</h2>
              
            </div>
            <br/>
            <p>Username</p>
            <input type="text"  className="textinput textInput form-control" 
                       defaultValue={localStorage.getItem("username")}
                       onChange={(e) => {
                        setUsername(e.target.value);
                      }}/>
            <br/>
            
            <p>Password</p>
            <input type="text" maxLength="150" className="textinput textInput form-control" 
                        defaultValue={localStorage.getItem("password")} 
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}/>
            <br/>
            <button className="btn btn-outline-info btn_p" type="button"
            onClick={() => {
              update1(localStorage.getItem("id"));
            }}>Update</button>
            <a className="btn btn-outline-danger btn_p" type="button" href="/">Cancel</a>
          </div>
      
        </article>
        
            </div>
          

            
                                                           
            <div className="col-md-4">
                <div className="content-section">
            <h3>Our Sidebar</h3>
            <p className='text-muted'>You can put any information here you'd like.
              <ul className="list-group">
                <li className="list-group-item list-group-item-light">Latest Posts</li>
                <li className="list-group-item list-group-item-light">Announcements</li>
                <li className="list-group-item list-group-item-light">Calendars</li>
                <li className="list-group-item list-group-item-light">etc</li>
              </ul>
            </p>
          </div>
            </div>
        </div>
      
    </div>
   )

 }

export default Update