export const styles = {
    container: {
      position: 'relative',
      background:"white",
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'space-between', // 양 끝에 요소 배치
    },
    nextBtn:{
        width: "200px",
        height: "65.882px",
        flexShrink: '0',
        display: "flex",
        justifyContent: "center",
        flexShrink: "0",
        color: "#FFF",
        textAlign: "center",
        alignItems: 'center',
        fontFamily: "Inter",
        fontSize: "25px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
        cursor:"pointer",
        background: "#337FED",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        border:"none",
        borderRadius:"70px",
        position: "absolute", // 또는 "absolute"에 따라 필요에 맞게 선택
        zIndex: 1000, // 상당히 높은 값으로 다른 요소들보다 위에 위치하도록 설정
        top: "950px", // 페이지 하단에서 얼마나 떨어져 있을지 설정
        right: "360px" // 페이지 오른쪽에서 얼마나 떨어져 있을지 설정
      },
      title:{
        display: "flex",
        marginLeft:"94px",
        marginTop:"25px",
        flexShrink: "0",
        color: "#000",
        fontFamily: "Inter",
        fontSize: "55px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal"
      },
      side:{
        marginLeft: "960px",
        width: "960px",
        height: "100%",
        flexShrink: "0",
        background: "rgba(243, 136, 122, 0.20)"
      },
      subtitle1:{
        marginTop:"40px",
        marginLeft:"94px",
        color: "#000",
        fontFamily: "Inter",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
      },
      subtitle2:{
        marginTop:"20px",
        marginLeft:"100px",
        color: "#337FED",
        fontFamily: "Inter",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        flexDirection: "column",
        justifyContent: "center",
        flexShrink: "0"
      }
}