import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import các hình ảnh cho trò chơi ghép đôi
import us1 from "../../../assets/images/islandPage/island3/us1.png";
import us2 from "../../../assets/images/islandPage/island3/us2.png";
import us3 from "../../../assets/images/islandPage/island3/us3.png";
import us4 from "../../../assets/images/islandPage/island3/us4.png";
import us5 from "../../../assets/images/islandPage/island3/us5.png";
import us6 from "../../../assets/images/islandPage/island3/us6.png";
import us7 from "../../../assets/images/islandPage/island3/us7.png";
import us8 from "../../../assets/images/islandPage/island3/us8.png";

import bordersquare from "../../../assets/images/islandPage/island3/bordersquare.png";
import card from "../../../assets/images/islandPage/island3/card.png";
import border from "../../../assets/images/islandPage/island3/border.png";
import start from "../../../assets/images/islandPage/island3/start.png";

const Island3 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [showTitle, setShowTitle] = useState(false); // Hiển thị tiêu đề
  const [showRules, setShowRules] = useState(false); // Hiển thị luật chơi
  const [showGameBoard, setShowGameBoard] = useState(false); // Hiển thị bảng trò chơi
  const [showWinMessage, setShowWinMessage] = useState(false); // Hiển thị thông báo khi thắng
  const [timeLeft, setTimeLeft] = useState(60); // Thời gian còn lại
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

  useEffect(() => {
    // Tạo và xáo trộn bộ bài gồm 8 cặp ảnh
    const shuffledCards = shuffle([
      { id: 1, src: us1 },
      { id: 2, src: us2 },
      { id: 3, src: us3 },
      { id: 4, src: us4 },
      { id: 5, src: us5 },
      { id: 6, src: us6 },
      { id: 7, src: us7 },
      { id: 8, src: us8 },
      { id: 1, src: us1 },
      { id: 2, src: us2 },
      { id: 3, src: us3 },
      { id: 4, src: us4 },
      { id: 5, src: us5 },
      { id: 6, src: us6 },
      { id: 7, src: us7 },
      { id: 8, src: us8 },
    ]);
    setCards(shuffledCards);
  }, []);

  // Hàm xáo trộn bộ bài
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Hàm xử lý khi người chơi lật thẻ
  const handleFlip = (index) => {
    if (
      !gameStarted ||
      flippedCards.includes(index) ||
      matchedPairs.includes(cards[index].id) ||
      flippedCards.length === 2 ||
      gameOver
    )
      return;

    setFlippedCards((prev) => [...prev, index]);

    if (flippedCards.length === 1) {
      const firstIndex = flippedCards[0];
      const firstCard = cards[firstIndex];
      const secondCard = cards[index];

      if (firstCard.id === secondCard.id) {
        setMatchedPairs((prev) => [...prev, firstCard.id]);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  // Hàm kiểm tra khi trò chơi hoàn thành
  useEffect(() => {
    if (matchedPairs.length === 8) {
      setTimeout(() => {
        setGameComplete(true);
        setShowWinMessage(true); // Hiển thị thông báo chúc mừng sau 2 giây khi hoàn thành
      }, 500);
    }
  }, [matchedPairs]);

  // Hàm bắt đầu trò chơi khi nhấn vào nút Start
  const handleStart = () => {
    setGameStarted(true);
  };

  return (
    <div
      className="h-screen flex items-center justify-center relative text-pink-700"
      style={{ overflow: "hidden" }}
    >
      {/* Nền viền ngoài của trò chơi */}
      {showGameBoard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={bordersquare}
            alt="border"
            style={{
              width: "900px",
              height: "1000px",
              position: "absolute",
              top: 110,
              left: 500,
              zIndex: 0,
              opacity: 0.5,
            }}
          />
        </motion.div>
      )}

      {/* Hiển thị tiêu đề */}
      {showTitle && (
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontFamily: "Boris",
            position: "absolute",
            fontSize: "50px",
            marginTop: "20px",
            left: "33%",
            top: "0%",
            transform: "translateX(-50%)",
          }}
        >
          Trò chơi ghép đôi trí nhớ 🧸ྀི
        </motion.h1>
      )}

      {/* Hiển thị luật chơi */}
      {showRules && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            left: "20px",
            top: "350px",
            fontFamily: "Boris",
            fontSize: "24px",
            color: "#000",
            textAlign: "left",
            zIndex: 1,
          }}
        >
          <h2 style={{ marginBottom: "20px", fontSize: "30px" }}>
            Luật chơi ≽^•⩊•^≼
          </h2>
          <ul>
            <li>1. Lật từng cặp thẻ để tìm thẻ trùng khớp.</li>
            <li>2. Mỗi cặp thẻ trùng sẽ biến mất.</li>
            <li>
              3. Hoàn thành trò chơi khi ghép đúng tất cả <br /> các cặp.
            </li>
            <li>4. Hoàn thành trò chơi trước khi hết giờ.</li>
          </ul>
        </motion.div>
      )}

      {/* Hiển thị nút Start */}
      {!gameStarted && showGameBoard && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: "120px",
            left: "72%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <img
            src={start}
            alt="Start"
            style={{ width: "160px", cursor: "pointer" }}
            onClick={handleStart}
          />
        </motion.div>
      )}

      {/* Hiển thị thời gian đếm ngược khi trò chơi bắt đầu */}
      {gameStarted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: "120px",
            left: "72%",
            transform: "translateX(-50%)",
            fontFamily: "Boris",
            fontSize: "30px",
            zIndex: 10,
          }}
        >
          <p>Time: {timeLeft}s</p>
        </motion.div>
      )}

      {/* Hiển thị lưới các thẻ */}
      {showGameBoard && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            marginTop: "150px",
            padding: "20px",
            maxWidth: "800px",
            zIndex: 1,
          }}
        >
          {cards.map((cardData, index) => (
            <motion.div
              key={index}
              onClick={() => handleFlip(index)}
              style={{
                width: "150px",
                height: "180px",
                perspective: "1000px",
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{
                  rotateY:
                    flippedCards.includes(index) ||
                    matchedPairs.includes(cardData.id)
                      ? 180
                      : 0,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.img
                  src={card}
                  alt="Card Back"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    backfaceVisibility: "hidden",
                  }}
                />
                <motion.img
                  src={cardData.src}
                  alt="Card Front"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    borderRadius: "20px",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Khi trò chơi hoàn thành */}
      {gameComplete && showWinMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="win-message"
          style={{
            marginLeft: "50px",
            position: "absolute",
            left: "72%",
            top: "25%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <img
            src={border}
            alt="border"
            style={{ width: "450px", zIndex: "2" }}
          />
          <h2
            style={{
              postion: "absolute",
              marginTop: "-300px",
              fontFamily: "Boris",
              fontSize: "30px",
              zIndex: "3",
            }}
          >
            Chúc mừng em đã <br /> hoàn thành xuất sắc <br /> trò chơi!🎉🥳
          </h2>
          <button
            onClick={() => navigate("/prize3")}
            style={{
              fontFamily: "Boris",
              margin: "10px",
              padding: "1px 10px",
              fontSize: "25px",
              borderRadius: "20px",
              backgroundColor: "transparent",
              border: "4px solid #be185d",
              cursor: "pointer",
              zIndex: "3",
            }}
          >
            {" "}
            ➜
          </button>
        </motion.div>
      )}

      {/* Khi trò chơi hết thời gian */}
      {gameOver && !gameComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lose-message"
          style={{
            marginLeft: "50px",
            position: "absolute",
            left: "72%",
            top: "25%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <img
            src={border}
            alt="border"
            style={{ width: "450px", zIndex: "2" }}
          />
          <h2
            style={{
              postion: "absolute",
              marginTop: "-300px",
              fontFamily: "Boris",
              fontSize: "30px",
              zIndex: "3",
            }}
          >
            Oh nooo em đã <br /> hong kịp hoàn thành ùi <br /> Thử lại nhooo!
          </h2>
          <button
            onClick={() => window.location.reload()}
            style={{
              fontFamily: "Boris",
              margin: "10px",
              padding: "1px 10px",
              fontSize: "25px",
              borderRadius: "20px",
              backgroundColor: "transparent",
              border: "4px solid #be185d",
              cursor: "pointer",
              zIndex: "3",
            }}
          >
            {" "}
            ↻{" "}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Island3;
