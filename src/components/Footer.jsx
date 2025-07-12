import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-container">
        {/* Información de la empresa */}
        <div>
          <div className="footer-logo-container">
            <div className="footer-logo">
              🍺
            </div>
            <div>
              <h3 className="footer-brand-name">
                FRANKY
              </h3>
              <span className="footer-brand-subtitle">
                BEBIDAS
              </span>
            </div>
          </div>
          <p className="footer-description">
            Tu tienda online de bebidas alcohólicas y gaseosas premium. 
            Calidad garantizada y entrega rápida.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="footer-section-title">
             Contacto
          </h4>
          <div className="footer-contact-info">
            <p> info@frankybebidas.com</p>
            <p> +54 11 1234-5678</p>
            <p> Av. Corrientes 1234, CABA</p>
          </div>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="footer-section-title">
             Horarios
          </h4>
          <div className="footer-contact-info">
            <p>Lunes a Viernes: 9:00 - 20:00</p>
            <p>Sábados: 10:00 - 18:00</p>
            <p>Domingos: 12:00 - 16:00</p>
          </div>
        </div>

    
        <div>
          <h4 className="footer-section-title">
            🌐 Síguenos
          </h4>
         
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="footer-divider">
        <p>&copy; {new Date().getFullYear()} Franky Bebidas. Todos los derechos reservados.</p>
        <p className="footer-copyright">
           Venta solo a mayores de 18 años
        </p>
      </div>
    </div>
  </footer>
)

export default Footer 