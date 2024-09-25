// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Intro2 from './pages/Intro2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/intro2" element={<Intro2 />} />
      </Routes>
    </Router>
  );
}

export default App;
