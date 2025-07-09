import { useCart } from '../context/CartContext'
import { useState } from 'react'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div className="card fade-in" style={{
      width: '280px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1.5rem',
      margin: '0.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Badge de destacado */}
      {product.featured && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
          color: 'white',
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          zIndex: 10,
        }}>
          ⭐ Destacado
        </div>
      )}
      
      {/* Imagen del producto */}
      <div style={{
        width: '100%',
        height: '200px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {!imageError && product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              borderRadius: '12px',
            }}
            onError={handleImageError}
          />
        ) : (
          <span style={{ fontSize: '4rem', opacity: '0.8' }}>
            {product.category === 'alcoholicas' ? '🍺' : 
             product.category === 'gaseosas' ? '🥤' : '💧'}
          </span>
        )}
      </div>
      
      {/* Información del producto */}
      <div style={{ textAlign: 'center', width: '100%' }}>
        <h3 style={{ 
          margin: '0 0 0.5rem 0',
          fontSize: '1.2rem',
          fontWeight: '600',
          color: '#2d3748',
        }}>
          {product.name}
        </h3>
        <p style={{ 
          fontSize: '0.9rem', 
          color: '#718096',
          marginBottom: '1rem',
          lineHeight: '1.4',
        }}>
          {product.description}
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: '1rem',
        }}>
          <span style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#667eea',
          }}>
            ${product.price.toLocaleString()}
          </span>
          <span style={{
            fontSize: '0.8rem',
            color: '#a0aec0',
            textTransform: 'uppercase',
            fontWeight: '500',
          }}>
            {product.category}
          </span>
        </div>
        <button 
          onClick={handleAddToCart} 
          className="btn"
          style={{ 
            width: '100%',
            padding: '12px',
            fontSize: '1rem',
            fontWeight: '600',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {added ? (
            <span style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '0.5rem',
              animation: 'fadeIn 0.3s ease-out',
            }}>
              ✅ Agregado
            </span>
          ) : (
            <span style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '0.5rem',
            }}>
              🛒 Agregar al carrito
            </span>
          )}
        </button>
      </div>

      {/* Media queries para responsive */}
      <style>{`
        @media (max-width: 768px) {
          .card {
            width: 100% !important;
            max-width: 320px !important;
            margin: 0.5rem auto !important;
          }
          
          div[style*="height: 200px"] {
            height: 180px !important;
          }
          
          h3 {
            font-size: 1.1rem !important;
          }
          
          p {
            font-size: 0.85rem !important;
          }
          
          span[style*="font-size: 1.3rem"] {
            font-size: 1.2rem !important;
          }
          
          button {
            font-size: 0.9rem !important;
            padding: 10px !important;
          }
        }
        
        @media (max-width: 480px) {
          .card {
            width: 100% !important;
            max-width: 280px !important;
            padding: 1rem !important;
          }
          
          div[style*="height: 200px"] {
            height: 160px !important;
          }
          
          h3 {
            font-size: 1rem !important;
          }
          
          p {
            font-size: 0.8rem !important;
          }
          
          span[style*="font-size: 1.3rem"] {
            font-size: 1.1rem !important;
          }
          
          button {
            font-size: 0.85rem !important;
            padding: 8px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default ProductCard 