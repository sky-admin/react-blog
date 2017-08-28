import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import axios from 'axios';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class TextFields extends Component {

    handleLogin() {
        console.log(123);
        axios.post('/api/login', {})
    }

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.container}>
                <TextField
                    id="username"
                    label="Username"
                    className={classes.textField}
                    type="text"
                    autoComplete="current-password"
                    margin="normal"
                />
                <TextField
                    id="password"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <div>
                    <Button raised color="primary" className={classes.button} onClick={this.handleLogin}>登录</Button>
                </div>
            </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);