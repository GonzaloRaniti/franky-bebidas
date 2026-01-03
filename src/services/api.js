const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

// Función helper para hacer requests
const fetchAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || data.message || 'Error en la petición')
    }

    return data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Productos
export const productsAPI = {
  getAll: (params = {}) => {
    const queryParams = new URLSearchParams()
    if (params.category) queryParams.append('category', params.category)
    if (params.search) queryParams.append('search', params.search)
    if (params.featured) queryParams.append('featured', params.featured)
    
    const query = queryParams.toString()
    return fetchAPI(`/products${query ? `?${query}` : ''}`)
  },

  getById: (id) => fetchAPI(`/products/${id}`),

  getFeatured: () => fetchAPI('/products/featured'),

  getByCategory: (category) => fetchAPI(`/products/category/${category}`),

  create: (product) => fetchAPI('/products', {
    method: 'POST',
    body: JSON.stringify(product)
  }),

  update: (id, product) => fetchAPI(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(product)
  }),

  delete: (id) => fetchAPI(`/products/${id}`, {
    method: 'DELETE'
  })
}

// Órdenes
export const ordersAPI = {
  create: (order) => fetchAPI('/orders', {
    method: 'POST',
    body: JSON.stringify(order)
  }),

  getAll: (params = {}) => {
    const queryParams = new URLSearchParams()
    if (params.status) queryParams.append('status', params.status)
    if (params.email) queryParams.append('email', params.email)
    
    const query = queryParams.toString()
    return fetchAPI(`/orders${query ? `?${query}` : ''}`)
  },

  getById: (id) => fetchAPI(`/orders/${id}`),

  updateStatus: (id, status) => fetchAPI(`/orders/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status })
  })
}

// Mensajes
export const messagesAPI = {
  // Crear mensaje es público (desde formulario de contacto)
  create: (message) => fetchAPI('/messages', {
    method: 'POST',
    body: JSON.stringify(message)
  }),

  // Estas operaciones requieren autenticación
  getAll: (params = {}) => {
    const token = localStorage.getItem('authToken')
    const queryParams = new URLSearchParams()
    if (params.estado) queryParams.append('estado', params.estado)
    if (params.search) queryParams.append('search', params.search)
    
    const query = queryParams.toString()
    return fetchAPI(`/messages${query ? `?${query}` : ''}`, {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    })
  },

  getById: (id) => {
    const token = localStorage.getItem('authToken')
    return fetchAPI(`/messages/${id}`, {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    })
  },

  update: (id, message) => {
    const token = localStorage.getItem('authToken')
    return fetchAPI(`/messages/${id}`, {
      method: 'PUT',
      body: JSON.stringify(message),
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    })
  },

  updateStatus: (id, estado) => {
    const token = localStorage.getItem('authToken')
    return fetchAPI(`/messages/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ estado }),
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    })
  },

  delete: (id) => {
    const token = localStorage.getItem('authToken')
    return fetchAPI(`/messages/${id}`, {
      method: 'DELETE',
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    })
  }
}

// Analytics (requieren autenticación)
export const analyticsAPI = {
  getGeneral: () => {
    const token = localStorage.getItem('authToken')
    return fetchAPI('/analytics', {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    })
  },

  getContact: () => {
    const token = localStorage.getItem('authToken')
    return fetchAPI('/analytics/contact', {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    })
  },

  getOrders: () => {
    const token = localStorage.getItem('authToken')
    return fetchAPI('/analytics/orders', {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    })
  },

  getProducts: () => {
    const token = localStorage.getItem('authToken')
    return fetchAPI('/analytics/products', {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    })
  }
}

// Auth
export const authAPI = {
  login: (username, password) => fetchAPI('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  }),

  logout: (token) => fetchAPI('/auth/logout', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }),

  verify: (token) => fetchAPI('/auth/verify', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

// Health check
export const healthCheck = () => fetchAPI('/health')

export default {
  products: productsAPI,
  orders: ordersAPI,
  messages: messagesAPI,
  analytics: analyticsAPI,
  auth: authAPI,
  healthCheck
}

