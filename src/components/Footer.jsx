const Footer = () => (
  <footer style={{
    background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
    color: '#e2e8f0',
    padding: '3rem 2rem 2rem',
    marginTop: 'auto',
  }}>
    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem',
      }}>
        {/* Información de la empresa */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              color: 'white',
            }}>
              🍺
            </div>
            <div>
              <h3 style={{ 
                color: 'white', 
                margin: '0 0 0.25rem 0',
                fontSize: '1.5rem',
                fontWeight: '800',
              }}>
                FRANKY
              </h3>
              <span style={{
                fontSize: '0.9rem',
                color: '#a0aec0',
                fontWeight: '500',
                letterSpacing: '1px',
              }}>
                BEBIDAS
              </span>
            </div>
          </div>
          <p style={{ 
            lineHeight: '1.6',
            color: '#a0aec0',
            marginBottom: '1rem',
          }}>
            Tu tienda online de bebidas alcohólicas y gaseosas premium. 
            Calidad garantizada y entrega rápida.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h4 style={{ 
            color: 'white', 
            marginBottom: '1rem',
            fontSize: '1.1rem',
          }}>
            📞 Contacto
          </h4>
          <div style={{ color: '#a0aec0', lineHeight: '1.8' }}>
            <p>📧 info@frankybebidas.com</p>
            <p>📱 +54 11 1234-5678</p>
            <p>📍 Av. Corrientes 1234, CABA</p>
          </div>
        </div>

        {/* Horarios */}
        <div>
          <h4 style={{ 
            color: 'white', 
            marginBottom: '1rem',
            fontSize: '1.1rem',
          }}>
            🕒 Horarios
          </h4>
          <div style={{ color: '#a0aec0', lineHeight: '1.8' }}>
            <p>Lunes a Viernes: 9:00 - 20:00</p>
            <p>Sábados: 10:00 - 18:00</p>
            <p>Domingos: 12:00 - 16:00</p>
          </div>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 style={{ 
            color: 'white', 
            marginBottom: '1rem',
            fontSize: '1.1rem',
          }}>
            🌐 Síguenos
          </h4>
        </div>
      </div>

      {/* Línea divisoria */}
      <div style={{
        borderTop: '1px solid #4a5568',
        paddingTop: '2rem',
        textAlign: 'center',
        color: '#718096',
      }}>
        <p>&copy; {new Date().getFullYear()} Franky Bebidas. Todos los derechos reservados.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          🚫 Venta solo a mayores de 18 años
        </p>
      </div>
    </div>
  </footer>
)

export default Footer 