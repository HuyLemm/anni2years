import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import the two images for spot-the-difference game
import originalImage from '../../../assets/images/islandPage/island1/main.png';
import alteredImage from '../../../assets/images/islandPage/island1/alter.png';
import circleImage from '../../../assets/images/islandPage/island1/circle.png'; // Circle image for marking differences
import start from '../../../assets/images/islandPage/island1/start.png';
import border from '../../../assets/images/islandPage/island1/border.png';
import wrong from '../../../assets/images/islandPage/island1/wrong.png'; // Wrong image

// Define the coordinates of the 7 circles (differences)
const differences = [
  { x: 130, y: 0, radius: 25 },
  { x: 10, y: 160, radius: 20 },
  { x: 360, y: 0, radius: 23 },
  { x: 315, y: 250, radius: 20 },
  { x: 375, y: 430, radius: 24 },
  { x: 0, y: 355, radius: 20 },
  { x: 290, y: 480, radius: 30 },
  { x: 3, y: 290, radius: 23 },
];

const Island1 = () => {
  const [foundDifferences, setFoundDifferences] = useState([]);
  const [lives, setLives] = useState(3); // State for lives
  const [showWrongImage, setShowWrongImage] = useState(false); // Show wrong image on incorrect clicks
  const [wrongPosition, setWrongPosition] = useState({ x: 0, y: 0 }); // Position of the wrong click
  const [gameComplete, setGameComplete] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showGameBoard, setShowGameBoard] = useState(false);
  const [showWinMessage, setShowWinMessage] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // Time limit
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Show title after 0.5 seconds
    setTimeout(() => setShowTitle(true), 500);
    // Show rules and game board after another second
    setTimeout(() => {
      setShowRules(true);
      setShowGameBoard(true);
    }, 1500);
  }, []);

  useEffect(() => {
    let timer;
    if (gameStarted && timeLeft > 0 && !gameComplete && lives > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 || lives === 0) {
      setGameOver(true); // Game over when time runs out or lives reach 0
    }
    return () => clearInterval(timer);
  }, [timeLeft, gameComplete, gameStarted, lives]);

  const handleStart = () => {
    setGameStarted(true);
  };

  const bufferSize = 10; // Buffer size to expand the clickable area

  const handleClick = (e) => {
    if (!gameStarted || gameOver || gameComplete) return;

    const { offsetX, offsetY } = e.nativeEvent;
    let found = false; // Track if a correct spot was clicked

    differences.forEach((difference, index) => {
      const distance = Math.sqrt(
        (offsetX - (difference.x + 30)) ** 2 + (offsetY - difference.y) ** 2
      );
      if (distance <= (difference.radius + bufferSize) && !foundDifferences.includes(index)) {
        setFoundDifferences([...foundDifferences, index]);
        found = true; // Correct spot was clicked
      }
    });

    if (!found) {
      // Incorrect click
      setWrongPosition({ x: offsetX, y: offsetY }); // Set the wrong click position
      setShowWrongImage(true); // Show the wrong image
      setTimeout(() => setShowWrongImage(false), 1000); // Hide the wrong image after 1 second
      setLives((prevLives) => prevLives - 1); // Decrease a life
      if (lives - 1 === 0) {
        setGameOver(true); // End game when lives reach 0
      }
    }
  };

  useEffect(() => {
    if (foundDifferences.length === differences.length) {
      setTimeout(() => {
        setGameComplete(true);
        setShowWinMessage(true);
      }, 500);
    }
  }, [foundDifferences]);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative text-pink-700">
      {/* Show title */}
      {showTitle && (
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontFamily: 'Boris', position: 'absolute', fontSize: '50px', marginTop: '20px', left: '34%', top: '0%', transform: 'translateX(-50%)' }}
        >
          Trò chơi tìm điểm khác biệt🕵️‍♀️
        </motion.h1>
      )}

      {/* Show game rules */}
      {showRules && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'absolute', left: '20px', top: '350px', fontFamily: 'Boris', fontSize: '24px', color: '#000', zIndex: 10 }}
        >
          <h2 style={{ marginBottom: '20px', fontSize: '30px' }}>Luật chơi（ ´_⊃｀）</h2>
          <ul>
            <li>1. Tìm và ấn những điểm khác biệt để hoàn <br/> thành trò chơi.</li>
            <li>2. Chỉ có duy nhất 3 mạng để ấn sai.</li>
            <li>3. Hoàn thành trò chơi trước khi hết giờ.</li>
          </ul>
        </motion.div>
      )}

      {/* Show start button */}
      {!gameStarted && showGameBoard && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'absolute', top: '120px', left: '75%', transform: 'translateX(-50%)', zIndex: 10 }}
        >
          <img src={start} alt="Start" style={{ width: '160px', cursor: 'pointer' }} onClick={handleStart} />
        </motion.div>
      )}

      {/* Show countdown timer */}
      {gameStarted && (
        <motion.div
          className="allow-select"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'absolute', top: '120px', left: '75%', transform: 'translateX(-50%)', fontFamily: 'Boris', fontSize: '30px', zIndex: 10 }}
        >
          <p>Time: {timeLeft}s</p>
          <p>{foundDifferences.length}/8🔍</p>
          <p>{lives}/3❤️‍🔥</p> {/* Display remaining lives */}
        </motion.div>
      )}

      {/* Show game board */}
      {showGameBoard && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ marginTop: '20px', marginLeft: '50px' }}
        >
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* Show original image with circles */}
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <img 
                src={originalImage} 
                alt="Original" 
                style={{ 
                  width: '420px', 
                  height: 'auto', 
                  filter: !gameStarted ? 'blur(5px) brightness(20%)' : 'none', // Darkening effect with blur
                  opacity: !gameStarted ? 0.7 : 1,
                  transition: 'opacity 0.5s ease',
                }} 
                onClick={handleClick} 
              />
              {foundDifferences.map((differenceIndex) => (
                <motion.img
                  key={differenceIndex}
                  src={circleImage}
                  alt="circle"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    top: `${differences[differenceIndex].y}px`,
                    left: `${differences[differenceIndex].x}px`,
                    width: `${differences[differenceIndex].radius * 2}px`,
                    height: `${differences[differenceIndex].radius * 2}px`,
                    zIndex: 10,
                  }}
                />
              ))}
              {showWrongImage && (
                <motion.img
                  src={wrong}
                  alt="Wrong"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ 
                    position: 'absolute', 
                    top: `${wrongPosition.y}px`, 
                    left: `${wrongPosition.x}px`, 
                    width: '30px', 
                    height: '30px', 
                    zIndex: 10 
                  }}
                />
              )}
            </div>

            {/* Show altered image with circles */}
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <img
                src={alteredImage}
                alt="Altered"
                style={{ 
                  width: '420px', 
                  height: 'auto',
                  filter: !gameStarted ? 'blur(5px) brightness(20%)' : 'none', // Darkening effect with blur
                  opacity: !gameStarted ? 0.7 : 1,
                  transition: 'opacity 0.5s ease',
                }}
                onClick={handleClick}
              />
              {foundDifferences.map((differenceIndex) => (
                <motion.img
                  key={differenceIndex}
                  src={circleImage}
                  alt="circle"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    top: `${differences[differenceIndex].y}px`,
                    left: `${differences[differenceIndex].x}px`,
                    width: `${differences[differenceIndex].radius * 2}px`,
                    height: `${differences[differenceIndex].radius * 2}px`,
                    zIndex: 10,
                  }}
                />
              ))}
              {showWrongImage && (
                <motion.img
                  src={wrong}
                  alt="Wrong"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ 
                    position: 'absolute', 
                    top: `${wrongPosition.y -12}px`, 
                    left: `${wrongPosition.x - 17}px`, 
                    width: '30px', 
                    height: '30px', 
                    zIndex: 10 
                  }}
                />
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Show win message */}
      {gameComplete && showWinMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="win-message"
          style={{ marginLeft: '50px', position: 'absolute', left: '72%', top: '25%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}
        >
          <img src={border} alt="border" style={{ width: '450px', zIndex: '2' }} />
          <h2 style={{ postion: 'absolute', marginTop: '-300px', fontFamily: 'Boris', fontSize: '30px', zIndex: '3' }}>
            Chúc mừng em đã <br/> hoàn thành xuất sắc <br/> trò chơi! 🎉🥳
          </h2>
          <button onClick={() => navigate('/prize1')} style={{ fontFamily: 'Boris', margin: '10px', padding: '1px 10px', fontSize: '25px', borderRadius: '20px', backgroundColor: 'transparent', border: '4px solid #be185d', cursor: 'pointer', zIndex: '3' }}> ➜</button>
        </motion.div>
      )}

      {/* Show lose message */}
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
            Oh nooo em đã <br/> hong kịp hoàn thành ùi! <br/> Thử lại nho!
          </h2>
          <button onClick={() => window.location.reload()} style={{ fontFamily: 'Boris', margin: '10px', padding: '1px 10px', fontSize: '25px', borderRadius: '20px', backgroundColor: 'transparent', border: '4px solid #be185d', cursor: 'pointer', zIndex: '3' }}> ↻ </button>
        </motion.div>
      )}
    </div>
  );
};

export default Island1;
