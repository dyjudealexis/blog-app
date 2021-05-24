import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Upload from "./pages/Upload/Upload";
import Profile from "./pages/Profile/Profile";
import Post_List from "./pages/post_list";
import User_List from "./pages/user_list";
import Admin from "./pages/admin";
import Admin_Login from "./pages/admin_login";
import Logout from "./pages/logout";
import Update from "./pages/Profile";
import { ProtectedRoute } from "./protected.route";
import Chat from "./pages/Chat/Chat";
import Nf_404 from "./pages/404/404";



function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/register" component={() => <Register />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/chat" component={() => <Chat />} />
          <Route exact path="/admin/login" component={() => <Admin_Login />} />

          <ProtectedRoute exact path="/upload" component={() => <Upload />} />
          <ProtectedRoute exact path="/profile" component={() => <Profile />} />
          <ProtectedRoute exact path="/admin/post-list" component={() => <Post_List />} />
          <ProtectedRoute exact path="/admin/user-list" component={() => <User_List />} />
          <ProtectedRoute exact path="/admin" component={() => <Admin />} />
          
          <ProtectedRoute exact path="/logout" component={() => <Logout />} />
          <ProtectedRoute exact path="/update" component={() => <Update />} />
          <Route path="*" component={() => <Nf_404 />} />
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
