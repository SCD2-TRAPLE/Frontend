//로그인페이지1
//@ts-nocheck
import Qlogo from "./logo.svg";
import nlogo from "./naver.svg";
import klogo from "./kakao.svg";
import glogo from "./google.svg";
import React from "react";
import { styles } from "./components/loginDetail/style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login1() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const BackBtn = () => {
    navigate('/main'); // 바로 이전 페이지로 이동
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    // 주황색 화면
    <div style={styles.container}>
      {/* 흰 박스 */}
      <div style={styles.whitebox}>
        <div>
          <div class="logo" style={styles.logo}>
            <img src={Qlogo}></img>
          </div>

          <div class="back">
            <button onClick={BackBtn} style={styles.previous}>X</button>
          </div>

          <div style={styles.buttonBox}>
            <div class="naverLogin">
              <button style={styles.button1}>
                <img src={nlogo} style={{ marginRight: "28%" }}></img>
                <span style={styles.button1Text}>네이버로 간편 가입하기</span>
              </button>
            </div>
            <div class="kakaoLogin">
              <button style={styles.button2}
                onClick={() => window.location.href =
                  `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${'9c0435350e0714d02ef07e6bccb168ab'}&redirect_uri=${window.location.href + '/auth/kakao/login'}`}>
                <img src={klogo} style={{ marginRight: "28%" }}></img>
                <span style={styles.button2Text}>카카오로 간편 가입하기</span>
              </button>
            </div>
            <div class="googleLogin">
              <button style={styles.button3}>
                <img src={glogo} style={{ marginRight: "28%" }}></img>
                <span style={styles.button3Text}>구글로 가입하기</span>
              </button>
            </div>
          </div>

          <div style={styles.text}>
            <span style={styles.text1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>아이디찾기  |  비밀번호찾기  |  회원가입하기</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login1;