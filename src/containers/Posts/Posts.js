import React from 'react';
import Post from "../../components/Post/Post";
import './Posts.css';

const posts = props => {
    return (
        <div className="PostsContainer">
            {
                props.posts.map((post, index) => {
                    const user = props.users.filter(user => user.id === post.id);
                    return <Post key={post.title + index} displayPost={() => props.clicked(index)} title={post.title} author={user.name}/>;
                })
            }
        </div>
    );
};

export default posts;