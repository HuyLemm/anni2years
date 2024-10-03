// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AudioManagerProvider } from './components/AudioManager';
import Intro1 from './pages/introPage/introPage1';
import Intro2 from './pages/introPage/introPage2';
import Intro3 from './pages/introPage/introPage3';
import Intro4 from './pages/introPage/introPage4';
import LoadingBar from './components/LoadingBar';

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
        </Routes>
      </Router>
    </AudioManagerProvider>
  );
}

export default App;
