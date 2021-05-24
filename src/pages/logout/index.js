import React from 'react'
import './style.css'
import { useHistory } from "react-router-dom";

/**
* @author
* @function Logout
**/

const Logout = (props) => {
    let history = useHistory();

    const logged_out = () => {
        localStorage.setItem("no_set", "0")
        alert("Logged out.")
        window.location.replace("/login")
        history.push("/login")
        
    }

  return(
    <div className="container">
        <p className="display-4">Are you sure to Log out?</p>
        <button className="btn btn-outline-success btn-lo" onClick={logged_out} type="button">Logout</button>
        <button className="btn btn-outline-danger btn-lo">Cancel</button>
    </div>
   )

 }

export default Logout