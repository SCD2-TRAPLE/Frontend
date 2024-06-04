//지도 넣을 placeSelect
//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/placeSelectDetail/style";
import Header from './Header';
import ImageSlider from "./ImageSlider";
import photo1 from "./photo1.svg";
import photo2 from "./photo2.svg";
import photo3 from "./photo3.svg";
import s1 from "./s1.svg";
import s2 from "./s2.svg";
import s3 from "./s3.svg";
import b1 from "./b1.svg";
import b2 from "./b2.svg";
import b3 from "./b3.svg";
import line from "./Line.svg";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";

const regionInfo = {
    '서울': { photos: [s1, s2, s3], description: ["서울의 아름다운 야경을 경험하세요.","서울의 아름다운 문화를 경험하세요.","서울의 자랑 한강을 담아가세요."] },
    '부산': { photos: [b1, b2, b3], description: ["부산의 맛있는 음식과 해운대를 즐겨보세요.","부산의 맛있는 음식과 해운대를 즐겨보세요.","부산의 맛있는 음식과 해운대를 즐겨보세요."] },
    '대구' : { photos: [], description: ""},
    '인천' : { photos: [], description: ""},
    '광주' : { photos: [], description: ""},
    '대전' : { photos: [], description: ""},
    '울산' : { photos: [], description: ""},
    '세종' : { photos: [], description: ""},
    '경기' : { photos: [], description: ""},
    '강원' : { photos: [], description:""}
};

function PlaceSelect() {
    const navigate = useNavigate();
    const commonPhotos = [photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2, photo3];
    const regions = Object.keys(regionInfo);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [hoveredPhotoIndex, setHoveredPhotoIndex] = useState(null); 
    const [currentStep, setCurrentStep] = useState(1); // 현재 단계 상태 추가
    const handleRegionClick = (region, index) => {
        if (selectedRegion === region) {
            setSelectedRegion(null);
            setClickedIndex(null);
        } else {
            setSelectedRegion(region);
            setClickedIndex(index);
        }
    };

    const handleNext = () => {
        navigate("/travlePeriod"); //다음 페이지로 이동
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
                                    backgroundColor: hoveredIndex === index || clickedIndex === index ? '#F3887A' : 'initial', 
                                    color: hoveredIndex === index || clickedIndex === index ? '#FFFFFF' : '#F3887A',
                                    fontWeight: hoveredIndex === index || clickedIndex === index ? '700' : '400',
                                    boxShadow: hoveredIndex === index || clickedIndex === index ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" : 'initial'
                                    }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => handleRegionClick(region, index)}>
                            {region}
                        </button>
                    ))}
                </div>  

                {!selectedRegion && (
                    <ImageSlider photos={commonPhotos}></ImageSlider>
                )}

                {selectedRegion && (
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
                        {regionInfo[selectedRegion].photos.map((photo, index) => (
                            <img key={index} src={photo} 
                                 style={{margin:"20px 25px 0px 25px"}} 
                                 alt="region"
                                 onMouseEnter={() => setHoveredPhotoIndex(index)} // 마우스를 올렸을 때
                                 onMouseLeave={() => setHoveredPhotoIndex(null)} // 마우스를 뗐을 때
                            ></img>
                        ))}
                        {hoveredPhotoIndex !== null && (
                            <div style={styles.infoBox}>
                                {regionInfo[selectedRegion].description}
                            </div>
                        )}
                    </div>
                    <div>
                        <button onClick={handleNext} style={styles.nextBtn}>다음</button>
                    </div>
                </>
                )}
            </div>
        </div>
    );
}
export default PlaceSelect;