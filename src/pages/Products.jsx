import { useState } from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

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
    <div className="main-content">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>🛍️ Nuestros Productos</h1>
      
      {/* Filtros */}
      <div className="card" style={{ 
        padding: '2rem', 
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <label style={{ fontWeight: '600', color: '#2d3748' }}>Filtrar por:</label>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '2px solid #e2e8f0' }}
          >
            <option value="todos">Todos los productos</option>
            <option value="alcoholicas">Bebidas Alcohólicas</option>
            <option value="gaseosas">Gaseosas</option>
            <option value="sin-alcohol">Sin Alcohol</option>
          </select>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <label style={{ fontWeight: '600', color: '#2d3748' }}>Buscar:</label>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ flex: 1, maxWidth: '300px' }}
          />
        </div>
      </div>

      {/* Resultados */}
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ color: '#718096', textAlign: 'center' }}>
          {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Grid de productos */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '2rem', 
        justifyContent: 'center',
        marginTop: '2rem',
      }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem',
            color: '#718096',
          }}>
            <span style={{ fontSize: '4rem', opacity: '0.5' }}>🔍</span>
            <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
              No se encontraron productos con esos filtros
            </p>
          </div>
        )}
      </div>

      {/* Media queries para responsive */}
      <style>{`
        @media (max-width: 768px) {
          .main-content {
            padding: 1rem !important;
          }
          
          h1 {
            font-size: 2rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          .card {
            padding: 1.5rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          div[style*="display: flex"] {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          
          label {
            font-size: 0.9rem !important;
          }
          
          select, input {
            font-size: 14px !important;
            padding: 0.75rem !important;
          }
          
          div[style*="gap: 2rem"] {
            gap: 1rem !important;
          }
          
          p {
            font-size: 0.9rem !important;
          }
          
          span[style*="font-size: 4rem"] {
            font-size: 3rem !important;
          }
          
          p[style*="font-size: 1.2rem"] {
            font-size: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .main-content {
            padding: 0.5rem !important;
          }
          
          h1 {
            font-size: 1.8rem !important;
            margin-bottom: 1rem !important;
          }
          
          .card {
            padding: 1rem !important;
            margin-bottom: 1rem !important;
          }
          
          div[style*="display: flex"] {
            gap: 0.5rem !important;
          }
          
          label {
            font-size: 0.85rem !important;
          }
          
          select, input {
            font-size: 12px !important;
            padding: 0.5rem !important;
          }
          
          div[style*="gap: 2rem"] {
            gap: 0.5rem !important;
          }
          
          p {
            font-size: 0.8rem !important;
          }
          
          span[style*="font-size: 4rem"] {
            font-size: 2.5rem !important;
          }
          
          p[style*="font-size: 1.2rem"] {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Products 