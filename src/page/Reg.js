import React, {Component} from 'react';
import RegForm from '../components/LoginAndRegForm';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    container: {
        marginTop: 150,
        textAlign: 'center'
    },
});

class Reg extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.container}>
                <h1>Registry</h1>
                <RegForm
                    usage='reg'
                />
            </div>
        );
    }
}

export default withStyles(styles)(Reg);
