import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import CartModal from './CartModal'
import menuIcon from '../assets/menu .png'
import cartIcon from '../assets/carrito-de-compras.png'
import './Navbar.css'

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
      <nav className="navbar-responsive">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-icon">
            🍺
          </div>
          <div>
            <Link to="/" className="logo-link">
              <span className="logo-title">FRANKY</span>
              <span className="logo-subtitle">BEBIDAS</span>
            </Link>
          </div>
        </div>
        
        {/* Menú de escritorio */}
        <div className="navbar-desktop-menu">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/sobre-nosotros" className="nav-link">Sobre Nosotros</Link>
          <Link to="/productos" className="nav-link">Productos</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
          <Link to="/admin" className="nav-link admin-link">📊 Admin</Link>
          <button 
            onClick={() => setCartOpen(true)} 
            className="cart-button"
          >
            <img 
              src={cartIcon} 
              alt="Carrito" 
              className="cart-icon"
            />
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </button>
        </div>

        {/* Íconos mobile: carrito y menú hamburguesa */}
        <div className="navbar-mobile-icons">
          <button 
            onClick={() => setCartOpen(true)} 
            className="mobile-cart-button"
          >
            <img 
              src={cartIcon} 
              alt="Carrito" 
              className="mobile-cart-icon"
            />
            {totalItems > 0 && (
              <span className="mobile-cart-badge">{totalItems}</span>
            )}
          </button>
          <button 
            onClick={toggleMobileMenu}
            className="mobile-menu-button"
          >
            <img 
              src={menuIcon} 
              alt="Menú" 
              className="menu-icon"
            />
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className="mobile-nav-link"
            >
              Inicio
            </Link>
            <Link 
              to="/sobre-nosotros" 
              onClick={closeMobileMenu}
              className="mobile-nav-link"
            >
              Sobre Nosotros
            </Link>
            <Link 
              to="/productos" 
              onClick={closeMobileMenu}
              className="mobile-nav-link"
            >
              Productos
            </Link>
            <Link 
              to="/contacto" 
              onClick={closeMobileMenu}
              className="mobile-nav-link"
            >
              Contacto
            </Link>
            <Link 
              to="/admin" 
              onClick={closeMobileMenu}
              className="mobile-nav-link admin-link"
            >
              📊 Admin
            </Link>
          </div>
        </div>
      )}

      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

export default Navbar 