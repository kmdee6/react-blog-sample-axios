import React, {Component} from 'react';
import Wrap from "../Wrap/Wrap";
import Posts from "../../containers/Posts/Posts";
import './Blog.css';
import ViewPost from "../../components/ViewPost/ViewPost";
import AddPost from "../../components/NewPost/NewPost";
import axios from "../../axios";

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePost: {title: 'Placeholder Title', content: 'Placeholder Content'},
            isPostSelected: false,
            activeUser: null,
            retrievedPosts: [],
            retrievedUsers: []
        };
    }

    componentDidMount() {
        axios.get('/posts').then(response => {
            axios.get('/users').then(usersResponse => {
                this.setState({retrievedUsers: usersResponse.data, retrievedPosts: response.data});
            });
        }).catch(error => {
            console.log('Error while fetching resources', error);
        });
    }

    postClickedHandler = (index) => {
        const activeUserMatched = this.state.retrievedUsers.find(user => user.id === this.state.retrievedPosts[index].userId);
        this.setState({
            activePost: this.state.retrievedPosts[index],
            activeUser: activeUserMatched,
            isPostSelected: true
        })
    };

    deletePostHandler = id => {
        axios.delete('/posts/' + id).then(response => console.log(response));
        this.setState({
            activePost: {title: 'Placeholder Title', content: 'Placeholder Content'},
            isPostSelected: false
        });
    };

    render() {
        return (
            <Wrap className="Layout">
                <Posts users={this.state.retrievedUsers} posts={this.state.retrievedPosts}
                       clicked={this.postClickedHandler}/>
                {this.state.isPostSelected &&
                <ViewPost deletePost={() => this.deletePostHandler(this.state.activePost.id)}
                          index={this.state.retrievedPosts.indexOf(this.state.activePost)}
                          title={this.state.activePost.title} content={this.state.activePost.body}
                          user={this.state.activeUser}/>
                }
                <AddPost/>
            </Wrap>
        );
    }
}

export default Blog;