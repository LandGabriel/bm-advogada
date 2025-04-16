import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  return (
    <a href="https://wa.me/5551986228370" 
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="icon" />
      <span>Fale pelo WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
