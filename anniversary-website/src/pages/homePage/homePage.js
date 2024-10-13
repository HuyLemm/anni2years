import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import gapgo from '../../assets/images/homePage/homePage/gapgo.png';
import anni from '../../assets/images/homePage/homePage/anni.png';
import twoyears from '../../assets/images/homePage/homePage/twoyears.png';
import tuonglai from '../../assets/images/homePage/homePage/tuonglai.png';
import tamthiepcuoi from '../../assets/images/homePage/homePage/tamthiepcuoi.png';
import loinhangui from '../../assets/images/homePage/homePage/loinhangui.png';

const HomePage = () => {
  const navigate = useNavigate();
  const [unlockedIslands, setUnlockedIslands] = useState({
    island1: true,
    island2: false,
    island3: false,
    island4: false,
    island5: false,
    island6: false,
  });
  const [showDoorEffect, setShowDoorEffect] = useState(false);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('unlockedIslands')) || {};
    setUnlockedIslands({ ...unlockedIslands, ...savedState });

    // Check if coming from PreHomePage to trigger the door opening effect
    if (localStorage.getItem('fromPreHomePage')) {
      setShowDoorEffect(true);
      localStorage.removeItem('fromPreHomePage');  // Remove the flag once the effect is triggered
    }
  }, []);

  const handleIslandClick = (island, nextIsland) => {
    navigate(`/${island}`);
    const updatedIslands = { ...unlockedIslands, [nextIsland]: true };
    localStorage.setItem('unlockedIslands', JSON.stringify(updatedIslands));
  };

  return (
    <div className="h-screen flex items-center justify-center">
      {/* Door opening effect: Only show when coming from PreHomePage */}
      {showDoorEffect && (
        <>
          <motion.div
            initial={{ width: '50%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              backgroundColor: '#333',
              zIndex: 10,
            }}
          />
          <motion.div
            initial={{ width: '50%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: '100%',
              backgroundColor: '#333',
              zIndex: 10,
            }}
          />
        </>
      )}


      {/* Câu chuyện gặp gỡ */}
      <img
        src={gapgo}
        alt="gapgo"
        onClick={() => unlockedIslands.island1 && handleIslandClick('island1', 'island2')}
        style={{
          position: 'absolute',
          top: 400,
          left: 100,
          width: '200px',
          opacity: unlockedIslands.island1 ? 1 : 0.5,
          cursor: unlockedIslands.island1 ? 'pointer' : 'not-allowed',
        }}
      />
      {/* Kỷ niệm ngày 17/12/2022 */}
      <img
        src={anni}
        alt="anni"
        onClick={() => unlockedIslands.island2 && handleIslandClick('island2', 'island3')}
        style={{
          position: 'absolute',
          top: 400,
          left: 400,
          width: '200px',
          opacity: unlockedIslands.island2 ? 1 : 0.5,
          cursor: unlockedIslands.island2 ? 'pointer' : 'not-allowed',
        }}
      />
      {/* Timeline 2 năm yêu nhau */}
      <img
        src={twoyears}
        alt="twoyears"
        onClick={() => unlockedIslands.island3 && handleIslandClick('island3', 'island4')}
        style={{
          position: 'absolute',
          top: 400,
          left: 700,
          width: '200px',
          opacity: unlockedIslands.island3 ? 1 : 0.5,
          cursor: unlockedIslands.island3 ? 'pointer' : 'not-allowed',
        }}
      />
      {/* Dự đoán tương lai */}
      <img
        src={tuonglai}
        alt="tuonglai"
        onClick={() => unlockedIslands.island4 && handleIslandClick('island4', 'island5')}
        style={{
          position: 'absolute',
          top: 400,
          left: 1000,
          width: '200px',
          opacity: unlockedIslands.island4 ? 1 : 0.5,
          cursor: unlockedIslands.island4 ? 'pointer' : 'not-allowed',
        }}
      />
      {/* Tấm thiệp cuối cùng */}
      <img
        src={tamthiepcuoi}
        alt="tamthiepcuoi"
        onClick={() => unlockedIslands.island5 && handleIslandClick('island5', 'island6')}
        style={{
          position: 'absolute',
          top: 400,
          left: 1300,
          width: '200px',
          opacity: unlockedIslands.island5 ? 1 : 0.5,
          cursor: unlockedIslands.island5 ? 'pointer' : 'not-allowed',
        }}
      />
      {/* Lời nhắn gửi cua Paoi */}
      <img
        src={loinhangui}
        alt="loinhangui"
        onClick={() => unlockedIslands.island6 && handleIslandClick('island6', '')}
        style={{
          position: 'absolute',
          top: 400,
          left: 1600,
          width: '200px',
          opacity: unlockedIslands.island6 ? 1 : 0.5,
          cursor: unlockedIslands.island6 ? 'pointer' : 'not-allowed',
        }}
      />
    </div>
  );
};

export default HomePage;
