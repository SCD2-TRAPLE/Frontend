//@ts-nocheck
import React from "react";
import { styles } from "./components/placeSelectDetail/style";
import Header from './Header';
function PlaceSelect() {
    return(
        <div>
            <Header/>
            <div style={styles.container}>
                <div>
                    <h1 style={styles.title}>가고 싶은, 관심 있는<br />여행지를 선택해주세요 !</h1>
                </div>
                {/* <div style={styles.box}>
                    <div style={styles.regionBox}>
                        서울
                    </div>
                </div> */}
                 <div style={styles.box}>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <button key={index} style={styles.regionBox}>
                            지역 {index + 1}
                        </button>
                    ))}
                </div>
                <div>
                    사진 스크롤링 될 레이아웃
                </div>
            </div>
        </div>
        );
}
export default PlaceSelect;