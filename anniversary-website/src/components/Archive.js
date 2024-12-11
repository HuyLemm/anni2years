import React, { useState, useEffect } from "react";

const Archive = () => {
  const [activeTab, setActiveTab] = useState("love"); // Mặc định là "love"
  const [loveData, setLoveData] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  const [isMailboxOpen, setMailboxOpen] = useState(false);

  // Tải dữ liệu từ LocalStorage khi khởi động
  useEffect(() => {
    const love = JSON.parse(localStorage.getItem("loveArchive")) || [];
    const photo = JSON.parse(localStorage.getItem("photoArchive")) || [];
    setLoveData(love);
    setPhotoData(photo);
  }, []);

  // Hàm hiển thị dữ liệu theo thứ tự
  const renderList = (type) => {
    const data = type === "love" ? loveData : photoData;

    return (
      <div
        style={{
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          padding: "20px",
          width: "80%",
          maxWidth: "800px",
          margin: "20px auto",
          textAlign: "left",
          overflowY: "auto",
          maxHeight: "500px",
        }}
      >
        <h2
          style={{
            color: "#be185d",
            marginBottom: "20px",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          {type === "love" ? "❤️ Love Archive" : "🎫 Ticket Archive"}
        </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {data.map((entry, index) => (
            <li
              key={entry.id}
              style={{
                borderBottom: "1px solid #eee",
                paddingBottom: "10px",
                marginBottom: "10px",
                fontSize: "20px",
              }}
            >
              <strong style={{ color: "#be185d" }}>
                {index + 1}. {entry.description}
              </strong>
              <p
                style={{ margin: "5px 0" }}
                dangerouslySetInnerHTML={{ __html: entry.content }}
              ></p>
              <small style={{ color: "#888" }}>{entry.timestamp}</small>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Boris",
      }}
    >
      <div>
        <button
          onClick={() => setActiveTab("love")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            fontSize: "20px",
            borderRadius: "10px",
            backgroundColor: activeTab === "love" ? "#9d174d" : "#be185d",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Love
        </button>
        <button
          onClick={() => setActiveTab("photo")}
          style={{
            padding: "10px 20px",
            fontSize: "20px",
            borderRadius: "10px",
            backgroundColor: activeTab === "photo" ? "#9d174d" : "#be185d",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Ticket
        </button>
      </div>
      {activeTab === "love" && renderList("love")}
      {activeTab === "photo" && renderList("photo")}
      <button
        onClick={() => setMailboxOpen(!isMailboxOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
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
        📬
      </button>
    </div>
  );
};

export default Archive;

export const saveToLocalStorage = (key, data) => {
  const existingData = JSON.parse(localStorage.getItem(key)) || [];
  const isDuplicate = existingData.some(
    (item) => item.description === data.description
  );

  if (!isDuplicate) {
    const newData = [...existingData, data];
    localStorage.setItem(key, JSON.stringify(newData));
  }
};

export const saveLove = (description, content) => {
  const timestamp = new Date().toLocaleString();
  const data = { id: Date.now(), description, content, timestamp };
  saveToLocalStorage("loveArchive", data);
};

export const savePhoto = (description, content) => {
  const timestamp = new Date().toLocaleString();
  const data = { id: Date.now(), description, content, timestamp };
  saveToLocalStorage("photoArchive", data);
};

export const getLoveArchive = () => {
  return JSON.parse(localStorage.getItem("loveArchive")) || [];
};

export const getPhotoArchive = () => {
  return JSON.parse(localStorage.getItem("photoArchive")) || [];
};
