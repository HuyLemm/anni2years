import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import các hình ảnh cho trò chơi ghép đôi
import us1 from '../../assets/images/islandPage/island3/us1.png';
import us2 from '../../assets/images/islandPage/island3/us2.png';
import us3 from '../../assets/images/islandPage/island3/us3.png';
import us4 from '../../assets/images/islandPage/island3/us4.png';
import us5 from '../../assets/images/islandPage/island3/us5.png';
import us6 from '../../assets/images/islandPage/island3/us6.png';
import us7 from '../../assets/images/islandPage/island3/us7.png';
import us8 from '../../assets/images/islandPage/island3/us8.png';

import bordersquare from '../../assets/images/islandPage/island3/bordersquare.png';
import card from '../../assets/images/islandPage/island3/card.png';

const Island3 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Tạo và xáo trộn bộ bài gồm 8 cặp ảnh
    const shuffledCards = shuffle([
      { id: 1, src: us1 },
      { id: 2, src: us2 },
      { id: 3, src: us3 },
      { id: 4, src: us4 },
      { id: 5, src: us5 },
      { id: 6, src: us6 },
      { id: 7, src: us7 },
      { id: 8, src: us8 },
      { id: 1, src: us1 },
      { id: 2, src: us2 },
      { id: 3, src: us3 },
      { id: 4, src: us4 },
      { id: 5, src: us5 },
      { id: 6, src: us6 },
      { id: 7, src: us7 },
      { id: 8, src: us8 },
    ]);
    setCards(shuffledCards);
  }, []);

  // Hàm xáo trộn bộ bài
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Hàm xử lý khi người chơi lật thẻ
  const handleFlip = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;

    setFlippedCards((prev) => [...prev, index]);

    if (flippedCards.length === 1) {
      const firstIndex = flippedCards[0];
      const firstCard = cards[firstIndex];
      const secondCard = cards[index];

      if (firstCard.id === secondCard.id) {
        setMatchedPairs((prev) => [...prev, firstCard.id]);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  // Hàm kiểm tra khi trò chơi hoàn thành
  useEffect(() => {
    if (matchedPairs.length === 8) {
      setGameComplete(true);
    }
  }, [matchedPairs]);

  const resetGame = () => {
    setMatchedPairs([]);
    setFlippedCards([]);
    setCards(shuffle(cards));
    setGameComplete(false);
  };

  return (
    <div className="h-screen flex items-center justify-center relative text-pink-700" style={{ overflow: 'hidden' }}>
      {/* Nền viền ngoài của trò chơi */}
      <img src={bordersquare} alt="border" style={{ width: '900px', height: '1000px', position: 'absolute', top: 100, left: 500, zIndex: 0, opacity: 0.5 }} />

      {/* Luật chơi ở phía bên trái */}
      <div style={{ position: 'absolute', left: '20px', top: '350px', fontFamily: 'Boris', fontSize: '21px', color: '#000', textAlign: 'left', zIndex: 1 }}>
        <h2>Luật chơi</h2>
        <ul>
          <li>1. Lật từng cặp thẻ để tìm thẻ trùng khớp.</li>
          <li>2. Mỗi cặp thẻ trùng sẽ biến mất.</li>
          <li>3. Hoàn thành trò chơi khi ghép đúng tất cả các cặp.</li>
        </ul>
      </div>

      <h1 style={{ fontFamily: 'Boris', position: 'absolute', fontSize: '50px', marginTop: '20px', left: '50%', top: '0%', transform: 'translateX(-50%)' }}>Trò chơi ghép đôi trí nhớ</h1>

      {/* Hiển thị lưới các thẻ */}
      <div className="grid grid-cols-4 " style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '130px', zIndex: 1 }}>
        {cards.map((cardData, index) => (
          <motion.div
            key={index}
            className={`card ${flippedCards.includes(index) || matchedPairs.includes(cardData.id) ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
            style={{  width: '153px', height: '180px', perspective: '1000px' }}
            whileHover={{ scale: 1.05 }}  // Scale up khi hover
          >
            <motion.div
              className="inner-card"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: flippedCards.includes(index) || matchedPairs.includes(cardData.id) ? 180 : 0 }}
              transition={{ duration: 0.5 }}  // Thời gian lật card
              style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
            >
              {/* Mặt trước của thẻ (khi chưa lật) */}
              <motion.img
                src={card}
                alt="Memory Card Back"
                style={{ width: '100%', height: '100%', position: 'absolute', backfaceVisibility: 'hidden' }}
              />
              {/* Mặt sau của thẻ (khi đã lật) */}
              <motion.img
                src={cardData.src}
                alt="Memory Card Front"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Khi trò chơi hoàn thành */}
      {gameComplete && (
        <div className="win-message" style={{ marginTop: '20px', position: 'absolute', left: '80%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Boris', fontSize: '30px', color: '#28a745' }}>Chúc mừng! Bạn đã hoàn thành trò chơi!</h2>
          <button onClick={resetGame} style={{ margin: '10px', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', backgroundColor: '#FFD700' }}>Chơi lại</button>
          <button onClick={() => navigate('/homePage')} style={{ margin: '10px', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', backgroundColor: '#00aaff' }}>Quay về trang chủ</button>
        </div>
      )}
    </div>
  );
};

export default Island3;
