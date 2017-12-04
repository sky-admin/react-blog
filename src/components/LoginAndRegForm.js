import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import axios from 'axios';

const styles = theme => ({
    container: {
        textAlign: 'center'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
    button: {
        marginTop: 40
    },
});

class TextFields extends Component {

    state = {
        username: '',
        password: '',
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    };

    handleClick = () => {
        const params = {username: this.state.username, password: this.state.password};
        console.log(params)
        // axios.post('/api/login', {})
    };

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
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                />
                <br/>
                <TextField
                    id="password"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                />
                <br/>
                <Button raised color="primary" className={classes.button} onClick={this.handleClick}>{}</Button>
            </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);