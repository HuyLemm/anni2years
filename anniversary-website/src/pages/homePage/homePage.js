import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import home from '../../assets/images/homePage/homePage/home.jpg';

const HomePage = () => {

  return (
    <div className="h-screen flex items-center justify-center">
      {/* Door opening effect */}
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

      {/* Home Content: Show only after the door fully opens */}
        <img src={home} alt="home" style={{ width: '100px' }} />
    </div>
  );
};

export default HomePage;
