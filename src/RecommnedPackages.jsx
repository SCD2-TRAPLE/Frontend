import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nextBtn from "./nextBtn.svg"; // 다음 버튼 이미지 
// import gangwon from "./Gangwon-info.svg";
// import busan from "./Gangwon-info.svg";
// import seoul from "./Gangwon-info.svg";
// import jeju from "./Gangwon-info.svg";
import r1 from "./r1.svg";
import r2 from "./r2.svg";
import r3 from "./r3.svg";
import r4 from "./r4.svg";

const images = [
    [r1, r2, r3, r4],
    [r4, r3, r2, r1]
];

// const hoverImages = [gangwon, busan, seoul, jeju];

function BestPlanner() {
    const [currentSet, setCurrentSet] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleNext = () => {
        setCurrentSet((prevSet) => (prevSet + 1) % images.length);
    };

    return (
        <div style={styles.container}>
          <div style={styles.title}> <span style={styles.highlight}>Traple </span> 의 추천 패키지</div>
          <div style={styles.subTitle}>Traple이 당당하게 추천하는 패키지 상품을 소개합니다</div>
          <div style={styles.imageContainer}>
            {images[currentSet].map((image, index) => (
              <div 
                key={index} 
                style={styles.imageWrapper}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image}
                  style={styles.image}
                  alt={`planner-${index}`}
                />
              </div>
            ))}
          </div>
          <img src={nextBtn} style={styles.nextBtn} alt="next" onClick={handleNext} />
        </div>
      );
}

export default BestPlanner;

const styles = {
    container: {
        position:"relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "100px",
    },
    title: {
        color: "var(--c00, #000)",
        fontFamily: "Inter",
        fontSize: "50px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal",
        fontSize: "36px",
        fontWeight: "800",
        marginBottom: "10px",
        textAlign: "left",
    },
    subTitle: {
        color: "var(--c00, #000)",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
        fontFamily: "Inter",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        fontSize: "24px",
        marginBottom: "20px",
        textAlign: "left",
    },
    imageContainer: {
        marginTop:"60px",
        display: 'flex',
        justifyContent: 'space-between',
        gap: "20px",
    },
    imageWrapper: {
        width: '23%', // 이미지가 균등하게 배치되도록 너비 설정
        position: 'relative',
        overflow: 'hidden', // 이미지가 부모 요소를 벗어나지 않도록 설정
      },
    image: {
        width: '100%',
        height: 'auto',
        // width: "400px",
        // height: "300px",
        objectFit: "cover",
        borderRadius: "30px"
    },
    highlight:{
        background: "var(--traple, linear-gradient(210deg, #0538FF 13.4%, #5799F7 73.43%))",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: "Inter",
        fontSize: "50px",
        fontStyle: "italic",
        fontWeight: "800",
        lineHeight: "normal"
    },
    nextBtn: {
        transform: 'translateY(-50%)',
        position:"absolute",
        marginTop: "20px",
        cursor: "pointer",
        right: '10px', // 오른쪽에서 10px 떨어진 위치
        top: '60%', // 상단에서 50% 위치에 있도록 설정. 필요에 따라 조정 가능
    },
};