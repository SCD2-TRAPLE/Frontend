// @ts-nocheck
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchContentProvider } from './Context';
import Main from './Main';
import PlaceSelect from './PlaceSelect';
import PlaceSelectMain from './PlaceSelectMain';
import PlaceDetail from './PlaceDetail';
import PlaceDetail2 from './PlaceDetail2';
import ImageSlider from './ImageSlider';
import TravlePeriod from './TravlePeriod';
import PlannerVehicle from './PlannerVehicle';
import CompanionSelect from './CompanionSelect';
import Concept from './Concept';
import Communitycard from './Communitycard';
import Trapplebox from './Trapplebox';
import Travlog from './Travlog';
import VlogDetail from './VlogDetail';
import Login from './Login';
import Nickname from './Nickname';
import Profile from './Profile';
import Auth from './Auth';
function App() {
  return (
    <>
      <SearchContentProvider>
        <div>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/main" element={<Main />} />
              <Route path="/nickname" element={<Nickname />} />
              <Route path="/profile" element={<Profile />} />
              {/* 지도있는 메인 플래너 설문시작 */}
              <Route path="/placeSelect-main" element={<PlaceSelectMain />} /> 
              {/* 강원도 */}
              <Route path="/placeDetail-do" element={<PlaceDetail />} />
              {/* 포천 */}
              <Route path="/placeDetail-si" element={<PlaceDetail2 />} />
              {/* 목록으로보기 */}
              <Route path="/placeSelect" element={<PlaceSelect />} />
              <Route path="/travlePeriod" element={<TravlePeriod />} />
              <Route path="/companionSelect" element={<CompanionSelect />} />
              {/* 이동방법 선택 */}
              <Route path="/vehicleSelect" element={<PlannerVehicle />} />
              <Route path="/concept" element={<Concept />} />
              <Route path="/travlog" element={<Travlog />} />
              <Route path="/vlogDetail" element={<VlogDetail />} />
              <Route path="/auth/kakao/login" element={<Auth />} />
              <Route path="*" element={<Nickname />} />
            </Routes>
          </BrowserRouter>
        </div>
      </SearchContentProvider>
    </>
  );
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js', { type: 'text/javascript' })
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

export default App;