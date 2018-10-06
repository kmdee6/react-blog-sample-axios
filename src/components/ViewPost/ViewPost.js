import React from 'react';
import './ViewPost.css';

const viewPost = props => {
    return (
        <div className="PostContent">
            <h2>{props.title}</h2>
            <h4>{props.user == null ? 'Author' : props.user.name}</h4>
            <p>{props.content == null? 'Content' : props.content}</p>
            <button onClick={props.deletePost}>Collapse Post</button>
        </div>
    );
};

export default viewPost;