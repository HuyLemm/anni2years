import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import rabbit from '../assets/images/components/rabbit.png';
import borderloading from '../assets/images/components/borderloading.png';
import teddy from '../assets/images/components/teddy.png';
import rose from '../assets/images/components/rose.png';
import present from '../assets/images/components/present.png';
import bottle from '../assets/images/components/bottle.png';
import ring from  '../assets/images/components/ring.png';
import letter from '../assets/images/components/letter.png';
import love from '../assets/images/components/love.png';


const LoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const [showMotion, setShowMotion] = useState(false); // State to control motion animation after 2 seconds
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 5; // Increment by 5 pixels
        if (newProgress >= 500) { // Stop at 500 pixels (100%)
          clearInterval(interval);
          navigate('/homePage'); // Navigate to homePage after loading completes
        }
        return newProgress;
      });
    }, 1000); // Increase progress every 1 second (1000ms)

    // Delay the motion div animation by 2 seconds after navigating to the page
    const motionTimeout = setTimeout(() => {
      setShowMotion(true); // Show the motion div after 2 seconds
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(motionTimeout);
    };
  }, [navigate]);

  const percentage = Math.min(Math.round((progress / 500) * 100), 100); // Calculate percentage

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{top: '50px', width: '500px', height: '20px', backgroundColor: '#ddd', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
        {/* Loading progress bar */}
        <div style={{ height: '100%', backgroundColor: '#F0A8D0', width: `${progress}px`, transition: 'width 1s ease-in-out' }} />
      </div>
      {/* Percentage text below the bar */}
      <div style={{position: 'absolute', top: '540px', fontFamily: 'Boris', fontSize: '20px', color: '#333' }}>
        Loading...{percentage}%  
      </div>
      {/* Rabbit image outside the bar */}
      <img 
        src={rabbit} 
        alt="Rabbit" 
        style={{ position: 'absolute', top: '430px', left: `${690 + progress}px`, zIndex: 10, width: '70px', transition: 'left 1s ease-in-out' }} 
      />

      {/* Border and message motion div with a 2-second delay */}
      {showMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{ position: 'absolute', top: '-95px', left: '680px', width: '550px', zIndex: 3 }}
        >
          <img src={borderloading} alt="borderloading" style={{ width: '100%' }} />
          <p className="absolute text-center text-pink-700 ml-40" style={{ top: '195px', fontFamily: 'Boris', fontSize: '21px' }}>
            Bé yêu chờ chút nhooo🧡 <br/> Bắt lấy tình yêu của chồng <br/> để nhanh hơn nèee!😉
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default LoadingBar;
