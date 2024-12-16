import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudioManager } from "../../../components/AudioManager";

//Number 1
import { useNavigate } from "react-router-dom";
import Archive from "../../../components/Archive";
import arrow from "../../../assets/images/story/story2/arrow.png";
import avatar from "../../../assets/images/story/story2/avatar.jpg";
import popeyes from "../../../assets/images/story/story2/popeyes.jpg";
import cutecry from "../../../assets/images/story/story2/cutecry.jpg";
import smile from "../../../assets/images/story/story2/smile.jpg";

//Number 2
import anniov from "../../../assets/images/story/story2/anniov.jpg";
import annipaoi from "../../../assets/images/story/story2/annipaoi.jpg";
import baking from "../../../assets/images/story/story2/baking.jpg";
import happy from "../../../assets/images/story/story2/happy.jpg";
import foru from "../../../assets/images/story/story2/foru.png";
import cookie from "../../../assets/images/story/story2/cookie.png";

//Number 3
import future from "../../../assets/images/story/story2/future.jpg";
import funnn from "../../../assets/images/story/story2/funnn.jpg";
import hugh from "../../../assets/images/story/story2/hugh.jpg";
import wuvu from "../../../assets/images/story/story2/wuvu.jpg";

const Story2 = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const [showArchive, setShowArchive] = useState(false);

  const pages = [
    {
      id: 1,
      title: "Thần số học & Vận may",
      content: (
        <div style={{ textAlign: "center", color: "#333" }}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{
              position: "absolute",
              top: "5%",
              left: "40%",
              fontSize: "36px",
              color: "#be185d",
            }}
          >
            Thần số học ngày 17/12 🕵️‍♂️
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
            style={{
              position: "absolute",
              top: "15%",
              left: "20%",
              fontSize: "24px",
              textAlign: "left",
              width: "60%",
            }}
          >
            Ngày 17/12 mang năng lượng của số 8 - con số biểu trưng cho sự cân
            bằng, thành công, và phát triển. Số 8 kết hợp giữa vật chất và tinh
            thần, mang lại cơ hội lớn về tình yêu và sự nghiệp. Đây cũng là ngày
            thuận lợi để đưa ra những quyết định lớn hoặc thể hiện sự biết ơn.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 6 }}
            style={{
              position: "absolute",
              top: "30%",
              left: "20%",
              fontSize: "24px",
              textAlign: "left",
              width: "60%",
            }}
          >
            Về mặt tâm linh, ngày này tạo cảm giác an yên và hài hòa, là thời
            điểm lý tưởng để suy nghĩ về các mối quan hệ và tìm kiếm những điều
            thực sự quan trọng trong cuộc sống.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 9 }}
            style={{
              position: "absolute",
              top: "44%",
              left: "42%",
              fontSize: "36px",
              color: "#be185d",
            }}
          >
            Ý nghĩa ngày 17/12 😘
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 11 }}
            style={{
              position: "absolute",
              top: "52%",
              left: "20%",
              fontSize: "24px",
              textAlign: "left",
              width: "60%",
            }}
          >
            Những người sinh ngày 17/12 thường mong muốn một mối quan hệ chân
            thành, bền vững và có ý nghĩa. Họ không dễ dàng từ bỏ và sẵn sàng
            đối mặt với khó khăn để giữ gìn hạnh phúc.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 14 }}
            style={{
              position: "absolute",
              top: "62%",
              left: "20%",
              fontSize: "24px",
              textAlign: "left",
              width: "60%",
            }}
          >
            Họ phù hợp với những đối tác biết trân trọng chiều sâu, có mục tiêu
            sống rõ ràng và sẵn sàng cùng họ xây dựng tương lai.
          </motion.p>

          <motion.img
            src={arrow}
            alt="Arrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 16.5 }}
            style={{
              position: "absolute",
              top: "64%",
              left: "5%",
              width: "300px",
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 16.5 }}
            style={{
              position: "absolute",
              top: "75%",
              left: "19.5%",
              fontSize: "28px",
              textAlign: "center",
              width: "60%",
              color: "#be185d",
            }}
          >
            Ngày 17/12 mang ý nghĩa của sự sâu sắc và gắn kết, giống như anh với
            em – hai tâm hồn độc lập nhưng luôn hòa quyện, cùng nhau xây dựng
            một tình yêu bền vững và đầy ý nghĩa. Cảm ơn em đã trở thành mảnh
            ghép tuyệt vời nhất trong cuộc đời anh 😍
          </motion.p>
        </div>
      ),
    },
    {
      id: 2,
      title: "17/12/2022",
      content: (
        <div style={{ textAlign: "center" }}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{
              position: "absolute",
              top: "5%",
              left: "37%",
              fontSize: "36px",
              color: "#be185d",
            }}
          >
            Ngày 17/12/2022 có gì vuiii 🧐
          </motion.h1>

          <motion.img
            src={avatar}
            alt="Avatar Movie Poster"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
            style={{
              position: "absolute",
              top: "20%",
              left: "22%",
              width: "300px",
              borderRadius: "15px",
              marginBottom: "20px",
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 5 }}
            style={{
              position: "absolute",
              top: "72%",
              left: "12%",
              fontSize: "27px",
              color: "#333",
            }}
          >
            Xem phim Avatar cùng vợ yêu <br /> Hình như xem phim này vợ yêu lơm
            rơm nước mắt thì phải
          </motion.p>

          <motion.img
            src={cutecry}
            alt="cry"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 5 }}
            style={{
              position: "absolute",
              top: "54%",
              left: "11%",
              width: "200px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />

          <motion.img
            src={popeyes}
            alt="Popeyes"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 8 }}
            style={{
              position: "absolute",
              top: "20%",
              left: "62%",
              width: "350px",
              borderRadius: "15px",
              marginBottom: "20px",
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 10 }}
            style={{
              position: "absolute",
              top: "72%",
              left: "56%",
              fontSize: "24px",
              color: "#333",
            }}
          >
            Sau đó, mình đi ăn popeyes thật là ngon mịn <br /> Đang ăn tự nhiên
            có Hùng bất ngờ ghé qua gặp mình <br /> Mawsk cuoiwf
          </motion.p>

          <motion.img
            src={smile}
            alt="smile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 10 }}
            style={{
              position: "absolute",
              top: "54%",
              left: "82%",
              width: "200px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "17/12/2023",
      content: (
        <div style={{ textAlign: "center" }}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{
              position: "absolute",
              top: "5%",
              left: "37%",
              fontSize: "36px",
              color: "#be185d",
            }}
          >
            Ngày 17/12/2023 tới chơiii 🤤
          </motion.h1>

          <motion.img
            src={baking}
            alt="Homemade Cookies"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
            style={{
              position: "absolute",
              top: "20%",
              left: "20%",
              width: "250px",
              borderRadius: "15px",
              marginBottom: "20px",
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 5 }}
            style={{
              position: "absolute",
              top: "72%",
              left: "12%",
              fontSize: "27px",
              color: "#333",
            }}
          >
            Vợ chạy deadline làm bánh, <br /> dồn hết tâm huyết vào miao.baking
            quó <br /> nên hong ăn anni đượccc
          </motion.p>

          <motion.img
            src={cookie}
            alt="cookie"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 5 }}
            style={{
              position: "absolute",
              top: "60%",
              left: "13%",
              width: "100px",
              marginBottom: "20px",
            }}
          />

          <motion.img
            src={annipaoi}
            alt="Anni paoi"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 8 }}
            style={{
              position: "absolute",
              top: "20%",
              left: "43%",
              width: "267px",
              borderRadius: "15px",
              marginBottom: "20px",
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 10 }}
            style={{
              position: "absolute",
              top: "72%",
              left: "38%",
              fontSize: "27px",
              color: "#333",
            }}
          >
            Nhưng vợ vẫn nhận được quà từ Alvinnn <br /> Bó hoa tươi thắm đắm
            tình iu
          </motion.p>

          <motion.img
            src={foru}
            alt="foryou"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 10 }}
            style={{
              position: "absolute",
              top: "74%",
              left: "58%",
              width: "180px",
              marginBottom: "20px",
            }}
          />

          <motion.img
            src={anniov}
            alt="Anni paoi"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 13 }}
            style={{
              position: "absolute",
              top: "20%",
              left: "70%",
              width: "255px",
              borderRadius: "15px",
              marginBottom: "20px",
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 15 }}
            style={{
              position: "absolute",
              top: "72%",
              left: "67%",
              fontSize: "27px",
              color: "#333",
            }}
          >
            Sau đó thì cũng có buổi anni trễ <br /> siu zui tươi cùng KPUB và
            CAKE
          </motion.p>

          <motion.img
            src={happy}
            alt="happy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 15 }}
            style={{
              position: "absolute",
              top: "64%",
              left: "88%",
              width: "130px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
        </div>
      ),
    },
    {
      id: 4,
      title: "17/12/2024",
      content: (
        <div style={{ textAlign: "center" }}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{
              position: "absolute",
              top: "5%",
              left: "35%",
              fontSize: "36px",
              color: "#be185d",
            }}
          >
            Ngày 17/12/2024 sắp tới sao nhừo 🤗
          </motion.h1>

          <motion.img
            src={future}
            alt="Future Hopes"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
            style={{
              position: "absolute",
              top: "14%",
              left: "30%",
              width: "200px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
            style={{
              position: "absolute",
              top: "24%",
              left: "42%",
              borderRadius: "50%",
              fontSize: "30px",
              marginBottom: "20px",
            }}
          >
            Chồng cũng hong biết sẽ như nào <br /> nữa hehe 😝
          </motion.p>

          <motion.img
            src={funnn}
            alt="Funnn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 6 }}
            style={{
              position: "absolute",
              top: "40%",
              left: "66%",
              width: "200px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 6 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "38%",
              borderRadius: "50%",
              fontSize: "30px",
              marginBottom: "20px",
            }}
          >
            Nhưng mà anh chắc chắn sẽ là ngày <br />
            siu siu siu vui của tụi mìnhh 👯‍♀️
          </motion.p>

          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 9 }}
            style={{
              position: "absolute",
              top: "74%",
              left: "46%",
              borderRadius: "50%",
              fontSize: "50px",
              marginBottom: "20px",
              color: "#be185d",
            }}
          >
            I wuv uuuu 👩‍❤️‍👨
          </motion.p>

          <motion.img
            src={hugh}
            alt="hugh"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 9 }}
            style={{
              position: "absolute",
              top: "67%",
              left: "34%",
              width: "200px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />

          <motion.img
            src={wuvu}
            alt="wuvu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 11 }}
            style={{
              position: "absolute",
              top: "74%",
              left: "66%",
              width: "300px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />
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

export default Story2;
