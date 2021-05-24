import React, { useEffect, useState } from "react";
import "./style.css"
import Axios from "axios";

/**
* @author
* @function User_List
**/

const User_List = (props) => {
  const [uploads, setUploads] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    Axios.get("https://judealexis-dy.herokuapp.com/admin/user-list").then((response) => {
      setUploads(response.data);
    });
  }, []);
  const delete1 = (id) => {
    Axios.delete(`https://judealexis-dy.herokuapp.com/admin/delete-user/${id}`).then((response) => {
      //setUploads(
      //  uploads.filter((val) => {
      //    return val.id != id;
      //  })
      //);
      alert("Selected row deleted.")
      window.location.replace("/admin/user-list")
    });
  };


  const update = (id) => {
    if(username ==="" && password===""){
      alert("Please update first.")
    }

    if(username ===""){

    }
    else{
      Axios.put("https://judealexis-dy.herokuapp.com/admin/update-username", {
      username: username,
      id: id,
      }).then((response) => {
      alert("Selected username updated.")
      console.log(response);
      window.location.replace("/admin/user-list")
    });
    }
    if(password ===""){

    }
    else{
      Axios.put("https://judealexis-dy.herokuapp.com/admin/update-password", {
      password: password,
      id: id,
      }).then((response) => {
        alert("Selected password updated.")
      console.log(response);
      window.location.replace("/admin/user-list")
    });
    }
  };


  return(
    <div className="container">
      <h1 className="display-4">Select user to change</h1>
      <br />
      
      <table class="table">
          
          <thead class="thead-dark">
            <tr>
            
              <th>Username</th>
              <th>Password</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {uploads.map((val, key) => {
            return(
              <tr>
             
              <td>
              
              <input type="text" className="textinput textInput form-control"
                        defaultValue={val.username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }} />

              </td>
              <td>
              
              <input type="text" className="textinput textInput form-control"
                        defaultValue={val.password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }} />

              </td>
              <td><button 
              className="btn btn-outline-success"
              onClick={() => {
                update(val.id);
              }}>Update</button></td>
              
              <td><button 
              className="btn btn-outline-danger"
              onClick={() => {
                delete1(val.id);
              }}>Delete</button></td>
              
            </tr>
            )
          })}
            
            
          </tbody>
        </table>
        <a className="btn btn-outline-primary u-list1" type="button" href="/admin">Back</a>
        
    </div>
   )

 }

export default User_List