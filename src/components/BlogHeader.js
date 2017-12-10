import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class BlogHeader extends Component {

    state = {
        name: 'Login'
    };

    handleClick = () => {
        this.props.history.push('/login')
    };

    toHome = () => {
        this.props.history.push('/')
    };

    handleLogout = () => {
        axios.get('api/logout')
    };

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography onClick={this.toHome} type="title" color="inherit">
                        Spring Blog
                    </Typography>
                    <Button color="contrast" onClick={this.handleClick}>{this.state.name}</Button>
                    <Button color="contrast" onClick={this.handleLogout}>登出</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(BlogHeader);