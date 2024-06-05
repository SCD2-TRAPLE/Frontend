import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import photo1 from "./photo1.svg";
import photo2 from "./photo2.svg";
import photo3 from "./photo3.svg";
import m1 from "./m1.svg";
import m2 from "./m2.svg";
import m3 from "./m3.svg";
import m4 from "./m4.svg";
import nextBtn from "./nextBtn.svg"; // 다음 버튼 이미지 
import gangwon from "./Gangwon-info.svg"; //hover시 뜨는 설명창
import busan from "./Busan-info.svg";
import uleung from "./Ul-info.svg";
import jeju from "./Jeju-info.svg";

const images = [
    [m1, m2, m3, m4],
    [photo3, photo1, photo2, photo1]
];

const hoverImages = [uleung, busan, jeju, gangwon];

function BestPlanner() {
    const [currentSet, setCurrentSet] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleNext = () => {
        setCurrentSet((prevSet) => (prevSet + 1) % images.length);
    };

    return (
        <div style={styles.container}>
            <div style={styles.title}>지금뜨는 플래너 BEST</div>
            <div style={styles.subTitle}>트래플래너들의 PICK을 한눈에</div>
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
                            style={{...styles.image, ...styles.baseImage}}
                            alt={`planner-${index}`}
                        />
                        {hoveredIndex === index && (
                            <img
                                src={hoverImages[index]}
                                style={{...styles.image, ...styles.hoverImage}}
                                alt={`hover-planner-${index}`}
                            />
                        )}
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
        padding: "20px",
    },
    title: {
        color: "var(--c00, #FFF)",
        fontFamily: "Inter",
        fontSize: "50px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal",
        fontSize: "36px",
        fontWeight: "800",
        marginBottom: "10px",
        textAlign: "left",
        marginLeft:"20px"
    },
    subTitle: {
        marginLeft:"20px",
        color: "var(--c00, #FFF)",
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
        marginTop:"20px",
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
    },
    image: {
        // width: "400px",
        // height: "300px",
        objectFit: "cover",
        borderRadius: "30px"
    },
    nextBtn: {
        marginTop: "20px",
        cursor: "pointer",
        position:"absolute",
        right: '10px', // 오른쪽에서 10px 떨어진 위치
        top: '50%', // 상단에서 50% 위치에 있도록 설정. 필요에 따라 조정 가능
    },
    imageWrapper: {
        position: 'relative', // 컨테이너를 상대 위치로 설정
        width: '400px',
        height: '300px',
    },
    baseImage: {
        // width: '100%',
        // height: '100%',
        borderRadius: '30px',
        objectFit: 'cover',
    },
    hoverImage: {
        position: 'absolute', // hover 이미지를 절대 위치로 설정
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '30px',
        objectFit: 'cover',
        zIndex: 10, // 원래 이미지 위에 오도록 z-index 설정
    }
};
