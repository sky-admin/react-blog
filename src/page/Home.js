import React, {Component} from 'react';
import ArticlePreview from '../components/ArticlePreview';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    container: {
        padding: '50px 10%',
    },
});

class Home extends Component {

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.container}>
                <ArticlePreview/>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
