import React from 'react';
import './Communitycard.css'; 
import img1 from './img1.svg';
import img2 from './img2.svg';
import img3 from './img3.svg';
import img4 from './img4.svg';

function Card({ image, description, profileImage, profileName, subProfileName, profileColor }) {
    return (
      <div className="card">
        <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="profile">
          <div className="profile-image-circle" style={{ backgroundColor: profileColor }}></div>
          <div>
            <div className="profile-name">{profileName}</div>
            <div className="subprofile-name">{subProfileName}</div>
          </div>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    );
}

export default function CommunityCard() {
  const cards = [
    {
      image: img1,
      description: '대전여행 빵지순례...',
      profileImage: 'path/to/profile1.jpg',
      profileName: 'DANMOOJI',
      subProfileName: '@soeun2yam',
      profileColor: '#933FFD'
    },
    {
      image: img2,
      description: '대전 5월 가볼만한 곳 들의공원',
      profileImage: 'path/to/profile2.jpg',
      profileName: 'DDASICKGUITAR',
      subProfileName: '@5.uyeon.2',
      profileColor: '#3E8259'
    },
    {
      image: img3,
      description: '대전 당일치기 코스',
      profileImage: 'path/to/profile3.jpg',
      profileName: 'YOUNGEE',
      subProfileName: '@sy_eo31',
      profileColor: '#F9C7F4'
    },
    {
      image: img4,
      description: '[대전] 뚜벅이 혼자 여행',
      profileImage: 'path/to/profile4.jpg',
      profileName: 'DANGEUN',
      subProfileName: '@xiuunio',
      profileColor: '#6FCBFF' 
    },

    {
      image: img1,
      description: '새로운 여행 경험...',
      profileImage: 'path/to/profile5.jpg',
      profileName: 'ADVENTURER',
      subProfileName: '@adventure_king',
      profileColor: '#FF8C42'
    },
    
    {
      image: img2,
      description: '식도락 여행의 즐거움',
      profileImage: 'path/to/profile6.jpg',
      profileName: 'FOODIE',
      subProfileName: '@food_lover',
      profileColor: '#FFE93B' 
    },
    {
      image: img3,
      description: '자연 속 힐링 여행',
      profileImage: 'path/to/profile7.jpg',
      profileName: 'NATURE_LOVER',
      subProfileName: '@nature_zen',
      profileColor: '#59CD90' 
    },
    {
      image: img4,
      description: '도시 속 문화 여행',
      profileImage: 'path/to/profile8.jpg',
      profileName: 'CULTURE_EXPLORER',
      subProfileName: '@culture_geek',
      profileColor: '#FA4659'
    },
  ];

  return (
    <div className="community-card">
      <div className="band">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
