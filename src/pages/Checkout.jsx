import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { ordersAPI } from '../services/api'
import ConfirmModal from '../components/ConfirmModal'
import './Checkout.css'

const Checkout = () => {
  const { cart, clearCart } = useCart()
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('')
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowConfirmModal(true)
  }

  const confirmPurchase = async () => {
    try {
      setIsSubmitting(true)
      setError(null)

      const orderData = {
        items: cart.map(item => ({
          id: item.id,
          quantity: item.quantity
        })),
        customer: formData,
        paymentMethod
      }

      const response = await ordersAPI.create(orderData)
      
      if (response.success) {
        setShowSuccess(true)
        clearCart()
        setTimeout(() => {
          navigate('/')
        }, 3000)
      }
    } catch (err) {
      setError(err.message || 'Error al procesar la orden. Por favor, intenta nuevamente.')
      setShowConfirmModal(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="main-content">
        <div className="card checkout-card checkout-empty">
          <span className="checkout-empty-icon">🛒</span>
          <h2>Tu carrito está vacío</h2>
          <p>Agrega productos para continuar con la compra</p>
          <button className="btn" onClick={() => navigate('/productos')}>
            Ir a productos
          </button>
        </div>
      </div>
    )
  }

  if (showSuccess) {
    return (
      <div className="main-content">
        <div className="card checkout-card checkout-success">
          <span className="checkout-success-icon">✅</span>
          <h2>¡Compra realizada con éxito!</h2>
          <p>Tu pedido ha sido procesado correctamente</p>
          <p>Te enviaremos un email con los detalles de tu compra</p>
          <div className="checkout-success-details">
            <p>Total pagado: <strong>${total.toLocaleString()}</strong></p>
            <p>Método de pago: <strong>{paymentMethod}</strong></p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="main-content checkout-main">
      <h1 className="checkout-title">💳 Finalizar Compra</h1>
      
      {error && (
        <div className="checkout-error">
          <p>❌ {error}</p>
        </div>
      )}

      <div className="checkout-grid">
        {/* Resumen del carrito */}
        <div className="card checkout-card">
          <h3 className="checkout-summary-title">🛒 Resumen del pedido</h3>
          <div>
            {cart.map(item => (
              <div key={item.id} className="checkout-summary-item">
                <div>
                  <h4>{item.name}</h4>
                  <p>Cantidad: {item.quantity}</p>
                </div>
                <span className="checkout-item-price">
                  ${(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <div className="checkout-summary-total">
            <span>Total:</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>

        {/* Formulario de pago */}
        <div className="card checkout-card">
          <h3 className="checkout-form-title">📋 Datos de envío</h3>
          <form onSubmit={handleSubmit}>
            <div className="checkout-form-grid">
              <div className="checkout-form-group">
                <label>Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="checkout-form-group">
                <label>Apellido *</label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="checkout-form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="checkout-form-group">
              <label>Teléfono *</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="checkout-form-group">
              <label>Dirección *</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="checkout-form-grid">
              <div className="checkout-form-group">
                <label>Ciudad *</label>
                <input
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="checkout-form-group">
                <label>Código Postal *</label>
                <input
                  type="text"
                  name="codigoPostal"
                  value={formData.codigoPostal}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <h3 className="checkout-payment-title">💳 Método de pago</h3>
            <div className="checkout-payment-options">
              <label className="checkout-payment-label">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="tarjeta"
                  checked={paymentMethod === 'tarjeta'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                💳 Tarjeta de Crédito/Débito
              </label>
              <label className="checkout-payment-label">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mercadopago"
                  checked={paymentMethod === 'mercadopago'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                🟡 Mercado Pago
              </label>
              <label className="checkout-payment-label">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="efectivo"
                  checked={paymentMethod === 'efectivo'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                💵 Efectivo (Contra entrega)
              </label>
            </div>
            <button 
              type="submit" 
              className="btn checkout-confirm-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? '⏳ Procesando...' : `💳 Confirmar Compra - $${total.toLocaleString()}`}
            </button>
          </form>
        </div>
      </div>

      {/* Modal de confirmación de compra */}
      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => !isSubmitting && setShowConfirmModal(false)}
        onConfirm={confirmPurchase}
        title="Confirmar Compra"
        message={`¿Estás seguro de que quieres realizar la compra por $${total.toLocaleString()}? Esta acción no se puede deshacer.`}
        confirmText={isSubmitting ? "Procesando..." : "Confirmar Compra"}
        cancelText="Cancelar"
      />
    </div>
  )
}

export default Checkout 