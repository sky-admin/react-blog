import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    container: {
        backgroundColor: '#b0b0b0',
        padding: '10px'
    },
});

class ArticlePreview extends Component {

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.container}>
                <h1>这里是标题</h1>
                <p>这里是内容！这里是内容！这里是内容！这里是内容！这里是内容！这里是内容！这里是内容！这里是内容！这里是内容！这里是内容！这里是内容！</p>
            </div>
        );
    }
}

export default withStyles(styles)(ArticlePreview);
