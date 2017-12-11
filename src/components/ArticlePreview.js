import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const styles = theme => ({
    container: {
        backgroundColor: '#b0b0b0',
        padding: '10px'
    },
});

class ArticlePreview extends Component {

    constructor(props) {
        super(props);
        axios.get('api/articles').then(res => {
            console.log(res.data.content);
            this.setState({articles: res.data.content});
        });
    }

    state = {
        articles: [],
    };

    render() {
        const classes = this.props.classes;

        console.log(this.state.articles);
        const listItems = this.state.articles.map((article) =>
            <div>
                <h1>{article.title}</h1>
                <ReactMarkdown source={article.content}/>
            </div>
        );

        return (
            <div className={classes.container}>
                {listItems}
            </div>
        );
    }
}

export default withStyles(styles)(ArticlePreview);
