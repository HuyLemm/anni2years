// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AudioManagerProvider } from "./components/AudioManager";
import Intro1 from "./pages/introPage/introPage1";
import Intro2 from "./pages/introPage/introPage2";
import Intro3 from "./pages/introPage/introPage3";
import Intro4 from "./pages/introPage/introPage4";
import LoadingBar from "./components/LoadingBar";
import PreHomePage from "./pages/homePage/preHomePage";
import HomePage from "./pages/homePage/homePage";
import Island1 from "./pages/islandPage/island1/island1";
import Island2 from "./pages/islandPage/island2/island2";
import Island3 from "./pages/islandPage/island3/island3";
import Island4 from "./pages/islandPage/island4/island4";
import Island5 from "./pages/islandPage/island5/island5";
import Island6 from "./pages/islandPage/island6/island6";

import Prize1 from "./pages/islandPage/island1/prize1";
import Prize2 from "./pages/islandPage/island2/prize2";
import Prize3 from "./pages/islandPage/island3/prize3";
import Prize4 from "./pages/islandPage/island4/prize4";
import Prize5 from "./pages/islandPage/island5/prize5";
import Prize6 from "./pages/islandPage/island6/prize6";

import Story1 from "./pages/islandPage/island1/story1";
import Story2 from "./pages/islandPage/island2/story2";
import Story3 from "./pages/islandPage/island3/story3";
import Story4 from "./pages/islandPage/island4/story4";
import Story5 from "./pages/islandPage/island5/story5";
import Story6 from "./pages/islandPage/island6/story6";

import TheEnd from "./pages/theend";

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

          <Route path="/prize1" element={<Prize1 />} />
          <Route path="/prize2" element={<Prize2 />} />
          <Route path="/prize3" element={<Prize3 />} />
          <Route path="/prize4" element={<Prize4 />} />
          <Route path="/prize5" element={<Prize5 />} />
          <Route path="/prize6" element={<Prize6 />} />

          <Route path="/story1" element={<Story1 />} />
          <Route path="/story2" element={<Story2 />} />
          <Route path="/story3" element={<Story3 />} />
          <Route path="/story4" element={<Story4 />} />
          <Route path="/story5" element={<Story5 />} />
          <Route path="/story6" element={<Story6 />} />

          <Route path="/theend" element={<TheEnd />} />
        </Routes>
      </Router>
    </AudioManagerProvider>
  );
}

export default App;
