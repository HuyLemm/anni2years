import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAudioManager } from "../../components/AudioManager";
import Archive from "../../components/Archive";
import paoi from "../../assets/images/homePage/homePage/paoi.png";

import gapgo from "../../assets/images/homePage/homePage/gapgo.png";
import anni from "../../assets/images/homePage/homePage/anni.png";
import twoyears from "../../assets/images/homePage/homePage/twoyears.png";
import tuonglai from "../../assets/images/homePage/homePage/tuonglai.png";
import tamthiepcuoi from "../../assets/images/homePage/homePage/tamthiepcuoi.png";
import loinhangui from "../../assets/images/homePage/homePage/loinhangui.png";
import road from "../../assets/images/homePage/homePage/road.png";

import August from "../../assets/music/homePage/August.mp3";
import BackToDecember from "../../assets/music/homePage/BackToDecember.mp3";
import CruelSummer from "../../assets/music/homePage/CruelSummer.mp3";
import Enchanted from "../../assets/music/homePage/Enchanted.mp3";
import LoveStory from "../../assets/music/homePage/LoveStory.mp3";
import Style from "../../assets/music/homePage/Style.mp3";

const HomePage = () => {
  const [paoiPosition, setPaoiPosition] = useState({ x: 220, y: 100 });
  const [showArchive, setShowArchive] = useState(false);
  const navigate = useNavigate();
  const [unlockedIslands, setUnlockedIslands] = useState({
    island1: true,
    island2: false,
    island3: false,
    island4: false,
    island5: false,
    island6: false,
  });
  const [showDoorEffect, setShowDoorEffect] = useState(false);

  const { playAudio, stopAudio } = useAudioManager();

  const islandMusic = {
    island1: August,
    island2: BackToDecember,
    island3: CruelSummer,
    island4: Enchanted,
    island5: LoveStory,
    island6: Style,
  };

  useEffect(() => {
    const savedState =
      JSON.parse(localStorage.getItem("unlockedIslands")) || {};
    setUnlockedIslands({ ...unlockedIslands, ...savedState });

    // Check if coming from PreHomePage to trigger the door opening effect
    if (localStorage.getItem("fromPreHomePage")) {
      setShowDoorEffect(true);
      localStorage.removeItem("fromPreHomePage"); // Remove the flag once the effect is triggered
    }
  }, []);

  const handleIslandClick = (island, nextIsland) => {
    if (!unlockedIslands[island]) return;

    let newPosition = {};
    switch (island) {
      case "island2":
        newPosition = { x: 570, y: 400 };
        break;
      case "island3":
        newPosition = { x: 300, y: 670 };
        break;
      case "island4":
        newPosition = { x: 680, y: 980 };
        break;
      case "island5":
        newPosition = { x: 170, y: 1280 };
        break;
      default:
        newPosition = { x: 220, y: 100 }; // Vị trí mặc định ban đầu
        break;
    }

    // Cập nhật vị trí và lưu vào localStorage
    setPaoiPosition(newPosition);
    localStorage.setItem("paoiPosition", JSON.stringify(newPosition));

    // Cập nhật trạng thái đảo đã mở khóa
    const updatedIslands = { ...unlockedIslands, [nextIsland]: true };
    localStorage.setItem("unlockedIslands", JSON.stringify(updatedIslands));

    playAudio(islandMusic[island]);

    navigate(`/${island}`);
  };

  useEffect(() => {
    const savedPosition = JSON.parse(localStorage.getItem("paoiPosition"));
    if (savedPosition) {
      setPaoiPosition(savedPosition);
    }

    const savedState =
      JSON.parse(localStorage.getItem("unlockedIslands")) || {};
    setUnlockedIslands({ ...unlockedIslands, ...savedState });

    if (localStorage.getItem("fromPreHomePage")) {
      setShowDoorEffect(true);
      localStorage.removeItem("fromPreHomePage");
    }
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      {/* Door opening effect: Only show when coming from PreHomePage */}
      {showDoorEffect && (
        <>
          <motion.div
            initial={{ width: "50%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              backgroundColor: "#333",
              zIndex: 10,
            }}
          />
          <motion.div
            initial={{ width: "50%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              backgroundColor: "#333",
              zIndex: 10,
            }}
          />
        </>
      )}

      <img
        src={paoi}
        alt="paoi"
        style={{
          position: "absolute",
          top: paoiPosition.x,
          left: paoiPosition.y,
          width: "150px",
          zIndex: 1,
        }}
      />

      <img
        src={road}
        alt="paoi"
        style={{
          position: "absolute",
          top: "37%",
          left: "10%",
          width: "270px",
          transform: "rotate(-20deg)",
          zIndex: 0,
        }}
      />

      <img
        src={road}
        alt="paoi"
        style={{
          position: "absolute",
          top: "43%",
          left: "23%",
          width: "270px",
          transform: "rotate(230deg)",
          zIndex: 0,
        }}
      />

      <img
        src={road}
        alt="paoi"
        style={{
          position: "absolute",
          top: "43%",
          left: "41%",
          width: "300px",
          transform: "rotate(-10deg)",
          zIndex: 0,
        }}
      />

      <img
        src={road}
        alt="paoi"
        style={{
          position: "absolute",
          top: "32%",
          left: "56%",
          width: "300px",
          height: "500px",
          transform: "rotate(41deg)",
          zIndex: 0,
        }}
      />

      {/* 1. 330 50, 2. 530, 550 3. 400,750 4. 530,1100 5.250,1400 6.   */}
      {/* Câu chuyện gặp gỡ */}
      <img
        src={gapgo}
        alt="gapgo"
        onClick={() =>
          unlockedIslands.island1 && handleIslandClick("island1", "island2")
        }
        style={{
          position: "absolute",
          top: 100,
          left: 50,
          width: "300px",
          borderRadius: "50%",
          opacity: unlockedIslands.island1 ? 1 : 0.5,
          cursor: unlockedIslands.island1 ? "pointer" : "not-allowed",
        }}
      />
      {/* Kỷ niệm ngày 17/12/2022 */}
      <img
        src={anni}
        alt="anni"
        onClick={() =>
          unlockedIslands.island2 && handleIslandClick("island2", "island3")
        }
        style={{
          position: "absolute",
          top: 500,
          left: 300,
          width: "300px",
          borderRadius: "50%",
          opacity: unlockedIslands.island2 ? 1 : 0.5,
          cursor: unlockedIslands.island2 ? "pointer" : "not-allowed",
        }}
      />
      {/* Timeline 2 năm yêu nhau */}
      <img
        src={twoyears}
        alt="twoyears"
        onClick={() =>
          unlockedIslands.island3 && handleIslandClick("island3", "island4")
        }
        style={{
          position: "absolute",
          top: 200,
          left: 600,
          borderRadius: "50%",
          width: "300px",
          opacity: unlockedIslands.island3 ? 1 : 0.5,
          cursor: unlockedIslands.island3 ? "pointer" : "not-allowed",
        }}
      />
      {/* Dự đoán tương lai */}
      <img
        src={tuonglai}
        alt="tuonglai"
        onClick={() =>
          unlockedIslands.island4 && handleIslandClick("island4", "island5")
        }
        style={{
          position: "absolute",
          top: 600,
          left: 900,
          width: "300px",
          borderRadius: "50%",

          opacity: unlockedIslands.island4 ? 1 : 0.5,
          cursor: unlockedIslands.island4 ? "pointer" : "not-allowed",
        }}
      />

      {/* Tấm thiệp cuối cùng */}
      <img
        src={tamthiepcuoi}
        alt="tamthiepcuoi"
        onClick={() =>
          unlockedIslands.island5 && handleIslandClick("island5", "island6")
        }
        style={{
          position: "absolute",
          top: 100,
          left: 1200,
          width: "300px",
          borderRadius: "50%",

          opacity: unlockedIslands.island5 ? 1 : 0.5,
          cursor: unlockedIslands.island5 ? "pointer" : "not-allowed",
        }}
      />
      {/* Lời nhắn gửi cua Paoi */}
      <img
        src={loinhangui}
        alt="loinhangui"
        onClick={() =>
          unlockedIslands.island6 && handleIslandClick("island6", "")
        }
        style={{
          position: "absolute",
          top: 350,
          left: 1600,
          width: "300px",
          borderRadius: "50%",

          opacity: unlockedIslands.island6 ? 1 : 0.5,
          cursor: unlockedIslands.island6 ? "pointer" : "not-allowed",
        }}
      />
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
          fontSize: "30px",
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
    </div>
  );
};

export default HomePage;
