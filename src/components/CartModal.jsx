import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartModal = ({ open, onClose }) => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart()
  const navigate = useNavigate()
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleCheckout = () => {
    onClose()
    navigate('/checkout')
  }

  if (!open) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '1rem',
    }}>
      <div style={{ 
        background: 'white', 
        borderRadius: '20px', 
        padding: '2rem',
        minWidth: '400px',
        maxWidth: '90vw',
        maxHeight: '80vh',
        overflow: 'auto',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
        position: 'relative',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          borderBottom: '2px solid #f7fafc',
          paddingBottom: '1rem',
        }}>
          <h2 style={{ 
            margin: 0,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            🛒 Tu Carrito
          </h2>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#a0aec0',
              padding: '0.5rem',
              borderRadius: '50%',
              transition: 'all 0.3s ease',
            }}
          >
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <span style={{ fontSize: '4rem', opacity: '0.5' }}>🛒</span>
            <p style={{ color: '#718096', marginTop: '1rem' }}>Tu carrito está vacío</p>
            <button className="btn" onClick={onClose}>
              Continuar comprando
            </button>
          </div>
        ) : (
          <>
            {/* Lista de productos */}
            <div style={{ marginBottom: '2rem' }}>
              {cart.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                  background: '#f8fafc',
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>
                      {item.category === 'alcoholicas' ? '🍺' : 
                       item.category === 'gaseosas' ? '🥤' : '💧'}
                    </span>
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>{item.name}</h4>
                    <p style={{ margin: 0, color: '#667eea', fontWeight: 'bold' }}>
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={e => updateQuantity(item.id, Number(e.target.value))}
                      style={{ 
                        width: '60px',
                        padding: '0.5rem',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        textAlign: 'center',
                      }}
                    />
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: '#ff4757',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div style={{
              borderTop: '2px solid #e2e8f0',
              paddingTop: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold',
              }}>
                <span>Total:</span>
                <span style={{ color: '#667eea' }}>${total.toLocaleString()}</span>
              </div>
            </div>

            {/* Botones de acción */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={clearCart}
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                🗑️ Vaciar carrito
              </button>
              <button 
                onClick={handleCheckout}
                className="btn"
                style={{ flex: 1 }}
              >
                💳 Ir al checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartModal 