import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import CartModal from './CartModal'
import menuIcon from '../assets/menu .png'
import cartIcon from '../assets/carrito-de-compras.png'

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cart } = useCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="navbar-responsive" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'sticky', // sticky para que quede fijo arriba
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        minHeight: '64px',
        position: 'relative', // relative para dropdown
      }}>
        {/* Logo */}
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
        
        {/* Menú de escritorio */}
        <div className="navbar-desktop-menu" style={{ 
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
            <img 
              src={cartIcon} 
              alt="Carrito" 
              style={{ 
                width: '24px', 
                height: '24px',
                filter: 'brightness(0) invert(1)',
              }} 
            />
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

        {/* Íconos mobile: carrito y menú hamburguesa */}
        <div className="navbar-mobile-icons" style={{
          display: 'none',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <button 
            onClick={() => setCartOpen(true)} 
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
              transition: 'all 0.3s ease',
            }}
          >
            <img 
              src={cartIcon} 
              alt="Carrito" 
              style={{ 
                width: '20px', 
                height: '20px',
                filter: 'brightness(0) invert(1)',
              }} 
            />
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                background: '#ff4757',
                color: '#fff',
                borderRadius: '50%',
                fontSize: '0.7rem',
                padding: '3px 6px',
                fontWeight: 'bold',
                boxShadow: '0 2px 8px rgba(255, 71, 87, 0.4)',
              }}>{totalItems}</span>
            )}
          </button>
          <button 
            onClick={toggleMobileMenu}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img 
              src={menuIcon} 
              alt="Menú" 
              style={{ 
                width: '24px', 
                height: '24px',
                filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)',
              }} 
            />
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          zIndex: 9999,
          padding: '1rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '400px',
            margin: '0 auto',
          }}>
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              style={{ 
                padding: '1rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                fontSize: '1.1rem',
                fontWeight: '500',
                color: '#667eea',
              }}
            >
              Inicio
            </Link>
            <Link 
              to="/sobre-nosotros" 
              onClick={closeMobileMenu}
              style={{ 
                padding: '1rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                fontSize: '1.1rem',
                fontWeight: '500',
                color: '#667eea',
              }}
            >
              Sobre Nosotros
            </Link>
            <Link 
              to="/productos" 
              onClick={closeMobileMenu}
              style={{ 
                padding: '1rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                fontSize: '1.1rem',
                fontWeight: '500',
                color: '#667eea',
              }}
            >
              Productos
            </Link>
            <Link 
              to="/contacto" 
              onClick={closeMobileMenu}
              style={{ 
                padding: '1rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                fontSize: '1.1rem',
                fontWeight: '500',
                color: '#667eea',
              }}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}

      {/* Media queries para responsive */}
      <style>{`
        @media (max-width: 768px) {
          .navbar-desktop-menu {
            display: none !important;
          }
          .navbar-mobile-icons {
            display: flex !important;
          }
          .navbar-responsive {
            padding: 0.5rem 1rem !important;
          }
        }
        @media (min-width: 769px) {
          .navbar-mobile-icons {
            display: none !important;
          }
        }
      `}</style>

      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

export default Navbar 