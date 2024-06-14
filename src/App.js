import React, { useState } from 'react';
import './App.css';
import Logo from './components/Logo/logo';
import Salgados from './components/Salgados/salgados';
import Doces from './components/Doces/doces';
import Bebidas from './components/Bebidas/bebidas';
import Outros from './components/Outros/outros';

const App = () => {
  const [currentMenu, setCurrentMenu] = useState('salgados');

  const menus = {
    salgados: '/assets/img/salgados.jpg',
    doces: '/assets/img/doces.jpg',
    bebidas: '/assets/img/bebidas.jpeg',
    outros: '/assets/img/outros.png',
  };

  return (
    <>
      <div className="app">
        <Logo />
        <nav>
          <button onClick={() => setCurrentMenu('salgados')}>Salgados</button>
          <button onClick={() => setCurrentMenu('doces')}>Doces</button>
          <button onClick={() => setCurrentMenu('bebidas')}>Bebidas</button>
          <button onClick={() => setCurrentMenu('outros')}>Outros</button>
        </nav>
        {currentMenu === 'doces' && <Doces imageUrl={menus.doces} />}
        {currentMenu === 'salgados' && <Salgados imageUrl={menus.salgados} />}
        {currentMenu === 'bebidas' && <Bebidas imageUrl={menus.bebidas} />}
        {currentMenu === 'outros' && <Outros imageUrl={menus.outros} />}
      </div>
      <footer className="footer">
        {/* Conteúdo do footer */}
      </footer>
    </>
  );
};

export default App;
