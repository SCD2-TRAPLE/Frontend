//@ts-nocheck
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/placeSelectDetail/style";
import Header from './Header';
import ImageSlider from "./ImageSlider";
import photo1 from "./photo1.svg";
import photo2 from "./photo2.svg";
import photo3 from "./photo3.svg";
function PlaceSelect() {
    const navigate = useNavigate();
    const photos = [photo1,photo2,photo3,photo1];
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

                <div>
                    <ImageSlider photos={photos}></ImageSlider>
                </div>
            </div>
        </div>
    );
}
export default PlaceSelect;

