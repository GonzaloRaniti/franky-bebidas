import './About.css'

const About = () => (
  <div className="main-content about-main">
    <div className="card about-card">
      <h1>🍺 Sobre Franky Bebidas</h1>
      <div className="about-section-grid">
        <div className="card about-section-card">
          <span className="about-section-icon">🎯</span>
          <h3>Nuestra Misión</h3>
          <p className="about-section-desc">
            Proporcionar las mejores bebidas alcohólicas y gaseosas con la más alta calidad, 
            ofreciendo un servicio excepcional y entrega rápida a nuestros clientes.
          </p>
        </div>
        <div className="card about-section-card">
          <span className="about-section-icon">👁️</span>
          <h3>Nuestra Visión</h3>
          <p className="about-section-desc">
            Ser la tienda de bebidas más confiable y preferida, reconocida por nuestra 
            calidad, variedad y atención al cliente en toda la región.
          </p>
        </div>
        <div className="card about-section-card">
          <span className="about-section-icon">💎</span>
          <h3>Nuestros Valores</h3>
          <p className="about-section-desc">
            Calidad, honestidad, responsabilidad y compromiso con nuestros clientes. 
            Vendemos solo a mayores de 18 años.
          </p>
        </div>
      </div>
      <div className="about-history">
        <h2 className="about-history-title">📈 Nuestra Historia</h2>
        <p className="about-history-desc">
          Fundada en 2020, Franky Bebidas nació con la visión de revolucionar la venta de bebidas 
          en línea. Comenzamos como una pequeña tienda local y hoy somos referentes en el sector, 
          ofreciendo una amplia variedad de productos de las mejores marcas nacionales e importadas.
        </p>
      </div>
      <div className="about-stats-grid">
        <div>
          <h3 className="about-stats-value">1000+</h3>
          <p>Clientes satisfechos</p>
        </div>
        <div>
          <h3 className="about-stats-value">500+</h3>
          <p>Productos disponibles</p>
        </div>
        <div>
          <h3 className="about-stats-value">24h</h3>
          <p>Entrega garantizada</p>
        </div>
        <div>
          <h3 className="about-stats-value">5⭐</h3>
          <p>Calificación promedio</p>
        </div>
      </div>
    </div>
  </div>
)

export default About 