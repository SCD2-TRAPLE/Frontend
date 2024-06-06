//포천시
//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/placeSelectDetail/style";
import Header from './Header';
import Smap from "./Smap.svg";
import pd5 from "./pd5.svg";
import pd6 from "./pd6.svg";
import pd7 from "./pd7.svg";
import pd8 from "./pd8.svg";
import ImageSlider from "./ImageSlider";

function PlaceSelectMain() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1); // 현재 단계 상태 추가
    const commonImg = [pd5, pd6, pd7, pd8, pd5, pd6, pd7, pd8, pd5, pd6, pd7, pd8];
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleNavigate = () => {
        navigate("/placeSelect"); // '목록으로보기' 클릭 시 이동할 경로
    };
    const handleNext = () => {
        navigate("/travlePeriod"); // 다음클릭하면 여행기간 컴포넌트로 이동
    };
    return(
        <div>
            <Header currentStep={currentStep}/>
            <div style={styles.container2}>
                <div>
                    <img src={Smap} alt="map" style={styles.map2} />
                </div>
                <div style={styles.imageContainer2}>
                    <span 
                        style={isHovering ? {...styles.listView, ...styles.listViewHover} : styles.listView}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleNavigate}
                    >
                            목록으로보기
                    </span>
                    <ImageSlider photos={commonImg}></ImageSlider>
                </div>
                <div style={styles.btnContainer2}>
                    {/* <span style={{
                            color: "var(--c9, #949494)",
                            fontFamily: "Inter",
                            fontSize: "25px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                            marginLeft:"800px"
                    }}>※ 여행할 도시를 선택하세요! (다중 선택 가능, 취소하려면 다시 클릭)</span> */}
                    <button onClick={handleNext} style={styles.nextBtn}>다음</button>
                </div>
            </div>
        </div>
    );
}
export default PlaceSelectMain;