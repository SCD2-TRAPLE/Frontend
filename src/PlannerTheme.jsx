//플래너 설문
//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/conceptDetail/style";
import Header from './Header';
import th1 from "./th1.svg";
import th2 from "./th2.svg";
import th3 from "./th3.svg";
import th4 from "./th4.svg";
import th5 from "./th5.svg";
import th6 from "./th6.svg";
import Hth1 from "./Hth1.svg"; //호버이미지
import thChat from "./thChat.svg"; //말풍선

function PlannerTheme() {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/plannerThemeDetail"); //다음 페이지로 이동
    };
    const [currentStep, setCurrentStep] = useState(4); // 현재 단계 상태 추가
    const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지 상태 추가

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return(
        <div>
            <Header currentStep={currentStep}/>
            <div style={styles.container}>
                <div>
                    <h1 style={styles.title}>플랜이 완성되고 있어요 . . . 📍</h1>
                    <span style={styles.title2}>완벽한 플랜을 위해 <span style={{color:"#337FED",
                        fontFamily: "Inter",
                        fontSize: "55px",
                        fontStyle: "normal",
                        marginLeft:"20px",
                        fontWeight: "800",
                        lineHeight: "normal"}}>테마</span>를 골라주세요 !</span>
                </div>
                <div style={{background:"#F2F7FA"}}>
                    <div>
                        <span style={styles.subtitle}>테마선택<span style={{marginLeft:"30px"}}>|</span><span style={{color:"#337FED",
                        fontFamily: "Inter",
                        fontSize: "20px",
                        fontStyle: "normal",
                        marginLeft:"30px",
                        fontWeight: "400",
                        lineHeight: "normal"}}>아이콘에 마우스를 올려보세요</span></span>
                    </div>
                    <div>
                        <img src={selectedImage === "th1" ? Hth1 : th1} alt="th1" style={styles.th} onClick={() => handleImageClick("th1")} />
                        <img src={selectedImage === "th6" ? Hth1 : th6} alt="th2" style={styles.th} onClick={() => handleImageClick("th6")} />
                        <img src={selectedImage === "th3" ? Hth1 : th3} alt="th3" style={styles.th} onClick={() => handleImageClick("th3")} />
                        <img src={selectedImage === "th4" ? Hth1 : th4} alt="th4" style={styles.th} onClick={() => handleImageClick("th4")} />
                        <img src={selectedImage === "th5" ? Hth1 : th5} alt="th5" style={styles.th} onClick={() => handleImageClick("th5")} />
                        <img src={selectedImage === "th2" ? Hth1 : th2} alt="th6" style={styles.th} onClick={() => handleImageClick("th2")} />
                    </div>
                    {selectedImage && (
                        <div style={{ position: 'relative', marginLeft:"190px"}}>
                            <img src={thChat} alt="말풍선" style={{marginLeft:"10px", marginBottom:"50px" }} />
                            <div style={{ position: 'absolute', top: '40%', left: '45%', transform: 'translate(-50%, -20%)', color: 'black' }}>
                                <button onClick={handleNext} style={styles.nextBtn}>선택하기</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default PlannerTheme;
