//플래너 이동수단 선택
//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/conceptDetail/style";
import Header from './Header';
import vehicle1 from "./vehicle1.svg";
import vehicle2 from "./vehicle2.svg";

function PlannerTheme() {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/loading"); //다음 페이지로 이동
    };
    const [currentStep, setCurrentStep] = useState(4); // 현재 단계 상태 추가
    const [clickCount, setClickCount] = useState(0); // 클릭 횟수 상태 추가

    const handleImageClick = () => {
        setClickCount(prevCount => prevCount + 1);
    };

    const getDetailImage = () => {
        if (clickCount === 1) return vehicle2;
        return vehicle1;
    };

    return (
        <div>
            <Header currentStep={currentStep} />
            <div style={styles.container}>
                <div>
                    <h1 style={styles.title}>플랜이 완성되고 있어요 . . . 📍</h1>
                    <span style={styles.title2}>완벽한 플랜을 위해 <span style={{
                        color: "#337FED",
                        fontFamily: "Inter",
                        fontSize: "55px",
                        fontStyle: "normal",
                        marginLeft: "20px",
                        fontWeight: "800",
                        lineHeight: "normal"
                    }}>이동방법</span>을 골라주세요 !</span>
                </div>
                <div style={{ background:"#F2F7FA"}}>
                    <div>
                        <span style={styles.subtitle}>이동방법 선택<span style={{ marginLeft: "30px" }}>|</span><span style={{
                            color: "#337FED",
                            fontFamily: "Inter",
                            fontSize: "20px",
                            fontStyle: "normal",
                            marginLeft: "30px",
                            fontWeight: "400",
                            lineHeight: "normal"
                        }}></span></span>
                    </div>
                    <div style={styles.detailBox}>
                        <img src={getDetailImage()} style={{ cursor: "pointer" }} onClick={handleImageClick} />
                    </div>
                    <div>
                        <button
                            style={{
                                ...styles.nextBtn3,
                                backgroundColor: clickCount > 0 ? "#337FED" : "#EAEAEA",
                                cursor: clickCount > 0 ? "pointer" : "not-allowed"
                            }}
                            onClick={clickCount > 0 ? handleNext : null}
                            disabled={clickCount === 0}
                        >
                            다음
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlannerTheme;
