import profile1 from './p1.svg';
import React from 'react';
import defaultProfileImg from './basic.svg';
import otherProfileImg from './p1.svg'; //사진보관함에서 선택한 다른 사진들 불러오기 (임의로 other이라고 지정해둠)
// import { styles } from './components/loginDetail/style';
import { useState } from 'react';

function DropMPro({ onProfileChange }) {
  const [imgitems, setImgItems] = useState([
    profile1
  ]); //기본 프로필 이미지 배열
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDefaultProfileClick = () => {
    const randomIndex = Math.floor(Math.random() * imgitems.length);
    const newProfileImg = imgitems[randomIndex];
    onProfileChange(newProfileImg);
  };

  return (
    <div className="dropprofile" style={{ position:"relative", top:"-9px", left:"100px"}}> {/* 모달 창에 테두리와 패딩 추가 */}
      <div>
        <div
          style={{
            border: '1px solid #000',
            background:"white",
            marginTop: '-20px',
            marginLeft:"150px",
            marginBottom:"0px",
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <ul style={{ padding: 0, listStyleType: 'none' }}> {/* <ul> 태그에 list-style-type 추가하여 마커 없앰 */}
            <li
              style={{
                marginTop: '15px',
                color: '#000',
                fontFamily: 'Pretendard',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                cursor: 'pointer',
                paddingBottom: '2px',
                listStyleType: 'none', // <li> 태그의 마커 없애기
              }}
              onClick={handleDefaultProfileClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              기본프로필
            </li>
  
            <li
              style={{
                marginTop: '20px',
                color: '#000',
                fontFamily: 'Pretendard',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                cursor: 'pointer',
                listStyleType: 'none', // <li> 태그의 마커 없애기
              }}
              onClick={() => onProfileChange(otherProfileImg)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              사진보관함
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  
}
export default DropMPro;