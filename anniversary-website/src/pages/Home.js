import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import softPiano from '../assets/music/softPiano.mp3';
import birdsImage from '../assets/images/birdImage.png'; // Import the birds image
import treeImage from '../assets/images/treeImage.png'; // Import the tree image
import usImage from '../assets/images/usImage.png'; // Import the us image
import palace from '../assets/images/palace.png';
import loveballoon from '../assets/images/loveballoon.png';
import cloud from '../assets/images/cloud.png';
import paper from '../assets/images/paper.png';


const questions = [
  {
    question: "Ngày đầu tiên chúng ta gặp nhau là ngày nào?",
    options: ["A. 1/1/2022", "B. 17/12/2022", "C. 25/12/2021", "D. 14/2/2022"],
    correct: "B. 17/12/2022",
  },
  {
    question: "Alvin thích món ăn nào nhất?",
    options: ["A. Pizza", "B. Sushi", "C. Bánh mì", "D. Bún bò"],
    correct: "A. Pizza",
  },
  {
    question: "Địa điểm đầu tiên chúng ta đi chơi cùng nhau?",
    options: ["A. Công viên", "B. Rạp chiếu phim", "C. Quán cà phê", "D. Nhà sách"],
    correct: "C. Quán cà phê",
  },
];

const Home = () => {
  const [step, setStep] = useState(0);
  const audioRef = useRef(null); // Create a reference for the audio

  useEffect(() => {
    let timer;

    const handleStepTransition = (nextStep, delay) => {
      timer = setTimeout(() => {
        setStep(nextStep);
      }, delay);
    };

    if (step === 0) {
      handleStepTransition(1, 2000);
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

    // Add event listener for any user interaction
    window.addEventListener('click', playAudio);

    

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', playAudio);
    }
  }, [step]);

  const handleAnswer = (index, answer) => {
    if (answer === questions[index].correct) {
      setStep(step + 1);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-pink-50">

      {/* Audio player for background music */}
      <audio ref={audioRef} src={softPiano} autoPlay loop volume="0.5" />

      {/* Birds decoration */}
      <img
        src={birdsImage}
        alt="Birds on a branch"
        className="absolute"
        style={{
          top:'-10px',
          right: '0px',
          width: '150px', // Adjust the size as needed
          zIndex: 1, // Ensure it appears above background but below text

        }}
      />

      {/* Tree decoration */}
      <img
        src={treeImage}
        alt="Tree"
        className="absolute"
        style={{
          top:'-2px',
          left: '0px',
          width: '515px', // Adjust the size as needed
          zIndex: 1, // Ensure it appears above background but below text
        }}
      />

      {/* Us Image */}
      <img
        src={usImage}
        alt="Us"
        className="absolute"
        style={{  
          bottom:'-20px',
          left: '70px',
          width: '300px', // Adjust the size as needed
          zIndex: 1, // Ensure it appears above background but below text
        }}
      />

       {/* Palace Image */}
       <img
        src={palace}
        alt="palace"
        className="absolute"
        style={{  
          bottom:'-50px',
          right: '20px',
          width: '550px', // Adjust the size as needed
          zIndex: 1, // Ensure it appears above background but below text
        }}
      />

      {/* Balloon Image */}
      <img
        src={loveballoon}
        alt="loveballoon"
        className="absolute"
        style={{  
          bottom:'300px',
          right: '30px',
          width: '100px', // Adjust the size as needed
          zIndex: 1, // Ensure it appears above background but below text
        }}
      />

        {/* Paper Image */}
      <img
        src={paper}
        alt="paper"
        className="absolute"
        style={{  
          top:'-10px',
          right: '400px',
          width: '130px', // Adjust the size as needed
          zIndex: 1, // Ensure it appears above background but below text
        }}
      />
      {/* Cloud Image */}
      <img
        src={cloud}
        alt="cloud"
        className="absolute"
        style={{  
          top:'-70px',
          right: '1100px',
          width: '300px', // Adjust the size as needed
          zIndex: 1, // Ensure it appears above background but below text
        }}
      />


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
            <h1 className="text-4xl font-bold text-pink-700" style={{ fontSize: '55px', fontFamily: 'Hoasen' }}>
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
    </div>
  );
};

export default Home;
