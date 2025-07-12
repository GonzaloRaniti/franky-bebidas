import { useState } from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import './Products.css'

const Products = () => {
  const [filter, setFilter] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = filter === 'todos' || product.category === filter
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="products-page">
      <h1 className="products-title">🛍️ Nuestros Productos</h1>
      
      {/* Filtros */}
      <div className="products-filters">
        <div className="filter-row">
          <label className="filter-label">Filtrar por:</label>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="todos">Todos los productos</option>
            <option value="alcoholicas">Bebidas Alcohólicas</option>
            <option value="gaseosas">Gaseosas</option>
            <option value="sin-alcohol">Sin Alcohol</option>
          </select>
        </div>
        
        <div className="filter-row">
          <label className="filter-label">Buscar:</label>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="filter-input"
          />
        </div>
      </div>

      {/* Resultados */}
      <div className="products-results">
        <p className="results-count">
          {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Grid de productos */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="products-empty">
            <span className="empty-icon">🔍</span>
            <p className="empty-text">
              No se encontraron productos con esos filtros
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products 