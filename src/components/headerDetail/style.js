export const styles = {
    headerBlock:{
        marginTop:"150px",
        background: 'white',
        width: '100vw',
        display: 'flex'
    },

    step:{
        display: "flex",
        marginRight:"116px",
        marginTop:"30px",
        marginLeft:"1302px",
        marginBottom: "38px"
    },

    text:{
        marginTop:"0px",
        width: "126px",
        height: "39px",
        color: "#000",
        fontFamily: "Inter",
        fontSize: "32px",
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: "normal",
    },
    text2:{
        marginTop:"0px",
        width: "172px",
        height: "39px",
        color: "#F3887A",
        fontFamily: "Inter",
        fontSize: "32px",
        fontStyle: "normal",
        fontWeight: "800",
        lineeight: "normal"
    },
    BackBtn:{
        background:"transparent",
        border:"none",
        alignItems: 'center',
        justifyContent: 'center',
        width: "50px",
        height: "50px",
        flexShrink: "0",
        cursor: "pointer",
        marginTop:"30px",
        marginLeft:"30px",
        marginBottom: "38px",
    },
    headerBlock2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: '10px 20px',
      },
      logoButton: {
        cursor:"pointer",
        marginLeft:"20px",
        border: 'none',
        backgroundColor: 'transparent',
        padding: 0,
      },
      navLinks: {
        alignItems: 'center',
        marginLeft: "90px",
        display: 'flex',
        gap: '100px',
      },
      loginButton: {
        cursor:"pointer",
        marginTop:"40px",
        marginLeft: 'auto',
        marginRight:"20px"
      },
      linkStyle: (isHovered) => ({
        textDecoration: isHovered ? 'underline' : 'none',
        cursor: 'pointer',
        color: isHovered ? '#337FED' : '#000000',
        fontFamily: 'Pretendard',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
      }),
}