import { useState, useEffect } from 'react'
import { productsAPI } from '../services/api'
import ProductCard from '../components/ProductCard'
import './Products.css'

const Products = () => {
  const [filter, setFilter] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const params = {}
        if (filter !== 'todos') params.category = filter
        if (searchTerm) params.search = searchTerm
        
        const response = await productsAPI.getAll(params)
        setProducts(response.data || [])
        setError(null)
      } catch (err) {
        setError('Error al cargar productos. Por favor, intenta nuevamente.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [filter, searchTerm])

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
          {loading ? 'Cargando...' : (
            `${products.length} producto${products.length !== 1 ? 's' : ''} encontrado${products.length !== 1 ? 's' : ''}`
          )}
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="products-error">
          <p>{error}</p>
        </div>
      )}

      {/* Grid de productos */}
      <div className="products-grid">
        {loading ? (
          <div className="products-loading">
            <span className="loading-icon">⏳</span>
            <p>Cargando productos...</p>
          </div>
        ) : products.length > 0 ? (
          products.map(product => (
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