import { readJSONFile } from '../utils/fileManager.js'

const USERS_FILE = 'users.json'

// Middleware para verificar autenticación
export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'No autorizado. Token requerido.'
      })
    }

    const users = await readJSONFile(USERS_FILE)
    const user = users.find(u => u.token === token)

    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Token inválido o expirado'
      })
    }

    // Agregar usuario al request
    req.user = {
      id: user.id,
      username: user.username,
      role: user.role
    }

    next()
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al verificar autenticación',
      message: error.message
    })
  }
}

// Middleware para verificar que sea admin
export const requireAdmin = async (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next()
  } else {
    res.status(403).json({
      success: false,
      error: 'Acceso denegado. Se requieren permisos de administrador.'
    })
  }
}


