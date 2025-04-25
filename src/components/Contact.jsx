import './Contact.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useForm } from '@formspree/react';
import { useState } from 'react'; // Adicionado

function Contact() {
  const [state, handleSubmit] = useForm("xgvaqvvo");
  const [showForm, setShowForm] = useState(true); // Novo estado

  const resetForm = () => {
    setShowForm(false);
    // Força um rerender limpando o estado
    setTimeout(() => {
      setShowForm(true);
    }, 0);
  };

  return (
    <section id="contato" className="contact-section" data-aos="fade-up">
      <h2 className="section-title">Entre em Contato</h2>
      <div className="contact-container">
        {state.succeeded ? (
          <div className="success-message">
            <p>Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
            <button 
              onClick={resetForm}
              className="new-message-button"
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : showForm ? (
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
              className="submit-button"
            >
              {state.submitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        ) : null}
      </div>
    </section>
  );
}

export default Contact;