//로딩중 컴포넌트
import loadbg from "./loadbg.svg";
import React from 'react';
import { useNavigate } from "react-router-dom"; 
import './LoadingScreen.css';

const LoadingScreen = () => {
  const navigate = useNavigate();
  const handleNext = () => {
      navigate("/Aiplanner"); //다음 페이지로 이동
  };
  return (
    <div className="loading-container">
      <div className="loading-bar"></div>
      <div><img src={loadbg} onClick={handleNext}/></div>
      <div className="water">
        <div>
          <div class="wave -one"></div>
          <div class="wave -two"></div>
          <div class="wave -three"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;