import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useAudioManager } from "../../../components/AudioManager";

import two312 from "../../../assets/images/story/story3/two312.jpg";
import homestay1 from "../../../assets/images/story/story3/homestay1.jpg";
import homestay2 from "../../../assets/images/story/story3/homestay2.jpg";
import one712 from "../../../assets/images/story/story3/one712.jpg";
import erastour1 from "../../../assets/images/story/story3/erastour1.jpg";
import dixam from "../../../assets/images/story/story3/dixam.jpg";
import dixam2 from "../../../assets/images/story/story3/dixam2.jpg";
import valentine2 from "../../../assets/images/story/story3/valentine2.jpg";
import fanta from "../../../assets/images/story/story3/fanta.jpg";
import fin from "../../../assets/images/story/story3/fin.jpg";
import valentine1 from "../../../assets/images/story/story3/valentine1.jpg";
import haian from "../../../assets/images/story/story3/haian.jpg";
import dalat from "../../../assets/images/story/story3/dalat.jpg";
import minecraft from "../../../assets/images/story/story3/minecraft.jpg";
import tamthangba from "../../../assets/images/story/story3/tamthangba.jpg";
import banhaisan from "../../../assets/images/story/story3/banhaisan.jpg";
import sinhnhatvo1 from "../../../assets/images/story/story3/sinhnhatvo1.jpg";
import ghepaoi from "../../../assets/images/story/story3/ghepaoi.jpg";
import qsu from "../../../assets/images/story/story3/qsu.jpg";
import hai010 from "../../../assets/images/story/story3/hai010.jpg";
import sinhnhatchong1 from "../../../assets/images/story/story3/sinhnhatchong1.jpg";
import giangsinh from "../../../assets/images/story/story3/giangsinh.jpg";
import eight3 from "../../../assets/images/story/story3/eight3.jpg";
import sinhnhatvo2 from "../../../assets/images/story/story3/sinhnhatvo2.jpg";
import haimuoi10 from "../../../assets/images/story/story3/haimuoi10.jpg";
import sinhnhatchong2 from "../../../assets/images/story/story3/sinhnhatchong2.jpg";
import dihoc from "../../../assets/images/story/story3/dihoc.jpg";
import manchao from "../../../assets/images/story/story3/manchao.jpg";
import wait from "../../../assets/images/story/story3/wait.jpg";

import Archive from "../../../components/Archive";
import { useNavigate } from "react-router-dom";
const Story3 = () => {
  const navigate = useNavigate();
  const [showArchive, setShowArchive] = useState(false);
  const lastEventRef = useRef(null);
  const [isLastEventVisible, setIsLastEventVisible] = useState(false);

  const timelineEvents = [
    {
      year: "23/12/2023",
      title: "Ngày đầu đi học với em",
      description:
        "Chồng mới i học với em ngày đầu mà đã bị mấy paparazi chụp lén òiiii 📷",
      image: two312,
    },

    {
      year: "14/02/2023",
      title: "Ngày Valentine",
      description:
        "Lễ tình yêu đầu tiên đón cùng vợ yêu. Vợ tặng bánh cúc ki cho anh ngon quá chời đất lun, vừa dễ thương vừa chất lượng. Yêu vợooooo!",
      image: valentine1,
    },

    {
      year: "22/02/2023",
      title: "Đi chơi trong nhà sách Hải An",
      description:
        "Đi dạo trong nhà sách chơi mặc dù hong có tiền mua gì hết chơn. Được vợ cho bế mấy baby thú bông tới để tập làm papa trụ cột của gia đình.",
      image: haian,
    },

    {
      year: "08/03/2023",
      title: "Ngày Quốc tế Phụ nữ",
      description:
        "Đón ngày Quốc tế Phụ nữ cùng vợ yêu. Đi coffee bed hâm nóng tình cảm, nói chuyện và tặng quà chill chill",
      image: tamthangba,
    },

    {
      year: "03/04/2023",
      title: "Xây nhà trong Minecraft",
      description:
        "Xây đủ thứ mình yêu thích trong game Minecraft. Nếu có thời gian thì trở lại Minecraft chơi và ngắm lại mấy công trình siu đẹp của tụi mình nhooo",
      image: minecraft,
    },

    {
      year: "07/06/2023",
      title: "Alvin bán hải sản",
      description: "Những bữa ăn ấm áp và những món quà nhỏ nhưng đầy ý nghĩa.",
      image: banhaisan,
    },

    {
      year: "03/07/2023",
      title: "Sinh nhật của vợ yêu",
      description:
        "Đón sinh nhật cùng vợ yêu với biết bao kỉ niệm nè, vừa đi chụp photobooth, vừa được ăn sushi và tặng vợ thật là nhiều nhieeuuu quà.",
      image: sinhnhatvo1,
    },

    {
      year: "05/08/2023",
      title: "Ghế cho paoi",
      description:
        "Sắm cái ghế mới cute phô mai que cho vợ live sì trim và chơi game ngon nghẻ hong bị đau lưng, mà còn nằm được nữa hehee.",
      image: ghepaoi,
    },

    {
      year: "19/08/2023",
      title: "Vợ yêu đi quân sự",
      description:
        "Vợ yêu đi quân sự lâu léc nên chồng yêu nhớ chạy lên chơi với vợ.",
      image: qsu,
    },

    {
      year: "09/09/2023",
      title: "Lần đầu đi xăm lính",
      description:
        "Sau 7749 lần thuyết phục của vợ, thì cuối cùng chồng cũng chịu đi xăm hình đôi đầu tiên. Tuy hơi tê tê con tê tê nhưng mà có hình đôi hơi bị xịnnn",
      image: dixam,
    },
    {
      year: "20/10/2023",
      title: "Ngày Phụ nữ Việt Nam",
      description:
        "Vợ chồng mình cùng đi ăn Sukiya thưởng thức u đỏn siu ngon, vợ được tặng con gấu bông dễ thưn như em.",
      image: hai010,
    },

    {
      year: "22/10/2023",
      title: "Đón Fin về nhà",
      description:
        "Lần đầu tiên tụi mình nuôi chung con nè. Fin dễ thương, thân thiện, nhưng mà nhà hong cho nuôi nữa, bùn hiuu. Nhưng mà mong con sẽ sống thiệt tốt ở nhà của người khác oooo, có thêm Fin chơi với Fanta nữa là hết sảy.",
      image: fin,
    },

    {
      year: "09/11/2023",
      title: "Taylor Swift: The Eras Tour",
      description:
        "Dắt vợ đi đú idol Tay lò sì quíp, chị yêu của vợ mặc dù chồng hong thích nghe nhạc US-UK cho lắm. But kim cha nà, vợ thích là được",
      image: erastour1,
    },

    {
      year: "17/11/2023",
      title: "Sinh nhật của chồng nè",
      description:
        "Đón sinh nhật với vợ yêu siu vuiii, ấn tượng với quả váy mới sếc xi am bà que bà que của vợ !!!",
      image: sinhnhatchong1,
    },

    {
      year: "08/12/2023",
      title: "Đi Đà Lạt với vợ yêu",
      description:
        "Lần đầu được đi du lịch xa với vợ yêu, vui quá chời vui. Tuy đi với nhà cũng hơi bị kèm cặp túy nhưng mà tụi mình vẫn có thời gian và tận hưởng khoảng thời gian siu tươi đẹp này ",
      image: dalat,
    },

    {
      year: "17/12/2023",
      title: "Anniversary 1 năm",
      description:
        "Tuy em hơi bận với tâm huyết của em trong việc làm bánh cho cửa hàng miao.baking, nhưng sau đó chúng ta vẫn có một ngày đi chơi thật là vui vẻ và đáng nhớ lun ó, vừa được ăn kpub mà vừa ăn bánh kem ngon quá chời",
      image: one712,
    },

    {
      year: "24/12/2023",
      title: "Lễ Giáng Sinh",
      description:
        "Giáng Sinh chill chill với vợ yêu. Vợ bận đi nhà thờ với nhà nên là qua nhà vợ nấu ăn để mừng giáng sinhhh.",
      image: giangsinh,
    },
    {
      year: "14/02/2024",
      title: "Ngày valentine",
      description:
        "Đón valentine thứ 2 cũng vợ yêu sắm ngay bộ card vá lô rần bần thần đôi cute phô mai que. Tuy hơi mắc nhưng mà dễ thương, có thêm đồ cặp trong game hihi",
      image: valentine2,
    },
    {
      year: "08/03/2024",
      title: "Ngày Quốc tế Phụ nữ",
      description:
        "Vì dính thứ 6 chồng đi học nên là mình đã đi chơi bù vào ngày 7, mình đi Wind Gaming để thử giường nằm nè, rùi đi dạo đường phố ăn bột chiên nà, òi cúi cùng là tận hưởng khoảng thời gian ở LG.",
      image: eight3,
    },

    {
      year: "18/03/2023",
      title: "Đón Fanta về nhà",
      description:
        "Lần thứ hai tụi mình cũng nuôi con nhưng mà hong hề hết tình yêu thưn, vẫn thưn Fanta, chăm sóc Fanta từng li từng tí. Mong Fanta sẽ đồng hành cùng vợ chồng mình lâu ơi là lâuuu",
      image: fanta,
    },

    {
      year: "17/04/2024",
      title: "Lần đầu đi Homestay",
      description:
        "Khi cả hai xảy ra quá nhiều cãi vã và có những vết thương không thể chữa lành được. Tụi mình đã chọn đi homestay để chữa lành bằng cách dành thời gian nguyên 1 ngày để chia sẻ và săn sóc cho nhau. Đối với anh, ngày đi này là một trải nghiệm tuyệt vời và anh cảm thấy thư giãn nhất vời người mình yêu",
      image: homestay1,
    },

    {
      year: "02/05/2024",
      title: "Đi coffee học bài",
      description:
        "Tuy tụi mình đi chơi nhiều nhưng cũng hong thể quên mà lo chuẩn bị cho tương lai tươi sáng với nhaooo, cùng đi học cùng chồng yêu nàoooo",
      image: dihoc,
    },

    {
      year: "03/07/2024",
      title: "Sinh nhật của vợ yêu",
      description:
        "Sinh nhật vợ chill chill với những món quà giản đơn. Mong vợ sẽ nâng niu embe thỏ jellycat fake, và xịt đôn chề am bết sa mỗi ngày nhooo.",
      image: sinhnhatvo2,
    },

    {
      year: "07/08/2024",
      title: "Lần 2 đi Homestay",
      description:
        "Lần hai đi chúng ta đã ít cãi nhau hơn òi nè. Chúng ta đi vì muốn dành thời gian cho nhau nhiều hơn nữa, và dành thời gian cho cả con của mình là Fanta. Tuy dắt con theo hơi mệt khi canh chừng và con quậy phá đồ đạc lúc mình đang nấu ăn hay thư giãn với nhau, nhưng đối với anh được cùng em chăm sóc và nuôi nấng Fanta lớn lên là một điều hạnh phúc nhất.",
      image: homestay2,
    },

    {
      year: "14/10/2024",
      title: "Lần 2 đi xăm lính",
      description:
        "Đây là lần thứ 2 vợ đi xăm khi mình quen nhao, chồng hong thích xăm nên thui để vợ thỏa đam mê i xăm hình fanta. Tuy bị ông chửi abcdxyz nhưng mà hong sao vợ vui, nhà vui heheee",
      image: dixam2,
    },
    {
      year: "19/10/2024",
      title: "Ngày mà thế giới bị xâm chiếm",
      description:
        "Thế giới và cả Laputa đã chính thức bị Manchao, Babythree và thủ lĩnh Paoiii xâm chiếm !!!",
      image: manchao,
    },
    {
      year: "20/10/2024",
      title: "Ngày Phụ nữ Việt Nam",
      description:
        "20/10 hơi sóng gió gia tộc một xíu, mưa to xiuxuu nhưng mà vợ chồng mình bất chấp đi ăn lạp xưởng nướng đá ngon lành cành đào chill chill với nhao.",
      image: haimuoi10,
    },

    {
      year: "17/11/2024",
      title: "Sinh nhật của chồng nè",
      description:
        "Đón sinh nhật chồng siuuu zuiii, vợ tặng một đống quà còn dẫn chồng đi ăn mì ý và sì teak Chi-ik'.",
      image: sinhnhatchong2,
    },

    {
      year: "17/12/2024",
      title: "Anniversary 2 năm",
      description: "Đón xem nhoo vợ yêuu...",
      image: wait,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLastEventVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Hiển thị khi 50% sự kiện cuối nằm trong viewport
    );

    if (lastEventRef.current) observer.observe(lastEventRef.current);
    return () => {
      if (lastEventRef.current) observer.unobserve(lastEventRef.current);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        backgroundColor: "#fce7f3",
        fontFamily: "Boris",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "37px",
            color: "#be185d",
            fontFamily: "Boris",
            fontWeight: "bold",
          }}
        >
          Timeline 2 Năm Yêu Nhau
        </motion.h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "20px",
        }}
      >
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            ref={index === timelineEvents.length - 1 ? lastEventRef : null} // Ref vào sự kiện cuối
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
              width: "80%",
            }}
          >
            {index % 2 === 0 && (
              <div
                style={{
                  flex: 1,
                  textAlign: "right",
                  paddingRight: "20px",
                }}
              >
                <h2
                  style={{
                    fontSize: "28px",
                    color: "#be185d",
                    fontWeight: "bold",
                  }}
                >
                  {event.year}
                </h2>
                <div
                  style={{
                    height: "4px",
                    backgroundColor: "#be185d",
                    width: "515px",
                    transform: "translateX(142%)",
                  }}
                ></div>
                <h3
                  style={{
                    marginTop: "10px",
                    fontSize: "24px",
                    color: "#333",
                    fontWeight: "bold",
                  }}
                >
                  {event.title}
                </h3>
                <p
                  style={{
                    fontSize: "22px",
                    color: "#666",
                    width: "480px",
                    transform: "translateX(160%)",
                  }}
                >
                  {event.description}
                </p>
              </div>
            )}
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={event.image}
                alt={event.title}
                style={{ width: "95%", height: "95%", borderRadius: "50%" }}
              />
            </div>
            {index % 2 !== 0 && (
              <div
                style={{
                  flex: 1,
                  textAlign: "left",
                  paddingLeft: "20px",
                }}
              >
                <h2
                  style={{
                    fontSize: "28px",
                    color: "#be185d",
                    fontWeight: "bold",
                  }}
                >
                  {event.year}
                </h2>
                <div
                  style={{
                    height: "4px",
                    backgroundColor: "#be185d",
                    width: "513px",
                  }}
                ></div>
                <h3
                  style={{
                    fontSize: "24px",
                    color: "#333",
                    marginTop: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {event.title}
                </h3>

                <p style={{ fontSize: "22px", color: "#666", width: "480px" }}>
                  {event.description}
                </p>
              </div>
            )}
          </motion.div>
        ))}

        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: "4px",
            backgroundColor: "#be185d",
          }}
        ></div>

        {/* Nút Finish */}
        {isLastEventVisible && (
          <motion.button
            onClick={() => navigate("/homePage")}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              bottom: "20px",
              left: "47%",
              transform: "translateX(-50%)",
              padding: "10px 20px",
              fontSize: "24px",
              borderRadius: "10px",
              backgroundColor: "#be185d",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Finish
          </motion.button>
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

export default Story3;
