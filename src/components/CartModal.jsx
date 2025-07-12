import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import ConfirmModal from './ConfirmModal'
import cartIcon from '../assets/carrito-de-compras.png'
import './CartModal.css'

const CartModal = ({ open, onClose }) => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart()
  const navigate = useNavigate()
  
  // Estados para modales de confirmación
  const [showRemoveModal, setShowRemoveModal] = useState(false)
  const [showClearModal, setShowClearModal] = useState(false)
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)
  const [itemToRemove, setItemToRemove] = useState(null)
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleRemoveItem = (item) => {
    setItemToRemove(item)
    setShowRemoveModal(true)
  }

  const confirmRemoveItem = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove.id)
      setItemToRemove(null)
    }
  }

  const handleClearCart = () => {
    setShowClearModal(true)
  }

  const confirmClearCart = () => {
    clearCart()
  }

  const handleCheckout = () => {
    onClose()
    navigate('/checkout')
  }

  const confirmCheckout = () => {
    onClose()
    navigate('/checkout')
  }

  if (!open) return null

  return (
    <>
      <div className="cart-modal-overlay">
        <div className="cart-modal">
          {/* Header */}
          <div className="cart-modal-header">
            <div className="cart-modal-title">
              <img 
                src={cartIcon} 
                alt="Carrito" 
                className="cart-modal-icon"
              />
              <h2 className="cart-modal-heading">Tu Carrito</h2>
            </div>
            <button 
              onClick={onClose}
              className="cart-modal-close"
            >
              ✕
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="cart-empty">
              <img 
                src={cartIcon} 
                alt="Carrito vacío" 
                className="cart-empty-icon"
              />
              <p className="cart-empty-text">Tu carrito está vacío</p>
              <button className="btn" onClick={onClose}>
                Continuar comprando
              </button>
            </div>
          ) : (
            <>
              {/* Lista de productos */}
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-icon">
                      <span className="cart-item-emoji">
                        {item.category === 'alcoholicas' ? '🍺' : 
                         item.category === 'gaseosas' ? '🥤' : '💧'}
                      </span>
                    </div>
                    
                    <div className="cart-item-info">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <p className="cart-item-price">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="cart-item-controls">
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={e => updateQuantity(item.id, Number(e.target.value))}
                        className="cart-item-quantity"
                      />
                      <button 
                        onClick={() => handleRemoveItem(item)}
                        className="cart-item-remove"
                        title="Eliminar producto"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="cart-total">
                <div className="cart-total-row">
                  <span>Total:</span>
                  <span className="cart-total-amount">${total.toLocaleString()}</span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="cart-actions">
                <button 
                  onClick={handleClearCart}
                  className="btn btn-secondary"
                >
                  🗑️ Vaciar carrito
                </button>
                <button 
                  onClick={handleCheckout}
                  className="btn"
                >
                  💳 Ir al checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modales de confirmación */}
      <ConfirmModal
        isOpen={showRemoveModal}
        onClose={() => setShowRemoveModal(false)}
        onConfirm={confirmRemoveItem}
        title="Eliminar Producto"
        message={`¿Estás seguro de que quieres eliminar "${itemToRemove?.name}" del carrito?`}
        confirmText="Eliminar"
        cancelText="Cancelar"
      />

      <ConfirmModal
        isOpen={showClearModal}
        onClose={() => setShowClearModal(false)}
        onConfirm={confirmClearCart}
        title="Vaciar Carrito"
        message="¿Estás seguro de que quieres vaciar todo el carrito? Esta acción no se puede deshacer."
        confirmText="Vaciar"
        cancelText="Cancelar"
      />

      <ConfirmModal
        isOpen={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
        onConfirm={confirmCheckout}
        title="Proceder al Checkout"
        message={`¿Quieres proceder al checkout con un total de $${total.toLocaleString()}?`}
        confirmText="Continuar"
        cancelText="Cancelar"
      />
    </>
  )
}

export default CartModal 