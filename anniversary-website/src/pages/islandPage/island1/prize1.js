import React, { useState } from "react";

const Prize1 = () => {
  const [activePopup, setActivePopup] = useState(null);

  const closePopup = () => setActivePopup(null);

  const renderPopup = () => {
    switch (activePopup) {
      case "story":
        return (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
              zIndex: 100,
              width: "80%",
              maxWidth: "500px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#be185d", marginBottom: "10px" }}>
              📖 Cùng Đi Vào Câu Chuyện Nào!
            </h2>
            <p>
              Em đã làm very amazing gud job để hoàn thành nhiệm vụ òi neee, em
              sẽ dắt em đi qua về câu chuyện gặp gỡ kết duyên của tụi mình nhé
              💞💍
            </p>
            <button
              onClick={closePopup}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "24px",
                borderRadius: "10px",
                backgroundColor: "#be185d",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Khám phá
            </button>
          </div>
        );
      case "photo":
        return (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
              zIndex: 100,
              width: "80%",
              maxWidth: "500px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#be185d", marginBottom: "10px" }}>
              🎫 Vé Đi Chụp Hình
            </h2>
            <p>
              Ngày 20/12/2024, bạn sẽ được chụp hình lung linh tại studio của
              Alvin. Đón chờ nhé, vợ yêu ơi! 📸❤️
            </p>
            <button
              onClick={closePopup}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "10px",
                backgroundColor: "#be185d",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Đóng
            </button>
          </div>
        );
      case "love":
        return (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
              zIndex: 100,
              width: "80%",
              maxWidth: "500px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#be185d", marginBottom: "10px" }}>
              ❤️ Tình Yêu To Bự
            </h2>
            <p>
              Vợ ơi vợ thật đáng yêu, <br />
              Tim anh đập rộn mỗi chiều hoàng hôn. <br />
              Hãy luôn nắm tay ta bước, <br />
              Cuộc đời này mãi mãi không buông! ❤️😄
            </p>
            <button
              onClick={closePopup}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "10px",
                backgroundColor: "#be185d",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Đóng
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
        backgroundColor: "#fce7f3",
        fontFamily: "Boris",
        position: "relative",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#be185d", marginBottom: "20px" }}>
        🎁 Chúc Mừng Bạn Nhận Được Giải Thưởng! 🎁
      </h1>
      <div
        style={{
          fontSize: "24px",
          color: "#333",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          maxWidth: "600px",
          textAlign: "left",
        }}
      >
        <p
          onClick={() => setActivePopup("story")}
          style={{
            cursor: "pointer",
            color: "#be185d",
            textDecoration: "underline",
            marginBottom: "10px",
          }}
        >
          📖 <strong>Câu truyện:</strong> Click để khám phá câu chuyện thú vị!
        </p>
        <p
          onClick={() => setActivePopup("photo")}
          style={{
            cursor: "pointer",
            color: "#be185d",
            textDecoration: "underline",
            marginBottom: "10px",
          }}
        >
          🎫 <strong>Vé đi chụp hình:</strong> Click để biết thông tin chi tiết!
        </p>
        <p
          onClick={() => setActivePopup("love")}
          style={{
            cursor: "pointer",
            color: "#be185d",
            textDecoration: "underline",
          }}
        >
          ❤️ <strong>Tình yêu to bự:</strong> Click để nhận trái tim đặc biệt!
        </p>
      </div>
      {renderPopup()}
    </div>
  );
};

export default Prize1;
