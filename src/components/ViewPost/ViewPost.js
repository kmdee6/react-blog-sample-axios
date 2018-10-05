import React from 'react';
import './ViewPost.css';

const viewPost = props => {
    return (
        <div className="PostContent">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={() => props.deletePost(props.index)}>Delete Post</button>
        </div>
    );
};

export default viewPost;