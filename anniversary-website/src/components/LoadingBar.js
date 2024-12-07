import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import assets and data
import rabbit from "../assets/images/components/rabbit.png";
import borderloading from "../assets/images/components/borderloading.png";
import chat from "../assets/images/components/chat.png";
import { loves } from "../components/Questions"; // Import loves array
import tingSound from "../assets/music/components/tingSound.mp3";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const [showMotion, setShowMotion] = useState(false);
  const [showFallingItems, setShowFallingItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Handle clicked item
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [timeAddedMessage, setTimeAddedMessage] = useState(""); // Message to show added time
  const [isPaused, setIsPaused] = useState(false); // Control to pause loading bar
  const [randomSent, setRandomSent] = useState(""); // Random sentence to show
  const navigate = useNavigate();

  // Generate random position for each item, avoiding the loading bar area
  const generateRandomXPosition = () => {
    let randomXPosition;
    do {
      randomXPosition = Math.random() * (window.innerWidth - 100);
    } while (randomXPosition >= 700 && randomXPosition <= 1100); // Avoid loading bar area
    return randomXPosition;
  };

  // Create falling items using the `loves` array from questions.js
  const createFallingItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * loves.length);
      const randomXPosition = generateRandomXPosition();
      items.push({ ...loves[randomIndex], x: randomXPosition, id: i });
    }
    return items;
  };

  const [items, setItems] = useState(createFallingItems());

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setProgress((oldProgress) => {
          const newProgress = oldProgress + 2.5; // Increment by 5 pixels every second
          if (newProgress >= 500) {
            clearInterval(interval);
            navigate("/preHomePage"); // Navigate after loading completes
          }
          return newProgress;
        });
      }
    }, 1000);

    const motionTimeout = setTimeout(() => {
      setShowMotion(true);
    }, 2000);

    // Display falling items after 3 seconds
    const fallingItemsTimeout = setTimeout(() => {
      setShowFallingItems(true);
      setItems(createFallingItems()); // Recreate falling items
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(motionTimeout);
      clearTimeout(fallingItemsTimeout);
    };
  }, [navigate, isPaused]);

  const handleItemClick = (item) => {
    const tingAudio = new Audio(tingSound);
    tingAudio.volume = 0.2;
    tingAudio.play();
    setSelectedItem(item);
    const randomSentence =
      item.sent[Math.floor(Math.random() * item.sent.length)];
    setRandomSent(randomSentence); // Set a new random sentence
    setIsModalOpen(true);
    setIsPaused(true); // Pause the loading bar when the modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPaused(false); // Resume the loading bar after closing the modal

    // Add the time and show message
    const addedTime = selectedItem.value * 10;
    setProgress((oldProgress) => Math.min(oldProgress + addedTime, 500));

    // Set the message to show
    setTimeAddedMessage(`+${addedTime / 10}s ${selectedItem.concept}`);

    // Hide the message after 2.5 seconds
    setTimeout(() => {
      setTimeAddedMessage("");
    }, 2000);
  };

  const percentage = Math.min(Math.round((progress / 500) * 100), 100);

  // Update position for a new fall cycle
  const resetItemPosition = (item) => {
    const newXPosition = generateRandomXPosition();
    return { ...item, x: newXPosition };
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          top: "50px",
          width: "500px",
          height: "20px",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Loading bar */}
        <div
          style={{
            height: "100%",
            backgroundColor: "#F0A8D0",
            width: `${progress}px`,
            transition: "width 1s ease-in-out",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "540px",
          fontFamily: "Boris",
          fontSize: "20px",
          color: "#333",
        }}
      >
        Loading...{percentage}%
      </div>

      {/* Add Time Notification after closing modal */}
      {timeAddedMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "580px",
            fontFamily: "Boris",
            fontSize: "24px",
            color: "#F05A7E",
            zIndex: 11,
          }}
        >
          {timeAddedMessage}
        </motion.div>
      )}

      <img
        src={rabbit}
        alt="Rabbit"
        style={{
          position: "absolute",
          top: "430px",
          left: `${690 + progress}px`,
          zIndex: 10,
          width: "70px",
          transition: "left 1s ease-in-out",
        }}
      />

      {/* Border and message */}
      {showMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            position: "absolute",
            top: "-95px",
            left: "680px",
            width: "550px",
            zIndex: 3,
          }}
        >
          <img
            src={borderloading}
            alt="borderloading"
            style={{ width: "100%" }}
          />
          <p
            className="absolute text-center text-pink-700 ml-40"
            style={{ top: "195px", fontFamily: "Boris", fontSize: "21px" }}
          >
            Bé yêu chờ chút nhooo🧡 <br /> Bắt lấy tình yêu của chồng <br /> để
            nhanh hơn nèee!😉
          </p>
        </motion.div>
      )}

      {/* Falling items after 3 seconds */}
      {showFallingItems &&
        items.map((item) => (
          <motion.img
            key={item.id}
            src={item.image} // Use the image from the `loves` array
            alt={`falling-item-${item.id}`}
            style={{
              position: "absolute",
              top: "-100px",
              left: `${item.x}px`,
              width: "130px",
              zIndex: 10,
              cursor: "pointer",
            }}
            animate={{ y: [-100, 1400] }}
            transition={{
              duration: Math.random() * 8 + 4, // Random fall duration
              repeat: Infinity,
              onRepeat: () =>
                setItems((prevItems) =>
                  prevItems.map((prevItem) =>
                    prevItem.id === item.id
                      ? resetItemPosition(prevItem)
                      : prevItem
                  )
                ),
              delay: Math.random() * 3, // Random delay for staggered falls
            }}
            onClick={() => handleItemClick(item)} // Handle item click
          />
        ))}

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closeModal}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Chat Image */}
            <img
              src={chat}
              alt="chat-modal"
              style={{ width: "500px", height: "auto" }}
            />

            {/* Chat Text */}
            <p
              style={{
                position: "absolute",
                top: "40%",
                left: "42.3%",
                fontFamily: "Boris",
                fontSize: "30px",
                maxWidth: "15%",
                textAlign: "center",
                wordWrap: "break-word",
                lineHeight: "1.5",
              }}
            >
              {randomSent} {/* Show the selected random sentence */}
            </p>

            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "30%",
                left: "39.5%",
                fontSize: "20px",
                opacity: 0,
              }}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LoadingBar;
