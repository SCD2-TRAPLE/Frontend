// @ts-nocheck
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchContentProvider } from './Context';
import Main from './Main';
import PlaceSelect from './PlaceSelect';
import PlaceDetail from './PlaceDetail';
import ImageSlider from './ImageSlider';
import TravlePeriod from './TravlePeriod';
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
              <Route path="/placeSelect" element={<PlaceSelect />} />
              <Route path="/placeDetail" element={<PlaceDetail />} />
              <Route path="/travlePeriod" element={<TravlePeriod />} />
              <Route path="/companionSelect" element={<CompanionSelect />} />
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