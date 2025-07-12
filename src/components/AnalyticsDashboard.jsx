import { useState, useEffect } from 'react'
import './AnalyticsDashboard.css'

const AnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState({})
  const [mensajes, setMensajes] = useState([])

  useEffect(() => {
    cargarDatos()
  }, [])

  const cargarDatos = () => {
    const analyticsGuardados = JSON.parse(localStorage.getItem('contactAnalytics') || '{}')
    const mensajesGuardados = JSON.parse(localStorage.getItem('mensajesContacto') || '[]')
    setAnalytics(analyticsGuardados)
    setMensajes(mensajesGuardados)
  }

  const obtenerEstadisticas = () => {
    const total = mensajes.length
    const nuevos = mensajes.filter(m => m.estado === 'nuevo').length
    const leidos = mensajes.filter(m => m.estado === 'leido').length
    const respondidos = mensajes.filter(m => m.estado === 'respondido').length

    // Mensajes por día de la semana
    const mensajesPorDia = mensajes.reduce((acc, msg) => {
      const dia = new Date(msg.fecha).toLocaleDateString('es-ES', { weekday: 'long' })
      acc[dia] = (acc[dia] || 0) + 1
      return acc
    }, {})

    // Mensajes por hora
    const mensajesPorHora = mensajes.reduce((acc, msg) => {
      const hora = new Date(msg.fecha).getHours()
      acc[hora] = (acc[hora] || 0) + 1
      return acc
    }, {})

    return {
      total,
      nuevos,
      leidos,
      respondidos,
      mensajesPorDia,
      mensajesPorHora
    }
  }

  const stats = obtenerEstadisticas()

  const renderBarChart = (data, title) => {
    const maxValue = Math.max(...Object.values(data))
    
    return (
      <div className="chart-container">
        <h3 className="chart-title">{title}</h3>
        <div className="chart-bars">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="chart-bar-item">
              <div className="chart-label">{key}</div>
              <div className="chart-bar-wrapper">
                <div 
                  className="chart-bar" 
                  style={{ 
                    width: `${(value / maxValue) * 100}%`,
                    height: `${Math.max(20, (value / maxValue) * 100)}px`
                  }}
                >
                  <span className="chart-value">{value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="analytics-dashboard-container">
      <div className="analytics-header">
        <h2>📊 Dashboard de Analytics</h2>
        <p>Estadísticas detalladas de mensajes de contacto</p>
      </div>

      {/* Métricas principales */}
      <div className="metrics-grid">
        <div className="metric-card total">
          <div className="metric-icon">📧</div>
          <div className="metric-content">
            <h3>Total Mensajes</h3>
            <p className="metric-number">{stats.total}</p>
          </div>
        </div>
        
        <div className="metric-card nuevos">
          <div className="metric-icon">🆕</div>
          <div className="metric-content">
            <h3>Nuevos</h3>
            <p className="metric-number">{stats.nuevos}</p>
          </div>
        </div>
        
        <div className="metric-card leidos">
          <div className="metric-icon">👁️</div>
          <div className="metric-content">
            <h3>Leídos</h3>
            <p className="metric-number">{stats.leidos}</p>
          </div>
        </div>
        
        <div className="metric-card respondidos">
          <div className="metric-icon">✅</div>
          <div className="metric-content">
            <h3>Respondidos</h3>
            <p className="metric-number">{stats.respondidos}</p>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="charts-grid">
        <div className="chart-section">
          {renderBarChart(stats.mensajesPorDia, 'Mensajes por Día de la Semana')}
        </div>
        
        <div className="chart-section">
          {renderBarChart(stats.mensajesPorHora, 'Mensajes por Hora del Día')}
        </div>
      </div>

      {/* Información adicional */}
      <div className="additional-info">
        <div className="info-card">
          <h3>📈 Tasa de Respuesta</h3>
          <p className="info-value">
            {stats.total > 0 ? Math.round((stats.respondidos / stats.total) * 100) : 0}%
          </p>
        </div>
        
        <div className="info-card">
          <h3>⏱️ Promedio de Respuesta</h3>
          <p className="info-value">
            {stats.leidos > 0 ? Math.round(stats.total / stats.leidos) : 0} días
          </p>
        </div>
        
        <div className="info-card">
          <h3>🔥 Día más Activo</h3>
          <p className="info-value">
            {Object.entries(stats.mensajesPorDia).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard 