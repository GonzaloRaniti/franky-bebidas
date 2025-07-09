import { Link } from 'react-router-dom'

const Hero = () => (
  <section style={{
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)',
    padding: '8rem 2rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {/* Elementos decorativos animados */}
    <div style={{
      position: 'absolute',
      top: '10%',
      left: '5%',
      width: '150px',
      height: '150px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      animation: 'float 8s ease-in-out infinite',
      backdropFilter: 'blur(10px)',
    }}></div>
    <div style={{
      position: 'absolute',
      bottom: '15%',
      right: '8%',
      width: '120px',
      height: '120px',
      background: 'rgba(255, 255, 255, 0.08)',
      borderRadius: '50%',
      animation: 'float 10s ease-in-out infinite reverse',
      backdropFilter: 'blur(10px)',
    }}></div>
    <div style={{
      position: 'absolute',
      top: '60%',
      left: '15%',
      width: '80px',
      height: '80px',
      background: 'rgba(255, 255, 255, 0.06)',
      borderRadius: '50%',
      animation: 'float 12s ease-in-out infinite',
      backdropFilter: 'blur(10px)',
    }}></div>
    
    {/* Burbujas decorativas */}
    <div style={{
      position: 'absolute',
      top: '20%',
      right: '20%',
      fontSize: '2rem',
      animation: 'bounce 3s ease-in-out infinite',
    }}>🍺</div>
    <div style={{
      position: 'absolute',
      bottom: '30%',
      left: '25%',
      fontSize: '1.5rem',
      animation: 'bounce 4s ease-in-out infinite 1s',
    }}>🥤</div>
    <div style={{
      position: 'absolute',
      top: '40%',
      right: '10%',
      fontSize: '1.8rem',
      animation: 'bounce 3.5s ease-in-out infinite 0.5s',
    }}>🍷</div>
    
    <div className="container" style={{ position: 'relative', zIndex: 10 }}>
      {/* Badge de oferta */}
      <div style={{
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
        color: 'white',
        padding: '0.5rem 1.5rem',
        borderRadius: '25px',
        display: 'inline-block',
        marginBottom: '2rem',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        boxShadow: '0 8px 25px rgba(255, 107, 107, 0.4)',
        animation: 'pulse 2s ease-in-out infinite',
      }}>
        🎉 ¡ENVÍO GRATIS EN PEDIDOS SUPERIORES A $5000!
      </div>
      
      {/* Logo y título principal */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2rem',
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          width: '120px',
          height: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          marginBottom: '2rem',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        }}>
          🍺
        </div>
        
        {/* Título principal mejorado */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
          padding: '2rem 3rem',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          marginBottom: '2rem',
          animation: 'slideInUp 1s ease-out',
        }}>
          <h1 style={{ 
            fontSize: '5rem', 
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '900',
            lineHeight: '1',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}>
            FRANKY
          </h1>
          <h2 style={{
            fontSize: '2.8rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '700',
            marginBottom: '0',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}>
            BEBIDAS
          </h2>
        </div>
        
        {/* Línea decorativa */}
        <div style={{
          width: '150px',
          height: '6px',
          background: 'linear-gradient(90deg, transparent, #667eea, #764ba2, transparent)',
          marginBottom: '2rem',
          borderRadius: '3px',
          animation: 'slideInUp 1s ease-out 0.4s both',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.5)',
        }}></div>
      </div>
      
      <p style={{ 
        fontSize: '1.6rem', 
        marginBottom: '3rem',
        color: 'rgba(255, 255, 255, 0.95)',
        maxWidth: '700px',
        margin: '0 auto 3rem',
        lineHeight: '1.6',
        animation: 'slideInUp 1s ease-out 0.6s both',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      }}>
        Tu tienda online de bebidas alcohólicas y gaseosas premium. 
        <br />
        <strong>Entrega rápida y segura en toda la ciudad</strong>
      </p>
      
      {/* Estadísticas */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        marginBottom: '3rem',
        flexWrap: 'wrap',
        animation: 'slideInUp 1s ease-out 0.8s both',
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>500+</div>
          <div style={{ fontSize: '1rem', opacity: '0.9' }}>Productos</div>
        </div>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>24h</div>
          <div style={{ fontSize: '1rem', opacity: '0.9' }}>Entrega</div>
        </div>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>1000+</div>
          <div style={{ fontSize: '1rem', opacity: '0.9' }}>Clientes</div>
        </div>
      </div>
      
      {/* Botones de acción */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        animation: 'slideInUp 1s ease-out 1s both',
      }}>
        <Link to="/productos">
          <button className="btn" style={{ 
            fontSize: '1.2rem',
            padding: '15px 30px',
            borderRadius: '50px',
            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
          }}>
            🛍️ Ver Productos
          </button>
        </Link>
        <Link to="/sobre-nosotros">
          <button className="btn btn-secondary" style={{ 
            fontSize: '1.2rem',
            padding: '15px 30px',
            borderRadius: '50px',
            boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)',
          }}>
            📖 Sobre Nosotros
          </button>
        </Link>
      </div>
    </div>

    {/* Media queries para responsive */}
    <style>{`
      @media (max-width: 768px) {
        section {
          padding: 4rem 1rem !important;
          min-height: 80vh !important;
        }
        
        h1 {
          font-size: 3rem !important;
        }
        
        h2 {
          font-size: 1.8rem !important;
        }
        
        p {
          font-size: 1.2rem !important;
        }
        
        div[style*="width: 120px"] {
          width: 80px !important;
          height: 80px !important;
          font-size: 2.5rem !important;
        }
        
        div[style*="padding: 2rem 3rem"] {
          padding: 1.5rem 2rem !important;
        }
        
        div[style*="gap: 3rem"] {
          gap: 1.5rem !important;
        }
        
        div[style*="font-size: 2.5rem"] {
          font-size: 2rem !important;
        }
        
        div[style*="font-size: 1rem"] {
          font-size: 0.9rem !important;
        }
        
        button {
          font-size: 1rem !important;
          padding: 12px 24px !important;
        }
      }
      
      @media (max-width: 480px) {
        section {
          padding: 3rem 1rem !important;
        }
        
        h1 {
          font-size: 2.5rem !important;
        }
        
        h2 {
          font-size: 1.5rem !important;
        }
        
        p {
          font-size: 1.1rem !important;
        }
        
        div[style*="width: 120px"] {
          width: 60px !important;
          height: 60px !important;
          font-size: 2rem !important;
        }
        
        div[style*="padding: 2rem 3rem"] {
          padding: 1rem 1.5rem !important;
        }
        
        div[style*="gap: 3rem"] {
          gap: 1rem !important;
        }
        
        div[style*="font-size: 2.5rem"] {
          font-size: 1.5rem !important;
        }
        
        button {
          font-size: 0.9rem !important;
          padding: 10px 20px !important;
        }
      }
      
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
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
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
    `}</style>
  </section>
)

export default Hero 