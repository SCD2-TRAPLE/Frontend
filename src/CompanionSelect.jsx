//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/companionSelectDetail/style";
import Header from './Header';
import eclipse1 from "./eclipse1.svg";
import eclipse2 from "./eclipse2.svg";
import eclipse3 from "./eclipse3.svg";
import eclipse4 from "./eclipse4.svg";

function TravlePeriod() {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/concept"); //다음 페이지로 이동
    };

    return(
        <div>
            <Header/>
            <div style={styles.container}>
                <div>
                    <h1 style={styles.title}>함께 하고싶은 그 사람, <br />동반 유형을 선택해주세요 !</h1>
                </div>
                <div>
                    <img src={eclipse1} style={styles.img} alt="eclipse1"/>
                    <img src={eclipse2} style={styles.img} alt="eclipse2"/>
                    <img src={eclipse3} style={styles.img} alt="eclipse3"/>
                    <img src={eclipse4} style={styles.img} alt="eclipse4"/>
                </div>
                <div>
                    <button onClick={handleNext} style={styles.nextBtn}>다음</button>
                </div>
            </div>
        </div>
    );
}
export default TravlePeriod;