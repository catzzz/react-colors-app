import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
  },
  secondary: {
    backgroundColor: "pink",
    "& h1": {
      color: "green",
    },
  },
};

function MiniPalette(props) {
  const { classes } = props;
  return (
    <div className={classes.secondary}>
      <h1>Mini Palette</h1>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
