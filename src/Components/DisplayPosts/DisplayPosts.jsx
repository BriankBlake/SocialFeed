import Post from '../PostMap/Post';
import '../../style/Main.css';

const DisplayPosts = (props) => {
    return (
    
        <div>
            {props.parentEntries.map ((post, _index) =>{
                return (
                <div key={_index}>
                    <div>
                        <p id='name'>{post.name}</p>
                        <p id='Post'>{post.Post}</p>
                        <Post />
                    </div>
                </div>
                );
            })}

        </div>
    );
};

export default DisplayPosts;