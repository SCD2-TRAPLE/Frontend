//여행지 정보
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nextBtn from "./nextBtn.svg"; // 다음 버튼 이미지 
import hi1 from "./hi1.png"; 
import hi2 from "./hi2.png";
import hi3 from "./hi3.png";
import hi4 from "./hi4.png";  
import "./style.css";

const images = [
    [hi1, hi2, hi3, hi4]
];

function HomeInfo() {
    const [currentSet, setCurrentSet] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleNext = () => {
        setCurrentSet((prevSet) => (prevSet + 1) % images.length);
    };

    return (
        <div style={styles.container}>
          <div style={styles.title}>언젠가 꼭 가고싶었던 그 곳, </div>
          <div style={styles.subTitle}>여러분이 궁금했던 <span style={{
                    color: "#337FED",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
                    fontFamily: "Inter",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "800",
                    lineHeight: "normal",
                    fontSize: "24px",
                    marginBottom: "20px",
                    textAlign: "left",
          }}>여행지</span>의 정보를 저희 <span style={{
            color: "#337FED",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
            fontFamily: "Inter",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "800",
            lineHeight: "normal",
            fontSize: "24px",
            marginBottom: "20px",
            textAlign: "left",
  }}>Traple</span>에서 낱낱이 준비했어요 :)</div>
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
                  className="chat-img"
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

export default HomeInfo;

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
        marginTop: "60px",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: "50px", // 이미지 사이의 간격
    },
    imageWrapper: {
        width: '45%', // 이미지가 균등하게 배치되도록 너비 설정
        position: 'relative',
    },
    image: {
        cursor: 'pointer',
        zIndex: "9999",
        width: '100%',
        height: 'auto',
        objectFit: "cover",
        borderRadius: "30px",
    },
    highlight: {
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
        position: "absolute",
        marginTop: "20px",
        cursor: "pointer",
        right: '10px', // 오른쪽에서 10px 떨어진 위치
        top: '60%', // 상단에서 50% 위치에 있도록 설정. 필요에 따라 조정 가능
    },
};
