import { Link } from 'react-router-dom'
import products from '../data/products'
import ProductCard from './ProductCard'

const FeaturedProducts = () => {
  const featured = products.filter(p => p.featured)
  
  return (
    <section style={{ 
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Elementos decorativos */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
        borderRadius: '50%',
        animation: 'float 10s ease-in-out infinite',
      }}></div>
      
      <div className="container">
        {/* Header de la sección */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '4rem',
          animation: 'slideInUp 1s ease-out',
        }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '800',
          }}>
            ⭐ Productos Destacados
          </h2>
          <p style={{ 
            fontSize: '1.2rem',
            color: '#718096',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            Descubre nuestras bebidas más populares y mejor valoradas por nuestros clientes
          </p>
        </div>

        {/* Grid de productos */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
        }}>
          {featured.map((product, index) => (
            <div key={product.id} style={{ 
              animation: `slideInUp 1s ease-out ${index * 0.2}s both`,
            }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ 
          textAlign: 'center',
          animation: 'slideInUp 1s ease-out 0.8s both',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '20px',
            marginBottom: '2rem',
            boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
          }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
              🎉 ¡Ofertas Especiales!
            </h3>
            <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
              Encuentra descuentos increíbles en toda nuestra colección de productos
            </p>
            <Link to="/productos">
              <button className="btn" style={{ 
                fontSize: '1.1rem',
                padding: '15px 30px',
                borderRadius: '50px',
                background: 'white',
                color: '#667eea',
                border: 'none',
                fontWeight: 'bold',
              }}>
                🛍️ Ver todos los productos
              </button>
            </Link>
          </div>
        </div>

        {/* Estadísticas adicionales */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginTop: '3rem',
          animation: 'slideInUp 1s ease-out 1s both',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              color: '#667eea',
              marginBottom: '0.5rem',
            }}>🍺</div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>Bebidas Alcohólicas</h4>
            <p style={{ margin: 0, color: '#718096' }}>Cervezas, vinos y licores</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              color: '#667eea',
              marginBottom: '0.5rem',
            }}>🥤</div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>Gaseosas</h4>
            <p style={{ margin: 0, color: '#718096' }}>Refrescos y bebidas sin alcohol</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              color: '#667eea',
              marginBottom: '0.5rem',
            }}>🚚</div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>Entrega Rápida</h4>
            <p style={{ margin: 0, color: '#718096' }}>En 24 horas a tu puerta</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              color: '#667eea',
              marginBottom: '0.5rem',
            }}>💳</div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>Pago Seguro</h4>
            <p style={{ margin: 0, color: '#718096' }}>Múltiples formas de pago</p>
          </div>
        </div>
      </div>
      
      <style>{`
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
      `}</style>
    </section>
  )
}

export default FeaturedProducts 