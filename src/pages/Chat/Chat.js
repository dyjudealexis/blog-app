import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./Chat.css";
import ReactScrollableFeed from "react-scrollable-feed"

/**
* @author
* @function Chat
**/

let socket;
const CONNECTION_PORT = "localhost:3001/";

const Chat = (props) => {

  // Before Login
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");

  // After Login
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList([...messageList, data]);
    });
  });
  const connectToRoom = () => {
    if(userName===""||room===""){
      alert("Please input username and room.")
    }
    else{
      setLoggedIn(true);
    socket.emit("join_room", room);
    }
    
  };

  const sendMessage = async () => {
    if(message===""){
      alert("Please input message.")
    }
    else{
      let messageContent = {
        room: room,
        content: {
          author: userName,
          message: message,
        },
      };
  
      await socket.emit("send_message", messageContent);
      setMessageList([...messageList, messageContent.content]);
      setMessage("");
    }
    
  };

  return(
    <div className="App">
      {!loggedIn ? (
        <div className="logIn">
          <div className="inputs">
            <input
              type="text"
              placeholder="Name..."
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room..."
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            />
          </div>
          <button onClick={connectToRoom}>Enter Chat</button>
        </div>
      ) : (
        <div className="chatContainer">
          <ReactScrollableFeed>
          <div className="messages">
            
              {messageList.map((val, key) => {
              return (
                <div
                  className="messageContainer"
                  id={val.author == userName ? "You" : "Other"}
                >
                  <div className="messageIndividual">
                    {val.author}: {val.message}
                  </div>
                </div>
              );
            })}
            
            
           
            
          </div>
          </ReactScrollableFeed>

          <div className="messageInputs">
            <input
              type="text"
              placeholder="Message..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
   )

 }

export default Chat