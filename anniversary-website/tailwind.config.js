/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Đảm bảo Tailwind áp dụng cho tất cả các file JS, JSX, TS, TSX trong src
    './public/index.html',        // Áp dụng cho file index.html trong public
  ],
  theme: {
    extend: {},                    // Mở rộng chủ đề nếu cần thiết
  },
  plugins: [],
};

