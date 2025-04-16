import './Posts.css';

function Posts() {
  return (
    <section id="destaques" className="highlights-section" data-aos="fade-up">
      <h2 className="section-title">Casos & Conquistas</h2>
      <div className="highlight-cards">
        <div className="card">
          <h3>Acordo em Ação de Família</h3>
          <p>Condução em  processo com pedido de guarda, alimentos e regularização de convivência, com conciliação e mediação eficaz entre as partes, resultou em acordo homologado.</p>
        </div>
        <div className="card">
          <h3>Defesa Consumidor</h3>
          <p>Atuação contra empresa operadora de produtos alimentícios, garantindo reembolso integral e indenização por danos morais, diante de má prestação de serviços.</p>
        </div>
        <div className="card">
          <h3>Planejamento Sucessório</h3>
          <p>Estruturação jurídica de bens e testamento para evitar litígios entre herdeiros em família empresária.</p>
        </div>
      </div>
    </section>
  );
}

export default Posts;
