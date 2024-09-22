// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </Router>
  );
}

export default App;
