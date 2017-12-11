import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

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
    link: {
        fontSize: 14,
        marginTop: 10,
        display: 'inline-block'
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

    handleClick = async () => {
        const params = {username: this.state.username, password: this.state.password};
        const url = 'api/' + this.props.usage;
        const res = await axios.post(url, qs.stringify(params));
        if (res.data.code === 0) {
            if (this.props.usage === 'login') {
                alert('登录成功！');
                this.props.history.push('/')
            } else {
                alert('注册成功，请登录！');
                this.props.history.push('/login')
            }
        }
    };

    getButtonName = () => { return this.props.usage === 'login' ? '登录' : '注册' };
    getLinkName = () => { return this.props.usage === 'login' ? '没有账户，立即注册' : '已有账户，立即登录' };
    getLinkTarget = () => { return this.props.usage === 'login' ? '/reg' : '/login' };

    render() {
        const classes = this.props.classes;
        const buttonName = this.getButtonName();
        const linkName = this.getLinkName();
        const linkTarget = this.getLinkTarget();

        return (
            <div className={classes.container}>
                <TextField
                    id="username"
                    label="Username"
                    className={classes.textField}
                    type="text"
                    autoComplete="current-username"
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
                <Button raised color="primary" className={classes.button} onClick={this.handleClick}>{buttonName}</Button>
                <br/>
                <Link className={classes.link} to={linkTarget}>{linkName}</Link>
            </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(TextFields));