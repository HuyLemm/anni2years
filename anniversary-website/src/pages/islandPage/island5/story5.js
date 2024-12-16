import React, { useState, useEffect } from "react";
import "./loveLetter.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAudioManager } from "../../../components/AudioManager";
import Archive from "../../../components/Archive";

const Story5 = () => {
  const [cardPosition, setCardPosition] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const navigate = useNavigate();
  const [showArchive, setShowArchive] = useState(false);

  useEffect(() => {
    // Thêm class vào thẻ body khi component mount
    document.body.classList.add("story5-body");

    // Cleanup: Xóa class khỏi body khi component unmount
    return () => {
      document.body.classList.remove("story5-body");
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 2000);
  }, []);

  useEffect(() => {
    let interval;
    const handleMouseEnter = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setCardPosition((prev) => (prev > -90 ? prev - 1 : -90));
      }, 8);
    };

    const handleMouseLeave = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setCardPosition((prev) => (prev < 0 ? prev + 1 : 0));
      }, 8);
    };

    const container = document.querySelector(".container");
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(true);
    setShowFinishButton(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          style={{
            position: "absolute",
            top: "-160%",
            left: "-10%",
            fontSize: "40px",
            color: "#be185d",
            marginBottom: "20px",
            zIndex: 10,
            fontFamily: "Boris",
            width: "500px",
            fontWeight: "bold",
          }}
        >
          Lá thư gửi vợ Paoi 💌
        </motion.h1>
      </div>
      {showTitle && (
        <motion.div
          className="shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      )}
      {showTitle && (
        <motion.div
          className="valentines"
          onClick={toggleModal}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="envelope"></div>
          <div className="front"></div>
          <div className="card" style={{ top: `${cardPosition}px` }}>
            <div className="text">
              To my
              <br />
              Baby Paoi
              <br />I love You!
            </div>
            <div className="heart"></div>
          </div>
          <div className="hearts" style={{ top: "10px", left: "20px" }}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
          </div>
        </motion.div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="modal-overlay"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{ width: "90%" }}
          >
            <div className="letter-header">Gửi embe Paoi của anh,</div>
            <div className="letter-body">
              Gửi người anh yêu thương nhất,
              <br /> <br />
              Hôm nay là một ngày thật đặc biệt – ngày đánh dấu hai năm kể từ
              lúc chúng ta bắt đầu hành trình yêu thương này. Anh ngồi đây, cố
              gắng viết ra những cảm xúc đang tràn đầy trong trái tim, nhưng
              dường như chẳng có từ ngữ nào có thể diễn tả hết được những gì anh
              muốn nói. <br />
              Hai năm qua, em là món quà quý giá nhất mà cuộc sống đã mang đến
              cho anh. Nhớ lại ngày đầu tiên chúng ta gặp nhau, ánh mắt ấy, nụ
              cười ấy, và cách em khiến anh cảm thấy tim mình rung động như lần
              đầu tiên biết yêu. Từ những khoảnh khắc ngại ngùng ban đầu đến
              những lần chúng ta cười vang vì những điều nhỏ nhặt, tất cả đều là
              những ký ức mà anh sẽ mãi mãi trân trọng. <br />
              Anh yêu cách em luôn kiên nhẫn lắng nghe mỗi khi anh kể những câu
              chuyện không đầu không cuối. Anh yêu sự dịu dàng trong từng cử chỉ
              của em, và cả cách em làm cho mọi thứ xung quanh trở nên ấm áp hơn
              chỉ bằng sự hiện diện của mình. Trong em, anh tìm thấy không chỉ
              một người yêu mà còn là một người bạn, một tri kỷ, một phần không
              thể thiếu trong cuộc đời anh.
              <br /> Nhưng anh cũng biết rằng tình yêu không phải lúc nào cũng
              chỉ có những ngày nắng đẹp. Đã có những lúc chúng ta giận dỗi, bất
              đồng, thậm chí là im lặng. Nhưng chính những thử thách đó đã giúp
              anh nhận ra rằng tình yêu của chúng ta mạnh mẽ đến nhường nào. Cảm
              ơn em đã luôn bên anh, không chỉ trong những ngày vui vẻ mà cả
              những lúc khó khăn nhất.
              <br /> Hai năm không phải là một chặng đường quá dài, nhưng đủ để
              anh hiểu rằng anh không thể tưởng tượng cuộc sống của mình mà
              không có em. Từng ngày trôi qua, anh càng thêm yêu em, không chỉ
              vì em là ai mà còn vì cách em làm cho anh trở nên tốt hơn. Em là
              lý do khiến anh muốn cố gắng, muốn yêu thương, và muốn bảo vệ em
              mãi mãi.
              <br /> Anh không biết tương lai sẽ mang đến điều gì, nhưng anh
              biết chắc một điều: anh muốn bước đi trên mọi con đường cùng em,
              nắm tay em qua mọi sóng gió và sẻ chia mọi niềm vui. Cảm ơn em đã
              yêu anh, cảm ơn em đã tin tưởng anh, và cảm ơn em vì đã chọn anh.
              <br /> <br />
              Chúc mừng kỷ niệm hai năm của chúng ta, em yêu. Mong rằng đây chỉ
              là một trong vô vàn những dấu mốc mà chúng ta sẽ cùng nhau tạo
              nên. Anh yêu em hơn tất cả những gì anh có thể nói ra, và anh sẽ
              tiếp tục chứng minh điều đó qua từng ngày được bên em.
            </div>
            <div className="letter-footer">
              Love forever, <br /> Your Alvin
            </div>
            <button className="close-button" onClick={closeModal}>
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

      {showFinishButton && (
        <button
          onClick={() => navigate("/homePage")}
          style={{
            color: "#ffffff",
            position: "absolute",
            left: "35%",
            top: "230%",
            padding: "10px 20px",
            fontSize: "24px",
            borderRadius: "10px",
            backgroundColor: "#be185d",
            border: "none",
            cursor: "pointer",
          }}
        >
          Finish
        </button>
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

export default Story5;
