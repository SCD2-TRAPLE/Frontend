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
    const commonPhotos = [pd9, pd10, pd11, pd12, pd13, pd9, pd10, pd11, pd12, pd13, pd9, pd10, pd11, pd12, pd13];
    const regionBox = [
        "전체", "광명", "군포", "부천", "성남", "수원", "시흥", "안산", "안성", "안양", "양평", "여주", "오산", "용인", "의왕", "이천", "평택", "하남", "화성", "과천"
    ];
    const handleRegionClick = (region, index) => {
        if (clickedIndex.includes(index)) {
            // 이미 선택된 지역을 다시 클릭한 경우, 선택 해제
            const newClickedIndex = clickedIndex.filter(i => i !== index);
            setClickedIndex(newClickedIndex);
            
            // 선택 해제 후 선택된 지역이 없다면, selectedRegion을 null로 설정
            if (newClickedIndex.length === 0) {
                setSelectedRegion(null);
            }
        } else {
            // 지역을 처음 클릭한 경우, 해당 지역을 선택 상태로 설정
            setClickedIndex([...clickedIndex, index]);
            setSelectedRegion(region);
            }
    };
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [clickedIndex, setClickedIndex] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null); 
    const [hoveredPhotoIndex, setHoveredPhotoIndex] = useState(null); 
    const [currentStep, setCurrentStep] = useState(1); // 현재 단계 상태 추가

    const handleNext = () => {
        navigate("/travlePeriod"); //다음 페이지로 이동
    };

    return (
        <div>
            <Header />
            <div style={styles.container2}>
                <div style={{display:"flex"}}>
                    <h1 style={styles.title}>경기도 <span style={{
                          color: "#949494", // CSS 변수 대신 기본값 사용
                          fontFamily: "Inter",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "normal",
                          marginLeft:"50px,",
                          marginTop:"18px"
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

                {!selectedRegion && (
                    <>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "94px", marginTop: '20px' }}>
                            <h5 style={{ color: "#67A4FD", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", margin: '0px' }}>
                                가볍게 둘러보기
                            </h5>
                            <img src={line} style={{ marginLeft: "5px" }} alt="line"></img>
                            <img src={icon1} style={{ marginLeft: "5px" }} alt="icon1"></img>
                            <img src={icon2} style={{ marginLeft: "5px" }} alt="icon2"></img>
                        </div>
                        <ImageSlider photos={commonPhotos}></ImageSlider>
                        <div>
                            <button onClick={handleNext} style={styles.nextBtn}>다음</button>
                        </div>
                    </>
                )}
                {/* {selectedRegion && (
                    <>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "94px", marginTop: '20px' }}>
                            <h5 style={{ color: "#E87169", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", margin: '0px' }}>
                                가볍게 둘러보기
                            </h5>
                            <img src={line} style={{ marginLeft: "5px" }} alt="line"></img>
                            <img src={icon1} style={{ marginLeft: "5px" }} alt="icon1"></img>
                            <img src={icon2} style={{ marginLeft: "5px" }} alt="icon2"></img>
                        </div>

                        <div>
                            {commonPhotos.map((photo, index) => (
                                <img key={index} src={photo}
                                    style={{ margin: "20px 25px 0px 25px" }}
                                    alt="region"
                                    onMouseEnter={() => setHoveredPhotoIndex(index)} // 마우스를 올렸을 때
                                    onMouseLeave={() => setHoveredPhotoIndex(null)} // 마우스를 뗐을 때
                                />
                            ))}
                        </div>
                        <div>
                            <button onClick={handleNext} style={styles.nextBtn}>다음</button>
                        </div>
                    </>
                )} */}
            </div>
        </div>
    );
}

export default PlaceSelect;
