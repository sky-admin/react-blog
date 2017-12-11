import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';
import Button from 'material-ui/Button';
import axios from 'axios';
import qs from 'qs';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    container: {
        textAlign: 'center',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 600,
        marginTop: 30
    },
    wrapper: {
        padding: '20px 10% 20px 10%',
        minHeight: '100%',
        textAlign: 'left',
    },
    editor: {
        width: '49%',
        height: 600,
    },
    markdown: {
        width: '49%',
        float: 'right',
        display: 'inline-block',
        backgroundColor: '#eeeeee',
        height: 606,
        overflow: 'scroll'
    },
    submit: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: '#ffffff',
        display: 'inline-block',
        marginBottom: 30,
    }
});

class Edit extends Component {

    state = {
        content: '',
        title: '',
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handlePublish = async () => {
        const params = {title: this.state.title, content: this.state.content};
        const res = await axios.post('api/postnew', qs.stringify(params));
        if (res.data === 'success') {
            // todo：成功处理
        }
    };

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.container}>
                <TextField
                    id="title"
                    label="标题"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    value={this.state.title}
                    onChange={this.handleChange('title')}
                />
                <div className={classes.wrapper}>
                    <textarea className={classes.editor} value={this.state.content}
                              onChange={this.handleChange('content')}></textarea>
                    <ReactMarkdown className={classes.markdown + ' markdown-body'} source={this.state.content}/>
                </div>
                <Button color="primary" className={classes.submit} onClick={this.handlePublish}>发布</Button>
            </div>
        );
    }
}

export default withStyles(styles)(Edit);
