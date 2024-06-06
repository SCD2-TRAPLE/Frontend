import companion1 from "../../companion1.svg";
import companion2 from "../../companion2.svg";

export const styles = {
    container: {
      background: 'white',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      backgroundImage:`url(${companion1})`,
      flexDirection: "column",
      backgroundSize: '100%',
      backgroudRepeat: 'no-repeat'
    },
    container2: {
      background: 'white',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      backgroundImage:`url(${companion2})`,
      flexDirection: "column",
      backgroundSize: '100%',
      backgroudRepeat: 'no-repeat'
    },
    img:{
      width: "268px",
      height: "328px",
      flexShrink: "0",
      margin:"15px 78px 0px 78px"
    },
    nextBtn:{
      width: "200px",
      height: "65px",
      flexShrink: '0',
      display: "flex",
      justifyContent: "center",
      color: "#FFF",
      textAlign: "center",
      alignItems: 'center',
      fontFamily: "Inter",
      fontSize: "27px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
      cursor:"pointer",
      background: "#337FED",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      border:"none",
      borderRadius:"70px"
    },
      title:{
        marginTop: '0px',
        display: "flex",
        marginLeft:"94px",
        width: "783px",
        flexShrink: "0",
        color: "#000",
        fontFamily: "Inter",
        fontSize: "55px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal"
      },
}