import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { productsAPI } from '../services/api'
import ProductCard from './ProductCard'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const response = await productsAPI.getFeatured()
        setFeatured(response.data || [])
      } catch (error) {
        console.error('Error al cargar productos destacados:', error)
        setFeatured([])
      } finally {
        setLoading(false)
      }
    }

    loadFeatured()
  }, [])
  
  return (
    <section className="featured-products-section">
      {/* Elementos decorativos */}
      <div className="featured-products-deco"></div>
      <div className="container">
        {/* Header de la sección */}
        <div className="featured-products-header">
          <h2 className="featured-products-title">
            ⭐ Productos Destacados
          </h2>
          <p className="featured-products-desc">
            Descubre nuestras bebidas más populares y mejor valoradas por nuestros clientes
          </p>
        </div>
        {/* Grid de productos destacados */}
        <div className="featured-products-grid">
          {loading ? (
            <p>Cargando productos destacados...</p>
          ) : featured.length > 0 ? (
            featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No hay productos destacados disponibles</p>
          )}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/productos">
            <button className="btn">
              Ver todos los productos
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts 