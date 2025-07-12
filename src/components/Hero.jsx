import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => (
  <section className="hero-section">
    {/* Elementos decorativos animados */}
    <div className="hero-deco deco1"></div>
    <div className="hero-deco deco2"></div>
    <div className="hero-deco deco3"></div>
    <div className="container hero-container">
      {/* Logo y título principal */}
      <div className="hero-logo-title">
        <div className="hero-logo-circle">🍺</div>
        <div className="hero-title-box">
          <h1 className="hero-title">FRANKY</h1>
          <h2 className="hero-subtitle">BEBIDAS</h2>
        </div>
        <div className="hero-line"></div>
      </div>
      <p className="hero-desc">
        Tu tienda online de bebidas alcohólicas y gaseosas premium. <br />
        <strong>Entrega rápida y segura en toda la ciudad</strong>
      </p>
      {/* Estadísticas */}
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-num">500+</div>
          <div className="hero-stat-label">Productos</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">24h</div>
          <div className="hero-stat-label">Entrega</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">1000+</div>
          <div className="hero-stat-label">Clientes</div>
        </div>
      </div>
      {/* Botones de acción */}
      <div className="hero-actions">
        <Link to="/productos">
          <button className="btn hero-btn">
             Ver Productos
          </button>
        </Link>
        <Link to="/sobre-nosotros">
          <button className="btn btn-secondary hero-btn">
            Sobre Nosotros
          </button>
        </Link>
      </div>
    </div>
  </section>
)

export default Hero 