import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles';
const styles = {
    root:{
        width: "20%",
        height: "25%",
        margin: "0 auto",
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
          opacity: "1",
        },
    }
}

class DragableColorBox extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className= {classes.root} style={{backgroundColor:this.props.color}}>
                {this.props.color}
            </div>
        )
    }
}

export default withStyles(styles)(DragableColorBox);