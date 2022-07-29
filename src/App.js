import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import Navbars from "./Components/NavBar/NavBar";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { name: "Danielle", userPost: "Great you like the post!" },
    {
      name: "Jackson",
      userPost: "Do you like riding bikes? You my friend now.",
    },
  ]);

  function addNewPost(post) {
    let tempEntries = [post, ...posts];
    setPosts(tempEntries);
  }

  return (
    <div className="container-fluid">
      <Navbars className="navbar" />
      <div className="border-box">
        <CreatePost addNewPostProperty={addNewPost} />
      </div>
      <div className="border-box">
        <DisplayPosts parentEntries={posts} />
      </div>
    </div>
  );
}

export default App;
