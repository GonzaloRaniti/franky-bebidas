import { useState, useEffect } from 'react'
import AnalyticsDashboard from '../components/AnalyticsDashboard'
import './Admin.css'

const Admin = () => {
  const [mensajes, setMensajes] = useState([])
  const [analytics, setAnalytics] = useState({})
  const [filtro, setFiltro] = useState('todos')
  const [busqueda, setBusqueda] = useState('')
  const [vista, setVista] = useState('mensajes') // 'mensajes' o 'analytics'

  useEffect(() => {
    cargarDatos()
  }, [])

  const cargarDatos = () => {
    // Cargar mensajes
    const mensajesGuardados = JSON.parse(localStorage.getItem('mensajesContacto') || '[]')
    setMensajes(mensajesGuardados)
    
    // Cargar analytics
    const analyticsGuardados = JSON.parse(localStorage.getItem('contactAnalytics') || '{}')
    setAnalytics(analyticsGuardados)
  }

  const cambiarEstado = (id, nuevoEstado) => {
    const mensajesActualizados = mensajes.map(msg => 
      msg.id === id ? { ...msg, estado: nuevoEstado } : msg
    )
    setMensajes(mensajesActualizados)
    localStorage.setItem('mensajesContacto', JSON.stringify(mensajesActualizados))
  }

  const eliminarMensaje = (id) => {
    const mensajesFiltrados = mensajes.filter(msg => msg.id !== id)
    setMensajes(mensajesFiltrados)
    localStorage.setItem('mensajesContacto', JSON.stringify(mensajesFiltrados))
  }

  const limpiarTodos = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar todos los mensajes?')) {
      setMensajes([])
      localStorage.removeItem('mensajesContacto')
    }
  }

  const mensajesFiltrados = mensajes.filter(msg => {
    const cumpleFiltro = filtro === 'todos' || msg.estado === filtro
    const cumpleBusqueda = busqueda === '' || 
      msg.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      msg.apellido.toLowerCase().includes(busqueda.toLowerCase()) ||
      msg.email.toLowerCase().includes(busqueda.toLowerCase()) ||
      msg.asunto.toLowerCase().includes(busqueda.toLowerCase())
    
    return cumpleFiltro && cumpleBusqueda
  })

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">📊 Panel de Administración</h1>
        <p className="admin-subtitle">Gestión de mensajes de contacto</p>
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
              <p className="analytics-number">{mensajes.filter(m => m.estado === 'nuevo').length}</p>
            </div>
            <div className="analytics-card">
              <h3>✅ Leídos</h3>
              <p className="analytics-number">{mensajes.filter(m => m.estado === 'leido').length}</p>
            </div>
            <div className="analytics-card">
              <h3>📅 Hoy</h3>
              <p className="analytics-number">
                {mensajes.filter(m => {
                  const hoy = new Date().toDateString()
                  const fechaMsg = new Date(m.fecha).toDateString()
                  return fechaMsg === hoy
                }).length}
              </p>
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

          {/* Lista de Mensajes */}
          <div className="mensajes-container">
            {mensajesFiltrados.length === 0 ? (
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