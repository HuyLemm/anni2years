import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import softPiano from '../assets/music/intro/softPiano.mp3';
import birdsImage from '../assets/images/intro/birdImage.png'; // Import the birds image
import treeImage from '../assets/images/intro/treeImage.png'; // Import the tree image
import usImage from '../assets/images/intro/usImage.png'; // Import the us image
import palace from '../assets/images/intro/palace.png';
import loveballoon from '../assets/images/intro/loveballoon.png';
import cloud from '../assets/images/intro/cloud.png';
import paper from '../assets/images/intro/paper.png';
import doorClosed from '../assets/images/intro/door.png';
import doorOpen from '../assets/images/intro/opendoor.png';
import wronganswer from '../assets/images/intro/wronganswer.png';
import correctSound from '../assets/music/intro/correctSound.mp3';
import wrongSound from '../assets/music/intro/wrongSound.mp3';

const questions = [
  {
    question: "Ngày đầu tiên chúng mình yêu nhau là ngày nào ó?",
    options: ["A. 1/1/2022", "B. 17/12/2022", "C. 25/12/2021", "D. 14/2/2022"],
    correct: "B. 17/12/2022",
  },
  {
    question: "Alvin thích món ăn nào nhất?",
    options: ["A. Cá kèo", "B. Sushi", "C. Bún đậu", "D. Bánh Pao"],
    correct: "D. Bánh Pao",
  },
  {
    question: "Chỗ đầu tiên chúng mình tiếp xúc nhau?",
    options: ["A. Quán net", "B. Công viên", "C. Quán cà phê", "D. Nhà sách"],
    correct: "A. Quán net",
  },
];

const Intro = () => {
  const [step, setStep] = useState(0);
  const [doorOpenState, setDoorOpenState] = useState(false); // State to control the door
  const [showContent, setShowContent] = useState(false); // State to control when to show main content
  const [showWrongImage, setShowWrongImage] = useState(false); // State to show wrong answer image
  const audioRef = useRef(null);
  const correctSoundRef = useRef(null);
  const wrongSoundRef = useRef(null);

  useEffect(() => {
    let timer;

    const handleStepTransition = (nextStep, delay) => {
      timer = setTimeout(() => {
        setStep(nextStep);
      }, delay);
    };

    if (step === 0) {
      handleStepTransition(1, 4000);
    } else if (step === 1) {
      handleStepTransition(2, 4500);
    }

    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log('Autoplay blocked, trying after user interaction:', error);
        });
      }
    };

    window.addEventListener('click', playAudio);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', playAudio);
    };
  }, [step]);

  // Function to handle door click event
  const handleDoorClick = () => {
    setDoorOpenState(true);
    setTimeout(() => {
        setShowContent(true);
    }, 1500); // This timing matches the exit transition duration of the open door
};


  // Function to handle answer selection
  const handleAnswer = (index, answer) => {
    if (answer === questions[index].correct) {
      // Play correct sound
      if (correctSoundRef.current) {
        correctSoundRef.current.play();
      }
      setStep(step + 1); // Move to the next question
    } else {
      // Play wrong sound and show wrong image for 1 second
      if (wrongSoundRef.current) {
        wrongSoundRef.current.play();
      }
      setShowWrongImage(true);
      setTimeout(() => {
        setShowWrongImage(false);
      }, 1500); // Show the wrong answer image for 1 second
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-pink-50 relative" style={{ overflow: 'hidden' }}>
      <audio ref={audioRef} src={softPiano} loop volume="0.5" />
      <audio ref={correctSoundRef} src={correctSound} volume="0.2" />
      <audio ref={wrongSoundRef} src={wrongSound} volume="0.2" />

      {!showContent && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {/* Display closed door initially */}
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
              style={{
                width: '500px', 
                zIndex: 10, 
              }}
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
              exit={{ opacity: 0}} 
              transition={{ duration: 0.5 }} 
              style={{
                width: '500px',
                zIndex: 9, 
              }}
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
            top: '300px',
            right: '400px',
            transform: 'translateX(-50%)',
            width: '200px',
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
            style={{
              top: '-10px',
              right: '0px',
              width: '150px',
              zIndex: 1,
            }}
          />

          {/* Tree decoration */}
          <img
            src={treeImage}
            alt="Tree"
            className="absolute"
            style={{
              top: '-2px',
              left: '0px',
              width: '515px',
              zIndex: 1,
            }}
          />

          {/* Us Image */}
          <img
            src={usImage}
            alt="Us"
            className="absolute"
            style={{
              bottom: '-20px',
              left: '70px',
              width: '300px',
              zIndex: 1,
            }}
          />

          {/* Text above the Palace Image */}
          <h2
            className="absolute text-pink-700 font-bold"
            style={{
              bottom: '5px', // Position this just above the palace
              right: '200px', // Adjust this to position centrally over the palace
              fontSize: '30px', // Adjust the size as needed
              fontFamily: 'Hatton-Regular', // Make sure the font matches your design
              zIndex: 2, // Ensure it's above the palace image
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
              bottom: '-10px',
              right: '20px',
              width: '550px',
              zIndex: 1,
            }}
          />

          {/* Balloon Image */}
          <img
            src={loveballoon}
            alt="loveballoon"
            className="absolute"
            style={{
              bottom: '350px',
              right: '30px',
              width: '100px',
              zIndex: 1,
            }}
          />

          {/* Paper Image */}
          <img
            src={paper}
            alt="paper"
            className="absolute"
            style={{
              top: '-10px',
              right: '400px',
              width: '130px',
              zIndex: 1,
            }}
          />

          {/* Cloud Image */}
          <img
            src={cloud}
            alt="cloud"
            className="absolute"
            style={{
              top: '-70px',
              right: '1100px',
              width: '300px',
              zIndex: 1,
            }}
          />

          {/* AnimatePresence for further steps */}
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
                  style={{ fontSize: '55px', fontFamily: 'Hoasen' }}
                >
                  Chào mừng đến với Xứ sở Tình yêu!
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
                    fontSize: '40px',
                    fontFamily: 'Hoasen',
                    lineHeight: '1.5',
                    letterSpacing: '0.05em',
                  }}
                >
                  Trước khi vào, trả lời giúp anh vài câu hỏi để xem em có đúng là<br />
                  <strong>Paoi yêu dấu của Alvin</strong> hong nho!
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
                  display: 'grid',
                  gridTemplateRows: 'auto 1fr',
                  border: '2px dashed #d3d3d3',
                  backgroundImage: 'linear-gradient(to bottom right, #fffbe7, #f8e1a4)',
                  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1), -10px -10px 20px rgba(255, 255, 255, 0.5)',
                  width: '100%',
                  maxWidth: '600px',
                  maxHeight: '600px',
                }}
              >
                <div
                  className="w-full flex justify-center items-center relative"
                  style={{
                    background: '#8B4513',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    height: '30px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    marginTop: '-40px',
                    width: '600px',
                  }}
                >
                  <div className="absolute -top-3 flex gap-4" style={{ left: '10%', right: '10%' }}>
                    <div
                      className="w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-500"
                      style={{
                        background: '#f1c40f',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                      }}
                    ></div>
                    <div
                      className="w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-500"
                      style={{
                        background: '#e74c3c',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                      }}
                    ></div>
                    <div
                      className="w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-500"
                      style={{
                        background: '#3498db',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  className="w-full flex flex-col items-center justify-center p-6"
                  style={{
                    background: 'linear-gradient(to bottom right, #fffbe7, #f8e1a4)',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px',
                    width: '100%',
                  }}
                >
                  <h2
                    className="text-lg font-semibold mb-10"
                    style={{ fontSize: '37px', fontFamily: 'Hatton-Regular', lineHeight: '1.2' }}
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
                          fontSize: '24px',
                          color: '#d63384',
                          border: '2px solid #f48fb1',
                          borderRadius: '20px',
                          minWidth: '250px',
                          height: '100px',
                          fontWeight: 'bold',
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
              <motion.button
                key="next"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={() => alert("Chuyển đến Xứ sở Tình yêu!")}
                style={{ fontSize: 'YOUR_FONT_SIZE', fontFamily: 'YOUR_FONT_FAMILY' }}
              >
                Khám phá Xứ sở Tình yêu
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default Intro;