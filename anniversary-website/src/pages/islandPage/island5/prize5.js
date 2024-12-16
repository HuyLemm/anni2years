import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import {
  saveLove,
  savePhoto,
  getLoveArchive,
  getPhotoArchive,
} from "../../../components/Archive";

import messages from "../../../components/Messages";
import Archive from "../../../components/Archive";

const Prize5 = () => {
  const navigate = useNavigate();
  const [activePopup, setActivePopup] = useState(null);
  const [completedSteps, setCompletedSteps] = useState({
    love: true,
    photo: false,
    story: false,
  });

  const [loveData, setLoveData] = useState(getLoveArchive());
  const [photoData, setPhotoData] = useState(getPhotoArchive());

  const [showCongrats, setShowCongrats] = useState(false);
  const [showBoard, setShowBoard] = useState(false);
  const [showArchive, setShowArchive] = useState(false); // State để điều khiển hiển thị

  // Hiển thị dòng chúc mừng sau 0.5 giây
  useEffect(() => {
    const timer1 = setTimeout(() => setShowCongrats(true), 500);
    const timer2 = setTimeout(() => setShowBoard(true), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const closePopup = () => {
    const currentMessage = messages.find(
      (msg, index) =>
        (index === 12 && activePopup === "love") ||
        (index === 13 && activePopup === "photo") ||
        (index === 14 && activePopup === "story")
    );

    if (currentMessage) {
      const { description, content } = currentMessage;

      if (activePopup === "love") {
        saveLove(description, content);
        setLoveData([
          ...loveData,
          {
            id: Date.now(),
            description,
            timestamp: new Date().toLocaleString(),
          },
        ]);
        setCompletedSteps((prev) => ({ ...prev, love: true, photo: true }));
      }

      if (activePopup === "photo") {
        savePhoto(description, content);
        setPhotoData([
          ...photoData,
          {
            id: Date.now(),
            description,
            timestamp: new Date().toLocaleString(),
          },
        ]);
        setCompletedSteps((prev) => ({ ...prev, photo: true, story: true }));
      }

      if (activePopup === "story") {
        setCompletedSteps((prev) => ({ ...prev, story: true }));
      }
    }

    setActivePopup(null);
  };

  const renderPopup = () => {
    const currentMessage = messages.find(
      (msg, index) =>
        (index === 12 && activePopup === "love") ||
        (index === 13 && activePopup === "photo") ||
        (index === 14 && activePopup === "story")
    );

    if (!currentMessage) return null;

    const { description, content } = currentMessage;

    return (
      <AnimatePresence>
        <motion.div
          key="popup"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "24px",
            position: "absolute",
            top: "27%",
            left: "38%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
            zIndex: 100,
            width: "500px",
            height: "300px",
            textAlign: "center",
            fontWeight: "lighter",
          }}
        >
          <h2
            style={{
              fontWeight: "bold",
              color: "#be185d",
              marginBottom: "10px",
              fontSize: "26px",
            }}
          >
            {description}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: content }} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              onClick={closePopup}
              style={{
                padding: "10px 20px",
                fontSize: "20px",
                borderRadius: "10px",
                backgroundColor: "#be185d",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Close
            </button>
            {activePopup === "story" && (
              <button
                onClick={() => navigate("/story5")}
                style={{
                  padding: "10px 20px",
                  fontSize: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Explore
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  const getButtonStyle = (step, nextStep) => {
    const isActive = !completedSteps[nextStep] && completedSteps[step];
    const isCurrentPopup = activePopup === step;

    if (isCurrentPopup) {
      return { cursor: "pointer", color: "#be185d", lineHeight: "4" };
    }

    return isActive
      ? {
          animation: "blinkingText 1s infinite",
          cursor: "pointer",
          color: "#be185d",
          lineHeight: "3",
          display: "inline-block",
        }
      : completedSteps[step]
      ? { cursor: "pointer", color: "#333", lineHeight: "4" }
      : { cursor: "not-allowed", color: "grey", lineHeight: "4" };
  };

  return (
    <div
      style={{
        top: "15px",
        position: "absolute",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
        backgroundColor: "#fce7f3",
        fontFamily: "Boris",
        position: "relative",
        fontWeight: "bold",
      }}
    >
      {showCongrats && (
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "40px",
            color: "#be185d",
            marginBottom: "20px",
          }}
        >
          Chúc mừng bé yêu <br /> 🎁 đã nhận được giải thưởng nhooo! 🎁
        </motion.h1>
      )}
      {showBoard && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            top: "24%",
            left: "29%",
            display: "fixed",
            position: "absolute",
            width: "800px",
            height: "400px",
            fontSize: "28px",
            color: "#333",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            lineHeight: "4",
          }}
        >
          <p
            onClick={() =>
              completedSteps.love && !activePopup && setActivePopup("love")
            }
            style={getButtonStyle("love", "photo")}
          >
            <strong>1. Gift number 1:</strong>{" "}
            {completedSteps.love ? `Đi ăn tối "làm" bữa tối cho vợ 🍜` : "🔒"}
          </p>
          <p
            onClick={() =>
              completedSteps.photo && !activePopup && setActivePopup("photo")
            }
            style={getButtonStyle("photo", "story")}
          >
            <strong>2. Gift number 2:</strong>{" "}
            {completedSteps.photo ? "Vợ có một vé đi ăn tối ùi nè❤️" : "🔒"}
          </p>
          <p
            onClick={() =>
              completedSteps.story && !activePopup && setActivePopup("story")
            }
            style={getButtonStyle("story", null)}
          >
            <strong>3. Gift number 3:</strong>{" "}
            {completedSteps.story ? "With Alvin's lò vé 💌" : "🔒"}
          </p>
        </motion.div>
      )}
      {renderPopup()}
      {/* Nút mở Archive */}
      <button
        onClick={() => setShowArchive(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#fff",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "20px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        📂
      </button>
      {showArchive && (
        <div
          style={{
            position: "fixed",
            top: "10%",
            left: "10%",
            width: "80%",
            height: "80%",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "30px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "90%",
              height: "90%",
              backgroundColor: "#fff",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setShowArchive(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "#ccc",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              ✖️
            </button>
            <Archive />
          </div>
        </div>
      )}
      <style>
        {`
          @keyframes blinkingText {
            0% { font-size: 28px; }
            50% { font-size: 30px; }
            100% { font-size: 28px; }
          }
        `}
      </style>
    </div>
  );
};

export default Prize5;
