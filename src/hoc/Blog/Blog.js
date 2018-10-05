import React, {Component} from 'react';
import Wrap from "../Wrap/Wrap";
import Posts from "../../containers/Posts/Posts";
import './Blog.css';
import PostContent from "../../components/ViewPost/ViewPost";
import AddPost from "../../components/NewPost/NewPost";

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {title: 'Title One', content: 'Content One', author: 'Lex'},
                {title: 'Title Two', content: 'Content Two', author: 'Max'},
                {title: 'Title Three', content: 'Content Three', author: 'Luther'}
            ],
            activePost: {title: 'Placeholder Title', content: 'Placeholder Content'}
        };
    }

    postClickedHandler = (index) => {
        console.log('PostClickedHandler');
        this.setState({activePost: this.state.posts[index]})
    };

    deletePostHandler = index => {
        const oldPosts = [...this.state.posts];
        const updatedPosts = oldPosts.filter(element => element !== oldPosts[index]);
        this.setState({posts: updatedPosts, activePost: {title: 'Placeholder Title', content: 'Placeholder Content'}});
    };

    render() {
        return (
            <Wrap className="Layout">
                <Posts posts={this.state.posts} clicked={this.postClickedHandler}/>
                <PostContent deletePost={this.deletePostHandler} index={this.state.posts.indexOf(this.state.activePost)} title={this.state.activePost.title} content={this.state.activePost.content} />
                <AddPost/>
            </Wrap>
        );
    }
}

export default Blog;