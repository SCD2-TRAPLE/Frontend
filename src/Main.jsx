//@ts-nocheck
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from 'framer-motion';
import { styles } from "./components/mainDetail/style";
import { useNavigate } from "react-router-dom"; 
import TrendingPlanners from "./TrendingPlanners";
import MatchingPlanners from "./MatchingPlanners";
import RecommnedPackages from "./RecommnedPackages";
import HomeHeader from "./HomeHeader";
// import './App.css'; App 전체 스타일
import alarmBtn from "./alarmBtn.svg";
import homeImg from "./homeImg.svg";
import menuBox from "./menuBox.png";

function Main() {
    styles.alarmBtnStyle = {
        position: 'fixed', // 고정 위치
        bottom: '20px', // 하단에서 20px 떨어진 위치
        right: '20px', // 오른쪽에서 20px 떨어진 위치
        cursor: 'pointer' // 마우스 오버 시 커서 변경
      };
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
      };      
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/planner"); //다음 페이지로 이동
    };

    const handleChatClick = () => {
        navigate("/chat"); //임시로 채팅 라우팅해둠
    };

    const trendingControls = useAnimation();
    const matchingControls = useAnimation();
    const recommendedControls = useAnimation();

    const trendingRef = useRef();
    const matchingRef = useRef();
    const recommendedRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const currentControls = entry.target.getAttribute('data-controls');
                if (entry.isIntersecting) {
                    if(currentControls === 'trending') trendingControls.start("visible");
                    if(currentControls === 'matching') matchingControls.start("visible");
                    if(currentControls === 'recommended') recommendedControls.start("visible");
                } else {
                    if(currentControls === 'trending') trendingControls.start("hidden");
                    if(currentControls === 'matching') matchingControls.start("hidden");
                    if(currentControls === 'recommended') recommendedControls.start("hidden");
                }
            });
        }, {
            threshold: 0.5 // 요소의 50%가 보일 때 콜백 실행
        });
    
        if (trendingRef.current) observer.observe(trendingRef.current);
        if (matchingRef.current) observer.observe(matchingRef.current);
        if (recommendedRef.current) observer.observe(recommendedRef.current);
    
        return () => {
            if (trendingRef.current) observer.unobserve(trendingRef.current);
            if (matchingRef.current) observer.unobserve(matchingRef.current);
            if (recommendedRef.current) observer.unobserve(recommendedRef.current);
        };
    }, [trendingControls, matchingControls, recommendedControls]);    

    return (
        <div>
            <HomeHeader />
            <div className="home-screen" style={styles.container}>
                <div id="main-title" style={{ width: '100%', height: '100vh', backgroundImage: `url(${homeImg})`, backgroundRepeat: 'no-repeat'}}>
                    <div style={styles.mainText}>
                        기분좋은 여행의<br />첫 걸음, Traple 🏝️
                    </div>
                    <div style={styles.subText}>
                        AI가 짜주는 최적의 플랜부터 즐거운 여행 동반자까지 모두 Traple과 함께라면 순식간에
                    </div>
                    <div style={{marginTop:"48px", marginLeft:"980px"}}>
                        <img src={menuBox}/>
                    </div>
                    <div style={{marginTop:"-125px", marginLeft:"1080px"}}>
                        <button onClick={handleNext} style={styles.button}>AI Planner  바로 이용하기</button>
                    </div>
                
                    <div id="trending-planners" ref={trendingRef} data-controls="trending">
                        <motion.div 
                            initial="hidden" 
                            animate={trendingControls}
                            variants={sectionVariants}>
                            <TrendingPlanners />
                        </motion.div>
                    </div>
                    <div id="matching-planners" ref={matchingRef} data-controls="matching">                
                        <motion.div 
                            initial="hidden" 
                            animate={matchingControls}
                            variants={sectionVariants}>
                            <MatchingPlanners />
                        </motion.div>
                    </div>
                    <div id="recommended-packages" ref={recommendedRef} data-controls="recommended">
                        <motion.div 
                            initial="hidden" 
                            animate={recommendedControls}
                            variants={sectionVariants}>
                            <RecommnedPackages />
                        </motion.div>
                    </div>
                    <div>
                        <div>전체서비스     |     이용약관     |     개인정보처리방침     |     고객센터   </div>
                    </div>
                    <div>
                        {/* 기존 코드 생략 */}
                        <img src={alarmBtn} style={styles.alarmBtnStyle} alt="알람 버튼" onClick={handleChatClick}/>
                        {/* 여기서 handleChatClick는 채팅 이미지나 채팅 기능을 띄우는 함수입니다. */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
