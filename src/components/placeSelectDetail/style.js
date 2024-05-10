export const styles = {
    container: {
        background: 'white',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: "column"
      },
      title:{
        marginTop: '10px',
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
      box:{
        width: "65%",
        height: "144px",
        flexShrink: "0",
        marginTop: '38px',
        marginLeft:"auto",
        marginRight:"auto",
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      },
      regionBox:{
        // width: "65%",
        height: "63px",
        flexShrink: "0",
        borderRadius: "40px",
        border: "2px solid #F3887A",
        background: "rgba(255, 255, 255, 0.50)",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '18%', // 5개가 한 줄에 배치되도록 너비 조정 (100% / 5 = 20%, 여백을 고려하여 조금 줄임)
        marginBottom: '20px',
        cursor:"pointer"
      }
}