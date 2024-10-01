import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import chatsave from '../../assets/images/introPage/introPage3/chatsave.png';
import borderstar from '../../assets/images/introPage/introPage3/borderstar.png';
import star from '../../assets/images/introPage/introPage3/star.png';
import notice from '../../assets/images/introPage/introPage3/notice.png';
import alvincaught from '../../assets/images/introPage/introPage3/alvincaught.png';

const Intro4 = () => {
  const [showFirstImages, setShowFirstImages] = useState(false);
  const [showSecondImages, setShowSecondImages] = useState(false);
  const [showStar, setShowStar] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Hiển thị alvincaught và notice sau 0 giây
    setTimeout(() => {
      setShowFirstImages(true);
    }, 1000);

    // Hiển thị borderstar và chatsave sau 2 giây
    setTimeout(() => {
      setShowSecondImages(true);
    }, 3500);

    // Hiển thị star sau 3 giây
    setTimeout(() => {
      setShowStar(true);
    }, 5500);
  }, []);

  return (
    <div className="h-screen flex items-center relative" style={{ overflow: 'hidden' }}>
      {/* Hiển thị alvincaught và notice sau 0 giây */}
      {showFirstImages && (
        <>
          <img
            src={alvincaught}
            alt="alvincaught"
            className="absolute center"
            style={{ top: '110px', left: '900px', width: '180px', zIndex: 5 }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            style={{ position: 'absolute', top: '-30px', left: '800px', width: '500px', zIndex: 3 }}
          >
            <img src={notice} alt="notice" style={{ width: '100%' }} />
            <p className="absolute text-center text-pink-700 ml-16" style={{ top: '454px', fontFamily: 'TAN', fontSize: '30px' }}>
              Hots
            </p>
            <p className="absolute text-center text-pink-700 ml-24" style={{ top: '477px', fontFamily: 'TAN', fontSize: '24px' }}>
              Alvin vượt đèn đỏ <br /> đã bị Pikachu tóm gọn🥶
            </p>
          </motion.div>
        </>
      )}

      {/* Hiển thị borderstar và chatsave sau 2 giây */}
      {showSecondImages && (
        <>
          <img
            src={borderstar}
            alt="borderstar"
            className="absolute center"
            style={{ top: '450px', left: '700px', width: '150px', zIndex: 1 }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            style={{ position: 'absolute', top: '470px', left: '790px', width: '450px', zIndex: 3 }}
          >
            <img src={chatsave} alt="chatsave" style={{ width: '100%' }} />
            <p className="absolute text-center text-pink-700 ml-24" style={{ top: '165px', fontFamily: 'Boris', fontSize: '21px' }}>
              Paoi mún cứu Alvin <br /> thì hãy dùng ngôi sao <br /> hi vọng phía dưới nhooo😉
            </p>
          </motion.div>
        </>
      )}

      {/* Hiển thị star sau 3 giây */}
      {showStar && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            style={{ position: 'absolute', top: '700px', left: '940px', width: '130px', zIndex: 10, cursor: 'pointer' }}
            onClick={() => navigate('/intro3')}
          >
            <img src={star} alt="star" style={{ width: '100%' }} />
        </motion.div>
        
      )}
    </div>
  );
};

export default Intro4;
