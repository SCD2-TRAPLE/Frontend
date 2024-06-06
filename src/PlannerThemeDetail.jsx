//플래너 설문
//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/conceptDetail/style";
import Header from './Header';
import detail from "./detail.svg"; //기본 체크 창
import detail1 from "./detail1.svg"; //역사
import detail2 from "./detail2.svg"; //역사 휴양
import Hth1 from "./Hth1.svg"; //호버이미지
import thChat from "./thChat.svg"; //말풍선
import Dth from "./Dth.svg";

function PlannerTheme() {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/plannerFood"); //다음 페이지로 이동
    };
    const [currentStep, setCurrentStep] = useState(4); // 현재 단계 상태 추가
    const [clickCount, setClickCount] = useState(0); // 클릭 횟수 상태 추가

    const handleImageClick = () => {
        setClickCount(prevCount => prevCount + 1);
    };

    const getDetailImage = () => {
        if (clickCount === 1) return detail1;
        if (clickCount >= 2) return detail2;
        return detail;
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
                    }}>테마</span>를 골라주세요 !</span>
                </div>
                <div style={{ background:"#ABCFFF"}}>
                    <div>
                        <span style={styles.subtitle}>테마선택<span style={{ marginLeft: "30px" }}>|</span><span style={{
                            color: "#337FED",
                            fontFamily: "Inter",
                            fontSize: "20px",
                            fontStyle: "normal",
                            marginLeft: "30px",
                            fontWeight: "400",
                            lineHeight: "normal"
                        }}>세부 테마를 선택해주세요</span></span>
                    </div>
                    <div style={styles.detailBox}>
                        <img src={Dth} style={{ marginRight: "200px" }}></img>
                        <img src={getDetailImage()} style={{ cursor: "pointer" }} onClick={handleImageClick} />
                    </div>
                    <div>
                        <button
                            style={{
                                ...styles.nextBtn2,
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
