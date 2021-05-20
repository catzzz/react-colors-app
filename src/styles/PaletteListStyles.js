import sizes from "./sizes";
import bg from "./bg.svg";
import transitions from "@material-ui/core/styles/transitions";

const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },

  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#394bad",
    backgroundImage: `url(${bg})`,
    overflow: "scroll",
  },
  heading: {
    fontSize: "2rem",
  },
  container: {
    with: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    // border:"1px solid white"
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "70%",
    },
  },
  nav: {
    // backgroundColor:"pink",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white",
    },
  },
  palettes: {
    //backgroundColor:"green",
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,50%)",
    },
    [sizes.down("xs")]: {
      gridGap: "1.4rem",
      gridTemplateColumns: "repeat(1,100%)",
    },
  },
};

export default styles;
