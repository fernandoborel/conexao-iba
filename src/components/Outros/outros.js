import React from 'react';
import './outros.css';

const Outros = ({ imageUrl }) => {
  return (
    <div className="outros">
      <img src={imageUrl} alt="Outros" className="outros-image" />
    </div>
  );
};

export default Outros;
