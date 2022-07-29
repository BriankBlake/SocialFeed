import Post from '../PostMap/Post';
import './DisplayPosts.css';

const DisplayPosts = (props) => {
    return (
        <div>
            {props.parentEntries.map ((post, index) =>{
                return (
                    <div>
                        <p id='name'>{post.name}</p>
                        <p id='userPost'>{post.userPost}</p>
                        <Post />
                    </div>
                );
            })}

        </div>
    );
};

export default DisplayPosts;