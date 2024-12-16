import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudioManager } from "../../../components/AudioManager";

import alvin from "../../../assets/images/story/story1/alvin.jpg";
import paoi from "../../../assets/images/story/story1/paoi.jpg";

import net1 from "../../../assets/images/story/story1/net1.jpg";
import net2 from "../../../assets/images/story/story1/net2.jpg";
import net3 from "../../../assets/images/story/story1/net3.jpg";
import yeah from "../../../assets/images/story/story1/yeah.png";
import milktea from "../../../assets/images/story/story1/milktea.png";
import think from "../../../assets/images/story/story1/think.png";
import thong from "../../../assets/images/story/story1/thong.png";

//Number 3
import chat from "../../../assets/images/story/story1/chat.png";
import us from "../../../assets/images/story/story1/us.jpg";
import paoisad from "../../../assets/images/story/story1/paoisad.jpg";
import alvinchopaoi from "../../../assets/images/story/story1/alvinchopaoi.jpg";
import alvinchopaoi2 from "../../../assets/images/story/story1/alvinchopaoi2.jpg";
import alvinchopaoi3 from "../../../assets/images/story/story1/alvinchopaoi3.jpg";
import doan from "../../../assets/images/story/story1/doan.jpg";

//Number 4
import dichoi1 from "../../../assets/images/story/story1/dichoi1.jpg";
import dichoi2 from "../../../assets/images/story/story1/dichoi2.jpg";
import dichoi3 from "../../../assets/images/story/story1/dichoi3.jpg";
import dichoi4 from "../../../assets/images/story/story1/dichoi4.jpg";
import paoishoot from "../../../assets/images/story/story1/paoishoot.jpg";
import shy from "../../../assets/images/story/story1/shy.png";
import group from "../../../assets/images/story/story1/group.jpg";

//Number 5
import talkshow from "../../../assets/images/story/story1/talkshow.jpg";
import add from "../../../assets/images/story/story1/add.png";
import debate from "../../../assets/images/story/story1/debate.jpg";
import birthday1 from "../../../assets/images/story/story1/birthday1.jpg";
import birthday2 from "../../../assets/images/story/story1/birthday2.jpg";
import birthday3 from "../../../assets/images/story/story1/birthday3.jpg";
import gud from "../../../assets/images/story/story1/gud.png";

import { useNavigate } from "react-router-dom";

import Archive from "../../../components/Archive";
const Prize1Story = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showArchive, setShowArchive] = useState(false); // State để điều khiển hiển thị

  const navigate = useNavigate();

  const pages = [
    {
      // Number 1
      id: 1,
      stages: [
        {
          step: 1,
          content: (
            <motion.img
              src={alvin}
              alt="Alvin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{
                position: "absolute",
                top: "10%",
                left: "30%",
                width: "250px",
                borderRadius: "20%",
                marginBottom: "20px",
              }}
            />
          ),
        },
        {
          step: 2,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              style={{
                fontFamily: "Boris",
                fontSize: "33px",
                position: "absolute",
                top: "46%",
                left: "35%",
                color: "#be185d",
                marginBottom: "20px",
              }}
            >
              Alvin
            </motion.p>
          ),
        },
        {
          step: 3,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              style={{
                fontFamily: "Boris",
                fontSize: "27px",
                position: "absolute",
                top: "52%",
                left: "30%",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Anh chồng hướng nội
            </motion.p>
          ),
        },
        {
          step: 4,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4 }}
              style={{
                fontFamily: "Boris",
                fontSize: "27px",
                position: "absolute",
                top: "58%",
                left: "31%",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Siêu cấp đẹp trai
            </motion.p>
          ),
        },
        {
          step: 5,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 5 }}
              style={{
                fontFamily: "Boris",
                fontSize: "27px",
                position: "absolute",
                top: "64%",
                left: "28%",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Cũng biết chơi game một tí
            </motion.p>
          ),
        },
        {
          step: 6,
          content: (
            <motion.img
              src={paoi}
              alt="Paoi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 7 }}
              style={{
                position: "absolute",
                top: "10%",
                left: "60%",
                width: "230px",
                borderRadius: "20%",
                marginBottom: "20px",
              }}
            />
          ),
        },
        {
          step: 7,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 8 }}
              style={{
                fontFamily: "Boris",
                fontSize: "33px",
                position: "absolute",
                top: "46%",
                left: "64.5%",
                color: "#be185d",
                marginBottom: "20px",
              }}
            >
              Paoi
            </motion.p>
          ),
        },

        {
          step: 8,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 9 }}
              style={{
                fontFamily: "Boris",
                fontSize: "27px",
                position: "absolute",
                top: "52%",
                left: "59.5%",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Ai cũm nói chiện đượt
            </motion.p>
          ),
        },

        {
          step: 9,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 10 }}
              style={{
                fontFamily: "Boris",
                fontSize: "27px",
                position: "absolute",
                top: "58%",
                left: "55.5%",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Xinh đẹp tuyện chần gian sán thế
            </motion.p>
          ),
        },

        {
          step: 10,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 11 }}
              style={{
                fontFamily: "Boris",
                fontSize: "27px",
                position: "absolute",
                top: "64%",
                left: "56.5%",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Vợ yêu vui tính nhưng hơi bính
            </motion.p>
          ),
        },

        {
          step: 11,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 13 }}
              style={{
                fontSize: "32px",
                fontFamily: "Boris",
                position: "absolute",
                top: "74%",
                left: "19%",
                color: "#be185d",
                maxWidth: "1300px",
                textAlign: "center",
              }}
            >
              Anh là một chàng trai hướng nội, ít nói nhưng hơi bị cuốn bằng sự
              bing chilling. Em lại là cô gái hoạt ngôn, vui tính, tỏa sáng như
              ánh mặt trùi. Khi ở bên nhau, anh và em như hai mảnh ghép hoàn
              hảo, lấp đầy những "khoảng trống" của nhau.
            </motion.p>
          ),
        },

        {
          step: 12,
          content: (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 15 }}
              style={{
                position: "absolute",
                top: "10%",
                left: "44.5%",
                fontSize: "200px",
                color: "#be185d",
                margin: "20px 0",
              }}
            >
              ❤️
            </motion.div>
          ),
        },
      ],
    },
    // Number 2
    {
      id: 2,
      stages: [
        {
          step: 1,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{
                fontFamily: "Boris",
                position: "absolute",
                top: "2%",
                left: "10%",
                fontSize: "33px",
                color: "#be185d",
                marginBottom: "20px",
              }}
            >
              Anh và em gặp nhau <br /> do duyên trời đã định và quen biết nhau
              <br /> qua một người bạn chung
            </motion.p>
          ),
        },
        {
          step: 2,
          content: (
            <motion.img
              src={thong}
              alt="thong"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "10%",
                width: "180px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 3,
          content: (
            <motion.img
              src={think}
              alt="think"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4 }}
              style={{
                position: "absolute",
                top: "20%",
                left: "2%",
                width: "300px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },
        {
          step: 4,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4 }}
              style={{
                fontFamily: "Boris",
                fontSize: "30px",
                position: "absolute",
                top: "27%",
                left: "5%",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            >
              Người mà em <br /> rất "mến"
            </motion.p>
          ),
        },

        {
          step: 5,
          content: (
            <motion.img
              src={net1}
              alt="Net1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 6 }}
              style={{
                position: "absolute",
                top: "30%",
                left: "27%",
                width: "300px",
                borderRadius: "50px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 6,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 7 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "45%",
                fontSize: "27px",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Lần đầu tiên mình tiếp xúc <br /> nhau là ở quán net với <br />{" "}
              tựa game Vá lô rần bần thần
            </motion.p>
          ),
        },
        {
          step: 7,
          content: (
            <motion.img
              src={milktea}
              alt="Milk Tea"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 9 }}
              style={{
                position: "absolute",
                top: "5%",
                left: "80%",
                width: "250px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },
        {
          step: 8,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 9 }}
              style={{
                position: "absolute",
                top: "10%",
                left: "53%",
                fontSize: "30px",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Mới gặp nhau vài lần, em đã tinh tế hỏi: <br /> "Huy uống gì
              không? <br /> Đặt chung luôn nè."
            </motion.p>
          ),
        },
        {
          step: 9,
          content: (
            <motion.img
              src={yeah}
              alt="Impression"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 11 }}
              style={{
                position: "absolute",
                top: "63%",
                left: "78%",
                width: "300px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 10,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 11 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "73%",
                fontSize: "30px",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Anh không đặt mà vẫn có ly uống, <br /> cứ tưởng em bao anh,
              <br /> ai dè là nhờ voucher. Hehee!
            </motion.p>
          ),
        },
      ],
    },

    //Number 3
    {
      id: 3,
      stages: [
        {
          step: 1,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{
                fontFamily: "Boris",
                position: "absolute",
                top: "5%",
                left: "5%",
                fontSize: "37px",
                color: "#be185d",
                marginBottom: "20px",
              }}
            >
              Em là chill girl với sự hài hước <br /> và thân thiện vô điều kiện
            </motion.p>
          ),
        },

        {
          step: 2,
          content: (
            <motion.img
              src={doan}
              alt="Doan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              style={{
                position: "absolute",
                top: "20%",
                left: "3%",
                width: "250px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 3,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              style={{
                position: "absolute",
                top: "72%",
                left: "3%",
                fontSize: "27px",
                color: "#333",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              Vợ lúc nào đi net với anh <br /> cũng mang theo đống đồ ăn nuôi
              chồng, <br />
              tưởng vợ là phú bà giàu sụ khụ khụ
            </motion.p>
          ),
        },

        {
          step: 4,
          content: (
            <motion.img
              src={paoisad}
              alt="baby"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 5 }}
              style={{
                position: "absolute",
                top: "20%",
                left: "37%",
                width: "200px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 5,
          content: (
            <motion.img
              src={chat}
              alt="talk"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 6 }}
              style={{
                position: "absolute",
                top: "-3%",
                left: "30%",
                width: "300px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },
        {
          step: 6,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 6 }}
              style={{
                fontFamily: "Boris",
                fontSize: "21px",
                position: "absolute",
                top: "9.5%",
                left: "32.5%",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            >
              Huy phải đón thì Khánh <br /> mới chịu đi net cơ
            </motion.p>
          ),
        },

        {
          step: 7,
          content: (
            <motion.img
              src={alvinchopaoi}
              alt="anhalvinduapaoi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 8 }}
              style={{
                position: "absolute",
                top: "3%",
                left: "67%",
                width: "200px",
                borderRadius: "50px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 8,
          content: (
            <motion.img
              src={alvinchopaoi2}
              alt="anhalvinduapaoi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 9 }}
              style={{
                position: "absolute",
                top: "3%",
                left: "77%",
                width: "225px",
                borderRadius: "50px",
                marginBottom: "20px",
              }}
            />
          ),
        },
        {
          step: 9,
          content: (
            <motion.img
              src={alvinchopaoi3}
              alt="anhalvinduapaoidi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 10 }}
              style={{
                position: "absolute",
                position: "absolute",
                top: "3%",
                left: "87%",
                width: "217px",
                borderRadius: "50px",
                marginBottom: "20px",
              }}
            />
          ),
        },
        {
          step: 10,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 12 }}
              style={{
                position: "absolute",
                top: "43%",
                left: "65%",
                fontSize: "27px",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Và cũng như thế qua sự chủ động nhẹ nhàng của em, va sự đáp lại
              "nhiệt tình" của anh dành cho em lâu dần chúng ta đã có tình cảm
              với nhao
            </motion.p>
          ),
        },
        {
          step: 11,
          content: (
            <motion.img
              src={us}
              alt="love"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 15 }}
              style={{
                position: "absolute",
                top: "55%",
                left: "50%",
                width: "250px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },
        {
          step: 12,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 15 }}
              style={{
                position: "absolute",
                top: "75%",
                left: "67%",
                fontSize: "27px",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              I love you pặc pặc hehee
            </motion.p>
          ),
        },
      ],
    },

    //Number 4
    {
      id: 4,
      stages: [
        {
          step: 1,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{
                fontFamily: "Boris",
                position: "absolute",
                top: "5%",
                left: "7%",
                fontSize: "37px",
                color: "#be185d",
                marginBottom: "20px",
              }}
            >
              Khoảng thời gian sau đó mình luôn dành cho nhau <br /> rất nhiều
              thời gian đáng nhớ và đáng giá
            </motion.p>
          ),
        },
        {
          step: 2,
          content: (
            <motion.img
              src={dichoi1}
              alt="anhdichoi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              style={{
                position: "absolute",
                top: "20%",
                left: "2%",
                width: "200px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 3,
          content: (
            <motion.img
              src={dichoi2}
              alt="anhdichoi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              style={{
                position: "absolute",
                top: "27%",
                left: "13%",
                width: "200px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },
        {
          step: 4,
          content: (
            <motion.img
              src={dichoi3}
              alt="anhdichoi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              style={{
                position: "absolute",
                top: "20%",
                left: "24%",
                width: "200px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 5,
          content: (
            <motion.img
              src={dichoi4}
              alt="anhdichoi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              style={{
                position: "absolute",
                top: "27%",
                left: "35%",
                width: "200px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 6,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 6 }}
              style={{
                position: "absolute",
                top: "70%",
                left: "7%",
                fontSize: "30px",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Sau đó mình còn tạo group để <br /> thêm những cuộc vui có nhao
              cùng bạn bè nữa
            </motion.p>
          ),
        },
        {
          step: 7,
          content: (
            <motion.img
              src={group}
              alt="anhgroup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 8 }}
              style={{
                position: "absolute",
                top: "83%",
                left: "16%",
                width: "300px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },
        {
          step: 8,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 10 }}
              style={{
                position: "absolute",
                top: "14%",
                left: "56%",
                fontSize: "27px",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Nhưng mà anh nhớ mãi khoảng khắc <br /> mình đi ăn gogi với nhau.
              Cách <br /> em ngắm anh hong một chút ngần <br /> ngại như bắn
              thẳng vào tim anh
            </motion.p>
          ),
        },
        {
          step: 9,
          content: (
            <motion.img
              src={paoishoot}
              alt="anhangogi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 13 }}
              style={{
                position: "absolute",
                top: "5%",
                left: "80%",
                width: "300px",
                borderRadius: "50%",
                marginBottom: "20px",
              }}
            />
          ),
        },
        {
          step: 10,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 15 }}
              style={{
                position: "absolute",
                top: "47%",
                left: "50%",
                fontSize: "30px",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Đó là lần đầu tiên anh cảm thấy được sự <br /> rung động và say
              nắng nhè nhẹ từ sự vô tư và dễ thương của em
            </motion.p>
          ),
        },

        {
          step: 11,
          content: (
            <motion.img
              src={shy}
              alt="anhalvin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 15 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "65%",
                width: "400px",
                color: "#333",
                marginBottom: "20px",
              }}
            />
          ),
        },
      ],
    },

    //Number 5
    {
      id: 5,
      stages: [
        {
          step: 1,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{
                fontFamily: "Boris",
                position: "absolute",
                top: "5%",
                left: "10%",
                fontSize: "37px",
                color: "#be185d",
                marginBottom: "20px",
              }}
            >
              Cuối cùng thì...
            </motion.p>
          ),
        },
        {
          step: 2,
          content: (
            <motion.img
              src={debate}
              alt="cuoccaiva"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              style={{
                position: "absolute",
                top: "35%",
                left: "7%",
                width: "400px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 3,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              style={{
                fontFamily: "Boris",
                fontSize: "27px",
                position: "absolute",
                top: "20%",
                left: "3%",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            >
              Mình cũng chưa có cơ hội nhắn tin riêng <br /> với nhau nhưng nhờ
              một dịp Tân và <br /> Thống cãi nhau nên em với anh đã kết bạn nói
              chuyện
            </motion.p>
          ),
        },

        {
          step: 4,
          content: (
            <motion.img
              src={add}
              alt="addfriend"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 7 }}
              style={{
                position: "absolute",
                top: "3%",
                left: "40%",
                width: "200px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 5,
          content: (
            <motion.img
              src={talkshow}
              alt="Talkshow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 7 }}
              style={{
                position: "absolute",
                top: "0%",
                left: "52%",
                width: "300px",
                borderRadius: "50px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 6,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 5 }}
              style={{
                position: "absolute",
                top: "5%",
                left: "70%",
                fontSize: "27px",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Mình kết bạn nói chuyện với nhau và <br />
              bắt đầu rủ nhau đi chơi riêng nhiều hơn,
              <br /> tính ra mình chưa quen luoonnn, mà đi chơi quá chời đấtt
            </motion.p>
          ),
        },

        {
          step: 7,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 10 }}
              style={{
                position: "absolute",
                top: "35%",
                left: "35%",
                fontSize: "27px",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Mãi đến sinh nhật anh, mình cùng nhau <br /> đón sinh nhật thật
              nồng cháy và vui vẻ
            </motion.p>
          ),
        },

        {
          step: 8,
          content: (
            <motion.img
              src={birthday1}
              alt="sinhnhat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 13 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "35%",
                width: "250px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 9,
          content: (
            <motion.img
              src={birthday2}
              alt="sinhnhat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 14 }}
              style={{
                position: "absolute",
                top: "55%",
                left: "48.5%",
                width: "200px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 10,
          content: (
            <motion.img
              src={birthday3}
              alt="sinhnhat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 15 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "59.5%",
                width: "200px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },

        {
          step: 11,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 17 }}
              style={{
                position: "absolute",
                top: "30%",
                left: "75%",
                fontSize: "30px",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Em làm anh cảm thấy anh được
              <br /> trân trọng hơn bao giờ hết
              <br /> và muốn em là của anh
            </motion.p>
          ),
        },

        {
          step: 12,
          content: (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 20 }}
              style={{
                fontFamily: "Boris",
                position: "absolute",
                top: "50%",
                left: "75%",
                fontSize: "30px",
                color: "#be185d",
                marginBottom: "20px",
              }}
            >
              Và ngày 17/12/2022 thì <br />
              điều đó đã trở thành hiện thực
            </motion.p>
          ),
        },

        {
          step: 12,
          content: (
            <motion.img
              src={gud}
              alt="sinhnhat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 20 }}
              style={{
                position: "absolute",
                top: "60%",
                left: "80%",
                width: "250px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          ),
        },
      ],
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
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="wait">
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
          {pages[currentPage].stages.map((stage, index) => (
            <div key={index}>{stage.content}</div>
          ))}
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

export default Prize1Story;
