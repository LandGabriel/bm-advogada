import './Practice.css';
import { 
  FaBalanceScale, 
  FaHandshake, 
  FaUserFriends, 
  FaFileContract, 
  FaGavel,
  FaBriefcase 
} from 'react-icons/fa';

function Practice() {
  return (
    <section id="atuacao" className="practice-section" data-aos="fade-left">
      <h2 className="section-title">Áreas de Atuação</h2>
      <div className="practice-grid">
        <div className="practice-item">
          <FaBalanceScale className="practice-icon" />
          <h3>Direito Civil</h3>
          <p>Condução em  processo com pedido de guarda, alimentos e regularização de convivência, com conciliação e mediação eficaz entre as partes, resultou em acordo homologado.</p>
        </div>
        <div className="practice-item">
          <FaHandshake className="practice-icon" />
          <h3>Direito do Consumidor</h3>
          <p>Defesa dos direitos consumeristas e ações contra cobranças abusivas.</p>
        </div>
        <div className="practice-item">
          <FaUserFriends className="practice-icon" />
          <h3>Direito de Família</h3>
          <p>Atuação humanizada em casos de divórcios, guarda, pensão e inventários.</p>
        </div>
        <div className="practice-item">
          <FaFileContract className="practice-icon" />
          <h3>Contratos</h3>
          <p>Elaboração, revisão e análise de contratos personalizados com segurança jurídica.</p>
        </div>
        <div className="practice-item">
          <FaGavel className="practice-icon" />
          <h3>Sucessões</h3>
          <p>Planejamento sucessório, partilhas, heranças e testamentos.</p>
        </div>
        <div className="practice-item">
          <FaBriefcase className="practice-icon" />
          <h3>Direito do Trabalho</h3>
          <p>Defesa dos direitos trabalhistas, rescisões e ações contra assédio moral.</p>
        </div>
      </div>
    </section>
  );
}

export default Practice;