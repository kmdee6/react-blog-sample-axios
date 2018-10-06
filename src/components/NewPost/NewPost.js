import React, {Component} from 'react';
import Wrap from "../../hoc/Wrap/Wrap";
import './NewPost.css';
import axios from 'axios';

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            author: ''
        };
    }

    submitPostHandler = () => {
        const blog = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', blog).then(response => console.log(response));
    };

    changeInputHandler = (event, property) => {
        this.setState({[property]: event.target.value})
    };

    render() {
        return (
            <Wrap>
                <div className="AddPost">
                    <h2>Add a Post</h2>
                    <strong><p>Title</p></strong>
                    <input type='text' name="title" value={this.state.title}
                           onChange={event => this.changeInputHandler(event, 'title')}/>
                    <strong><p>Content</p></strong>
                    <textarea name="content" value={this.state.content}
                              onChange={event => this.changeInputHandler(event, 'content')}/>
                    <strong><p>Author</p></strong>
                    <input type='text' name="author" value={this.state.author}
                           onChange={event => this.changeInputHandler(event, 'author')}/>
                    <button onClick={this.submitPostHandler}>Add Post</button>
                </div>
            </Wrap>
        );
    }
}

export default NewPost;