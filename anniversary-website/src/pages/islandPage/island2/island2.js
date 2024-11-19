import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import các hình ảnh mảnh puzzle (từ p11 đến p33)
import p11 from '../../../assets/images/islandPage/island2/p11.png';
import p12 from '../../../assets/images/islandPage/island2/p12.png';
import p13 from '../../../assets/images/islandPage/island2/p13.png';
import p21 from '../../../assets/images/islandPage/island2/p21.png';
import p22 from '../../../assets/images/islandPage/island2/p22.png';
import p23 from '../../../assets/images/islandPage/island2/p23.png';
import p31 from '../../../assets/images/islandPage/island2/p31.png';
import p32 from '../../../assets/images/islandPage/island2/p32.png';

import start from '../../../assets/images/islandPage/island2/start.png';
import border from '../../../assets/images/islandPage/island2/border.png';
import bordersquare from '../../../assets/images/islandPage/island3/bordersquare.png';

// Mảng chứa tất cả các mảnh puzzle ngoại trừ mảnh p33
const puzzlePieces = [
  { id: 1, src: p11 },
  { id: 2, src: p12 },
  { id: 3, src: p13 },
  { id: 4, src: p21 },
  { id: 5, src: p22 },
  { id: 6, src: p23 },
  { id: 7, src: p31 },
  { id: 8, src: p32 },
];

const Island2 = () => {
  const [board, setBoard] = useState([]); // Trạng thái của bảng ghép
  const [emptySlot, setEmptySlot] = useState(8); // Vị trí trống (luôn là p33)
  const [gameComplete, setGameComplete] = useState(false);
  const [showTitle, setShowTitle] = useState(false); // Hiển thị tiêu đề
  const [showRules, setShowRules] = useState(false); // Hiển thị luật chơi
  const [showGameBoard, setShowGameBoard] = useState(false); // Hiển thị bảng trò chơi
  const [showWinMessage, setShowWinMessage] = useState(false); // Hiển thị thông báo khi thắng
  const [timeLeft, setTimeLeft] = useState(180); // Thời gian còn lại
  const [gameOver, setGameOver] = useState(false); // Trạng thái trò chơi kết thúc
  const [gameStarted, setGameStarted] = useState(false); // Trạng thái trò chơi bắt đầu

  const navigate = useNavigate();

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
    let timer;
    if (gameStarted && timeLeft > 0 && !gameComplete) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && !gameComplete) {
      setGameOver(true);
    }
    return () => clearInterval(timer);
  }, [timeLeft, gameComplete, gameStarted]);

  // Khi bắt đầu, xáo trộn mảng và bỏ mảnh p33
  useEffect(() => {
    const shuffledBoard = shuffleArray([...Array(8).keys()]);
    shuffledBoard.push(null); // Luôn bỏ mảnh p33 ở vị trí trống
    setBoard(shuffledBoard);
  }, []);

  // Xáo trộn mảng
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Kiểm tra xem người chơi có thắng chưa
  const checkCompletion = () => {
    for (let i = 0; i < 8; i++) {
      if (board[i] !== i) return false;
    }
    return true;
  };

  // Xử lý kéo thả
  const handleDragStart = (e, index) => {
    if (!gameStarted || gameOver || gameComplete) return; // Chặn di chuyển nếu trò chơi chưa bắt đầu hoặc kết thúc
    e.dataTransfer.setData('pieceIndex', index);
  };

  const handleDrop = (e, index) => {
    if (!gameStarted || gameOver || gameComplete) return; // Chặn thả nếu trò chơi chưa bắt đầu hoặc kết thúc
    const draggedIndex = e.dataTransfer.getData('pieceIndex');
    movePiece(parseInt(draggedIndex, 10), index);
  };

  const movePiece = (draggedIndex, dropIndex) => {
    const row = Math.floor(draggedIndex / 3); // 3 cột
    const col = draggedIndex % 3;
    const emptyRow = Math.floor(emptySlot / 3);
    const emptyCol = emptySlot % 3;

    // Cho phép di chuyển chéo cùng với các di chuyển lên/xuống/trái/phải
    if (Math.abs(row - emptyRow) <= 1 && Math.abs(col - emptyCol) <= 1) {
      const newBoard = [...board];
      newBoard[emptySlot] = newBoard[draggedIndex];
      newBoard[draggedIndex] = null; // Vị trí mới trở thành trống
      setBoard(newBoard);
      setEmptySlot(draggedIndex);
    }
};


  // Hàm kiểm tra khi trò chơi hoàn thành
  useEffect(() => {
    if (checkCompletion()) {
      setTimeout(() => {
        setGameComplete(true);
        setShowWinMessage(true); // Hiển thị thông báo chúc mừng sau 2 giây khi hoàn thành
      }, 500);
    }
  }, [board]);

  // Hàm bắt đầu trò chơi khi nhấn vào nút Start
  const handleStart = () => {
    setGameStarted(true);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center relative text-pink-700">
      {/* Hiển thị tiêu đề */}
      {showTitle && (
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontFamily: 'Boris', position: 'absolute', fontSize: '50px', marginTop: '20px', left: '39%', top: '0%', transform: 'translateX(-50%)' }}
        >
          Trò chơi ghép hình 🧩
        </motion.h1>
      )}

      {/* Hiển thị luật chơi */}
      {showRules && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'absolute', left: '20px', top: '350px', fontFamily: 'Boris', fontSize: '24px', color: '#000' }}
        >
          <h2 style={{ marginBottom: '20px', fontSize: '30px' }}>Luật chơi १|˚–˚|५</h2>
          <ul>
            <li>1. Sắp xếp các mảnh ghép để hoàn thành <br/> hình ảnh.</li>
            <li>2. Mỗi lần chỉ có thể di chuyển 1 mảnh ghép.</li>
            <li>3. Hoàn thành trò chơi trước khi hết giờ.</li>
          </ul>
        </motion.div>
      )}

      {/* Hiển thị nút Start */}
      {!gameStarted && showGameBoard && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'absolute', top: '120px', left: '72%', transform: 'translateX(-50%)', zIndex: 10 }}
        >
          <img src={start} alt="Start" style={{ width: '160px', cursor: 'pointer' }} onClick={handleStart} />
        </motion.div>
      )}

      {/* Hiển thị thời gian đếm ngược khi trò chơi bắt đầu */}
      {gameStarted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'absolute', top: '120px', left: '72%', transform: 'translateX(-50%)', fontFamily: 'Boris', fontSize: '30px', zIndex: 10 }}
        >
          <p>Time: {timeLeft}s</p>
        </motion.div>
      )}

      {/* Nền viền ngoài của trò chơi */}
      {showGameBoard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={bordersquare} alt="border" style={{ width: '870px', height: '1000px', position: 'absolute', top: 90, left: 525, zIndex: 0, opacity: 0.5 }} />
        </motion.div>
      )}

      {/* Hiển thị bảng trò chơi */}
      {showGameBoard && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ marginTop: '100px' }}
        >
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* Khung lưới để ghép mảnh */}
            <div
              className="grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 211px)', // 3 cột 161x190
                gridTemplateRows: 'repeat(3, 250px)', // 3 hàng
                gap: '5px',
                width: '100%',
                height: '100%',
                backgroundColor: '#f0f0f0',
                padding: '10px',
                zIndex: 1,
                
              }}
            >
              {board.map((piece, index) => (
                <div
                  key={index}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragOver={(e) => e.preventDefault()}
                  style={{
                    width: '211px',
                    height: '250px',
                    border: '1px solid #ccc',
                    backgroundColor: piece === null ? '#ddd' : 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                  }}
                >
                  {piece !== null && (
                    <img
                      src={puzzlePieces[piece].src}
                      alt={`Piece ${piece + 1}`}
                      draggable={gameStarted && !gameComplete && !gameOver} // Chỉ cho phép kéo nếu trò chơi đã bắt đầu và chưa kết thúc
                      onDragStart={(e) => handleDragStart(e, index)}
                      className={gameStarted && !gameComplete && !gameOver ? "allow-drag" : ""}
                      style={{ width: '100%', height: '100%', zIndex: 1 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Khi trò chơi hoàn thành */}
      {gameComplete && showWinMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="win-message"
          style={{ marginLeft: '50px', position: 'absolute', left: '72%', top: '25%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}
        >
          <img src={border} alt="border" style={{ width: '450px', zIndex: '2' }} />
          <h2 style={{ postion: 'absolute', marginTop: '-300px', fontFamily: 'Boris', fontSize: '30px', zIndex: '3' }}>Chúc mừng em  đã <br /> hoàn thành  xuất sắc <br /> trò chơi!🎉🥳</h2>
          <button onClick={() => navigate('/prize2')} style={{ fontFamily: 'Boris', margin: '10px', padding: '1px 10px', fontSize: '25px', borderRadius: '20px', backgroundColor: 'transparent', border: '4px solid #be185d', cursor: 'pointer', zIndex: '3' }}> ➜</button>
        </motion.div>
      )}

      {/* Khi trò chơi hết thời gian */}
      {gameOver && !gameComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lose-message"
          style={{ marginLeft: '50px', position: 'absolute', left: '72%', top: '25%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}
        >
          <img src={border} alt="border" style={{ width: '450px', zIndex: '2' }} />
          <h2 style={{ postion: 'absolute', marginTop: '-300px', fontFamily: 'Boris', fontSize: '30px', zIndex: '3'}}>
            Oh nooo em đã <br/> hong kịp hoàn thành ùi <br/> Thử lại nho!</h2>
          <button onClick={() => window.location.reload()} style={{ fontFamily: 'Boris', margin: '10px', padding: '1px 10px', fontSize: '25px', borderRadius: '20px', backgroundColor: 'transparent', border: '4px solid #be185d', cursor: 'pointer', zIndex: '3' }}> ↻ </button>
        </motion.div>
      )}
    </div>
  );
};

export default Island2;
