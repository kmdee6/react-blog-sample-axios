import React from 'react';
import Wrap from "../../hoc/Wrap/Wrap";
import './NewPost.css';

const newPost = props => {
    return (
        <Wrap>
            <div className="AddPost">
                <h2>Add a Post</h2>
                <strong><p>Title</p></strong>
                <input type='text' name="title"/>
                <strong><p>Content</p></strong>
                <textarea name="content"></textarea>
                <strong><p>Author</p></strong>
                <input type='text' name="author"/>
                <button>Add Post</button>
            </div>
        </Wrap>
    );
};

export default newPost;