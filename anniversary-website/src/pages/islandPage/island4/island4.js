import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RacingGame from './racingGame'; // Import Racing Game Component
import start from '../../../assets/images/islandPage/island4/start.png';
import border from '../../../assets/images/islandPage/island4/border.png';

const Island4 = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showGameBoard, setShowGameBoard] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // Trạng thái bắt đầu game
  const [score, setScore] = useState(0); // Điểm số của người chơi
  const [gameComplete, setGameComplete] = useState(false); // Trạng thái hoàn thành game
  const [gameOver, setGameOver] = useState(false); // Trạng thái thua game

  useEffect(() => {
    // Hiển thị tiêu đề sau 0.5 giây
    setTimeout(() => setShowTitle(true), 500);
    // Hiển thị luật chơi và bảng trò chơi sau thêm 1 giây
    setTimeout(() => {
      setShowRules(true);
      setShowGameBoard(true);
    }, 1500);
  }, []);

  useEffect(() => {
    let interval;
    if (gameStarted && !gameOver && !gameComplete) {
      // Cập nhật điểm số mỗi 250ms khi game đang chạy
      interval = setInterval(() => {
        setScore((prevScore) => {
          const newScore = prevScore + 1;
          if (newScore >= 20) {
            setGameComplete(true); // Đạt 100 điểm thì thắng
          }
          return newScore;
        });
      }, 250);
    }
    return () => clearInterval(interval); // Xóa interval khi game dừng
  }, [gameStarted, gameOver, gameComplete]);

  const handleStart = () => {
    setGameStarted(true); // Chuyển trạng thái game bắt đầu
    setGameOver(false); // Reset trạng thái thua nếu chơi lại
    setGameComplete(false); // Reset trạng thái thắng nếu chơi lại
    setScore(0); // Reset điểm số khi chơi lại
  };

  return (
    <div className="h-screen flex items-center justify-center relative text-pink-700" style={{ overflow: 'hidden' }}>
      {/* Hiển thị tiêu đề */}
      {showTitle && (
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontFamily: 'Boris',
            position: 'absolute',
            fontSize: '50px',
            top: '2%',
            textAlign: 'center',
          }}
        >
          Trò chơi vượt chướng ngại vật 🚗💨
        </motion.h1>
      )}

      {/* Hiển thị luật chơi */}
      {showRules && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            left: '20px',
            top: '350px',
            fontFamily: 'Boris',
            fontSize: '24px',
            color: '#000',
            textAlign: 'left',
          }}
        >
          <h2 style={{ marginBottom: '20px', fontSize: '30px' }}>Luật chơi ₓ˚. ୭ ˚○◦˚.˚◦○˚ ୧ .˚ₓ</h2>
          <ul>
            <li>1. Điều khiển nhân vật tránh các xe.</li>
            <li>2. Sử dụng phím mũi tên hoặc W/A/S/D <br /> để di chuyển né.</li>
            <li>3. Điểm sẽ tăng khi chạy và càng về sau <br /> tốc độ càng nhanh.</li>
            <li>4. Hoàn thành trò chơi khi tích đủ 100 điểm</li>
          </ul>
        </motion.div>
      )}

      {/* Hiển thị Racing Game */}
      {showGameBoard && (
        <div
          style={{
            marginTop: '50px',
            width: '100%',
            filter: !gameStarted && !gameComplete && !gameOver ? 'blur(5px) brightness(20%)' : 'none', // Darkening effect with blur
            opacity: !gameStarted && !gameComplete && !gameOver ? 0.7 : 1, // Làm mờ nếu game chưa bắt đầu
            transition: 'opacity 0.5s ease',
          }}
        >
          <RacingGame
            gameStarted={gameStarted}
            gameComplete={gameComplete}
            onGameOver={() => setGameOver(true)} // Thông báo thua
          />
        </div>
      )}

      {/* Nút Start */}
      {!gameStarted && !gameComplete && !gameOver && showGameBoard && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'absolute', top: '120px', left: '67%', transform: 'translateX(-50%)', zIndex: 10 }}
        >
          <img src={start} alt="Start" style={{ width: '160px', cursor: 'pointer' }} onClick={handleStart} />
        </motion.div>
      )}

      {/* Hiển thị điểm số */}
      {score > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '120px',
            left: '70%',
            transform: 'translateX(-50%)',
            zIndex: 10,
          }}
        >
          <h2 style={{ fontFamily: 'Boris', fontSize: '30px' }}>Score: {score}</h2>
        </div>
      )}

      {/* Khi trò chơi hoàn thành */}
      {gameComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="win-message"
          style={{
            marginLeft: '50px',
            position: 'absolute',
            left: '72%',
            top: '25%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <img src={border} alt="border" style={{ width: '450px', zIndex: '2' }} />
          <h2
            style={{
              position: 'absolute',
              marginTop: '-290px',
              marginLeft: '100px',
              fontFamily: 'Boris',
              fontSize: '30px',
              zIndex: '3',
            }}
          >
            Chúc mừng em đã <br /> hoàn thành xuất sắc <br /> trò chơi!🎉🥳
          </h2>
          <button
            onClick={() => window.location.reload()}
            style={{
              position: 'absolute',
              marginTop: '-150px',
              marginLeft: '-25px',
              fontFamily: 'Boris',
              padding: '1px 10px',
              fontSize: '25px',
              borderRadius: '20px',
              backgroundColor: 'transparent',
              border: '4px solid #be185d',
              cursor: 'pointer',
              zIndex: '3',
            }}
          >
            ➜
          </button>
        </motion.div>
      )}

      {/* Khi trò chơi thua */}
      {gameOver && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lose-message"
          style={{
            marginLeft: '50px',
            position: 'absolute',
            left: '69%',
            top: '25%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <img src={border} alt="border" style={{ width: '450px', zIndex: '2' }} />
          <h2
            style={{
              position: 'absolute',
              marginTop: '-290px',
              marginLeft: '100px',
              fontFamily: 'Boris',
              fontSize: '30px',
              zIndex: '3',
            }}
          >
            Oh nooo em đã <br /> bị đụng xe thua ùi <br /> Thử lại nho!
          </h2>
          <button
            onClick={() => window.location.reload()}
            style={{
              position: 'absolute',
              marginTop: '-150px',
              marginLeft: '-25px',
              fontFamily: 'Boris',
              padding: '1px 10px',
              fontSize: '25px',
              borderRadius: '20px',
              backgroundColor: 'transparent',
              border: '4px solid #be185d',
              cursor: 'pointer',
              zIndex: '3',
            }}
          >
            ↻
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Island4;
