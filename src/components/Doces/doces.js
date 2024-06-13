import React from 'react';
import './doces.css';

const Doces = ({ imageUrl }) => {
  return (
    <div className="doces">
      <img src={imageUrl} alt="Doces" className="doces-image" />
    </div>
  );
};

export default Doces;
