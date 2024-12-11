import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import start from "../../../assets/images/islandPage/island1/start.png";
import border from "../../../assets/images/islandPage/island1/border.png";
import { useNavigate } from "react-router-dom";
const Island6 = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showGameBoard, setShowGameBoard] = useState(false);

  const [secretNumbers, setSecretNumbers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0); // Vị trí ô trống đang chọn
  const [inputNumbers, setInputNumbers] = useState(["", "", "", ""]); // Dãy số người chơi chọn
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState({ correct: 0, correctPosition: 0 });
  const [history, setHistory] = useState([]); // Lưu lịch sử đoán
  const [gameComplete, setGameComplete] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // Trạng thái bắt đầu trò chơi

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
    // Tạo dãy số bí mật ngẫu nhiên
    const generateSecretNumbers = () => {
      let numbers = [];
      while (numbers.length < 4) {
        const num = Math.floor(Math.random() * 9) + 1; // Số từ 1 đến 9
        if (!numbers.includes(num)) {
          numbers.push(num);
        }
      }
      setSecretNumbers(numbers);
    };
    generateSecretNumbers();
  }, []);

  const handleStart = () => {
    setGameStarted(true);
  };

  const handleSelectNumber = (num) => {
    if (gameComplete || gameOver) return;
    const updatedInput = [...inputNumbers];
    updatedInput[selectedIndex] = num; // Điền số vào ô đang chọn
    setInputNumbers(updatedInput);

    // Tự động chuyển sang ô tiếp theo
    const nextIndex = (selectedIndex + 1) % 4;
    setSelectedIndex(nextIndex);
  };

  const handleClearNumber = () => {
    const updatedInput = [...inputNumbers];
    updatedInput[selectedIndex] = ""; // Xóa số tại ô đang chọn
    setInputNumbers(updatedInput);
  };

  const handleGuess = () => {
    if (gameComplete || gameOver) return;
    if (inputNumbers.some((num) => num === "")) {
      return;
    }

    const guessedNumbers = inputNumbers.map(Number);
    let correct = 0;
    let correctPosition = 0;

    guessedNumbers.forEach((num, index) => {
      if (secretNumbers.includes(num)) {
        correct++;
      }
      if (num === secretNumbers[index]) {
        correctPosition++;
      }
    });

    setFeedback({ correct, correctPosition });

    // Lưu lịch sử đoán
    setHistory((prev) => [
      ...prev,
      {
        guess: guessedNumbers.join(""),
        correct,
        correctPosition,
      },
    ]);

    setAttempts((prev) => prev + 1);

    if (correctPosition === 4) {
      setGameComplete(true);
    } else if (attempts >= 8) {
      setGameOver(true);
    }
    setInputNumbers(["", "", "", ""]); // Reset ô trống sau mỗi lần đoán
    setSelectedIndex(0); // Quay lại ô đầu tiên
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center relative text-pink-700"
      style={{
        overflow: "hidden",
      }}
    >
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
            top: "2%",
            textAlign: "center",
          }}
        >
          Trò chơi tìm dãy số bí ẩn💲✔️
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
            <li>1. Ấn vào 4 số để tìm được số tương ứng.</li>
            <li>2. Có 9 lần thử cho 1 lần chơi</li>
            <li>
              3. Tìm được số đúng trước khi hết 9 lần <br /> thì chiến thắng
            </li>
          </ul>
        </motion.div>
      )}
      {/* overlay */}
      {showRules && !gameStarted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: "10%",
            left: "30%",
            width: "40%",
            height: "85%",
            backgroundColor: "rgba(0, 0, 0, 0.85)", // Nền tối với độ trong suốt
            backdropFilter: "blur(8px)", // Làm mờ khung nền
            zIndex: 20,
            fontFamily: "Boris",
            fontSize: "30px",
            color: "#fff",
            borderRadius: "20px",
          }}
        ></motion.div>
      )}
      {/* Nút Start */}
      {!gameStarted && !gameComplete && !gameOver && showGameBoard && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: "120px",
            left: "73%",
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
      {/* Left Side: History */}
      {showGameBoard && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            top: "20%",
            left: "55%",
            fontFamily: "Boris",
            width: "300px",
            marginRight: "20px",
            position: "absolute",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              color: "#be185d",
              marginBottom: "10px",
            }}
          >
            Lịch sử đoán 🎯
          </h2>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {history.map((entry, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{
                  fontSize: "18px",
                  marginBottom: "8px",
                  padding: "5px",
                  backgroundColor: "#f3f4f6",
                  border: "2px solid #be185d",
                  borderRadius: "5px",
                }}
              >
                <strong>Lần {index + 1}:</strong> {entry.guess} <br />
                <strong>Số đúng:</strong> {entry.correct} |{" "}
                <strong>Đúng vị trí:</strong> {entry.correctPosition}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
      {/* Main Game Area */}
      <div>
        {/* Input Area */}
        {showGameBoard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              top: "24%",
              left: "34%",
            }}
          >
            {inputNumbers.map((num, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                key={index}
                onClick={() => setSelectedIndex(index)}
                style={{
                  width: "70px",
                  height: "70px",
                  border:
                    selectedIndex === index
                      ? "3px solid #be185d"
                      : "1px solid #ccc",
                  margin: "0 10px",
                  fontSize: "50px",
                  textAlign: "center",
                  lineHeight: "75px",
                  cursor: "pointer",
                  backgroundColor: num ? "#f3f4f6" : "#fff",
                  borderRadius: "20px",
                  fontFamily: "Boris",
                  fontWeight: "bold",
                }}
              >
                {num}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Number Selection */}
        {showGameBoard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              flexWrap: "wrap",
              justifyContent: "center",
              top: "11%",
              left: "33%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                key={num}
                onClick={() => handleSelectNumber(num)}
                style={{
                  width: "60px",
                  height: "60px",
                  margin: "5px",
                  fontSize: "24px",
                  borderRadius: "15px",
                  backgroundColor: "#be185d",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Boris",
                }}
              >
                {num}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Clear Button */}
        {showGameBoard && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            onClick={handleClearNumber}
            style={{
              top: "50%",
              left: "35%",
              position: "absolute",
              fontSize: "24px",
              padding: "10px 20px",
              marginBottom: "20px",
              borderRadius: "10px",
              backgroundColor: "#ccc",
              color: "#333",
              border: "1px solid #999",
              cursor: "pointer",
              fontFamily: "Boris",
            }}
          >
            Remove
          </motion.button>
        )}

        {/* Submit Button */}
        {showGameBoard && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            onClick={handleGuess}
            style={{
              top: "50%",
              left: "42%",
              position: "absolute",
              fontSize: "24px",
              padding: "10px 20px",
              borderRadius: "10px",
              backgroundColor: "#be185d",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontFamily: "Boris",
            }}
          >
            Guess
          </motion.button>
        )}

        {/* Feedback */}
        {attempts > 0 && showGameBoard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              marginTop: "20px",
              position: "absolute",
              top: "32%",
              left: "37.5%",
              fontFamily: "Boris",
            }}
          >
            <p style={{ fontSize: "27px", color: "#333" }}>
              <strong>Số đúng:</strong> {feedback.correct}
            </p>
            <p style={{ fontSize: "27px", color: "#333" }}>
              <strong>Đúng vị trí:</strong> {feedback.correctPosition}
            </p>
          </motion.div>
        )}

        {gameStarted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              marginTop: "20px",
              position: "absolute",
              top: "42%",
              left: "37%",
              fontFamily: "Boris",
            }}
          >
            <p style={{ fontSize: "24px", color: "#666" }}>
              Lượt chơi: {attempts} / 9
            </p>
          </motion.div>
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
              onClick={() => navigate("/prize6")}
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
              left: "69%",
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
              Oh nooo em đã <br /> bị hết lượt mất ùi <br /> Thử lại nho!
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
    </div>
  );
};

export default Island6;
