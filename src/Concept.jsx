//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/conceptDetail/style";
import Header from './Header';

function TravlePeriod() {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/AiPlanner"); //다음 페이지로 이동
    };
    const [currentStep, setCurrentStep] = useState(4); // 현재 단계 상태 추가
    return(
        <div>
            <Header/>
            <div style={styles.container}>
                <div>
                    <h1 style={styles.title}>플랜이 완성되고 있어요 . . . 📍<br />완벽한 플랜을 위해 테마를 골라주세요 !</h1>
                    <h6 style={styles.subtitle}>*아이콘에 마우스를 올려보세요.</h6>
                </div>
                <div>
                    <button onClick={handleNext} style={styles.nextBtn}>다음</button>
                </div>
            </div>
        </div>
    );
}
export default TravlePeriod;