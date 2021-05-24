import React, { useState } from "react";

import Axios from "axios";

import { useHistory } from "react-router-dom";
import auth from './../../auth'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  const login = () => {
    Axios.post("https://judealexis-dy.herokuapp.com/user/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("no_set", 1);
        
        alert("Logged in")

        localStorage.setItem("username", response.data.username);
        auth.login(() => {
          history.push("/");
        window.location.replace("/")
        });
        
      } else {
        alert("Not logged in")
        setErrorMessage(response.data.message);
      }
    });
  };

  return (
    //<div className="Login">
    //  <h1>Login</h1>
    //  <div className="LoginForm">
    //    <input
    //      type="text"
    //      placeholder="Username..."
    //      onChange={(event) => {
    //        setUsername(event.target.value);
    //      }}
    //    />
    //    <input
    //      type="password"
    //      placeholder="Password..."
    //      onChange={(event) => {
    //        setPassword(event.target.value);
    //      }}
    //    />
    //    <button onClick={login}>Login</button>
    //    <h1 style={{ color: "red" }}>{errorMessage} </h1>
    //  </div>
    //</div>

    <div className="container">
        <div className="row">
            <div className="col-md-8" >
                <div className="content-section">
                <form>
                <fieldset className="form-group">
                        <legend className="border-bottom mb-4">Login Now!</legend>
                        <div id="div_id_username" className="form-group">
                        <label htmlFor="id_username" className=" requiredField">
                        Username<span className="asteriskField">*</span> </label>
                        <div className="">
                        <input type="text" className="textinput textInput form-control"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}></input>
                        <br></br>
                        </div>
                        <label className=" requiredField">
                        Password<span className="asteriskField">*</span> </label>
                        <div className="">
                        <input type="password" className="textinput textInput form-control"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }} />
                        </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                    <button className="btn btn-outline-info" type="button" onClick={login}>Login</button>
                    </div>
                    <div className="border-top pt-3">
                    <small className="text-muted">
                    Need An Account? <a className="ml-2" href="/register/">Sign Up</a>
                    
                    </small>
                    
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
  );
}

export default Login;
