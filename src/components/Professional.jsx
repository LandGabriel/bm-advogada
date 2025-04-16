import './Professional.css';
import photo from '../assets/bru-photo.jpeg';
import campus from '../assets/campus.jpg';

const Professional = () => {
  return (
    <section id="profissional" className="professional-section" data-aos="fade-up">
      <h2 className="section-title">A Profissional</h2>
      <div className="professional-content">
        <div className="campus-image">
          <img src={campus} alt="Campus da Uniritter" />
        </div>
        <div className="profile-content">
          <img src={photo} alt="Foto da advogada" className="profile-photo" />
          <p className="description">
            Formada na Uniritter, bolsista do Prouni e especialista em Direito Civil e Consumidor. Aprovada na OAB em 2023 garantindo seu título de advogada
            atuo de forma estratégica, ética e humana. Focando na resolução inteligente de conflitos,
            na comunicação clara com o cliente e no cuidado individual com cada caso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Professional;
