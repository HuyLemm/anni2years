import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudioManager } from "../../../components/AudioManager";

import home from "../../../assets/images/story/story4/home.jpg"; // Hình ảnh nhà
import money from "../../../assets/images/story/story4/money.jpg"; // Hình ảnh tiền
import donald from "../../../assets/images/story/story4/donald.gif"; // Hình ảnh donald
import money1 from "../../../assets/images/story/story4/money1.jpg"; // Hình ảnh tài chính

import bed from "../../../assets/images/story/story4/bed.jpg"; // Hình ảnh bè
import livingroom from "../../../assets/images/story/story4/livingroom.jpg"; // Hình ảnh phòng nguồn
import garden from "../../../assets/images/story/story4/garden.jpg"; // Hình ảnh phòng nguồn

import wedding1 from "../../../assets/images/story/story4/wedding1.jpg"; // Hình ảnh cưới
import wedding2 from "../../../assets/images/story/story4/wedding2.jpg"; // Hình ảnh cưới
import wedding3 from "../../../assets/images/story/story4/wedding3.jpg"; // Hình ảnh cưới

import ridecar from "../../../assets/images/story/story4/ridecar.gif"; // Hình ảnh cưới
import family from "../../../assets/images/story/story4/family.jpg"; // Hình ảnh cưới
import family2 from "../../../assets/images/story/story4/family2.jpg"; // Hình ảnh cưới

import { useNavigate } from "react-router-dom";
import Archive from "../../../components/Archive";

const Story4 = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();
  const [showArchive, setShowArchive] = useState(false);
  const pages = [
    {
      id: 1,
      title: "Tiền",
      content: (
        <div style={{ textAlign: "left" }}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: "3%",
              left: "35%",
              fontSize: "40px",
              color: "#be185d",
              marginBottom: "20px",
            }}
          >
            Tài chính ổn định cho tương lai 💵
          </motion.h1>
          <motion.img
            src={money}
            alt="Money"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{
              position: "absolute",
              left: "85%",
              top: "10%",
              width: "300px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
          <motion.img
            src={money1}
            alt="Money"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 5 }}
            style={{
              position: "absolute",
              left: "68%",
              top: "20%",
              width: "300px",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
          />

          <motion.img
            src={donald}
            alt="Money"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 8 }}
            style={{
              position: "absolute",
              left: "80%",
              top: "50%",
              width: "300px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "15%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            1. Anh sẽ lao vào công việc như một chiến binh "cày cuốc" ngành IT,
            không phải để trở thành tỷ phú mà là để đảm bảo em và gia đình mình
            không phải đau đầu vì hóa đơn cuối tháng. (Hóa đơn điện, nước, và cả
            tiền mua trân châu trà sữa của em nữa nhé! 🍹)
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 5 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "35%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            2. Chúng ta sẽ lập kế hoạch tài chính kiểu "nhà người ta" với bảng
            Excel, đồ thị, và cả những cuộc họp nhỏ trong bếp để quyết định có
            nên ăn lẩu cuối tuần hay không. 🥘
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 8 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "55%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            3. Tài chính không chỉ là để chi tiêu, mà còn là để đầu tư cho tương
            lai. Anh sẽ đảm bảo gia đình mình không chỉ "đủ sống" mà còn "sống
            đủ" với những chuyến du lịch, những buổi mua sắm và đôi khi là một
            cây cơ thục bida mới. 🌟
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 11 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "75%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            4. Cuối cùng, anh hứa sẽ không chỉ kiếm tiền mà còn học cách tiêu
            tiền sao cho đúng. Và yên tâm, dù giàu đến đâu thì vẫn sẽ luôn hỏi
            em: "Em thích ăn gì hôm nay?" 🍔
          </motion.p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Nhà",
      content: (
        <div style={{ textAlign: "left" }}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: "3%",
              left: "35%",
              fontSize: "40px",
              color: "#be185d",
              marginBottom: "20px",
            }}
          >
            Tổ ấm mơ ước của chúng mình 🏠
          </motion.h1>
          <motion.img
            src={home}
            alt="Home"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{
              position: "absolute",
              left: "80%",
              top: "5%",
              width: "300px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />

          <motion.img
            src={garden}
            alt="Home"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 5 }}
            style={{
              position: "absolute",
              left: "69%",
              top: "25%",
              width: "300px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
          <motion.img
            src={livingroom}
            alt="Home"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 8 }}
            style={{
              position: "absolute",
              left: "80%",
              top: "45%",
              width: "300px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
          <motion.img
            src={bed}
            alt="Home"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 11 }}
            style={{
              position: "absolute",
              left: "69%",
              top: "65%",
              width: "300px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "15%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            1. Ngôi nhà của chúng ta sẽ không cần biệt thự xa hoa, chỉ cần đủ
            chỗ để anh, em, con cái, và cả "boss" (nếu em muốn nuôi thêm chó
            mèo) cùng sống vui vẻ. À, thêm một góc nhỏ để cả anh và em đặt máy
            tính chơi game cùng nhao là được! 🎮
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 5 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "35%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            2. Chúng ta sẽ có một khu vườn, nơi em có thể trồng hoa, anh trồng
            rau, và tụi nhỏ thì phá tung mọi thứ. Nhưng không sao, miễn là chúng
            ta cùng cười trước mớ hỗn độn ấy. 🌱🌼
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 8 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "55%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            3. Ngôi nhà sẽ có một phòng khách đủ rộng để chúng ta cùng nhau xem
            phim, cùng hét lên khi nhân vật yêu thích của em bị "drama" trong
            phim dài tập. 📺
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 11 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "75%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            4. Tổ ấm không phải là bức tường hay mái nhà, mà là nơi em có thể
            thoải mái mặc đồ ngủ xấu xí mà vẫn thấy được yêu thương. (Anh hứa sẽ
            không bật cười đâu! 🤣)
          </motion.p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Cưới",
      content: (
        <div style={{ textAlign: "left" }}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: "3%",
              left: "43%",
              fontSize: "40px",
              color: "#be185d",
              marginBottom: "20px",
            }}
          >
            Hôn lễ trong mơ 🎉
          </motion.h1>
          <motion.img
            src={wedding1}
            alt="Wedding"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{
              width: "300px",
              height: "300px",
              position: "absolute",
              left: "70%",
              top: "10%",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />

          <motion.img
            src={wedding2}
            alt="Wedding"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 5 }}
            style={{
              width: "300px",
              position: "absolute",
              left: "85%",
              top: "25%",
              borderRadius: "30%",
              marginBottom: "20px",
            }}
          />

          <motion.img
            src={wedding3}
            alt="Wedding"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 8 }}
            style={{
              width: "250px",
              position: "absolute",
              left: "71%",
              top: "45%",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "15%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            1. Đám cưới của chúng ta sẽ không cần hàng trăm khách mời, chỉ cần
            những người thân yêu nhất, và một chiếc bánh cưới to hơn bình thường
            để đảm bảo có thể mang về ăn dần. 🍰
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 5 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "35%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            2. Ngày cưới, anh muốn thấy em trong bộ váy cưới xinh đẹp nhất,
            nhưng nếu em lỡ giẫm vào váy thì cũng không sao, anh sẽ "xí xóa" và
            cùng em cười như hai đứa trẻ. 💃
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 8 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "55%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            3. Chúng ta sẽ có một playlist nhạc Taylor Swift từ lãng mạn đến
            "quẩy tung nóc", để cả hội bạn thân và họ hàng đều có thể nhảy hết
            mình. 🎶
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 11 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "75%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            4. Anh hứa sẽ nhớ lời thề trong ngày cưới: "Yêu em kể cả khi em hỏi
            1000 lần: 'Em có béo không?' " (Dĩ nhiên câu trả lời luôn là "Không
            bao giờ!"). 😘
          </motion.p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Xe",
      content: (
        <div style={{ textAlign: "left" }}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              position: "absolute",
              top: "3%",
              left: "38%",
              fontSize: "40px",
              color: "#be185d",
              marginBottom: "20px",
            }}
          >
            Chiếc xe đồng hành 🚗
          </motion.h1>
          <motion.img
            src={ridecar}
            alt="Car"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{
              position: "absolute",
              left: "75%",
              top: "27%",
              width: "400px",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "15%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            1. Chiếc xe sẽ là nơi tụi mình nghe những bài hát em yêu thích (dù
            anh không hiểu lời) và cùng nhau hát sai nhạc như thể là bản hit
            mới. 🎤
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 5 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "35%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            2. Mỗi chuyến đi chơi bằng xe sẽ là một cuộc phiêu lưu, nơi tụi mình
            vừa khám phá những nơi mới, vừa tranh cãi xem bản đồ Google hay em
            đúng. 📍
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 8 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "55%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            3. Nếu chiếc xe bị kẹt giữa đường, anh sẽ là người đẩy xe, còn em là
            người ngồi trong xe... động viên. (Vì anh là người hùng của gia đình
            mà! 💪)
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 11 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "75%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            4. Chiếc xe không chỉ là phương tiện mà còn là “kho lưu trữ” những
            kỷ niệm, từ vết dính liếm của Fanta đến lần chúng ta ăn uống no say
            trong xe khi trời mưa không ngừng. 🚙
          </motion.p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Gia đình nhỏ hạnh phúc",
      content: (
        <div style={{ textAlign: "left" }}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              position: "absolute",
              top: "3%",
              left: "37%",
              fontSize: "40px",
              color: "#be185d",
              marginBottom: "20px",
            }}
          >
            Gia đình nhỏ hạnh phúc 🐾❤️
          </motion.h1>
          <motion.img
            src={family}
            alt="Family"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{
              position: "absolute",
              left: "69%",
              top: "15%",
              width: "300px",
              borderRadius: "20px",
              marginBottom: "20px",
              zIndex: "1",
            }}
          />
          <motion.img
            src={family2}
            alt="Family"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 8 }}
            style={{
              position: "absolute",
              left: "83%",
              top: "35%",
              width: "300px",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "15%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            1. Gia đình chúng ta sẽ là nơi mà mỗi sáng thức dậy là tiếng cười,
            tiếng gọi nhau ăn sáng, và đôi khi là tiếng càm ràm nhẹ nhàng kiểu:
            "Đừng có nhai xúc xích của anh!" 🥓
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 5 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "35%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            2. Anh sẽ là người chồng, người cha không hoàn hảo, nhưng luôn cố
            gắng để mỗi ngày đều làm điều gì đó khiến em và các con mỉm cười.
            (Hoặc ít nhất là không làm cháy nồi cơm. 🍚)
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 8 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "55%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            3. Dù có sóng gió, anh tin rằng gia đình mình sẽ là con thuyền vững
            chãi, nơi tất cả chúng ta đều biết rằng có nhau là có tất cả. 🚤
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 11 }}
            style={{
              width: "1200px",
              position: "absolute",
              left: "5%",
              top: "75%",
              fontSize: "30px",
              color: "#333",
            }}
          >
            4. Buổi tối trong gia đình mình sẽ là lúc cả nhà cùng quây quần bên
            bàn ăn, chia sẻ những câu chuyện vui buồn, và đôi khi cười phá lên
            vì một câu chuyện "tào lao" của tụi nhỏ. ❤️
          </motion.p>
        </div>
      ),
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#fce7f3",
        fontFamily: "Boris",
        fontWeight: "bold",
        textAlign: "center",
        padding: "20px",
        overflow: "hidden", // Thêm dòng này
      }}
    >
      <AnimatePresence mode="wait" r>
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute", // Vẫn giữ absolute
            top: 0, // Đặt vị trí tuyệt đối để tránh bị đè lên nhau
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {pages[currentPage].content}
        </motion.div>
      </AnimatePresence>

      <div style={{ marginTop: "30px", display: "flex", gap: "10px" }}>
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          style={{
            color: "#be185d",
            position: "absolute",
            left: "900px",
            bottom: "10px",
            padding: "10px 20px",
            fontSize: "24px",
            borderRadius: "10px",
            backgroundColor: currentPage === 0 ? "#ffffff" : "#f9c6cf",
            border: "1px solid #be185d",
            cursor: currentPage === 0 ? "not-allowed" : "pointer",
          }}
        >
          Back
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          style={{
            color: "#be185d",
            position: "absolute",
            left: "1010px",
            bottom: "10px",
            padding: "10px 20px",
            fontSize: "24px",
            borderRadius: "10px",
            backgroundColor:
              currentPage === pages.length - 1 ? "#ffffff" : "#f9c6cf",
            border: "1px solid #be185d",
            cursor:
              currentPage === pages.length - 1 ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
        {currentPage === pages.length - 1 && (
          <button
            onClick={() => navigate("/homePage")}
            style={{
              color: "#ffffff",
              position: "absolute",
              left: "1120px",
              bottom: "10px",
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
    </div>
  );
};

export default Story4;
