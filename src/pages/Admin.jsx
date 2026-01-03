import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { messagesAPI, analyticsAPI } from '../services/api'
import AnalyticsDashboard from '../components/AnalyticsDashboard'
import './Admin.css'

const Admin = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mensajes, setMensajes] = useState([])
  const [analytics, setAnalytics] = useState({})
  const [filtro, setFiltro] = useState('todos')
  const [busqueda, setBusqueda] = useState('')
  const [vista, setVista] = useState('mensajes')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  useEffect(() => {
    cargarDatos()
  }, [filtro, busqueda])

  const cargarDatos = async () => {
    try {
      setLoading(true)
      
      // Cargar mensajes
      const params = {}
      if (filtro !== 'todos') params.estado = filtro
      if (busqueda) params.search = busqueda
      
      const messagesResponse = await messagesAPI.getAll(params)
      setMensajes(messagesResponse.data || [])
      
      // Cargar analytics
      const analyticsResponse = await analyticsAPI.getContact()
      setAnalytics(analyticsResponse.data || {})
      
      setError(null)
    } catch (err) {
      setError('Error al cargar datos. Por favor, intenta nuevamente.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const cambiarEstado = async (id, nuevoEstado) => {
    try {
      await messagesAPI.updateStatus(id, nuevoEstado)
      // Recargar mensajes
      cargarDatos()
    } catch (err) {
      alert('Error al actualizar el estado del mensaje')
      console.error(err)
    }
  }

  const eliminarMensaje = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este mensaje?')) {
      try {
        await messagesAPI.delete(id)
        // Recargar mensajes
        cargarDatos()
      } catch (err) {
        alert('Error al eliminar el mensaje')
        console.error(err)
      }
    }
  }

  const limpiarTodos = async () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar todos los mensajes? Esta acción no se puede deshacer.')) {
      try {
        // Eliminar todos los mensajes uno por uno
        for (const mensaje of mensajes) {
          await messagesAPI.delete(mensaje.id)
        }
        // Recargar datos
        cargarDatos()
      } catch (err) {
        alert('Error al eliminar los mensajes')
        console.error(err)
      }
    }
  }

  const mensajesFiltrados = mensajes

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Si hay error y no está cargando, mostrar mensaje
  if (error && !loading) {
    return (
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">📊 Panel de Administración</h1>
          <p className="admin-subtitle">Gestión de mensajes de contacto</p>
        </div>
        <div className="admin-error" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>❌ {error}</p>
          <p style={{ color: '#999', marginBottom: '2rem' }}>
            Asegúrate de que el backend esté corriendo en http://localhost:3000
          </p>
          <button onClick={cargarDatos} className="btn">
            🔄 Reintentar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 className="admin-title">📊 Panel de Administración</h1>
            <p className="admin-subtitle">Gestión de mensajes de contacto</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#ffd700', fontSize: '0.9rem' }}>
              👤 {user?.username}
            </span>
            <button onClick={handleLogout} className="btn" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              🚪 Salir
            </button>
          </div>
        </div>
      </div>

      {/* Tabs de navegación */}
      <div className="admin-tabs">
        <button 
          className={`tab-button ${vista === 'mensajes' ? 'active' : ''}`}
          onClick={() => setVista('mensajes')}
        >
          📧 Mensajes
        </button>
        <button 
          className={`tab-button ${vista === 'analytics' ? 'active' : ''}`}
          onClick={() => setVista('analytics')}
        >
          📊 Analytics
        </button>
      </div>

      {vista === 'mensajes' ? (
        <>
          {/* Analytics Dashboard simplificado */}
          <div className="analytics-dashboard">
            <div className="analytics-card">
              <h3>📧 Total Mensajes</h3>
              <p className="analytics-number">{analytics.totalMensajes || 0}</p>
            </div>
            <div className="analytics-card">
              <h3>🆕 Nuevos</h3>
              <p className="analytics-number">{analytics.mensajesPorEstado?.nuevo || 0}</p>
            </div>
            <div className="analytics-card">
              <h3>✅ Leídos</h3>
              <p className="analytics-number">{analytics.mensajesPorEstado?.leido || 0}</p>
            </div>
            <div className="analytics-card">
              <h3>📅 Hoy</h3>
              <p className="analytics-number">{analytics.hoy || 0}</p>
            </div>
          </div>

          {/* Controles */}
          <div className="admin-controls">
            <div className="search-filter">
              <input
                type="text"
                placeholder="Buscar mensajes..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="search-input"
              />
              <select 
                value={filtro} 
                onChange={(e) => setFiltro(e.target.value)}
                className="filter-select"
              >
                <option value="todos">Todos</option>
                <option value="nuevo">Nuevos</option>
                <option value="leido">Leídos</option>
                <option value="respondido">Respondidos</option>
              </select>
            </div>
            <button onClick={limpiarTodos} className="clear-btn">
              🗑️ Limpiar Todos
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="admin-error">
              <p>❌ {error}</p>
            </div>
          )}

          {/* Lista de Mensajes */}
          <div className="mensajes-container">
            {loading ? (
              <div className="no-mensajes">
                <p>⏳ Cargando mensajes...</p>
              </div>
            ) : mensajesFiltrados.length === 0 ? (
              <div className="no-mensajes">
                <p>📭 No hay mensajes para mostrar</p>
              </div>
            ) : (
              mensajesFiltrados.map(mensaje => (
                <div key={mensaje.id} className={`mensaje-card ${mensaje.estado}`}>
                  <div className="mensaje-header">
                    <div className="mensaje-info">
                      <h3 className="mensaje-nombre">
                        {mensaje.nombre} {mensaje.apellido}
                      </h3>
                      <p className="mensaje-email">{mensaje.email}</p>
                      <p className="mensaje-fecha">{formatearFecha(mensaje.fecha)}</p>
                    </div>
                    <div className="mensaje-actions">
                      <select
                        value={mensaje.estado}
                        onChange={(e) => cambiarEstado(mensaje.id, e.target.value)}
                        className="estado-select"
                      >
                        <option value="nuevo">🆕 Nuevo</option>
                        <option value="leido">👁️ Leído</option>
                        <option value="respondido">✅ Respondido</option>
                      </select>
                      <button
                        onClick={() => eliminarMensaje(mensaje.id)}
                        className="delete-btn"
                        title="Eliminar mensaje"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  <div className="mensaje-content">
                    <p className="mensaje-asunto">{mensaje.asunto}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      ) : (
        <AnalyticsDashboard />
      )}
    </div>
  )
}

export default Admin 