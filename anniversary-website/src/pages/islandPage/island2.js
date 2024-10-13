import React from 'react';
import { useNavigate } from 'react-router-dom';

const Island2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Island 2</h1>
      <p>This is the content for the first island...</p>
      <button onClick={() => navigate('/homePage')}>Back to HomePage</button>
    </div>
  );
};

export default Island2;