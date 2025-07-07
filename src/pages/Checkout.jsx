import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

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

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      clearCart()
      navigate('/')
    }, 3000)
  }

  if (cart.length === 0) {
    return (
      <div className="main-content">
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <span style={{ fontSize: '4rem', opacity: '0.5' }}>🛒</span>
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
        <div className="card" style={{ 
          textAlign: 'center', 
          padding: '3rem',
          background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
          color: 'white',
        }}>
          <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</span>
          <h2>¡Compra realizada con éxito!</h2>
          <p>Tu pedido ha sido procesado correctamente</p>
          <p>Te enviaremos un email con los detalles de tu compra</p>
          <div style={{ marginTop: '2rem' }}>
            <p>Total pagado: <strong>${total.toLocaleString()}</strong></p>
            <p>Método de pago: <strong>{paymentMethod}</strong></p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="main-content">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>💳 Finalizar Compra</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
      }}>
        {/* Resumen del carrito */}
        <div className="card" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>🛒 Resumen del pedido</h3>
          <div style={{ marginBottom: '2rem' }}>
            {cart.map(item => (
              <div key={item.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 0',
                borderBottom: '1px solid #e2e8f0',
              }}>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>{item.name}</h4>
                  <p style={{ margin: 0, color: '#718096', fontSize: '0.9rem' }}>
                    Cantidad: {item.quantity}
                  </p>
                </div>
                <span style={{ fontWeight: 'bold', color: '#667eea' }}>
                  ${(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <div style={{
            borderTop: '2px solid #e2e8f0',
            paddingTop: '1rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <span>Total:</span>
            <span style={{ color: '#667eea' }}>${total.toLocaleString()}</span>
          </div>
        </div>

        {/* Formulario de pago */}
        <div className="card" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>📋 Datos de envío</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label>Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
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
            
            <div style={{ marginBottom: '1rem' }}>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <label>Teléfono *</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <label>Dirección *</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <label>Ciudad *</label>
                <input
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
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

            <h3 style={{ marginBottom: '1.5rem' }}>💳 Método de pago</h3>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
            </div>

            <button 
              type="submit" 
              className="btn"
              style={{ 
                width: '100%',
                fontSize: '1.2rem',
                padding: '15px',
              }}
            >
              💳 Confirmar Compra - ${total.toLocaleString()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout 