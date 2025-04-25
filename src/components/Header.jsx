import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fechar menu ao clicar em um link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Fechar menu ao redimensionar a tela para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      {/* Botão do menu mobile */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Menu"
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu mobile */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <a href="#sobre" onClick={closeMobileMenu}>Sobre</a>
          <a href="#profissional" onClick={closeMobileMenu}>Profissional</a>
          <a href="#atuacao" onClick={closeMobileMenu}>Atuação</a>
          <a href="#contato" onClick={closeMobileMenu}>Contato</a>
        </nav>
        
        <div className="mobile-social-icons">
          <a href="https://www.instagram.com/brunamatos._/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/bruna-matos-6330a3224/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Menu desktop */}
      <nav className="desktop-nav">
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#profissional">Profissional</a></li>
          <li><a href="#atuacao">Atuação</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <div className="desktop-social-icons">
        <a href="https://www.instagram.com/brunamatos._/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/bruna-matos-6330a3224/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
}

export default Header;