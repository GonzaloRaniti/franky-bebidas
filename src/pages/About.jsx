const About = () => (
  <div className="main-content">
    <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '2rem' }}>🍺 Sobre Franky Bebidas</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem',
      }}>
        <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>🎯</span>
          <h3>Nuestra Misión</h3>
          <p style={{ color: '#718096', lineHeight: '1.6' }}>
            Proporcionar las mejores bebidas alcohólicas y gaseosas con la más alta calidad, 
            ofreciendo un servicio excepcional y entrega rápida a nuestros clientes.
          </p>
        </div>

        <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>👁️</span>
          <h3>Nuestra Visión</h3>
          <p style={{ color: '#718096', lineHeight: '1.6' }}>
            Ser la tienda de bebidas más confiable y preferida, reconocida por nuestra 
            calidad, variedad y atención al cliente en toda la región.
          </p>
        </div>

        <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>💎</span>
          <h3>Nuestros Valores</h3>
          <p style={{ color: '#718096', lineHeight: '1.6' }}>
            Calidad, honestidad, responsabilidad y compromiso con nuestros clientes. 
            Vendemos solo a mayores de 18 años.
          </p>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '2rem',
        borderRadius: '16px',
        marginBottom: '2rem',
      }}>
        <h2 style={{ marginBottom: '1rem' }}>📈 Nuestra Historia</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          Fundada en 2020, Franky Bebidas nació con la visión de revolucionar la venta de bebidas 
          en línea. Comenzamos como una pequeña tienda local y hoy somos referentes en el sector, 
          ofreciendo una amplia variedad de productos de las mejores marcas nacionales e importadas.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem',
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#667eea', fontSize: '2rem' }}>1000+</h3>
          <p>Clientes satisfechos</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#667eea', fontSize: '2rem' }}>500+</h3>
          <p>Productos disponibles</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#667eea', fontSize: '2rem' }}>24h</h3>
          <p>Entrega garantizada</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#667eea', fontSize: '2rem' }}>5⭐</h3>
          <p>Calificación promedio</p>
        </div>
      </div>
    </div>
  </div>
)

export default About 