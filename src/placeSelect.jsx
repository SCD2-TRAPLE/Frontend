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
                <div>
                    
                </div>
            </div>
        </div>
        );
}
export default PlaceSelect;