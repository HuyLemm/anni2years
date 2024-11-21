import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Island6 = () => {
  const [secretNumbers, setSecretNumbers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0); // Vị trí ô trống đang chọn
  const [inputNumbers, setInputNumbers] = useState(["", "", "", ""]); // Dãy số người chơi chọn
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState({ correct: 0, correctPosition: 0 });
  const [history, setHistory] = useState([]); // Lưu lịch sử đoán
  const [gameComplete, setGameComplete] = useState(false);
  const [gameOver, setGameOver] = useState(false);

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

  const handleSelectNumber = (num) => {
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
    if (inputNumbers.some((num) => num === "")) {
      alert("Vui lòng điền đủ 4 số trước khi đoán!");
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
    } else if (attempts >= 9) {
      setGameOver(true);
    }
    setInputNumbers(["", "", "", ""]); // Reset ô trống sau mỗi lần đoán
    setSelectedIndex(0); // Quay lại ô đầu tiên
  };

  const handleRestart = () => {
    setAttempts(0);
    setGameComplete(false);
    setGameOver(false);
    setInputNumbers(["", "", "", ""]);
    setFeedback({ correct: 0, correctPosition: 0 });
    setHistory([]); // Reset lịch sử
    setSecretNumbers([]);
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
  };

  return (
    <div
      className="h-screen flex flex-row items-start justify-center relative"
      style={{
        overflow: "hidden",
        fontFamily: "Boris",
        textAlign: "center",
      }}
    >
      {/* Left Side: History */}
      <div
        style={{
          width: "300px",
          marginRight: "20px",
          textAlign: "left",
        }}
      >
        <h2 style={{ fontSize: "24px", color: "#be185d", marginBottom: "10px" }}>
          Lịch sử đoán 🎯
        </h2>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {history.map((entry, index) => (
            <li
              key={index}
              style={{
                fontSize: "18px",
                marginBottom: "8px",
                padding: "5px",
                backgroundColor: "#f3f4f6",
                border: "1px solid #be185d",
                borderRadius: "5px",
              }}
            >
              <strong>Lần {index + 1}:</strong> {entry.guess} <br />
              <strong>Số đúng:</strong> {entry.correct} |{" "}
              <strong>Đúng vị trí:</strong> {entry.correctPosition}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Game Area */}
      <div>
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "50px",
            marginBottom: "20px",
            color: "#be185d",
          }}
        >
          Bí Mật 4 Con Số 🔢
        </motion.h1>

        {/* Input Area */}
        {!gameComplete && !gameOver && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            {inputNumbers.map((num, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                style={{
                  width: "50px",
                  height: "50px",
                  border: selectedIndex === index ? "3px solid #be185d" : "1px solid #ccc",
                  margin: "0 10px",
                  fontSize: "24px",
                  textAlign: "center",
                  lineHeight: "50px",
                  cursor: "pointer",
                  backgroundColor: num ? "#f3f4f6" : "#fff",
                }}
              >
                {num}
              </div>
            ))}
          </div>
        )}

        {/* Number Selection */}
        {!gameComplete && !gameOver && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => handleSelectNumber(num)}
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "5px",
                  fontSize: "20px",
                  borderRadius: "5px",
                  backgroundColor: "#be185d",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {num}
              </button>
            ))}
          </div>
        )}

        {/* Clear Button */}
        {!gameComplete && !gameOver && (
          <button
            onClick={handleClearNumber}
            style={{
              fontSize: "20px",
              padding: "10px 20px",
              marginBottom: "20px",
              borderRadius: "5px",
              backgroundColor: "#ccc",
              color: "#000",
              border: "1px solid #999",
              cursor: "pointer",
            }}
          >
            Xóa Số
          </button>
        )}

        {/* Submit Button */}
        {!gameComplete && !gameOver && (
          <button
            onClick={handleGuess}
            style={{
              fontSize: "24px",
              padding: "10px 20px",
              borderRadius: "10px",
              backgroundColor: "#be185d",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Đoán
          </button>
        )}

        {/* Feedback */}
        {attempts > 0 && !gameComplete && !gameOver && (
          <div style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "24px", color: "#333" }}>
              <strong>Số đúng:</strong> {feedback.correct}
            </p>
            <p style={{ fontSize: "24px", color: "#333" }}>
              <strong>Đúng vị trí:</strong> {feedback.correctPosition}
            </p>
            <p style={{ fontSize: "20px", color: "#666" }}>
              Lượt chơi: {attempts} / 10
            </p>
          </div>
        )}

        {/* Game Complete */}
        {gameComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              marginTop: "20px",
              fontSize: "24px",
              color: "#28a745",
            }}
          >
            🎉 Chúc mừng bạn đã đoán đúng! Dãy số là:{" "}
            {secretNumbers.join("")}.
          </motion.div>
        )}

        {/* Game Over */}
        {gameOver && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              marginTop: "20px",
              fontSize: "24px",
              color: "#dc3545",
            }}
          >
            😢 Bạn đã hết lượt chơi. Dãy số bí mật là:{" "}
            {secretNumbers.join("")}.
          </motion.div>
        )}

        {/* Restart */}
        {(gameComplete || gameOver) && (
          <button
            onClick={handleRestart}
            style={{
              fontSize: "24px",
              padding: "10px 20px",
              borderRadius: "10px",
              backgroundColor: "#be185d",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Chơi lại
          </button>
        )}
      </div>
    </div>
  );
};

export default Island6;
