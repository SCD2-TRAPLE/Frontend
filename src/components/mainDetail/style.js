import homeImg from "../../homeImg.svg";
export const styles = {
    container: {
        background: 'white',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: "column"
      },
    mainTitle: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${homeImg})`,
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--c00, #FFF)',
        fontFamily: 'Inter',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat'
      },
      mainText: {
        marginTop:"204px",
        marginLeft:"201px",
        fontSize: '50px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        color:"var(--c00, #FFFFFF)",
      },
      subText: {
        marginLeft:"201px",
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        color: 'var(--c2, #F2F7FA)',
      },
      button:{
        position:"absolute",
        width: "290.476px",
        height: "46.023px",
        marginTop:"-10px",
        marginLeft:"-55px",
        flexShrink: "0",
        borderRadius: "30px",
        background: "var(--c6, #337FED)",
        boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        border:"none",
        color:"white",
        fontFamily: "Inter",
        fontSize: "18px",
        fontStyle: "italic",
        fontWeight: "600",
        lineHeight: "normal",
        cursor: "pointer"
      }
    }