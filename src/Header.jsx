//플래너 설문할때 헤더
// @ts-nocheck
import React, { useState } from 'react';
import icon from "./previous.svg";
import { styles } from './components/headerDetail/style';
import { useNavigate } from 'react-router-dom';
import logo from "./logo2.svg";

function Header({ currentStep }) {
    const [isHovered, setIsHovered] = useState(false);
    // const [currentStep, setCurrentStep] = useState(1); // 현재 단계 상태 추가
    const navigate = useNavigate();

    const BackBtn = () => {
        navigate('/main'); // 메인페이지로 이동
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // 단계별 색상을 다르게 하는 함수
    const getStepColor = (step) => {
        return currentStep == step ? "black" : "#67A4FD"; // 현재 단계보다 크거나 같으면 #0538FF, 아니면 회색
    };

    return (
        <div style={styles.headerBlock}>
            <button onClick={BackBtn} style={styles.BackBtn}>
                <img src={icon}></img>
            </button>
            <div style={styles.logo}>
                <img src={logo} onClick={BackBtn}></img>
            </div>
            <div style={styles.step}>
                <span style={{ ...styles.text, color:"black"}}>STEP</span>
                <span style={{ ...styles.text, color: getStepColor(1) }}> 01</span>
                <span style={{ ...styles.text, color: getStepColor(2) }}> 02</span>
                <span style={{ ...styles.text, color: getStepColor(3) }}> 03</span>
                <span style={{ ...styles.text, color: getStepColor(4) }}> 04</span>
            </div>
        </div>
    );
}

export default Header;
