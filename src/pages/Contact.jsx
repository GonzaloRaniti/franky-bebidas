import ContactForm from '../components/ContactForm'

const Contact = () => (
  <div>
    {/* Hero Section */}
    <section style={{
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)',
      padding: '6rem 2rem',
      textAlign: 'center',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Elementos decorativos */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        fontSize: '3rem',
        opacity: '0.1',
        animation: 'float 6s ease-in-out infinite',
        color: '#fff',
      }}>📞</div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '10%',
        fontSize: '2.5rem',
        opacity: '0.1',
        animation: 'float 8s ease-in-out infinite reverse',
        color: '#fff',
      }}>📧</div>
      
      <div className="container">
        <h1 style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          fontWeight: '900',
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          color: '#fff',
        }}>
          Contáctanos
        </h1>
        <p style={{
          fontSize: '1.4rem',
          maxWidth: '600px',
          margin: '0 auto',
          opacity: '0.95',
          lineHeight: '1.6',
          color: '#fff',
        }}>
          Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos en menos de 24 horas.
        </p>
      </div>
    </section>

    {/* Información de contacto y formulario */}
    <section style={{ padding: '4rem 2rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          
          {/* Información de contacto */}
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700',
            }}>
              📍 Información de Contacto
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Teléfono */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,245,250,0.95) 100%)',
                borderRadius: '15px',
                border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  📞
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '700', color: '#23272f' }}>
                    Teléfono
                  </h3>
                  <p style={{ margin: '0', color: '#23272f', fontSize: '1.1rem', fontWeight: '500' }}>
                    +54 11 1234-5678
                  </p>
                </div>
              </div>

              {/* Email */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,245,250,0.95) 100%)',
                borderRadius: '15px',
                border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  📧
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '700', color: '#23272f' }}>
                    Email
                  </h3>
                  <p style={{ margin: '0', color: '#23272f', fontSize: '1.1rem', fontWeight: '500' }}>
                    info@frankybebidas.com
                  </p>
                </div>
              </div>

              {/* Dirección */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,245,250,0.95) 100%)',
                borderRadius: '15px',
                border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  🏢
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '700', color: '#23272f' }}>
                    Dirección
                  </h3>
                  <p style={{ margin: '0', color: '#23272f', fontSize: '1.1rem', fontWeight: '500' }}>
                    Av. Corrientes 1234<br />
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>

              {/* Horarios */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,245,250,0.95) 100%)',
                borderRadius: '15px',
                border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  🕒
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '700', color: '#23272f' }}>
                    Horarios
                  </h3>
                  <p style={{ margin: '0', color: '#23272f', fontSize: '1.1rem', fontWeight: '500' }}>
                    Lunes a Viernes: 9:00 - 20:00<br />
                    Sábados: 10:00 - 18:00
                  </p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                fontWeight: '600',
              }}>
                Síguenos en redes sociales
              </h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease',
                }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                  📘
                </a>
                <a href="#" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease',
                }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                  📷
                </a>
                <a href="#" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease',
                }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                  🐦
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    {/* Mapa */}
    <section style={{ 
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
    }}>
      <div className="container">
        <h2 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          fontWeight: '900',
          color: '#fff',
          textShadow: '0 4px 16px rgba(0,0,0,0.35), 0 1px 0 #764ba2',
        }}>
          📍 Nuestra Ubicación
        </h2>
        
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(102, 126, 234, 0.1)',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            height: '400px',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: '600',
          }}>
            🗺️ Mapa interactivo - Av. Corrientes 1234, Buenos Aires
          </div>
        </div>
      </div>
    </section>

    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      @media (max-width: 768px) {
        .container > div {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </div>
)

export default Contact 