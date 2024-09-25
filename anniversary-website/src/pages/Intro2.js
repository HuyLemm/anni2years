import React, { useEffect } from 'react';
import racing2 from '../assets/images/intro/racing2.png';
import road2 from '../assets/images/intro/road2.png';

const Intro2 = () => {
  useEffect(() => {
    // Bạn có thể thêm các xử lý liên quan hoặc âm thanh tại đây nếu cần.
  }, []);

  return (
    <div className="h-screen flex items-center justify-center relative" style={{ overflow: 'hidden' }}>
      {/* Road 2 Image */}
      <img
        src={road2}
        alt="Road 2"
        className="absolute"
        style={{
          top: '100px', // Tùy chỉnh vị trí top cho road2
          left: '100px', // Tùy chỉnh vị trí left cho road2
          width: '600px', // Tùy chỉnh kích thước cho road2
          zIndex: 1,
        }}
      />

      {/* Racing 2 Image */}
      <img
        src={racing2}
        alt="Racing 2"
        className="absolute"
        style={{
          top: '200px', // Tùy chỉnh vị trí top cho racing2
          left: '150px', // Tùy chỉnh vị trí left cho racing2
          width: '150px', // Tùy chỉnh kích thước cho racing2
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default Intro2;
