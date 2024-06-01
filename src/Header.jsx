// @ts-nocheck
import React from 'react';
import icon from "./previous.svg";
import { styles } from './components/headerDetail/style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Header(){
    const [isHovered, setIsHovered] = useState(false);
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
  
    const linkStyle = {
      textDecoration: isHovered ? 'underline' : 'none',
      cursor: 'pointer',
      color: "#EB7125",
      fontFamily: "Pretendard",
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal"
    };
  
    return(
        <div style={styles.headerBlock}>
            <button onClick={BackBtn} style={styles.BackBtn}>
              <img src={icon}></img>
            </button>
            <div style={styles.step}>
                <span style={styles.text}>STEP 01  </span>
                <span style={styles.text2}>02  03  04</span>
            </div>
        </div>
    );
}
export default Header;
