export const styles = {
    container: {
        background: 'white',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between', // 양 끝에 요소 배치
      },
      container2: {
        background: 'white',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        display: 'flex',
        flexDirection: "column"
      },
      title:{
        marginLeft:"140px",
        display: "flex",
        // width: "783px",
        flexShrink: "0",
        color: "#000",
        fontFamily: "Inter",
        fontSize: "55px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal"
      },
      box:{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)', // 7행로 표시
        gridGap: '10px', // 그리드 아이템 사이 간격
        width: "70%",
        flexShrink: "0",
        marginLeft:"auto",
        marginRight:"auto",
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      },
      regionBox:{
        color: "#337FED",
        fontFamily: "Inter",
        fontSize: "28px",
        width: "180px",
        height: "55px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        flexShrink: "0",
        borderRadius: "40px",
        border: "2px solid #337FED",
        background: "rgba(255, 255, 255, 0.50)",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // width: '18%', // 5개가 한 줄에 배치되도록 너비 조정 (100% / 5 = 20%, 여백을 고려하여 조금 줄임)
        marginBottom: '20px',
        cursor:"pointer"
      },
      infoBox:{
        position: "absolute", 
        margin: "20px 25px 0px 25px" //이미지 호버시에 상세설명 나오는 창 (아직 미완성)
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
      map:{
        cursor: "pointer",
        marginRight:"140px",
        marginRight:"10px"
      },
      map2:{
        marginRight:"140px",
        marginRight:"10px"
      },
      imageContainer:{
        marginLeft:"714px",
        marginTop:"-500px"
      },
      imageContainer2:{
        marginLeft:"690px",
        marginTop:"-300px",
        flexDirection:"column",
        display:"flex"
      },
      btnContainer:{
        display:"flex",
        marginLeft:"1450px",
        marginTop:"50px"
      },
      btnContainer2:{
        display:"flex",
        marginLeft:"1450px",
        marginTop:"90px"
      },
      listView: {
        cursor: 'pointer',
        transition: 'color 0.3s ease', // 부드러운 색상 변화 효과
    },
    listViewHover: {
        color: '#337FED',
        textDecoration: 'underline',
    },
}