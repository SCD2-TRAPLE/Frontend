//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import photo1 from "./photo1.svg";
import photo2 from "./photo2.svg";
import photo3 from "./photo3.svg";
import nextBtn from "./nextBtn.svg"; // 다음 버튼 이미지 
import gangwon from "./Gangwon-info.svg";
import busan from "./Gangwon-info.svg";
import seoul from "./Gangwon-info.svg";
import jeju from "./Gangwon-info.svg";

const images = [
    [photo1, photo2, photo3, photo1],
    [photo3, photo1, photo2, photo1]
    // 필요한 만큼 이미지 배열 추가
];

const hoverImages = [gangwon, busan, seoul, jeju];

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "20px",
    },
    title: {
        color: "var(--c00, #000)",
        fontFamily: "Inter",
        fontSize: "50px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal",
        fontSize: "36px",
        fontWeight: "700",
        marginBottom: "10px",
        textAlign: "left",
    },
    subTitle: {
        color: "var(--c00, #000)",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
        fontFamily: "Inter",
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        fontSize: "24px",
        marginBottom: "20px",
        textAlign: "left",
    },
    imageContainer: {
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
    },
    image: {
        width: "400px",
        height: "300px",
        objectFit: "cover",
        borderRadius: "30px"
    },
    nextBtn: {
        marginTop: "20px",
        cursor: "pointer",
    },
};

function BestPlanner() {
    const [currentSet, setCurrentSet] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleNext = () => {
        setCurrentSet((prevSet) => (prevSet + 1) % images.length);
    };

    return (
        <div style={styles.container}>
            <div style={styles.title}>마음 맞는 트래플래너와 함께, Travle !</div>
            <div style={styles.subTitle}>여기 Traple에서 실시간으로 여행 동반자를 구해보아요 :)</div>
            <div style={styles.imageContainer}>
                {images[currentSet].map((image, index) => (
                    <img
                        key={index}
                        src={hoveredIndex === index ? hoverImages[index] : image}
                        style={styles.image}
                        alt={`planner-${index}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    />
                ))}
            </div>
            <img src={nextBtn} style={styles.nextBtn} alt="next" onClick={handleNext} />
        </div>
    );
}

export default BestPlanner;
