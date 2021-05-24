import React, { useState } from "react";

import Axios from "axios";
import { useHistory } from "react-router-dom";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  let history = useHistory();

  const upload = () => {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "gwutamg5");
    Axios.post(
      `https://api.cloudinary.com/v1_1/dqqewegtl/image/upload`,
      formData
    ).then((response) => {
      const fileName = response.data.public_id;

      Axios.post("https://judealexis-dy.herokuapp.com/upload", {
        title: title,
        description: description,
        image: fileName,
        author: localStorage.getItem("username"),
      }).then(() => {
        history.push("/");
      });
    });
  };
  return (
    //<div className="Upload">
    //  <h1>Create A Post</h1>
    //  <div className="UploadForm">
    //    <input
    //      type="text"
    //      placeholder="Title..."
    //      onChange={(event) => {
    //        setTitle(event.target.value);
    //      }}
    //    />
    //    <input
    //      type="text"
    //      placeholder="Description..."
    //      onChange={(event) => {
    //        setDescription(event.target.value);
    //      }}
    //    />
//
    //    <input type="file" onChange={(e) => setImage(e.target.files)} />
    //    <button onClick={upload}>Upload</button>
    //  </div>
    //</div>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
            
        <article className="media content-section">
        <div className="media-body">
            <div className="article-metadata">
            <h2>Post Now</h2>
              
            </div>
            <br/>
            <p>Title</p>
            <input type="text"  className="textinput textInput form-control" 
                         onChange={(event) => {
                          setTitle(event.target.value);
                            }}></input>
            <br/>
            <input type="file" onChange={(e) => setImage(e.target.files)} /><br/>
            <p></p>
            <p>Content</p>
            <textarea class="form-control" aria-label="With textarea" rows="10"
            onChange={(event) => {
                  setDescription(event.target.value);
                    }}></textarea>
            <br/>
            <button className="btn btn-outline-info btn_p" type="button" onClick={upload}>Post Now</button>
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
  );
}

export default Upload;
