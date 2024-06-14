import React from 'react';
import './bebidas.css';

const Bebidas = ({ imageUrl }) => {
  return (
    <div className="bebidas">
      <img src={imageUrl} alt="Bebidas" className="bebidas-image" />
    </div>
  );
};

export default Bebidas;
