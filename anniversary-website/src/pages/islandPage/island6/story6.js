import React, { useState, useEffect } from "react";
import "../island5/loveLetter.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Archive from "../../../components/Archive";

const Story6 = () => {
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const [showArchive, setShowArchive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_nk6it02", // Replace with your Email Service ID
        "template_984vobg", // Replace with your Email Template ID
        { message }, // Pass the message as a variable
        "dsnJpCGvJP8m938V1" // Replace with your User ID
      );

      if (result.status === 200) {
        setModalMessage(
          "Đã thành công gửi lời yêu thương to bự của Paoooi tới Alvin òi nèee! ❤️"
        );
        setIsSuccess(true);
        setIsSubmitted(true);
      }
    } catch (error) {
      setModalMessage("Gửi không thành công. Vui lòng thử lại!");
      setIsSuccess(false);
      setIsSubmitted(true);
    }
  };

  const closeModal = () => {
    setIsSubmitted(false);
    if (isSuccess) navigate("/theend");
  };

  return (
    <div className="story6-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          position: "absolute",
          top: "3%",
          left: "27%",
          fontSize: "40px",
          color: "#be185d",
          marginBottom: "20px",
          zIndex: 10,
          fontFamily: "Boris",
          width: "900px",
          fontWeight: "bold",
        }}
      >
        Vợ Paoi có muốn gửi gắm gì cho chồng hong nè❤️
      </motion.h1>

      {!isSubmitted ? (
        showForm && (
          <motion.form
            className="message-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              style={{
                position: "absolute",
                top: "30%",
                left: "29%",
                width: "800px",
                height: "400px",
                background: "#fef4e5",
                border: "2px solid #be185d",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                fontFamily: "Boris",
              }}
            >
              <textarea
                placeholder="Type your heartfelt message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: "100%",
                  height: "355px",
                  padding: "10px",
                  fontSize: "27px",
                  borderRadius: "10px",
                  border: "none",
                  fontFamily: "Boris",
                  resize: "none",
                  boxSizing: "border-box",
                }}
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              style={{
                position: "absolute",
                top: "80%",
                left: "45%",
                padding: "10px 20px",
                fontSize: "24px",
                borderRadius: "10px",
                backgroundColor: "#be185d",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                fontFamily: "Boris",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Send to Alvin
            </motion.button>
          </motion.form>
        )
      ) : (
        <Modal
          message={modalMessage}
          isSuccess={isSuccess}
          onClose={closeModal}
        />
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

// Modal Component
const Modal = ({ message, isSuccess, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2
          style={{
            color: "#be185d",
            fontFamily: "Boris",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          {message}
        </h2>
        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            fontFamily: "Boris",
            padding: "10px 20px",
            fontSize: "18px",
            borderRadius: "10px",
            backgroundColor: isSuccess ? "#be185d" : "#dc2626",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isSuccess ? "The End" : "Return"}
        </button>
      </div>
    </div>
  );
};

export default Story6;
