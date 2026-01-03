import { createContext, useContext, useState, useEffect } from 'react'
import { authAPI } from '../services/api'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Verificar si hay token guardado
    const token = localStorage.getItem('authToken')
    if (token) {
      verifyToken(token)
    } else {
      setLoading(false)
    }
  }, [])

  const verifyToken = async (token) => {
    try {
      const response = await authAPI.verify(token)
      if (response.success) {
        setUser(response.data.user)
        setIsAuthenticated(true)
      } else {
        localStorage.removeItem('authToken')
      }
    } catch (error) {
      localStorage.removeItem('authToken')
    } finally {
      setLoading(false)
    }
  }

  const login = async (username, password) => {
    try {
      const response = await authAPI.login(username, password)
      if (response.success) {
        localStorage.setItem('authToken', response.data.token)
        setUser(response.data.user)
        setIsAuthenticated(true)
        return { success: true }
      }
      return { success: false, error: response.error }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Error al iniciar sesión' 
      }
    }
  }

  const logout = async () => {
    try {
      const token = localStorage.getItem('authToken')
      if (token) {
        await authAPI.logout(token)
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    } finally {
      localStorage.removeItem('authToken')
      setUser(null)
      setIsAuthenticated(false)
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      loading,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}


