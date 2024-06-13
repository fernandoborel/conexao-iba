import React, { useState } from 'react';
import './App.css';
import Logo from './components/Logo/logo';
import Lanches from './components/Lanches/lanches';
import Doces from './components/Doces/doces';

const App = () => {
  const [currentMenu, setCurrentMenu] = useState('lanches');

  const menus = {
    lanches: '/assets/img/lanches.jpeg',
    doces: '/assets/img/doces.jpeg',
  };

  return (
    <>
      <div className="app">
        <Logo />
        <nav>
          <button onClick={() => setCurrentMenu('lanches')}>Lanches</button>
          <button onClick={() => setCurrentMenu('doces')}>Doces</button>
        </nav>
        {currentMenu === 'doces' && <Doces imageUrl={menus.doces} />}
        {currentMenu === 'lanches' && <Lanches imageUrl={menus.lanches} />}
      </div>
      <footer className="footer">
        {/* Conteúdo do footer */}
      </footer>
    </>
  );
};

export default App;
