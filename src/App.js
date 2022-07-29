import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import Navbar from "./Components/NavBar/NavBar";
import CustomButton from "./Components/CustomButton";

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
      <Navbar className="navbar" />
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
