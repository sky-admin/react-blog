import React, {Component} from 'react';
import LoginForm from '../components/LoginAndRegForm';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    container: {
        marginTop: 200,
        textAlign: 'center'
    },
});

class Login extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.container}>
                <h1>Login</h1>
                <LoginForm></LoginForm>
            </div>
        );
    }
}

export default withStyles(styles)(Login);
