import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import racing from '../assets/images/intro2/racing.png';
import road from '../assets/images/intro2/road.png';
import ankwypolice from '../assets/images/intro2/ankwypolice.png';
import police from '../assets/images/intro2/police.png';
import greenlight from '../assets/images/intro2/greenlight.png';
import redlight from '../assets/images/intro2/redlight.png';
import motor from '../assets/images/intro2/motor.png';
import motorpolice from '../assets/images/intro2/motorpolice.png';
import square from '../assets/images/intro2/square.png';


const Intro2 = () => {
  const [light, setLight] = useState('green'); 
  const [carPosition, setCarPosition] = useState('start'); 
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLight('red');
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="h-screen flex items-center  relative" style={{ overflow: 'hidden' }}>
      {/* Road Image */}
      <img
        src={road}
        alt="Road"
        className="absolute center"
        style={{
          left: '-530px',
          width: '1500px', 
          zIndex: 1,
        }}
      />

      <img
        src={road}
        alt="Road"
        className="absolute center"
        style={{
          right: '-510px',
          width: '1500px', 
          zIndex: 1,
        }}
      />

      <img
        src={road}
        alt="Road"
        className="absolute center"
        style={{
          transform: 'rotate(90deg)',
          left: '130px',
          width: '1500px', 
          zIndex: 1,
        }}
      />

      <img
        src={square}
        alt="square"
        className="absolute center"
        style={{
          left:'800px',
          width: '200px', 
          zIndex: 1,
        }}
      />

      {/* Racing Image */}
      <motion.img
        src={racing}
        alt="Racing"
        className="absolute"
        initial={{ x: '-100px' }} 
        animate={{
          x: 600,
        }}
        transition={{
          duration: 4, 
          ease: 'easeInOut', 
        }}
        onAnimationComplete={() => setCarPosition('nearLight')} 
        style={{
          top: '350px',
          width: '150px',
          zIndex: 2,
        }}
      />

      {/* Police Image */}
      <img
        src={police}
        alt="police "
        className="absolute"
        style={{
          top: '250px',
          right: '880px', 
          width: '50px', 
          zIndex: 2,
        }}
      />

      <img
        src={ankwypolice}
        alt="police "
        className="absolute"
        style={{
          top: '240px',
          right: '880px', 
          width: '65px', 
          zIndex: 1,
        }}
      />
      {/* Motor Image */}
      <img
        src={motor}
        alt="motor "
        className="absolute"
        style={{
          top: '280px',
          right: '760px', 
          width: '120px', 
          zIndex: 1,
        }}
      />

      <img
        src={motorpolice}
        alt="motorpolice"
        className="absolute"
        style={{
          top: '330px',
          right: '820px', 
          width: '150px', 
          zIndex: 1,
        }}
      />

      {/* Light Image */}
      {light === 'green' ? (
        <img
          src={greenlight}
          alt="Green Light"
          className="absolute"
          style={{
            top: '220px',
            left: '750px',
            width: '65px',
            zIndex: 1,
          }}
        />
      ) : (
        <img
          src={redlight}
          alt="Red Light"
          className="absolute"
          style={{
            top: '220px',
            left: '750px',
            width: '65px',
            zIndex: 1,
          }}
        />
      )}


    </div>

    
  );
};

export default Intro2;
