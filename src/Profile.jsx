//프로필설정페이지
//@ts-nocheck
// import './modalStyles.css';
import defaultProfileImg from './basic.svg';
import buttonimg from './button.svg';
import React from "react";
import { useState } from "react";
import { styles } from "./components/loginDetail/style";
import { useNavigate } from "react-router-dom";
import DropMPro from './DropMPro';
import Modal from 'react-modal';
import JSConfetti from "js-confetti";

function Profile() {
  const jsConfetti = new JSConfetti(); 
  const handleModalClose = () => {
    setModalIsOpen(false);
    navigate('/main');
  }
  const handleClick = () => {
    setModalIsOpen(false); 
    jsConfetti.addConfetti({
      confettiColors: [
        "#0538FF",
        "#6FCBFF",
        "#F9C7F4",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
      ],
      confettiRadius: 5,
      confettiNumber: 500,
    });
    navigate('/main'); 
  };

  const navigate = useNavigate();
  const [IsComplete, setIsComplete] = useState(false);
  const [profileimg, setProfileImg] = useState(defaultProfileImg);
  const [isOpen, setMenu] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const BackBtn = () => {
    navigate('/Nickname'); // 바로 이전 페이지로 이동
  };

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  };

  const handleProfileChange = (newProfileImg) => {
    setProfileImg(newProfileImg);
    setIsComplete(isComplete => !isComplete); //프로필을 한 번 변경시 이동가능
  };
  
  const handleNextButtonClick = () => {
    if (IsComplete) {
      setModalIsOpen(true); // 추가
    }
  }

  return (
    <div style={styles.container}>
      {/* 흰 박스 */}
      <div style={styles.whitebox}>
        <div style={styles.buttonBox}>
          <h1 style={styles.pageTitle}>프로필 설정</h1>
          <button onClick={BackBtn} style={styles.previous2}>←</button>
          <div style={styles.setProfile}>
            <img src={profileimg} alt="default .img" style={styles.defaultProfileImg}></img>
            <img src={buttonimg} onClick={() => toggleMenu()} alt="button .img" style={styles.buttonimg}></img>
            {isOpen && <DropMPro onProfileChange={handleProfileChange} />}
          </div>
          <button style={styles.nextButton} onClick={handleNextButtonClick}>설정완료</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleModalClose}
            style={customStyles}
            onAfterOpen={() => {
              // 모달이 열린 후 opacity를 1로 설정하여 서서히 나타나게 합니다.
              document.querySelector('.ReactModal__Content').style.opacity = 1;
            }}
          >
            <div>
              <h4 style={{marginTop:"30%", fontSize:"20px"}}>TRAPLE에 오신 것을</h4>
              <span style={{fontFamily: "Pretendard", fontSize: "20px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal"}}>진심으로 환영합니다!</span>
              <button onClick={handleClick} style={styles.Qbutton}>여행 떠나기</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Profile;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)" // overlay 색상 설정
  },
  content: {
    opacity: 0, // 초기 상태는 투명하게
    transition: 'opacity 0.5s', // 0.5초 동안 서서히 나타나거나 사라지는 효과
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.75)',
    borderRadius: "20px",
    background: "linear-gradient(210deg, #0538FF 13.4%, #5799F7 73.43%)",
    color: "white",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    fontFamily: "Pretendard",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    top: '50%',
    left: '50%',
    right: 'auto',
    transform: 'translate(-50%, -50%)',
    width: "276px",
    height: "362px",
    border: "none"
  }
};
