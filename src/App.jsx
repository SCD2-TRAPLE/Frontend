// @ts-nocheck
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchContentProvider } from './Context';
import Main from './Main';
import PlaceSelect from './PlaceSelect';
import Header from './Header';
function App() {
  return (
    <>
      <SearchContentProvider>
        <div>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/placeSelect" element={<PlaceSelect />} />
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