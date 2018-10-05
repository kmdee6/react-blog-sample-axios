import React from 'react';
import Post from "../../components/Post/Post";
import './Posts.css';

const posts = props => {
    return (
        <div className="PostsContainer">
            {
                props.posts.map((post, index) => {
                    return <Post key={post.title + index} displayPost={() => props.clicked(index)} title={post.title} author={post.author}/>;
                })
            }
        </div>
    );
};

export default posts;