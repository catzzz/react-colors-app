import React, { Component } from 'react'
import { withStyles } from "@material-ui/styles";
import './Palette.css';
import ColorBox from "./ColorBox";

import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';


const styles = {
    Palette:{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    
    PaletteColors:{
        height: "90%",
    },
    
    PaletteFooter:{
        backgroundColor: "white",
        height:"5vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontWeight: "bold",
    },
    emoji:{
        fontSize: "1.5rem",
        margin: "0 1rem",
    },
};

class Palette extends Component {
    constructor(props){
        super(props);
        this.state = { level: 500, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(newLevel){
        this.setState({level:newLevel});
    }
    changeFormat(val){
       this.setState({format:val});
    }

    render() {
        const {colors, paletteName, emoji,id} = this.props.palette;
        const {classes} = this.props;
        const {level ,format}  = this.state;
        const colorBoxes = colors[level].map(color=>(
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.name} 
                // id={color.id} 
                // paletteId = {id}
                moreUrl={`/palette/${id}/${color.id}`}
                showingFullPalette = {true}
                />
        ));
        return (

            <div className={classes.Palette}>
                <Navbar 
                    level={level} 
                    changeLevel={this.changeLevel} 
                    handleChange= {this.changeFormat}
                    showingAllColors = {true}
                />
                

                <div className={classes.PaletteColors}>
                    {colorBoxes}
                </div>
                
                <PaletteFooter paletteName = {paletteName} emoji ={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(Palette);