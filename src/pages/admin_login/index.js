import React, {useState} from 'react'
import './style.css'
import Axios from "axios";
import { useHistory } from "react-router-dom";
import auth from './../../auth'
/**
* @author
* @function Admin_Login
**/

const Admin_Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [errorMessage, setErrorMessage] = useState("");
  
    let history = useHistory();
  
    const login_ad = () => {
      Axios.post("http://localhost:3001/admin/login", {
        username: username,
        password: password,
      }).then((response) => {
        if (localStorage.getItem("no_set_admin") === "1") {
          localStorage.setItem("no_set_admin", "1");
        
          auth.login(() => {
            history.push("/admin");
             window.location.replace("/admin");
          });
          alert("Welcome Admin!")
          
        } else {
          setErrorMessage(response.data.message);
          localStorage.setItem("no_set_admin", "0");
        }
      });
    };
  
    return(
      <div className="container">
          <div className="row">
              <div className="col-md-8" >
                  <div className="content-section">
                  <form method="POST">
                  <fieldset className="form-group">
                          <legend className="border-bottom mb-4">Administrator.</legend>
                          <div id="div_id_username" className="form-group">
                          <label htmlFor="id_username" className=" requiredField">
                          Username<span className="asteriskField">*</span> </label>
                          <div className="">
                          <input type="text" name="username" autoFocus autoCapitalize="none" autoComplete="username" maxLength="150" className="textinput textInput form-control" required id="id_username"
                          onChange={(e) => {
                            setUsername(e.target.value);
                          }}></input>
                          <br></br>
                          </div>
                          <label htmlFor="id_password" className=" requiredField">
                          Password<span className="asteriskField">*</span> </label>
                          <div className="">
                          <input type="password" name="password" autoComplete="current-password" className="textinput textInput form-control" required id="id_password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}></input>
                          </div>
                          </div>
                      </fieldset>
                      <div className="form-group">
                      <button className="btn btn-outline-info" type="button" onClick={login_ad}>Enter</button>
                      </div>
                      
                  
                  </form>
                  
                  </div>
                  
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

export default Admin_Login