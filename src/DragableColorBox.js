import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles';
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement} from 'react-sortable-hoc';
import styles from './styles/DragableColorBoxStyles';

class DragableColorBox extends Component {
    render() {
        const {classes,handleClick, } = this.props
        return (
            <div className= {classes.root} style={{backgroundColor:this.props.color}}>
                <div className={classes.boxContent}>
                    <span>{this.props.name}</span>
                    <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
                </div>
                
            </div>
        )
    }
}

export default withStyles(styles)(SortableElement(DragableColorBox));