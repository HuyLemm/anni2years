import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import ruleborder from '../../assets/images/homePage/preHomePage/ruleborder.png';
import sign from '../../assets/images/homePage/preHomePage/sign.png';
import frog from '../../assets/images/homePage/preHomePage/frog.png';

const PreHomePage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [startDoorClose, setStartDoorClose] = useState(false); // Trigger door closing animation
    const navigate = useNavigate();
  
    useEffect(() => {
      const intervals = [
        setTimeout(() => setCurrentStep(1), 1000),
        setTimeout(() => setCurrentStep(2), 3000),
        setTimeout(() => setCurrentStep(3), 5000),
        setTimeout(() => setCurrentStep(4), 7000),
        setTimeout(() => setCurrentStep(5), 9000),
        setTimeout(() => setCurrentStep(6), 11000),
        setTimeout(() => setCurrentStep(7), 13000),
        setTimeout(() => setStartDoorClose(true), 15000), // Start door closing animation
      ];
  
      return () => intervals.forEach(clearTimeout);
    }, []);
  
    useEffect(() => {
      if (startDoorClose) {
        setTimeout(() => {
          navigate('/homePage'); // Navigate after doors fully close
        }, 2000); // Adjust to match door close animation
      }
    }, [startDoorClose, navigate]);
  
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center text-pink-700">
        {/* Door closing effect */}
        {startDoorClose && (
          <>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '50%' }}
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
              initial={{ width: '0%' }}
              animate={{ width: '50%' }}
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

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: currentStep >= 1 ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ position: 'absolute', top: '5%', fontFamily: 'Boris', fontSize: '55px'}}
      >
        Luật chơi của xứ sở tình yêu
      </motion.div>

      {currentStep >= 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <img src={ruleborder} alt="ruleborder" style={{ width: '550px', position: 'absolute', top: '15%', zIndex: '0', left: '35.5%' }}></img>
          <p style={{ position: 'absolute', top: '25%', fontFamily: 'Boris', fontSize: '25px', marginTop: '20px', zIndex: '1', left: '40.5%' }}>
            1. Hãy hoàn thành các nhiệm vụ <br /> của trò chơi
          </p>
        </motion.div>
      )}

      {currentStep >= 3 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={{ position: 'absolute', top: '36%', fontFamily: 'Boris', fontSize: '25px', zIndex: '1' }}>
          2. Mở khóa những phần thưởng <br /> tương ứng của vùng đảo
        </motion.div>
      )}

      {currentStep >= 4 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={{ position: 'absolute', top: '44%', fontFamily: 'Boris', fontSize: '25px', marginTop: '20px', zIndex: '1' }}>
          3. Alvin chúc vợ yêu Paoiii ngày kỉ niệm <br /> hai năm thật vui vẻ nhooo
        </motion.div>
      )}

      {currentStep >= 5 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={{ position: 'absolute', top: '53%', fontFamily: 'Boris', fontSize: '25px', marginTop: '20px', zIndex: '1' }}>
          4. Bé yêu tận hưởng món quà nhỏ này <br /> của anh nhooo
        </motion.div>
      )}

      {currentStep >= 6 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={{ position: 'absolute', top: '63%', fontFamily: 'Boris', fontSize: '25px', marginTop: '20px', zIndex: '1' }}>
          5. Và lời cuối cùng làaa
        </motion.div>
      )}

      {currentStep >= 7 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <img src={frog} alt="frog" style={{ width: '170px', position: 'absolute', top: '70%', left: '46%' }}></img>
          <img src={sign} alt="sign" style={{ width: '150px', position: 'absolute', top: '83%', left: '55%' }}></img>
        </motion.div>
      )}
    </div>
  );
};

export default PreHomePage;
