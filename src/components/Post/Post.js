import React, {Component} from 'react';
import './Post.css';

class Post extends Component {
    render() {
        return(
            <div onClick={this.props.displayPost} className="Post">
                <h3>{this.props.title}</h3>
                <p>{this.props.author == null? 'Author' : this.props.author}</p>
            </div>
        );
    }
}

export default Post;