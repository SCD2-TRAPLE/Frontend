//플래너 설문 제일 첫 부분 지도
//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/placeSelectDetail/style";
import Header from './Header';
import map from "./map.svg";
function PlaceSelectMain() {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentStep, setCurrentStep] = useState(1); // 현재 단계 상태 추가

    const handleNext = () => {
        navigate("/placeDetail-do"); //다음 페이지로 이동
    };

    return(
        <div>
            <Header currentStep={currentStep}/>
            <div style={styles.container}>
                <div>
                    <h1 style={styles.title}>가고 싶은, 관심 있는<br />여행지를 선택해주세요 !</h1>
                    <span style={{  color: "#949494", 
                                    fontFamily: "Inter",
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    marginTop:"50px",
                                    marginLeft:"140px",
                                    lineHeight: "normal"}}>
                    ※ 지도를 클릭해보세요!</span>
                </div>
                <div>
                    <img src={map} onClick={handleNext} alt="map" style={styles.map} />
                </div>
            </div>
        </div>
    );
}
export default PlaceSelectMain;