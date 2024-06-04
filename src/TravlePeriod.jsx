//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/travlePeriodDetail/style";
import Header from './Header';

function TravlePeriod() {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/companionSelect"); //다음 페이지로 이동
    };
    const [currentStep, setCurrentStep] = useState(2); // 현재 단계 상태 추가
    return(
        <div>
            <Header/>
            <div style={styles.container}>
                <div>
                    <div style={styles.title}>여행기간을<br />선택해 주세요 📅</div>
                    <div style={styles.subtitle1}>*선택 가능한 여행 기간은 최대 10일입니다.</div>
                    <div style={styles.subtitle2}>양양은 6~8월이 성수기, 1~2 월이 비수기</div>
                </div>
                <div>
                    <button onClick={handleNext} style={styles.nextBtn}>다음</button>
                </div>
            </div>
        </div>
    );
}
export default TravlePeriod;