import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BlogHeader from './components/BlogHeader';
import Home from './page/Home';
import Login from './page/Login';
import Reg from './page/Reg';
import Edit from './page/Edit';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <BlogHeader></BlogHeader>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/edit" component={Edit}/>
                </div>
            </Router>
        );
    }
}

export default App;
