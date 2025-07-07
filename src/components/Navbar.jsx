import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import CartModal from './CartModal'

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const { cart } = useCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            color: 'white',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
          }}>
            🍺
          </div>
          <div>
            <Link to="/" style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1',
              }}>
                FRANKY
              </span>
              <span style={{
                fontSize: '0.9rem',
                color: '#718096',
                fontWeight: '500',
                letterSpacing: '1px',
              }}>
                BEBIDAS
              </span>
            </Link>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          alignItems: 'center',
          fontSize: '1.1rem',
          fontWeight: '500',
        }}>
          <Link to="/" style={{ 
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
          }}>Inicio</Link>
          <Link to="/sobre-nosotros" style={{ 
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
          }}>Sobre Nosotros</Link>
          <Link to="/productos" style={{ 
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
          }}>Productos</Link>
          <Link to="/contacto" style={{ 
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
          }}>Contacto</Link>
          <button 
            onClick={() => setCartOpen(true)} 
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
              transition: 'all 0.3s ease',
            }}
          >
            <span role="img" aria-label="carrito" style={{ fontSize: '1.5rem', color: 'white' }}>🛒</span>
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#ff4757',
                color: '#fff',
                borderRadius: '50%',
                fontSize: '0.8rem',
                padding: '4px 8px',
                fontWeight: 'bold',
                boxShadow: '0 2px 8px rgba(255, 71, 87, 0.4)',
              }}>{totalItems}</span>
            )}
          </button>
        </div>
      </nav>
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

export default Navbar 