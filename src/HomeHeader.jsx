// @ts-nocheck
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { styles } from './components/headerDetail/style'; //placeSelect 헤더와 같은 css사용
import logo2 from './logo2.svg'; // 홈화면 traple 로고
import loginBtn from './loginBtn.svg'; // 로그인 버튼

function HomeHeader() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const navigate = useNavigate();

  const BackBtn = () => {
    navigate('/main'); // 항상 메인페이지로 이동
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div style={styles.headerBlock}> 
      <button style={styles.logoButton} onClick={BackBtn}>
        <img src={logo2} alt="홈화면 traple 로고" />
      </button>
      <div style={styles.navLinks}>
        <Link
          to="/placeSelect-main"
          style={styles.linkStyle(hoveredIndex === 0)}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          플래너
        </Link>
        <Link
          to="/travel-info"
          style={styles.linkStyle(hoveredIndex === 1)}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          여행정보
        </Link>
        <Link
          to="/community"
          style={styles.linkStyle(hoveredIndex === 2)}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          커뮤니티
        </Link>
        <Link
          to="/my-schedule"
          style={styles.linkStyle(hoveredIndex === 3)}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          나의여행
        </Link>
        <Link
          to="/together"
          style={styles.linkStyle(hoveredIndex === 4)}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          함께 떠나기
        </Link>
      </div>
      <div style={styles.loginButton}>
        <img src={loginBtn} alt="로그인 버튼" />
      </div>
    </div>
  );
}

export default HomeHeader;
