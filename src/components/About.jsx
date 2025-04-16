import './About.css';
import notebook from '../assets/notebook-photo.jpg';

function About() {
  return (
    <section 
      id="sobre" 
      className="about-section"
      style={{ backgroundImage: `url(${notebook})` }}
    >
      <div className="about-card">
        <div className="profile-container">
          <h2 className="profile-name">Bruna Matos</h2>
          <h2 className="profile-title">Advogada Civil e Consumerista </h2>
        </div>
        
        <div className="services-container">
          <ul className="services-list">
            <li>Ações judiciais estratégicas</li>
            <li>Contratos e revisão contratual</li>
            <li>Cobranças abusivas e danos morais</li>
            <li>Orientação preventiva</li>
          </ul>
        </div>
        
        <a href="#contato" className="cta-button">
          Vamos conversar sobre sua causa?
        </a>
      </div>
    </section>
  );
}

export default About;