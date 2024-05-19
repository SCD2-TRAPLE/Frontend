import React from 'react';
import logo from './logo.svg'; 

export default function Header2() {
  return (
    <div>
      <img src={logo} alt="logo" className="logo"/>
      <nav>
        <ul>
          <li className="menu1">플래너</li>
          <li className="menu2">여행정보</li>
          <li className="community">커뮤니티</li>
          <li className="menu4">나의일정</li>
          <li className="menu5">패키지</li>
        </ul>
      </nav>
    </div>
  );
}
