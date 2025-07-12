import { Link } from 'react-router-dom'
import inicioImg from '../assets/inicio.jpg'
import './AboutIntro.css'

const AboutIntro = () => (
  <section className="about-intro-section">
    {/* Elementos decorativos */}
    <div className="about-intro-deco"></div>
    <div className="container about-intro-container">
      <div className="about-intro-content">
        <img src={inicioImg} alt="Franky Bebidas" className="about-intro-img" />
        <div>
          <h2 className="about-intro-title">¿Por qué elegirnos?</h2>
          <p className="about-intro-desc">
            Somos tu mejor opción para comprar bebidas online: calidad, variedad, atención personalizada y entrega rápida.
          </p>
        </div>
      </div>
      <div className="about-intro-features">
        <div className="about-intro-feature">
          <span className="about-intro-feature-icon">🚚</span>
          <div>
            <h4 className="about-intro-feature-title">Entrega Rápida</h4>
            <p className="about-intro-feature-desc">En 24 horas</p>
          </div>
        </div>
        <div className="about-intro-feature">
          <span className="about-intro-feature-icon">🛡️</span>
          <div>
            <h4 className="about-intro-feature-title">Calidad Garantizada</h4>
            <p className="about-intro-feature-desc">Productos originales</p>
          </div>
        </div>
        <div className="about-intro-feature">
          <span className="about-intro-feature-icon">💰</span>
          <div>
            <h4 className="about-intro-feature-title">Precios Justos</h4>
            <p className="about-intro-feature-desc">Los mejores precios</p>
          </div>
        </div>
        <div className="about-intro-feature">
          <span className="about-intro-feature-icon">🎯</span>
          <div>
            <h4 className="about-intro-feature-title">Atención Personalizada</h4>
            <p className="about-intro-feature-desc">Siempre disponibles</p>
          </div>
        </div>
      </div>
      <Link to="/sobre-nosotros">
        <button className="btn about-intro-btn">
          📖 Conocer más sobre nosotros
        </button>
      </Link>
    </div>
  </section>
)

export default AboutIntro 