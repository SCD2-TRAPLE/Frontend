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
                    <div style={{marginLeft:"550px", marginBottom:"50px"}}>
                        <div style={{
                                color: '#000',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal'
                        }}><span style={{
                            color: '#000',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                        }}>→ 여행지</span> 정보에서 더 많은 여행지 보러가기!</div>
                        <div style={{
                            marginTop:"20px",
                            color: '#000',
                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal'
                        }}><span style={{
                            color: '#000',
                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal'
                        }}>→ 트래플 챗</span>으로 현지 정보 확인하러 가기!</div>
                    </div>
                    <ImageSlider photos={commonImg}></ImageSlider>
                </div>
                <div style={styles.btnContainer2}>
                    <button onClick={handleNext} style={styles.nextBtn}>다음</button>
                </div>
            </div>
        </div>
    );
}
export default PlaceSelectMain;