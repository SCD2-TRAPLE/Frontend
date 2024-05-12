//@ts-nocheck
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/placeSelectDetail/style";
import Header from './Header';
import line from "./Line.svg";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
function PlaceDetail() {
    const navigate = useNavigate();
    const regions = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원']; // 일단 임시적으로 지역명 배열
    const [hoveredIndex, setHoveredIndex] = useState(null); // 호버된 버튼의 인덱스를 저장

    const Btn = (region) => {
      navigate(`/${region}`); // 해당 지역 페이지로 이동
    };

    return(
        <div>
            <Header/>
            <div style={styles.container}>
                <div>
                    <h1 style={styles.title}>가고 싶은, 관심 있는<br />여행지를 선택해주세요 !</h1>
                </div>

                 <div style={styles.box}>
                    {regions.map((region, index) => (
                        <button key={index} 
                                style={{...styles.regionBox, 
                                    backgroundColor: hoveredIndex === index ? '#F3887A' : 'initial', 
                                    color: hoveredIndex === index ? '#FFFFFF' : '#F3887A',
                                    boxShadow: hoveredIndex === index ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" : 'initial'
                                    }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => Btn(region)}>
                            {region}
                        </button>
                    ))}
                </div>  

                <div style={{ display: 'flex', alignItems: 'center', marginLeft: "94px", marginTop: '20px' }}>
                    <h5 style={{ color: "#E87169", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: "700", lineHeight: "normal", margin: '0px' }}>
                        가볍게 둘러보기
                    </h5>
                    <img src={line} style={{ marginLeft: "5px" }} alt="line"></img>
                    <img src={icon1} style={{ marginLeft: "5px" }} alt="icon1"></img>
                    <img src={icon2} style={{ marginLeft: "5px" }} alt="icon2"></img>
                </div>

                <div>
                    이미지
                </div>
            </div>
        </div>
    );
}
export default PlaceDetail;