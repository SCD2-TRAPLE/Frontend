//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "./components/companionSelectDetail/style";
import Header from './Header';
import companion1 from "./companion3.svg";
import companion2 from "./companion4.svg";

function TravlePeriod() {
    const navigate = useNavigate();
    const [clickCount, setClickCount] = useState(0); // 클릭 횟수 상태 추가
    const [isNextButtonActive, setIsNextButtonActive] = useState(false); // 다음 버튼 활성화 상태를 관리하는 상태 추가
    const [currentStep, setCurrentStep] = useState(3); // 현재 단계 상태 추가

    const handleNext = () => {
        navigate("/plannerTheme");
    };

    const handleImageClick = () => {
        setClickCount(prevCount => prevCount + 1);
        setIsNextButtonActive(true); // 이미지 클릭 시 다음 버튼을 활성화
    };

    const getDetailImage = () => {
        return clickCount >= 1 ? companion2 : companion1;
    };

    return (
        <div>
            <Header currentStep={currentStep}/>
            <div style={styles.container} onClick={handleImageClick}>
                <img src={getDetailImage()} alt="Companion" style={{marginLeft:"100px", width: '1450px'}}/>
                <div style={{marginLeft:"1230px", marginTop:"50px"}}>
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
                        }}>매칭 시스템</span>으로 여행의 동반자를 편하게 구할 수 있어요!</div>
                        <div style={{
                            marginTop:"20px",
                            marginLeft:"240px",
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
                        }}>함께 떠나기로</span> 이동하기 →</div>
                    </div>
                <button style={{...styles.nextBtn, backgroundColor: isNextButtonActive ? '#337FED' : '#EAEAEA'}} 
                    disabled={!isNextButtonActive} onClick={handleNext}>다음</button>
            </div>
        </div>
    );
}
export default TravlePeriod;
