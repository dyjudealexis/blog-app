
import React, { useEffect, useState } from "react";
import Axios from "axios";

/**
* @author
* @function Post_List
**/



const Post_List = (props) => {
  const [uploads, setUploads] = useState([]);
  const [author, set_author] = useState("");
  const [title, set_title] = useState("");
  const [content, set_content] = useState("");
  const [image, set_image] = useState("");

  useEffect(() => {
    Axios.get("https://judealexis-dy.herokuapp.com/admin/post-list").then((response) => {
      setUploads(response.data);
    });
  }, []);

  const delete1 = (id) => {
    Axios.delete(`https://judealexis-dy.herokuapp.com/admin/delete/${id}`).then((response) => {
      //setUploads(
      //  uploads.filter((val) => {
      //    return val.id != id;
      //  })
      //);
      alert("Selected row deleted.")
      window.location.replace("/admin/post-list")
    });
  };

  const update = (id) => {
    
    if(author ==="" && title===""&&content ===""&&image ===""){
      alert("Please update first.")
    }

    if(author ===""){

    }
    else{
      Axios.put("https://judealexis-dy.herokuapp.com/admin/update-author", {
      author: author,
      id: id,
      }).then((response) => {
      alert("Selected author updated.")
      console.log(response);
      window.location.replace("/admin/post-list")
    });
    }
    if(title ===""){

    }
    else{
      Axios.put("https://judealexis-dy.herokuapp.com/admin/update-title", {
      title: title,
      id: id,
      }).then((response) => {
        alert("Selected title updated.")
      console.log(response);
      window.location.replace("/admin/post-list")
    });
    }
    if(content ===""){

    }
    else{
      Axios.put("https://judealexis-dy.herokuapp.com/admin/update-content", {
      content: content,
      id: id,
      }).then((response) => {
      alert("Selected content updated.")
      console.log(response);
      window.location.replace("/admin/post-list")
    });
    }
    if(image ===""){

    }
    else{
      Axios.put("https://judealexis-dy.herokuapp.com/admin/update-image", {
      image: image,
      id: id,
      }).then((response) => {
        alert("Selected image updated.")
      console.log(response);
      window.location.replace("/admin/post-list")
    });
    }
  };

  return(
  <div className="container">
    <h1 className="display-4">Select post to change</h1>
    <br />
    
    <table class="table">
        
        <thead class="thead-dark">
          <tr>
      
            <th>Author</th>
            <th>Title</th>
            <th>Content</th>
            <th>Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {uploads.map((val, key) => {
          return(
          <tr>
           
            <td><input type="text" className="textinput textInput form-control"
                        defaultValue={val.author} 
                        onChange={(e) => {
                          set_author(e.target.value);
                        }}/></td>
            <td><input type="text" className="textinput textInput form-control"
                        defaultValue={val.title} 
                        onChange={(e) => {
                          set_title(e.target.value);
                        }}/></td>
            <td><input type="text" className="textinput textInput form-control"
                        defaultValue={val.description} 
                        onChange={(e) => {
                          set_content(e.target.value);
                        }}/></td>
            <td><input type="text" className="textinput textInput form-control"
                        defaultValue={val.image} 
                        onChange={(e) => {
                          set_image(e.target.value);
                        }}/></td>
            <td><button 
              className="btn btn-outline-success"
              onClick={() => {
                update(val.id);
              }}
              >Update</button></td>
              
              <td><button 
              className="btn btn-outline-danger"
              onClick={() => {
                delete1(val.id);
              }}
              >Delete</button></td>
          </tr>
          )
        })}
         
        </tbody>
      </table>
      <a className="btn btn-outline-primary u-list1" type="button" href="/admin">Back</a>
     
  </div>
   )

 }

export default Post_List