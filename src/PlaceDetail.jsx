//지도클릭시 나오는 강원도
//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/placeSelectDetail/style";
import Header from './Header';
import Dmap from "./mapDetail.svg";
import pd1 from "./pd1.svg";
import pd2 from "./pd2.svg";
import pd3 from "./pd3.svg";
import pd4 from "./pd4.svg";
import ImageSlider from "./ImageSlider";

function PlaceSelectMain() {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentStep, setCurrentStep] = useState(1); // 현재 단계 상태 추가
    const commonImg = [pd1, pd2, pd3, pd4, pd1, pd2, pd3, pd4, pd1, pd2, pd3, pd4];
    const handleNext = () => {
        navigate("/placeDetail-si"); //다음 페이지로 이동
    };

    return(
        <div>
            <Header currentStep={currentStep}/>
            <div style={styles.container2}>
                <div>
                    <img src={Dmap} alt="map" style={styles.map2} />
                </div>
                <div style={styles.imageContainer}>
                    <ImageSlider photos={commonImg}></ImageSlider>
                </div>
                <div style={styles.btnContainer}>
                    <button onClick={handleNext} style={styles.nextBtn}>다음</button>
                </div>
            </div>
        </div>
    );
}
export default PlaceSelectMain;