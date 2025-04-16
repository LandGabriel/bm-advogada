import './Contact.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useForm } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xgvaqvvo");

  return (
    <section id="contato" className="contact-section" data-aos="fade-up">
      <h2 className="section-title">Entre em Contato</h2>
      <div className="contact-container">
        {state.succeeded ? (
          <div className="success-message">
            <p>Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <input 
              type="text" 
              name="name" 
              placeholder="Seu nome" 
              required 
              disabled={state.submitting}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Seu e-mail" 
              required 
              disabled={state.submitting}
            />
            <textarea 
              name="message" 
              placeholder="Sua mensagem" 
              required
              disabled={state.submitting}
            ></textarea>
            <button 
              type="submit" 
              disabled={state.submitting}
            >
              {state.submitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;