//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/placeSelectDetail/style";
import Header from './Header';
import ImageSlider from "./ImageSlider";
import line from "./Line 9.svg";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import pd9 from "./pd9.svg";
import pd10 from "./pd10.svg";
import pd11 from "./pd11.svg";
import pd12 from "./pd12.svg";
import pd13 from "./pd13.svg";

function PlaceSelect() {
    const navigate = useNavigate();
    const commonPhotos = [pd9, pd10, pd11, pd12, pd13, pd9, pd10, pd11, pd12, pd13, pd9, pd10, pd11, pd12, pd13, pd9, pd10, pd11, pd12, pd13];
    const regionBox = [
        "전체", "광명", "군포", "부천", "성남", "수원", "시흥", "안산", "안성", "안양", "양평", "여주", "오산", "용인", "의왕", "이천", "평택", "하남", "화성", "과천"
    ];
    const [currentStep, setCurrentStep] = useState(1); // 현재 단계 상태 추가
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [clickedIndex, setClickedIndex] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null); 

    const handleRegionClick = (region, index) => {
        if (clickedIndex.includes(index)) {
            const newClickedIndex = clickedIndex.filter(i => i !== index);
            setClickedIndex(newClickedIndex);
            if (newClickedIndex.length === 0) {
                setSelectedRegion(null);
            }
        } else {
            setClickedIndex([...clickedIndex, index]);
            setSelectedRegion(region);
        }
    };

    const handleNext = () => {
        if (clickedIndex.length > 0) {
            navigate("/travlePeriod");
        }
    };

    return (
        <div>
            <Header currentStep={currentStep}/>
            <div style={styles.container2}>
                <div style={{display:"flex"}}>
                    <h1 style={styles.title}>경기도 <span style={{
                          color: "#949494",
                          fontFamily: "Inter",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "normal",
                          marginTop:"18px",
                          marginLeft:"50px"
                    }}>※ 여행할 도시를 선택하세요! (다중 선택 가능, 취소하려면 다시 클릭)</span></h1>
                </div>

                <div style={styles.box}>
                    {regionBox.map((region, index) => (
                        <button key={index}
                            style={{
                                ...styles.regionBox,
                                backgroundColor: hoveredIndex === index || clickedIndex.includes(index) ? '#337FED' : 'initial',
                                color: hoveredIndex === index || clickedIndex.includes(index) ? '#FFFFFF' : '#337FED',
                                fontWeight: hoveredIndex === index || clickedIndex.includes(index) ? '700' : '400',
                                boxShadow: hoveredIndex === index || clickedIndex.includes(index) ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" : 'initial'
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => handleRegionClick(region, index)}>
                            {region}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginLeft: "94px"}}>
                    <h5 style={{ color: "#67A4FD", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal"}}>
                        가볍게 둘러보기
                    </h5>
                    <img src={line} style={{ marginLeft: "5px" }} alt="line"></img>
                    <img src={icon1} style={{ marginLeft: "5px" }} alt="icon1"></img>
                    <img src={icon2} style={{ marginLeft: "5px" }} alt="icon2"></img>
                </div>
                <ImageSlider photos={commonPhotos}></ImageSlider>
                <div style={{marginLeft:"770px", padding:"20px"}}>
                    <button 
                        onClick={handleNext} 
                        style={{
                            ...styles.nextBtn,
                            backgroundColor: clickedIndex.length > 0 ? '#337FED' : '#D3D3D3',
                            cursor: clickedIndex.length > 0 ? 'pointer' : 'not-allowed'
                        }}
                        disabled={clickedIndex.length === 0}
                    >
                        다음
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlaceSelect;

