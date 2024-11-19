// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AudioManagerProvider } from './components/AudioManager';
import Intro1 from './pages/introPage/introPage1';
import Intro2 from './pages/introPage/introPage2';
import Intro3 from './pages/introPage/introPage3';
import Intro4 from './pages/introPage/introPage4';
import LoadingBar from './components/LoadingBar';
import PreHomePage from './pages/homePage/preHomePage';
import HomePage from './pages/homePage/homePage';
import Island1 from './pages/islandPage/island1/island1';
import Island2 from './pages/islandPage/island2/island2';
import Island3 from './pages/islandPage/island3/island3';
import Island4 from './pages/islandPage/island4/island4';
import Island5 from './pages/islandPage/island5';
import Island6 from './pages/islandPage/island6';

function App() {
  return (
    <AudioManagerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Intro1 />} />
          <Route path="/intro2" element={<Intro2 />} />
          <Route path="/intro3" element={<Intro3 />} />
          <Route path="/intro4" element={<Intro4 />} />
          <Route path="/loading" element={<LoadingBar />} />
          <Route path="/preHomePage" element={<PreHomePage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/island1" element={<Island1 />} />
          <Route path="/island2" element={<Island2 />} />
          <Route path="/island3" element={<Island3 />} />
          <Route path="/island4" element={<Island4 />} />
          <Route path="/island5" element={<Island5 />} />
          <Route path="/island6" element={<Island6 />} />
        </Routes>
      </Router>
    </AudioManagerProvider>
  );
}

export default App;
