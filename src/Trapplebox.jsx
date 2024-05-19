//@ts-nocheck
import React from 'react';
import traple from "./traple.svg";
import searchIcon from "./searchIcon.svg";
import dayselectButton from "./dayselectButton.svg";

export default function Trapplebox() {
  return (
    <div className="trapplebox">
        <img src={traple} alt="traple" className="traple"/>
        <p className="text"> > 다른 사용자들의 여행 기록을 구경하고 나의 여행 기록을 뽐내보세요! </p>
        <div className="dayselect">
            <p className="dayselectText">도시/여행 시기 선택</p>
            <div className="dayselectButton"><img src={dayselectButton} alt="dayselectButton" className="dayselectButton"/></div>
        </div>
        <div className="searchBox">
            <img src={searchIcon} alt="searchIcon" className="searchIcon"/>
            <p className="searchText">검색할 내용을 입력해주세요.</p>
            <div className="searchButton">
                <p className="searchButtonText">Search</p>
            </div>
        </div>
    </div>
  );
}
