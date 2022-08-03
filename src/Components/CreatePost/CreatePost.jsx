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
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type='text' value={Post} onChange={(event) => setPost(event.target.value)}/>
            <button type='submit'> Submit</button>
        </form>

    );
}
 
export default CreatePost;