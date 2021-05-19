

 const styles = {
    root: {
      backgroundColor: "blue",
      height:"100vh",
      display:"flex",
      alignItems:"flex-start",
      justifyContent:"center"
      
    },
    container:{
      with:"50%",
      display:"flex",
      alignItems:"flex-start",
      flexDirection:"column",
      flexWrap:"wrap",
      // border:"1px solid white"
  
    },
    nav:{
      // backgroundColor:"pink",
      display:"flex",
      width:"100%",
      justifyContent:"space-between",
      color:"white",
      alignItems:"center", 
      color:"white",
      "& a":{
        color: "white"
      }
  
    },
    palettes:{
      //backgroundColor:"green",
      boxSizing:"border-box",
      width:"100%",
      display:"grid",
      gridTemplateColumns:"repeat(3,30%)",
      gridGap:"5%"
    }
  
  };

  export default styles;