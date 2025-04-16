import './Footer.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-info">
          
          <p><FaMapMarkerAlt /> Alvorada - RS</p>
          <p><FaEnvelope /> <a href="mailto:bruna.matos496@outlook.com">bruna.matos496@outlook.com</a></p> 
          <p>
  <FaPhone /> 
  <a 
    href="https://wa.me/5551986228370" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Conversar por WhatsApp"
    className="whatsapp-link"
  >
    +55 (51) 98622-8370
  </a>
</p>        </div>

        <div className="footer-social">
          <h4>Redes Sociais</h4>
          <a href="https://www.instagram.com/brunamatos._/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/bruna-matos-6330a3224/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bruna Matos Advocacia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
