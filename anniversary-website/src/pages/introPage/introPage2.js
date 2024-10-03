import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import heySound from '../../assets/music/introPage/heySound.mp3';

import racing from '../../assets/images/introPage/introPage2/racing.png';
import road from '../../assets/images/introPage/introPage2/road.png';
import ankwypolice from '../../assets/images/introPage/introPage2/ankwypolice.png';
import police from '../../assets/images/introPage/introPage2/police.png';
import greenlight from '../../assets/images/introPage/introPage2/greenlight.png';
import redlight from '../../assets/images/introPage/introPage2/redlight.png';
import motor from '../../assets/images/introPage/introPage2/motor.png';
import motorpolice from '../../assets/images/introPage/introPage2/motorpolice.png';
import square from '../../assets/images/introPage/introPage2/square.png';
import chatalvin from '../../assets/images/introPage/introPage2/chatalvin.png';
import chatpaoi from '../../assets/images/introPage/introPage2/chatpaoi.png';
import chatthink from '../../assets/images/introPage/introPage2/chatthink.png';
import house1 from '../../assets/images/introPage/introPage2/house1.png';
import house2 from '../../assets/images/introPage/introPage2/house2.png';
import playground from '../../assets/images/introPage/introPage2/playground.png';
import green from '../../assets/images/introPage/introPage2/green.png';
import picnic from '../../assets/images/introPage/introPage2/picnic.png';

const Intro2 = () => {
  const [light, setLight] = useState('green');
  const [showChat, setShowChat] = useState(null);
  const [startPhase2, setStartPhase2] = useState(false); 
  const [policeStatus, setPoliceStatus] = useState('police'); 
  const [motorStatus, setMotorStatus] = useState(true); 
  const [showMotorPolice, setShowMotorPolice] = useState(false); 

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLight('red');
    }, 2000);

    setTimeout(() => {
      setShowChat('alvin-start');
    }, 4000); // Hiện chat Alvin sau khi xe dừng lại

    return () => clearTimeout(timer);
  }, []);

  

  const handleContinue = () => {
    setShowChat('paoi-continue');
    setTimeout(() => {
      setShowChat('alvin-continue');
      setTimeout(startPhase2Movement, 2500); // Sau khi hội thoại, bắt đầu Giai đoạn 2
    }, 2000); 
  };

  const handleStop = () => {
    setShowChat('paoi-stop');
    setTimeout(() => {
      setShowChat('alvin-stop');
      setTimeout(startPhase2Movement, 2500); // Sau khi hội thoại, bắt đầu Giai đoạn 2
    }, 2000);
  };

  // Bắt đầu Giai đoạn 2: Xe racing di chuyển từ 600 đến 2000
  const startPhase2Movement = () => {
    setShowChat(null); // Ẩn khung chat
    setStartPhase2(true); // Bắt đầu Giai đoạn 2
    setTimeout(() => {
      setPoliceStatus('ankwypolice'); // Sau 1 giây, cảnh sát chuyển thành ankwypolice
      const heyAudio = new Audio(heySound);
      heyAudio.volume = 0.5; 
      heyAudio.play();
    }, 1000);

    setTimeout(() => {
      setPoliceStatus(null); // Sau 2 giây nữa, cảnh sát và motor biến mất
      setMotorStatus(false);
    }, 2000);

    setTimeout(() => {
      setShowMotorPolice(true); // Sau 4 giây, motorpolice xuất hiện và đuổi theo
    }, 2500);
  };

  return (
    <div className="h-screen flex items-center relative" style={{ overflow: 'hidden' }}>

      {/* Home Image */}
      <img src={house1} alt="house1" className="absolute center" style={{ top: '80px', left: '20px', width: '400px', zIndex: 2 }} />
      <img src={house2} alt="house2" className="absolute center" style={{ top: '140px', right: '20px', width: '600px', zIndex: 2 }} />
      <img src={playground} alt="playground" className="absolute center" style={{ top: '580px', left: '40px', width: '400px', zIndex: 2 }} />
      <img src={green} alt="green" className="absolute center" style={{ top: '540px', left: '-15px', width: '500px', zIndex: 1 }} />
      <img src={picnic} alt="picnic" className="absolute center" style={{ top: '600px', right: '-15px', width: '600px', zIndex: 1 }} />


      {/* Road Image */}
      <img src={road} alt="Road" className="absolute center" style={{ left: '-530px', width: '1500px', zIndex: 1 }} />
      <img src={road} alt="Road" className="absolute center" style={{ right: '-510px', width: '1500px', zIndex: 1 }} />
      <img
        src={road}
        alt="Road"
        className="absolute center"
        style={{ transform: 'rotate(90deg)', left: '130px', width: '1500px', zIndex: 1 }}
      />
      <img src={square} alt="square" className="absolute center" style={{ left: '800px', width: '200px', zIndex: 1 }} />

      {/* Racing Image */}
      <motion.img
        src={racing}
        alt="Racing"
        className="absolute"
        initial={{ x: -100 }}
        animate={{ x: 600 }} // Giai đoạn 1: Di chuyển từ -100 đến 600 trong 4 giây
        transition={{ duration: 4, ease: 'easeInOut', }}
        style={{ top: '350px', width: '150px', zIndex: 2, display: startPhase2 ? 'none' : 'block' }}
        onAnimationComplete={() => setShowChat('alvin-start')} // Hiện khung chat sau khi di chuyển đến 600px
      />

      {/* Giai đoạn 2: Di chuyển từ 600 đến 2000 sau hội thoại */}
      {startPhase2 && (
        <motion.img
          src={racing}
          alt="Racing"
          className="absolute"
          initial={{ x: 600 }}
          animate={{ x: 2200 }} // Giai đoạn 2: Di chuyển từ 600 đến 2000 trong 7 giây
          transition={{ duration: 8, ease: 'easeInOut', onComplete: () => {
            navigate('/intro3');
          } }}
          style={{ top: '350px', width: '150px', zIndex: 2 }}
        />
      )}

      {/* Light Image */}
      {light === 'green' ? (
        <img
          src={greenlight}
          alt="Green Light"
          className="absolute"
          style={{ top: '220px', left: '750px', width: '65px', zIndex: 1 }}
        />
      ) : (
        <img
          src={redlight}
          alt="Red Light"
          className="absolute"
          style={{ top: '220px', left: '750px', width: '65px', zIndex: 1 }}
        />
      )}

      {/* Chat Alvin */}
      {showChat === 'alvin-start' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          style={{ position: 'absolute', top: '120px', left: '650px', width: '300px', zIndex: 3 }}
          onAnimationComplete={() => setShowChat('think')}
        >
          <img src={chatalvin} alt="Chat Alvin" style={{ width: '100%' }} />
          <p className="absolute text-center text-pink-700 ml-12" style={{ top: '52%', transform: 'translateY(-50%)', fontFamily:'Boris', fontSize:'21px' }}>
            Ơ đèn đỏ ùi, mình nên <br/> vượt hong hay đợi nhỉ <br/> bé yêu?🙄
          </p>
        </motion.div>
      )}

      {/* Chat Think */}
      {showChat === 'think' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          style={{ position: 'absolute', top: '100px', left: '450px', width: '300px', zIndex: 3 }}
        >
          <img src={chatthink} alt="Chat Think" style={{ width: '100%' }} />
          <p className="absolute text-center text-pink-700 ml-10" style={{ top:'63px', fontFamily:'Boris', fontSize:'21px' }}>
            Mình nên đi tiếp <br/>hay dừng lại đây ta?🫤
          </p>
          <div className="flex gap-4" style={{ position: 'absolute', top: '128px', left: '60px', zIndex: 3, fontFamily:'Boris', fontSize:'15px' }}>
            <button onClick={handleContinue} className=" bg-green-500 text-white rounded-full text-center " style={{
                padding: '7px 20px',
              }}>
              Đi tiếp
            </button>
            <button onClick={handleStop} className="px-4 py-1 bg-red-500 text-white rounded-full text-center  ">
              Dừng lại
            </button>
          </div>
        </motion.div>
      )}

      {/* Chat Paoi sau khi chọn */}
      {showChat === 'paoi-continue' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          style={{ position: 'absolute', top: '100px', left: '450px', width: '300px', zIndex: 3 }}
        >
          <img src={chatpaoi} alt="Chat Paoi Continue" style={{ width: '100%' }} />
          <p className="absolute text-center text-pink-700 ml-16" style={{ top:'80px', fontFamily:'Boris', fontSize:'21px' }}>
            Mình cứ đi tiếp<br/> đi anhhh, sợ gìii! <br/>😝
          </p>
        </motion.div>
      )}

      {showChat === 'paoi-stop' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          style={{ position: 'absolute', top: '100px', left: '450px', width: '300px', zIndex: 3 }}
        >
          <img src={chatpaoi} alt="Chat Paoi Stop" style={{ width: '100%' }} />
          <p className="absolute text-center text-pink-700 ml-10" style={{ top:'100px', fontFamily:'Boris', fontSize:'21px' }}>
            Mình nên dừng đèn đỏ <br/> thui anh ạaa!😑
          </p>
        </motion.div>
      )}

      {/* Chat Alvin phản hồi */}
      {showChat === 'alvin-continue' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          style={{ position: 'absolute', top: '120px', left: '650px', width: '300px', zIndex: 3 }}
        >
          <img src={chatalvin} alt="Chat Alvin" style={{ width: '100%' }} />
          <p className="absolute text-center text-pink-700 ml-12" style={{ top: '52%', transform: 'translateY(-50%)', fontFamily:'Boris', fontSize:'21px' }}>
            Vợ yêu của anh có khác <br/> Lét gooooo!😍
          </p>
        </motion.div>
      )}

      {showChat === 'alvin-stop' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          style={{ position: 'absolute', top: '120px', left: '650px', width: '300px', zIndex: 3 }}
        >
          <img src={chatalvin} alt="Chat Alvin" style={{ width: '100%' }} />
          <p className="absolute text-center text-pink-700 ml-20" style={{ top: '52%', transform: 'translateY(-50%)', fontFamily:'Boris', fontSize:'21px' }}>
            Nhưng mà anh <br/> thích vượt cơ <br/> Đi thoiiii! <br/>😆
          </p>
        </motion.div>
      )}

      {/* Police and Motor Control */}
      {policeStatus === 'police' && (
        <img
          src={police}
          alt="police"
          className="absolute"
          style={{ top: '250px', right: '880px', width: '50px', zIndex: 2 }}
        />
      )}
      {policeStatus === 'ankwypolice' && (
        <img
          src={ankwypolice}
          alt="ankwypolice"
          className="absolute"
          style={{ top: '240px', right: '880px', width: '65px', zIndex: 1 }}
        />
      )}
      {motorStatus && (
        <img
          src={motor}
          alt="motor"
          className="absolute"
          style={{ top: '280px', right: '760px', width: '120px', zIndex: 1 }}
        />
      )}
      {showMotorPolice && (
        <motion.img
          src={motorpolice}
          alt="motorpolice"
          className="absolute"
          initial={{ x: 800 }} // Vị trí ban đầu
          animate={{ x: 2000 }} // Vị trí kết thúc
          transition={{ duration: 6, ease: 'easeInOut' }} // Chuyển động trong 4 giây
          style={{ top: '330px', width: '150px', zIndex: 4 }}
        />
      )}


      {/* Light Image */}
      {light === 'green' ? (
        <img
          src={greenlight}
          alt="Green Light"
          className="absolute"
          style={{ top: '220px', left: '750px', width: '65px', zIndex: 1 }}
        />
      ) : (
        <img
          src={redlight}
          alt="Red Light"
          className="absolute"
          style={{ top: '220px', left: '750px', width: '65px', zIndex: 1 }}
        />
      )}
    </div>
  );
};

export default Intro2;
