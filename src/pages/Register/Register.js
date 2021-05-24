import React, { useState } from "react";


import Axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    console.log(username);
    Axios.post("https://judealexis-dy.herokuapp.com/user/register", {
      username: username,
      password: password,
    }).then((response) => {
      alert("Registered")
      console.log(response);
      window.location.replace("/login")
    });
  };

  return (
    //<div className="Register">
    //  <h1>Registration</h1>
    //  <div className="RegisterForm">
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
    //    <button onClick={register}>Register</button>
    //  </div>
    //</div>

    <div className="container">
      <div className="row">
        <div className="col-md-8" >
        <div className="content-section">
        <form>
        <fieldset className="form-group">
        <legend className="border-bottom mb-4">Register Now!</legend>
        <div id="div_id_username" className="form-group">
        <label htmlFor="id_username" className=" requiredField">
                Username<span className="asteriskField">*</span> </label>
        <div className="">
        <input type="text" name="username" maxLength="150" autoFocus className="textinput textInput form-control" required id="id_username" 
        onChange={(e)=>{
          setUsername(e.target.value)
        }}>
        </input>

        
        <div id="div_id_email" className="form-group">
        
        <div className="">
        
        <br></br>
        <label htmlFor="id_password1" className=" requiredField">
                Password<span className="asteriskField">*</span> </label>
        <div className="">
        <input type="password" className="textinput textInput form-control"
        onChange={(e)=>{
          setPassword(e.target.value)
        }} />
        <small id="hint_id_password1" className="form-text text-muted">
        
        </small>
        
        
        
        </div>
        </div>
        </div>
        </div>
        </div>
        
        </fieldset>
        <div className="form-group">
                <button className="btn btn-outline-info" type="button"
                onClick={register}
                >Sign Up</button>
            </div>
        </form>
        </div>
        
        
        <div className="border-top pt-3">
            <small className="text-muted">
                Already Have An Account? <a className="ml-2" href="/login/">Sign In</a>
            </small>
        </div>
        </div>
        <div className="col-md-4" >
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

export default Register;
