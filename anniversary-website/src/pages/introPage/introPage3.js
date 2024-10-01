import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import racing from '../../assets/images/introPage/introPage3/racing.png';
import road from '../../assets/images/introPage/introPage3/road.png';
import motorpolice from '../../assets/images/introPage/introPage3/motorpolice.png';
import doorToHome from '../../assets/images/introPage/introPage3/doorToHome.png';
import square from '../../assets/images/introPage/introPage3/square.png';
import us from '../../assets/images/introPage/introPage3/us.png';
import chatalvin from '../../assets/images/introPage/introPage3/chatalvin.png';


const Intro3 = () => {
  const [showUs, setShowUs] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [doorClickable, setDoorClickable] = useState(false); // Cửa chỉ có thể được nhấn sau khi chat xuất hiện
  const [showMotorPolice, setShowMotorPolice] = useState(false);
  const [doorClicked, setDoorClicked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (showUs) {
      // Hiện chat sau 1 giây khi hiện 'us'
      setTimeout(() => {
        setShowChat(true);
        setDoorClickable(true); // Cho phép cửa được ấn sau khi chat xuất hiện
      }, 1000);

      // Bắt đầu di chuyển motorpolice sau khi chat xuất hiện 2.5 giây
      setTimeout(() => {
        setShowMotorPolice(true);
      }, 3500);
    }
  }, [showUs]);

  // Xử lý khi nhấn vào cửa
  const handleDoorClick = () => {
    if (doorClickable) { // Chỉ cho phép cửa được ấn sau khi chat xuất hiện
      setDoorClicked(true);
      navigate('/homePage'); // Điều hướng về homePage khi cửa được nhấn
    }
  };

  return (
    <div className="h-screen flex items-center relative" style={{ overflow: 'hidden' }}>
       (
        <>
          {/* Road Image */}
          <img src={road} alt="Road" className="absolute center" style={{ left: '-100px', width: '1500px', zIndex: 1 }} />
          <img src={road} alt="Road" className="absolute center" style={{ left: '60px', width: '1500px', zIndex: 1 }} />
          <img src={square} alt="square" className="absolute center" style={{ right: '330px', width: '200px', zIndex: 1 }} />

          {/* Racing Image */}
          {!showUs && (
            <motion.img
              src={racing}
              alt="Racing"
              className="absolute"
              initial={{ x: -100 }}
              animate={{ x: 1270 }} // Giai đoạn 1: Di chuyển từ -100 đến 1270
              transition={{ duration: 6, ease: 'easeInOut' }}
              style={{ top: '350px', width: '150px', zIndex: 2 }}
              onAnimationComplete={() => setShowUs(true)} // Khi animation xong thì hiện 'us'
            />
          )}

          {/* Hình ảnh us hiện sau khi racing hoàn thành */}
          {showUs && (
            <img src={us} alt="us" className="absolute center" style={{ top: '370px', right: '370px', width: '130px', zIndex: 3 }} />
          )}

          {/* Khung chat hiện sau khi hiện 'us' 1 giây */}
          {showChat && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
              style={{ position: 'absolute', top: '110px', right: '420px', width: '300px', zIndex: 3 }}
            >
              <img src={chatalvin} alt="Chat Alvin" style={{ width: '100%' }} />
              <p className="absolute text-center text-pink-700 ml-10" style={{ top: '55%', transform: 'translateY(-50%)', fontFamily:'Boris', fontSize:'21px' }}>
                Hãy nhấn vào cửa bé bii <br/> Pikachu sắp tới òiii! <br/>😵
              </p>
            </motion.div>
          )}

          {/* MotorPolice bắt đầu di chuyển sau khi chat hiện xong */}
          {showMotorPolice && (
            <motion.img
              src={motorpolice}
              alt="motorpolice"
              className="absolute"
              initial={{ x: -100 }} 
              animate={{ x: 1250 }} 
              transition={{ duration: 6, ease: 'easeInOut' }} 
              style={{ top: '340px', width: '150px', zIndex: 2 }}
              onAnimationComplete={() => {
                if (!doorClicked) {
                  navigate('/intro4')
                }
              }} 
            />
          )}

          {/* Door to Home */}
          <img
            src={doorToHome}
            alt="Door"
            className={`absolute center cursor-pointer ${doorClickable ? 'opacity-100' : 'opacity-50'}`} // Chỉ cho phép click khi chat xuất hiện
            onClick={handleDoorClick}
            style={{ top: '200px', right: '100px', width: '300px', zIndex: 2 }}
          />
        </>
      )
    </div>
  );
};

export default Intro3;
