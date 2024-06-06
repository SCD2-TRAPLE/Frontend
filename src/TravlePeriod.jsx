//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/travlePeriodDetail/style";
import Header from './Header';
import calendar from './calendar.svg';

function TravlePeriod() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(2); // 현재 단계 상태를 2로 설정
    const [isNextButtonActive, setIsNextButtonActive] = useState(false); // 다음 버튼 활성화 상태를 관리하는 상태 추가

    const handleCalendarClick = () => {
        setIsNextButtonActive(true); // calendar 이미지 클릭 시 다음 버튼 활성화
        navigate("/travlePeriod2"); // 바로 travlePeriod2 화면으로 넘어가기
    };

    return(
        <div>
            <Header currentStep={currentStep}/>
            <div style={styles.container}>
                <div>
                    <div style={styles.title}>여행기간을<br />선택해 주세요 📅</div>
                    <div style={styles.subtitle1}>*선택 가능한 여행 기간은 최대 10일입니다.</div>
                    <div style={styles.subtitle2}><span style={{color: "#337FED",
                        fontFamily: "Inter",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "800",
                        lineHeight: "normal",}}>
                            양양</span> 은 6~8월이 성수기, 1~2 월이 비수기
                    </div>
                </div>
                <div>
                    <button style={{...styles.nextBtn, backgroundColor: isNextButtonActive ? styles.nextBtn.backgroundColor : '#EAEAEA'}} 
                    disabled={!isNextButtonActive}>다음</button>
                    <img src={calendar} onClick={handleCalendarClick} alt="calendar" style={{cursor: 'pointer'}}></img>
                </div>
            </div>
        </div>
    );
}

export default TravlePeriod;
