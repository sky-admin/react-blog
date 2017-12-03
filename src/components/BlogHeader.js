/**
 * Created by lhy95 on 2017/8/26.
 */

import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {withRouter} from 'react-router-dom';

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
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(BlogHeader);