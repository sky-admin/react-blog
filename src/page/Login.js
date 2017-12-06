import React, {Component} from 'react';
import LoginForm from '../components/LoginAndRegForm';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    container: {
        marginTop: 150,
        textAlign: 'center'
    },
});

class Login extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.container}>
                <h1>Login</h1>
                <LoginForm
                    usage='login'
                />
            </div>
        );
    }
}

export default withStyles(styles)(Login);
