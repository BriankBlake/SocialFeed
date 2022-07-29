import React, { useState } from "react";

const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [userPost, setPost] = useState('');

    function handleSubmit (event) {
        event.preventDefault ();
        let newPost = {
            name: name,
            userPost: userPost
        };
        console.log(newPost);
        props.AddNewPostProperty(newPost)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input type='text' classNmae='form-control' value={name} onChange= { (event) => setName(event.target.value) } />
            </div>
            <div className="form-group">
                <label>Post</label>
                <input type='text' className='form-control' value= {userPost} onChange={ (event) => setPost (event.target.value) }/>
            </div>
            <button type="submit" className="btn btn-primary" style={{'margin-top': '1em'}}>Create</button>
        </form>
    );
}

export default CreatePost;