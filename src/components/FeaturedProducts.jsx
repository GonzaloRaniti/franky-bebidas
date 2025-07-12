import { Link } from 'react-router-dom'
import products from '../data/products'
import ProductCard from './ProductCard'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
  const featured = products.filter(p => p.featured)
  
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
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
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