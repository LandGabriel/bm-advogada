// src/components/Header.jsx
import './Header.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <div className="logo-main">BM</div>
        <div className="logo-sub">
          <span>B</span><span>R</span><span>U</span><span>N</span><span>A</span>
          &nbsp;
          <span>M</span><span>A</span><span>T</span><span>O</span><span>S</span>
        </div>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#sobre">Sobre</a>
          <a href="#profissional">Profissional</a>
          <a href="#atuacao">Atuação</a>
          <a href="#contato">Contato</a>
          <div className="mobile-social">
            <a href="https://www.instagram.com/brunamatos._/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/bruna-matos-6330a3224/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      )}

      <nav className="nav desktop-only">
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#profissional">Profissional</a></li>
          <li><a href="#atuacao">Atuação</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <div className="social-icons desktop-only">
        <a href="https://www.instagram.com/brunamatos._/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/bruna-matos-6330a3224/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </header>
  );
}

export default Header;