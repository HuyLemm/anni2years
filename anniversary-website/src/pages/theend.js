import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import confetti from "canvas-confetti";
import theend from "../assets/images/theend.png"; // Ensure you have this image in your assets folder
import border from "../assets/images/border.png";
import { motion } from "framer-motion";
import Archive from "../components/Archive";

const TheEnd = () => {
  const [showArchive, setShowArchive] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [showTitle, setShowTitle] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [showRewards, setShowRewards] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [showHappy, setShowHappy] = useState(false);

  const rewards = [
    "1. Một buổi hẹn hò Cafe ngọt ngào cùng anh ☕",
    "2. Cùng nhau đi lựa nhẫn cho tình yêu mình 💍",
    "3. Chụp hình Photoby để lưu lại những khoảnh khắc đẹp 📸",
    "4. Trải nghiệm hồi hộp khi cùng nhau bắn súng 🔫",
    "5. Một bữa ăn ngon lành và lãng mạn 🍽️",
    "6. Dạo chơi trung tâm thương mại chill chill 🛍️",
  ];

  const imageUrl = "https://i.imgur.com/d2HSM7v.png";

  useEffect(() => {
    // Hiển thị tiêu đề sau 1 giây
    setTimeout(() => setShowTitle(true), 1000);

    // Hiển thị lời cảm ơn sau 2 giây
    setTimeout(() => setShowMessage(true), 2000);

    // Hiển thị khung border
    setTimeout(() => setShowBorder(true), 4000);

    // Hiển thị từng phần thưởng không bị trùng lặp
    rewards.forEach((reward, index) => {
      setTimeout(() => {
        setShowRewards((prev) => [...new Set([...prev, reward])]); // Đảm bảo không trùng lặp
      }, 4000 + (index + 1) * 1000);
    });

    // Hiển thị nút sau tất cả
    setTimeout(() => setShowButton(true), 4000 + rewards.length * 1000 + 1000);
  }, []);

  const sendEmail = async () => {
    try {
      const result = await emailjs.send(
        "service_rik7e8g", // Replace with your EmailJS service ID
        "template_2w6civf", // Replace with your EmailJS template ID
        {
          image_url: imageUrl,
        },
        "dsnJpCGvJP8m938V1" // Replace with your EmailJS user ID
      );
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  const fireEmoji = (emoji = "❤️", sec = 2) => {
    const duration = sec * 1000; // Thời gian hiệu ứng chạy
    const end = Date.now() + duration;
    const scalar = 2.5; // Kích thước hạt
    const heart = confetti.shapeFromText({ text: emoji, scalar }); // Tạo hạt hình emoji

    (function frame() {
      let x, y;

      // Đảm bảo hạt không xuất hiện gần vùng dòng chữ
      do {
        x = Math.random();
        y = Math.random();
      } while (
        x > 0.4 &&
        x < 0.6 && // Tránh vùng ngang (giữa màn hình)
        y > 0.4 &&
        y < 0.6 // Tránh vùng dọc (giữa màn hình)
      );
      const particleCount = 15; // Số lượng hạt mỗi lần bắn
      const spread = 360; // Độ lan tỏa

      confetti({
        spread,
        ticks: 100, // Thời gian tồn tại mỗi hạt
        gravity: 0, // Không có trọng lực
        decay: 0.95, // Biến mất dần
        startVelocity: 20, // Tốc độ bắt đầu
        shapes: [heart],
        scalar,
        particleCount,
        origin: { x, y }, // Phát từ trung tâm màn hình
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleAnniversary = () => {
    fireEmoji("❤️", 2); // Gọi hiệu ứng bắn tim
    setShowTitle(false);
    setShowMessage(false);
    setShowBorder(false);
    setShowRewards([]);
    setShowButton(false);
    setShowHappy(true);
    sendEmail();
  };

  return (
    <div className="theend-container" style={{ padding: "20px" }}>
      {showTitle && (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: "3%",
            left: "32%",
            color: "#be185d",
            fontFamily: "Boris",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          Xứ sở tình yêu đến đây là kết thúc òi ❤️
        </motion.h1>
      )}

      {showMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: "10%",
            left: "20%",
            color: "#be185d",
            fontFamily: "Boris",
            fontSize: "30px",
          }}
        >
          Cám ơn em đã đồng hành với anh nãy giờ, đây là những phần thưởng của
          em nèee
        </motion.div>
      )}

      {showRewards.map((reward, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: `${31 + index * 9.7}%`, // Vị trí từng phần thưởng
            left: "39%",
            color: "#be185d",
            fontFamily: "Boris",
            fontSize: "27px",
            zIndex: 2,
            width: "390px",
            textAlign: "center",
            lineHeight: "1.3",
          }}
        >
          {reward}
        </motion.div>
      ))}

      {showBorder && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: "17%",
            left: "36%",
            zIndex: 1,
          }}
        >
          <img src={border} alt="border" style={{ width: "500px" }} />
        </motion.div>
      )}

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleAnniversary()}
            style={{
              position: "absolute",
              left: "42.5%",
              top: "92%",
              padding: "10px 20px",
              fontSize: "24px",
              borderRadius: "10px",
              backgroundColor: "#be185d",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
              fontFamily: "Boris",
            }}
          >
            Baii baiii, See youuu!
          </motion.button>
        )}
      </div>
      {showHappy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px 40px",
            borderRadius: "10px",
            fontSize: "50px",
            fontWeight: "bold",
            color: "#be185d",
            zIndex: 10,
            fontFamily: "Boris",
          }}
        >
          Happy Anniversary 2 Years 🎉
        </motion.div>
      )}

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

export default TheEnd;
