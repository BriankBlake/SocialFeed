import React, { useState } from 'react';
import '../../style/Main.css';

const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [Post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            Post: Post
        };
        console.log(newPost);
        props.addNewPost(newPost);
        setName('');
        setPost('');

    }



    return (
        <form onSubmit={handleSubmit} className='form-grid'>
       <div className="left-container">
        </div>
          <label>Name</label>
        <div className="middle-container">
        <textarea
          type="text" value={name} onChange={(event) => setName(event.target.value)}
        ></textarea>
         <div className="right-container">
          </div>
          <label>Post</label>
          <div className="middle-container">

          </div>
        <textarea
        
          type="text" value={Post} onChange={(event) => setPost(event.target.value)}
        ></textarea>
      </div>
      <div>
        <button type='submit'className="btn btn-primary" >Submit</button>
      </div>
    </form>
  );
};
export default CreatePost;