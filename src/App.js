import React, {Component} from 'react';
import BlogHeader from './components/BlogHeader';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BlogHeader/>
                <LoginForm/>

            </div>
        );
    }
}

export default App;
