import sizes from "./sizes";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  PaletteColors: {
    height: "90%",
  },

  PaletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: "1.5rem",
    margin: "0 1rem",
  },

  goBack: {
    width: "20%",
    // height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    height:"50%",
    margin: "0 auto",
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-5.5px",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px ",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.3333%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%",
    },
  },
};

export default styles;
