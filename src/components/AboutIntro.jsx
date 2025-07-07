import { Link } from 'react-router-dom'

const AboutIntro = () => (
  <section style={{ 
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Elementos decorativos */}
    <div style={{
      position: 'absolute',
      top: '10%',
      right: '10%',
      width: '200px',
      height: '200px',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
      borderRadius: '50%',
      animation: 'float 8s ease-in-out infinite',
    }}></div>
    
    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>
        {/* Contenido de texto */}
        <div style={{ animation: 'slideInLeft 1s ease-out' }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '800',
          }}>
            🏆 ¿Por qué elegirnos?
          </h2>
          <p style={{ 
            fontSize: '1.2rem',
            color: '#4a5568',
            lineHeight: '1.8',
            marginBottom: '2rem',
          }}>
            En <strong>Franky Bebidas</strong> nos enorgullece ofrecer la mejor selección de bebidas 
            alcohólicas y gaseosas del mercado. Con años de experiencia y un compromiso inquebrantable 
            con la calidad, somos tu mejor opción para todas tus necesidades de bebidas.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>🚚</span>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', color: '#2d3748' }}>Entrega Rápida</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#718096' }}>En 24 horas</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>🛡️</span>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', color: '#2d3748' }}>Calidad Garantizada</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#718096' }}>Productos originales</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>💰</span>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', color: '#2d3748' }}>Precios Justos</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#718096' }}>Los mejores precios</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>🎯</span>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', color: '#2d3748' }}>Atención Personalizada</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#718096' }}>Siempre disponibles</p>
              </div>
            </div>
          </div>
          
          <Link to="/sobre-nosotros">
            <button className="btn" style={{ 
              fontSize: '1.1rem',
              padding: '15px 30px',
              borderRadius: '50px',
            }}>
              📖 Conocer más sobre nosotros
            </button>
          </Link>
        </div>
        
        {/* Imagen/Ilustración */}
        <div style={{ 
          textAlign: 'center',
          animation: 'slideInRight 1s ease-out 0.3s both',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '400px',
            height: '400px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
          }}>
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '20%',
              fontSize: '3rem',
              animation: 'bounce 3s ease-in-out infinite',
            }}>🍺</div>
            <div style={{
              position: 'absolute',
              bottom: '30%',
              right: '20%',
              fontSize: '2.5rem',
              animation: 'bounce 3s ease-in-out infinite 1s',
            }}>🥤</div>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '4rem',
              animation: 'pulse 2s ease-in-out infinite',
            }}>🏆</div>
          </div>
        </div>
      </div>
    </div>
    
    <style>{`
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
      }
      
      @keyframes pulse {
        0%, 100% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.1); }
      }
    `}</style>
  </section>
)

export default AboutIntro 