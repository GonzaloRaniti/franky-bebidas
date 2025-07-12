import ContactForm from '../components/ContactForm'
import './Contact.css'
import instagramIcon from '../assets/instagram.png'
import facebookIcon from '../assets/facebook.png'
import twitterIcon from '../assets/twitter.png'

const Contact = () => (
  <div>
    {/* Hero Section */}
    <section className="contact-hero">
      <div className="container">
        <h1 className="contact-hero-title">
          Contáctanos
        </h1>
        <p className="contact-hero-desc">
          Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos en menos de 24 horas.
        </p>
      </div>
    </section>

    <section className="contact-info-section">
      <div className="container">
        <div className="contact-info-grid">
          <div>
            <h2 className="contact-info-title">
              📍 Información de Contacto
            </h2>
            <div className="contact-info-cards">
              {/* Teléfono */}
              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <div>
                  <h3>Teléfono</h3>
                  <p>+54 11 1234-5678</p>
                </div>
              </div>
              {/* Email */}
              <div className="contact-info-card">
                <div className="contact-info-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>info@frankybebidas.com</p>
                </div>
              </div>
              {/* Dirección */}
              <div className="contact-info-card">
                <div className="contact-info-icon">🏢</div>
                <div>
                  <h3>Dirección</h3>
                  <p>Av. Corrientes 1234<br />Buenos Aires, Argentina</p>
                </div>
              </div>
              {/* Horarios */}
              <div className="contact-info-card">
                <div className="contact-info-icon">🕒</div>
                <div>
                  <h3>Horarios</h3>
                  <p>Lunes a Viernes: 9:00 - 20:00<br />Sábados: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            {/* Redes sociales */}
            <div className="contact-social-section">
              <h3 className="contact-social-title">Síguenos en redes sociales</h3>
              <div className="contact-social-links">
                <a href="#" className="contact-social-link" aria-label="Instagram">
                  <img src={instagramIcon} alt="Instagram" className="social-icon" />
                </a>
                <a href="#" className="contact-social-link" aria-label="Facebook">
                  <img src={facebookIcon} alt="Facebook" className="social-icon" />
                </a>
                <a href="#" className="contact-social-link" aria-label="Twitter/X">
                  <img src={twitterIcon} alt="Twitter/X" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Contact 