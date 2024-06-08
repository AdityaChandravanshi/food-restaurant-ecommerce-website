import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate('/menu');
  };

  return (
    <div className="home">
      <h2>Welcome to Food Restaurant</h2>
      <button onClick={goToMenu}>Go to Menu</button>
    </div>
  );
}

export default Home;
