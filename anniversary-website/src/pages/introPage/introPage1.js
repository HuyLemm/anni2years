import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useAudioManager } from "../../components/AudioManager";
import { questions } from "../../components/Questions";

import softPiano from "../../assets/music/introPage/softPiano.mp3";
import correctSound from "../../assets/music/introPage/correctSound.mp3";
import wrongSound from "../../assets/music/introPage/wrongSound.mp3";
import tadaSound from "../../assets/music/introPage/tadaSound.mp3";
import beepSound from "../../assets/music/introPage/beepSound.mp3";
import chillSound from "../../assets/music/introPage/chillSound.mp3";

import birdsImage from "../../assets/images/introPage/introPage1/birdImage.png";
import treeImage from "../../assets/images/introPage/introPage1/treeImage.png";
import usImage from "../../assets/images/introPage/introPage1/usImage.png";
import palace from "../../assets/images/introPage/introPage1/palace.png";
import loveballoon from "../../assets/images/introPage/introPage1/loveballoon.png";
import cloud from "../../assets/images/introPage/introPage1/cloud.png";
import paper from "../../assets/images/introPage/introPage1/paper.png";
import doorClosed from "../../assets/images/introPage/introPage1/door.png";
import doorOpen from "../../assets/images/introPage/introPage1/opendoor.png";
import wronganswer from "../../assets/images/introPage/introPage1/wronganswer.png";
import border from "../../assets/images/introPage/introPage1/border.png";
import arrow from "../../assets/images/introPage/introPage1/arrow.png";
import button from "../../assets/images/introPage/introPage1/button.png";
import road from "../../assets/images/introPage/introPage1/road.png";
import racing from "../../assets/images/introPage/introPage1/racing.png";
import paoi from "../../assets/images/introPage/introPage1/paoi.png";
import alvin from "../../assets/images/introPage/introPage1/alvin.png";
import alvinthink from "../../assets/images/introPage/introPage1/alvinthink.png";
import paoithink from "../../assets/images/introPage/introPage1/paoithink.png";

const Intro1 = () => {
  const [step, setStep] = useState(0);
  const [doorOpenState, setDoorOpenState] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showWrongImage, setShowWrongImage] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showRoad, setShowRoad] = useState(false);
  const [bikeRacing, setBikeRacing] = useState(false);

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const { playAudio } = useAudioManager();

  const navigate = useNavigate();
  const softPianoAudio = useRef(new Audio(softPiano));

  useEffect(() => {
    let timer;

    const handleStepTransition = (nextStep, delay) => {
      timer = setTimeout(() => {
        setStep(nextStep);
      }, delay);
    };

    // Kiểm soát luồng hiển thị dựa trên step
    if (doorOpenState && showContent) {
      if (step === 0) {
        // Hiển thị "Chào mừng đến với Xứ sở Tình yêu!" trong 4 giây
        handleStepTransition(1, 4000);
      } else if (step === 1) {
        // Hiển thị "Trước khi vào, trả lời giúp anh vài câu hỏi" trong 4.5 giây
        handleStepTransition(2, 4500);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, [step, doorOpenState, showContent]);

  // Function to handle door click event
  const handleDoorClick = () => {
    setShowAuthModal(true);
  };

  const handleAuthSubmit = () => {
    if (username === "Paoicute" && password === "Paoiyeualvin1712") {
      softPianoAudio.current.volume = 1;
      softPianoAudio.current.loop = true;
      softPianoAudio.current.play();
      setDoorOpenState(true);
      setShowAuthModal(false);
      setStep(0); // Reset step về 0 khi cửa mở
      setTimeout(() => {
        setShowContent(true);
      }, 1500);
    } else {
      setAuthError("Invalid username or password. Please try again.");
    }
  };

  // Function to handle answer selection
  const handleAnswer = (index, answer) => {
    if (answer === questions[index].correct) {
      const correctAudio = new Audio(correctSound);
      correctAudio.volume = 0.2;
      correctAudio.play();

      setStep(step + 1);
    } else {
      const wrongAudio = new Audio(wrongSound);
      wrongAudio.volume = 0.2;
      wrongAudio.play();

      setShowWrongImage(true);
      setTimeout(() => {
        setShowWrongImage(false);
      }, 1500);
    }
  };

  // Function to handle button click
  const handleButtonClick = () => {
    setButtonClicked(true);
    setShowRoad(true);
    setBikeRacing(true);

    if (softPianoAudio.current) {
      softPianoAudio.current.pause();
      softPianoAudio.current.currentTime = 0;
    }

    const beepAudio = new Audio(beepSound);
    beepAudio.volume = 0.2;
    beepAudio.play();

    playAudio(chillSound);
  };

  return (
    <div
      className="h-screen flex items-center justify-center  relative"
      style={{ overflow: "hidden" }}
    >
      {showAuthModal && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
          style={{ fontFamily: "Boris", fontSize: "20px" }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2
              className="text-xl font-bold mb-4 text-center text-pink-700"
              style={{ fontSize: "27px" }}
            >
              Xác thực vợ yêu Paoi 👩‍❤️‍👨
            </h2>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Enter password"
              />
            </div>
            {authError && (
              <p className="text-red-500 text-sm mb-4">{authError}</p>
            )}
            <div className="flex justify-between">
              <button
                onClick={handleAuthSubmit}
                className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
              >
                Submit
              </button>
              <button
                onClick={() => setShowAuthModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {!showContent && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {/* Display paoi */}
          {!doorOpenState && (
            <motion.img
              src={paoi}
              alt="Paoi"
              className="absolute"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                bottom: "100px",
                left: "560px",
                width: "150px",
                zIndex: 10,
              }}
            />
          )}

          {!doorOpenState && (
            <motion.img
              src={paoithink}
              alt="Paoithink"
              className="absolute"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                bottom: "250px",
                left: "220px",
                width: "400px",
                zIndex: 10,
              }}
            />
          )}

          {!doorOpenState && (
            <p
              className="absolute text-center text-pink-700"
              style={{
                bottom: "390px",
                left: "295px",
                fontSize: "21px",
                zIndex: 11,
                fontFamily: "Boris",
                lineHeight: "1.5",
                letterSpacing: "0.05em",
              }} // Điều chỉnh vị trí và style tùy ý
            >
              Troy oy dễ thưn quó! <br /> Phải up Locket huiiii <br />
              😍
            </p>
          )}

          {/* Display Alvin */}
          {!doorOpenState && (
            <motion.img
              src={alvinthink}
              alt="alvinthink"
              className="absolute"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                bottom: "180px",
                right: "-50px",
                width: "400px",
                zIndex: 10,
              }}
            />
          )}

          {!doorOpenState && (
            <p
              className="absolute text-center text-pink-700"
              style={{
                bottom: "325px",
                right: "70px",
                fontSize: "21px",
                zIndex: 11,
                fontFamily: "Boris",
                lineHeight: "1.5",
                letterSpacing: "0.05em",
              }} // Điều chỉnh vị trí và style tùy ý
            >
              Alvin's watching u <br /> Muahahaha <br /> 💘
            </p>
          )}

          {!doorOpenState && (
            <motion.img
              src={alvin}
              alt="alvin"
              className="absolute"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                bottom: "0px",
                right: "0px",
                width: "200px",
                zIndex: 10,
              }}
            />
          )}

          {!doorOpenState && (
            <motion.img
              src={doorClosed}
              alt="Closed Door"
              onClick={handleDoorClick}
              className="cursor-pointer"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ width: "500px", zIndex: 10 }}
            />
          )}
          {/* Display open door once clicked */}
          {doorOpenState && (
            <motion.img
              src={doorOpen}
              alt="Open Door"
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ width: "500px", zIndex: 9 }}
            />
          )}
        </div>
      )}

      {/* Show wrong answer image if wrong answer selected */}
      {showWrongImage && (
        <motion.img
          src={wronganswer}
          alt="Wrong Answer"
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            top: "300px",
            right: "400px",
            transform: "translateX(-50%)",
            width: "200px",
            zIndex: 15,
          }}
        />
      )}

      {/* Show main content after the door opens */}
      {showContent && (
        <>
          {/* Birds decoration */}
          <img
            src={birdsImage}
            alt="Birds on a branch"
            className="absolute"
            style={{ top: "-10px", right: "0px", width: "150px", zIndex: 1 }}
          />

          {/* Tree decoration */}
          <img
            src={treeImage}
            alt="Tree"
            className="absolute"
            style={{ top: "-2px", left: "0px", width: "515px", zIndex: 1 }}
          />

          {/* Us Image */}
          <img
            src={usImage}
            alt="Us"
            className="absolute"
            style={{ bottom: "-20px", left: "70px", width: "300px", zIndex: 1 }}
          />

          {/* Text above the Palace Image */}
          <h2
            className="absolute text-pink-700 font-bold"
            style={{
              bottom: "5px",
              right: "200px",
              fontSize: "30px",
              fontFamily: "Hatton-Regular",
              zIndex: 2,
            }}
          >
            Land of Love
          </h2>

          {/* Palace Image */}
          <img
            src={palace}
            alt="palace"
            className="absolute"
            style={{
              bottom: "-10px",
              right: "20px",
              width: "550px",
              zIndex: 1,
            }}
          />

          {/* Balloon Image */}
          <img
            src={loveballoon}
            alt="loveballoon"
            className="absolute"
            style={{
              bottom: "350px",
              right: "30px",
              width: "100px",
              zIndex: 1,
            }}
          />

          {/* Paper Image */}
          <img
            src={paper}
            alt="paper"
            className="absolute"
            style={{ top: "-10px", right: "400px", width: "130px", zIndex: 1 }}
          />

          {/* Cloud Image */}
          <img
            src={cloud}
            alt="cloud"
            className="absolute"
            style={{ top: "-70px", right: "1100px", width: "300px", zIndex: 1 }}
          />

          {/* AnimatePresence for further steps */}
          {showContent && (
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                  className="absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <h1
                    className="text-4xl font-bold text-pink-700"
                    style={{ fontSize: "53px", fontFamily: "Hoasen" }}
                  >
                    Chào mừng đến với Xứ sở Tình yêu!🌷
                  </h1>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 3.5 }}
                  className="absolute flex items-center justify-center text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <p
                    className="text-lg text-pink-700"
                    style={{
                      fontSize: "40px",
                      fontFamily: "Hoasen",
                      lineHeight: "1.5",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Trước khi vào, trả lời giúp anh vài câu hỏi để xem em có
                    đúng là
                    <br />
                    <strong>Paoi yêu dấu của Alvin</strong> hong nho!💓
                  </p>
                </motion.div>
              )}

              {step >= 2 && step < 2 + questions.length && (
                <motion.div
                  key={`question-${step - 2}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute rounded-lg shadow-paper bg-white p-8 w-full max-w-lg text-center flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    display: "grid",
                    gridTemplateRows: "auto 1fr",
                    border: "2px dashed #d3d3d3",
                    backgroundImage:
                      "linear-gradient(to bottom right, #fffbe7, #f8e1a4)",
                    boxShadow:
                      "10px 10px 20px rgba(0, 0, 0, 0.1), -10px -10px 20px rgba(255, 255, 255, 0.5)",
                    width: "100%",
                    maxWidth: "600px",
                    maxHeight: "600px",
                  }}
                >
                  <div
                    className="w-full flex justify-center items-center relative"
                    style={{
                      background: "#8B4513",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      height: "30px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      marginTop: "-40px",
                      width: "600px",
                    }}
                  >
                    <div
                      className="absolute -top-3 flex gap-4"
                      style={{ left: "10%", right: "10%" }}
                    >
                      <div
                        className="w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-500"
                        style={{
                          background: "#f1c40f",
                          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                        }}
                      ></div>
                      <div
                        className="w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-500"
                        style={{
                          background: "#e74c3c",
                          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                        }}
                      ></div>
                      <div
                        className="w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-500"
                        style={{
                          background: "#3498db",
                          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    className="w-full flex flex-col items-center justify-center p-6"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #fffbe7, #f8e1a4)",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      width: "100%",
                    }}
                  >
                    <h2
                      className="text-lg font-semibold mb-10"
                      style={{
                        fontSize: "37px",
                        fontFamily: "Hatton-Regular",
                        lineHeight: "1.2",
                      }}
                    >
                      {questions[step - 2].question}
                    </h2>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                      {questions[step - 2].options.map((option) => (
                        <button
                          key={option}
                          className="py-2 px-5 border rounded-md bg-gradient-to-r from-pink-100 to-pink-200 shadow-md hover:shadow-pink-300 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center"
                          onClick={() => handleAnswer(step - 2, option)}
                          style={{
                            fontSize: "24px",
                            color: "#d63384",
                            border: "2px solid #f48fb1",
                            borderRadius: "20px",
                            minWidth: "250px",
                            height: "100px",
                            fontWeight: "bold",
                          }}
                        >
                          🌸 {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 + questions.length && (
                <motion.div
                  key="next"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  onAnimationStart={() => {
                    const tadaAudio = new Audio(tadaSound);
                    tadaAudio.volume = 0.1;
                    tadaAudio.play();
                  }}
                  style={{ zIndex: 3, top: "330px" }}
                >
                  {/* Group border and text together in the same position */}
                  <div className="relative flex items-center justify-center">
                    {/* Border Image */}
                    <img
                      src={border}
                      alt="border"
                      style={{ width: "460px", height: "370px", zIndex: 2 }}
                    />

                    {/* Text positioned perfectly within the border */}
                    <h2
                      className="absolute text-center text-pink-700"
                      style={{
                        fontSize: "21px",
                        fontFamily: "Boris",
                        lineHeight: "1.5",
                        letterSpacing: "0.05em",
                        zIndex: 3,
                      }}
                    >
                      Em đúng là vợ yêu của anh òi. <br /> Anh sẽ dẫn em đi tham
                      quan <br />
                      xứ sở của tụi mình nhé bby 💕
                    </h2>
                  </div>

                  {/* Arrow Image */}
                  <img
                    src={arrow}
                    alt="arrow"
                    className="absolute"
                    style={{ top: "250px", left: "350px", width: "150px" }}
                  />

                  {/* Button Image with flashing effect until clicked */}
                  <motion.img
                    src={button}
                    alt="button"
                    className="absolute cursor-pointer"
                    style={{
                      top: "320px",
                      left: "310px",
                      width: "70px",
                      animation: !buttonClicked ? "flash 1s infinite" : "none",
                      zIndex: 3,
                    }}
                    onClick={handleButtonClick}
                  />

                  {/* Road Image */}
                  {showRoad && (
                    <img
                      src={road}
                      alt="road"
                      className="absolute"
                      style={{
                        top: "280px",
                        left: "175px",
                        width: "500px",
                        zIndex: 4,
                      }}
                    />
                  )}

                  {/* Racing Bike Animation - Moving from A to B vertically, then to C horizontally */}
                  {bikeRacing && (
                    <motion.img
                      src={racing}
                      alt="racing"
                      className="absolute"
                      initial={{ x: "0px", y: "-100px" }}
                      animate={{
                        x: ["0px", "0px", "330px"], // 3rd
                        y: ["-100px", "230px", "230px"], // 2nd
                        rotate: [0, -5, 5, -5, 0],
                      }}
                      transition={{
                        duration: 6,
                        ease: "easeInOut",
                        onComplete: () => {
                          navigate("/intro2");
                        },
                      }}
                      style={{
                        top: "350px",
                        left: "200px",
                        width: "100px",
                        zIndex: 5,
                      }}
                    />
                  )}
                </motion.div>
              )}

              <style>
                {`
              @keyframes flash {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
              }
            `}
              </style>
            </AnimatePresence>
          )}
        </>
      )}
    </div>
  );
};

export default Intro1;
