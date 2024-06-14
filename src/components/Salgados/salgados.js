import React from 'react';
import './salgados.css';

const Salgados = ({ imageUrl }) => {
  return (
    <div className="salgados">
      <img src={imageUrl} alt="Salgados" className="salgados-image" />
    </div>
  );
};

export default Salgados;
