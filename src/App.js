import React, {Component} from 'react';
import './App.css';
import Blog from "./hoc/Blog/Blog";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Blog/>
            </div>
        );
    }
}

export default App;
