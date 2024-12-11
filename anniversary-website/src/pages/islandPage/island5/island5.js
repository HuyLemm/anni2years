import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import birdDownFlap from "../../../assets/images/islandPage/island5/yellowbird-downflap.png";
import birdMidFlap from "../../../assets/images/islandPage/island5/yellowbird-midflap.png";
import birdUpFlap from "../../../assets/images/islandPage/island5/yellowbird-upflap.png";
import background from "../../../assets/images/islandPage/island5/background-night.png";
import pipeGreen from "../../../assets/images/islandPage/island5/pipe-green.png";
import start from "../../../assets/images/islandPage/island5/start.png";
import border from "../../../assets/images/islandPage/island5/border.png";
import { useNavigate } from "react-router-dom";

const Island5 = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showGameBoard, setShowGameBoard] = useState(false);
  const [gameVisible, setGameVisible] = useState(false); // Hiện canvas
  const [gameRunning, setGameRunning] = useState(false); // Bắt đầu game
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Show title and rules with a delay
    setTimeout(() => setShowTitle(true), 500);
    setTimeout(() => {
      setShowRules(true);
      setShowGameBoard(true);
    }, 1500);
  }, []);

  // Hiển thị canvas tĩnh
  useEffect(() => {
    if (showGameBoard) {
      const canvas = document.getElementById("gameCanvas");
      if (canvas) {
        const ctx = canvas.getContext("2d");

        // Load hình ảnh
        const birdImages = [birdDownFlap, birdMidFlap, birdUpFlap].map(
          (src) => {
            const img = new Image();
            img.src = src;
            return img;
          }
        );

        const bg = new Image();
        bg.src = background;

        const pipeTop = new Image();
        pipeTop.src = pipeGreen;

        const pipeBottom = new Image();
        pipeBottom.src = pipeGreen;

        bg.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

          // Vẽ ống nước
          const pipeHeight = canvas.height / 3;
          const gap = 300;
          ctx.drawImage(pipeTop, canvas.width / 2, pipeHeight - pipeTop.height);
          ctx.drawImage(pipeBottom, canvas.width / 2, pipeHeight + gap);

          // Vẽ chim
          const birdY = canvas.height / 2;
          ctx.drawImage(birdImages[1], 25, birdY, 40, 40);
        };
      }
    }
  }, [showGameBoard]);

  // Game loop
  useEffect(() => {
    if (gameRunning && !gameOver && !gameComplete) {
      const canvas = document.getElementById("gameCanvas");
      const ctx = canvas.getContext("2d");

      const birdImages = [birdDownFlap, birdMidFlap, birdUpFlap].map((src) => {
        const img = new Image();
        img.src = src;
        return img;
      });

      const bg = new Image();
      bg.src = background;

      const pipeTop = new Image();
      pipeTop.src = pipeGreen;

      const pipeBottom = new Image();
      pipeBottom.src = pipeGreen;

      let birdY = canvas.height / 2;
      let gravity = 0.1;
      let lift = -4; // Lực đẩy khi nhấn phím lên
      let velocity = 0;
      let pipes = [];
      let frame = 0;
      let animationFrameId; // Biến để lưu id của requestAnimationFrame

      const spawnPipe = () => {
        const gap = 300; // Khoảng cách giữa ống trên và dưới
        const pipeHeight = Math.floor(Math.random() * (canvas.height / 2));
        pipes.push({
          x: canvas.width,
          top: pipeHeight,
          bottom: pipeHeight + gap,
          width: 50,
        });
      };

      // Lắng nghe sự kiện phím
      const handleKeyPress = (event) => {
        if (event.code === "ArrowUp" || event.code === "Space") {
          // Khi nhấn phím mũi tên lên
          velocity = lift; // Áp dụng lực đẩy
        }
      };

      // Thêm trình lắng nghe khi hiệu ứng bắt đầu
      window.addEventListener("keydown", handleKeyPress);

      const gameLoop = () => {
        // Kiểm tra trạng thái game (dừng khi thắng/thua)
        if (gameOver || gameComplete) {
          cancelAnimationFrame(animationFrameId); // Dừng hoàn toàn game loop
          return; // Dừng game loop
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

        // Vẽ và di chuyển ống
        pipes.forEach((pipe, index) => {
          ctx.drawImage(pipeTop, pipe.x, pipe.top - pipeTop.height);
          ctx.drawImage(pipeBottom, pipe.x, pipe.bottom);
          pipe.x -= 2;

          // Phát hiện va chạm
          if (
            (birdY < pipe.top || birdY > pipe.bottom) &&
            pipe.x < 50 &&
            pipe.x + pipe.width > 0
          ) {
            setGameOver(true);
            setGameRunning(false);
          }

          if (pipe.x + pipe.width < 0) {
            pipes.splice(index, 1); // Xóa ống khi ra khỏi màn hình
            setScore((prev) => {
              const newScore = prev + 1;
              if (newScore >= 20) {
                setGameComplete(true); // Điều kiện chiến thắng
                setGameRunning(false);
              }
              return newScore;
            });
          }
        });

        // Tạo ống mới mỗi 100 frame
        if (frame % 100 === 0) {
          spawnPipe();
        }

        // Di chuyển chim
        velocity += gravity; // Tăng vận tốc rơi theo trọng lực
        birdY += velocity;

        if (birdY > canvas.height - 20 || birdY < 0) {
          setGameOver(true);
          setGameRunning(false);
        }

        ctx.drawImage(
          birdImages[Math.floor(frame / 10) % 3],
          25,
          birdY,
          40,
          40
        );

        frame++;
        animationFrameId = requestAnimationFrame(gameLoop); // Lưu lại id của requestAnimationFrame
      };

      spawnPipe(); // Tạo ống đầu tiên
      gameLoop();

      // Xóa trình lắng nghe khi kết thúc hiệu ứng
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
        cancelAnimationFrame(animationFrameId); // Đảm bảo dừng hoàn toàn
      };
    }
  }, [gameRunning, gameOver, gameComplete]);

  // Bắt đầu game khi nhấn phím
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        if (!gameRunning && gameStarted) {
          setGameRunning(true); // Kích hoạt game loop
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameRunning, gameStarted]);

  const handleStart = () => {
    setGameVisible(true); // Hiện canvas đầy đủ
    setGameStarted(true); // Đánh dấu game bắt đầu
    setGameOver(false);
    setGameComplete(false);
    setScore(0); // Reset điểm
  };

  return (
    <div
      className="h-screen flex items-center justify-center relative text-pink-700"
      style={{ overflow: "hidden" }}
    >
      {/* Title */}
      {showTitle && (
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            fontFamily: "Boris",
            fontSize: "50px",
            top: "2%",
            marginBottom: "20px",
          }}
        >
          Trò chơi dập dìu trong gió 🚀🐦
        </motion.h1>
      )}

      {/* Rules */}
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
          }}
        >
          <h2 style={{ marginBottom: "20px", fontSize: "30px" }}>
            Luật chơi ٩(ˊᗜˋ*)و ♡
          </h2>
          <ul>
            <li>
              1. Nhấn phím Space hoặc ↑ để giữ chim <br />
              bay lên.
            </li>
            <li>2. Tránh các chướng ngại vật (ống nước).</li>
            <li>3. Điểm sẽ tăng khi bạn vượt qua ống.</li>
            <li>4. Được 20 điểm để chiến thắng trò chơi.</li>
          </ul>
        </motion.div>
      )}

      {/* Game Board */}
      {showGameBoard && (
        <div
          style={{
            position: "absolute",
            left: "550px",
            top: "160px",
            width: "100%",
            filter: gameVisible ? "none" : "blur(5px) brightness(20%)",
            opacity: gameVisible ? 1 : 0.7,
            transition: "opacity 0.5s ease, filter 0.5s ease",
          }}
        >
          <canvas
            id="gameCanvas"
            width="800"
            height="600"
            style={{
              border: "2px solid #be185d",
              borderRadius: "15px",
            }}
          ></canvas>
        </div>
      )}

      {/* Start Button */}
      {!gameVisible && !gameOver && !gameComplete && showGameBoard && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: "160px",
            left: "72%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <img
            src={start}
            alt="Start"
            style={{ cursor: "pointer", width: "160px" }}
            onClick={handleStart}
          />
        </motion.div>
      )}

      {/* Score Display */}
      {gameVisible && (
        <div
          style={{
            position: "absolute",
            top: "170px",
            left: "75%",
            transform: "translateX(-50%)",
            fontFamily: "Boris",
            fontSize: "30px",
          }}
        >
          Score: {score}
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
              position: "absolute",
              marginTop: "-290px",
              marginLeft: "100px",
              fontFamily: "Boris",
              fontSize: "30px",
              zIndex: "3",
            }}
          >
            Chúc mừng em đã <br /> hoàn thành xuất sắc <br /> trò chơi!🎉🥳
          </h2>
          <button
            onClick={() => navigate("/prize5")}
            style={{
              position: "absolute",
              marginTop: "-150px",
              marginLeft: "-25px",
              fontFamily: "Boris",
              padding: "1px 10px",
              fontSize: "25px",
              borderRadius: "20px",
              backgroundColor: "transparent",
              border: "4px solid #be185d",
              cursor: "pointer",
              zIndex: "3",
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
              position: "absolute",
              marginTop: "-290px",
              marginLeft: "100px",
              fontFamily: "Boris",
              fontSize: "30px",
              zIndex: "3",
            }}
          >
            Oh nooo em đã <br /> lái đụng chim thua ùi <br /> Thử lại nho!
          </h2>
          <button
            onClick={() => window.location.reload()}
            style={{
              position: "absolute",
              marginTop: "-150px",
              marginLeft: "-25px",
              fontFamily: "Boris",
              padding: "1px 10px",
              fontSize: "25px",
              borderRadius: "20px",
              backgroundColor: "transparent",
              border: "4px solid #be185d",
              cursor: "pointer",
              zIndex: "3",
            }}
          >
            ↻
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Island5;
