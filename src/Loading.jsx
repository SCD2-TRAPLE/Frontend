//로딩중 컴포넌트
import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loading-bar"></div>
      <div className="water">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
