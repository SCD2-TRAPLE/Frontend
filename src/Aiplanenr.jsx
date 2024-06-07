import ai1 from "./ai1.svg";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 

const Aiplanner = () => {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);

    const handleNext = () => {
        setModalVisible(true);
    };

    const handleNavigateToMyTrip = () => {
        navigate("/main");
    };

    const handleNavigateToMain = () => {
        navigate("/main");
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
      <div>
        <div>
            <img src={ai1} alt="AI Planner"></img>
        </div>
        <div>
            <button onClick={handleNext} style={{
                        marginTop:"-170px",
                        marginLeft:"140px",
                        width: "160px",
                        height: "40px",
                        flexShrink: '0',
                        display: "flex",
                        justifyContent: "center",
                        color: "#FFF",
                        textAlign: "center",
                        alignItems: 'center',
                        fontFamily: "Inter",
                        fontSize: "17px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal",
                        cursor:"pointer",
                        background: "#337FED",
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                        border:"none",
                        borderRadius:"30px"
            }}>내 플랜으로 저장</button>
        </div>
        {modalVisible && (
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '826px',
                height: '431px',
                backgroundColor: '#FFF',
                borderRadius: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: '24px',
                fontWeight: 600}}>
                <div style={{ display: 'flex'}}>
                    <span>✅</span>
                </div>
                <p>트래플 AI가 추천해준 플랜이<br/>저장되었습니다!</p>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <button onClick={handleNavigateToMyTrip} style={{ marginRight: '20px',
                                      width:" 167px",
                                      background:"#337FED",
                                      height: "43px",
                                      color:"white",
                                      cursor:"pointer",
                                      border:"none",
                                      fontFamily: "Inter",
                                      fontSize: "15px",
                                      borderRadius: "30px",
                                      fontStyle: "normal",
                                      fontWeight: "500",
                                      lineHeight: "normal",
                                      flexShrink: "0" }}><span style={{fontFamily: "Inter",
                                                                      fontSize: "15px",
                                                                      fontStyle: "normal",
                                                                      fontWeight: "800",
                                                                      lineHeight: "normal",}}>나의 여행</span> 바로가기</button>
                    <button onClick={handleNavigateToMain} style={{ marginLeft: '10px',
                                      width:" 167px",
                                      background:"#337FED",
                                      fontFamily: "Inter",
                                      fontSize: "15px",
                                      borderRadius: "30px",
                                      color:"white",
                                      cursor:"pointer",
                                      border:"none",
                                      fontStyle: "normal",
                                      fontWeight: "500",
                                      lineHeight: "normal",
                                      height: "43px",
                                      flexShrink: "0" }}><span style={{fontFamily: "Inter",
                                                                      fontSize: "15px",
                                                                      fontStyle: "normal",
                                                                      fontWeight: "800",
                                                                      lineHeight: "normal",}}>메인페이지</span> 돌아가기</button>
                </div>
            </div>
        )}
        {modalVisible && (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999
            }}></div>
        )}
      </div>
    );
};

export default Aiplanner;
