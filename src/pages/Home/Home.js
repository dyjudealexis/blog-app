import React, { useEffect, useState } from "react";
import "./Home.css";
import { Image } from "cloudinary-react";
import Axios from "axios";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

function Home() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);

  useEffect(() => {
    Axios.get("https://judealexis-dy.herokuapp.com/upload").then((response) => {
      setUploads(response.data);
    });
  }, []);

  const likePost = (id, key) => {
    if(localStorage.getItem("no_set")!=="1"){
      alert("Please login first.")
    }
    else{
      var tempLikes = uploads;
    tempLikes[key].likes = tempLikes[key].likes + 1;

    Axios.post("https://judealexis-dy.herokuapp.com/upload/like", {
      userLiking: localStorage.getItem("username"),
      postId: id,
    }).then((response) => {
      setUploads(tempLikes);
      window.location.replace("/")
    });
    }
    
  };

  return (
    <div className="Home">
      {uploads.map((val, key) => {
        return (
          <div className="Post">
            <div className="Image">
              <Image cloudName="dqqewegtl" publicId={val.image} />
            </div>
            <div className="Content">
              <div className="title">
                {" "}
                {val.title} / by @{val.author}
              </div>
              <div className="description">{val.description}</div>
            </div>
            <div className="Engagement">
              <ThumbUpAltIcon
                id="likeButton"
                onClick={() => {
                  likePost(val.id, key);
                }}
              />
              {val.likes}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
