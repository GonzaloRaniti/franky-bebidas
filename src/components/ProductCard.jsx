import { useCart } from '../context/CartContext'
import { useState } from 'react'
import ConfirmModal from './ConfirmModal'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)

  const handleAddToCart = () => {
    setShowAddModal(true)
  }

  const confirmAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <>
      <div className="card fade-in product-card">
        {/* Badge de destacado */}
        {product.featured && (
          <div className="product-card-featured">
            ⭐ Destacado
          </div>
        )}
        {/* Imagen del producto */}
        <div className="product-card-image">
          {!imageError && product.image ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="product-card-img"
              onError={handleImageError}
            />
          ) : (
            <span className="product-card-emoji">
              {product.category === 'alcoholicas' ? '🍺' : 
               product.category === 'gaseosas' ? '🥤' : '💧'}
            </span>
          )}
        </div>
        {/* Información del producto */}
        <div className="product-card-info">
          <h3 className="product-card-title">{product.name}</h3>
          <p className="product-card-desc">{product.description}</p>
          <div className="product-card-details">
            <span className="product-card-price">
              ${product.price.toLocaleString()}
            </span>
            <span className="product-card-category">
              {product.category}
            </span>
          </div>
          <button 
            className="btn product-card-btn" 
            onClick={handleAddToCart} 
            disabled={added}
          >
            {added ? 'Agregado!' : 'Agregar al carrito'}
          </button>
        </div>
      </div>

      {/* Modal de confirmación para agregar al carrito */}
      <ConfirmModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onConfirm={confirmAddToCart}
        title="Agregar al Carrito"
        message={`¿Quieres agregar "${product.name}" al carrito por $${product.price.toLocaleString()}?`}
        confirmText="Agregar"
        cancelText="Cancelar"
      />
    </>
  )
}

export default ProductCard 