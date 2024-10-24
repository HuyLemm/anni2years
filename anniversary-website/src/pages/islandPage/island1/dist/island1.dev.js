// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// // Import các hình ảnh cho trò chơi Spot the Difference
// import originalImage from '../../assets/images/islandPage/island1/original.png';
// import alteredImage from '../../assets/images/islandPage/island1/altered.png';
// import border from '../../assets/images/islandPage/island1/border.png';
// const Island1 = () => {
//   const [differencesFound, setDifferencesFound] = useState(0);
//   const [gameComplete, setGameComplete] = useState(false);
//   const totalDifferences = 5; // Số lượng điểm khác nhau
//   const navigate = useNavigate();
//   const handleClick = (e) => {
//     const diffCoordinates = [
//       { x: 120, y: 250 },
//       { x: 340, y: 180 },
//       { x: 220, y: 370 },
//       { x: 420, y: 210 },
//       { x: 530, y: 320 },
//     ];
//     const clickedX = e.nativeEvent.offsetX;
//     const clickedY = e.nativeEvent.offsetY;
//     // Kiểm tra xem điểm nhấn có gần với tọa độ của sự khác biệt không
//     diffCoordinates.forEach((diff) => {
//       if (Math.abs(clickedX - diff.x) < 30 && Math.abs(clickedY - diff.y) < 30) {
//         setDifferencesFound((prev) => prev + 1);
//       }
//     });
//   };
//   useEffect(() => {
//     if (differencesFound === totalDifferences) {
//       setGameComplete(true);
//     }
//   }, [differencesFound]);
//   return (
//     <div className="h-screen flex items-center justify-center relative text-pink-700">
//       <h1 style={{ fontFamily: 'Boris', fontSize: '50px', marginTop: '20px', textAlign: 'center' }}>
//         Trò chơi Tìm điểm khác biệt 🕵️‍♀️
//       </h1>
//       <div className="flex justify-center space-x-10 mt-10">
//         {/* Hình gốc */}
//         <div style={{ position: 'relative' }}>
//           <img src={originalImage} alt="Original" style={{ width: '500px', border: '2px solid black' }} />
//         </div>
//         {/* Hình đã thay đổi */}
//         <div style={{ position: 'relative' }}>
//           <img
//             src={alteredImage}
//             alt="Altered"
//             style={{ width: '500px', border: '2px solid black', cursor: 'pointer' }}
//             onClick={handleClick}
//           />
//         </div>
//       </div>
//       {/* Khi hoàn thành trò chơi */}
//       {gameComplete && (
//         <div
//           className="win-message"
//           style={{ position: 'absolute', left: '50%', top: '20%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}
//         >
//           <img src={border} alt="border" style={{ width: '450px' }} />
//           <h2 style={{ fontFamily: 'Boris', fontSize: '30px', color: '#28a745' }}>Chúc mừng em đã tìm thấy tất cả các điểm khác biệt! 🎉</h2>
//           <button
//             onClick={() => navigate('/homePage')}
//             style={{
//               fontFamily: 'Boris',
//               margin: '10px',
//               padding: '10px 20px',
//               fontSize: '25px',
//               borderRadius: '20px',
//               backgroundColor: 'transparent',
//               border: '4px solid #be185d',
//               cursor: 'pointer',
//             }}
//           >
//             ➜ Quay về trang chủ
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Island1;
"use strict";