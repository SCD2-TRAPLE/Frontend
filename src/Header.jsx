// @ts-nocheck
import React, { useState } from 'react';
import icon from "./previous.svg";
import { styles } from './components/headerDetail/style';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [currentStep, setCurrentStep] = useState(1); // 현재 단계 상태 추가
    const navigate = useNavigate();

    const BackBtn = () => {
        navigate('/placeSelect'); // 메인페이지로 이동
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // 단계별 색상을 다르게 하는 함수
    const getStepColor = (step) => {
        return currentStep >= step ? "#EB7125" : "black"; // 현재 단계보다 크거나 같으면 주색상, 아니면 회색
    };

    return (
        <div style={styles.headerBlock}>
            <button onClick={BackBtn} style={styles.BackBtn}>
                <img src={icon}></img>
            </button>
            <div style={styles.step}>
                <span style={{ ...styles.text, color: getStepColor(1) }}>STEP 01</span>
                <span style={{ ...styles.text, color: getStepColor(2) }}> 02</span>
                <span style={{ ...styles.text, color: getStepColor(3) }}> 03</span>
                <span style={{ ...styles.text, color: getStepColor(4) }}> 04</span>
            </div>
        </div>
    );
}

export default Header;
