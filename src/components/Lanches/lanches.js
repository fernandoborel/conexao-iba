import React from 'react';
import './lanches.css';

const Lanches = ({ imageUrl }) => {
  return (
    <div className="lanches">
      <img src={imageUrl} alt="Lanches" className="lanches-image" />
    </div>
  );
};

export default Lanches;
