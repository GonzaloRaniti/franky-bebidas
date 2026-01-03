import { readJSONFile, writeJSONFile } from '../utils/fileManager.js'
import crypto from 'crypto'

const USERS_FILE = 'users.json'

// Crear usuario admin por defecto si no existe
const createDefaultAdmin = async () => {
  try {
    const users = await readJSONFile(USERS_FILE)
    if (users.length === 0) {
      // Contraseña por defecto: "admin123" (hash SHA256)
      const defaultPassword = crypto
        .createHash('sha256')
        .update('admin123')
        .digest('hex')
      
      const adminUser = {
        id: crypto.randomUUID(),
        username: 'admin',
        password: defaultPassword, // Hash de "admin123"
        role: 'admin',
        createdAt: new Date().toISOString()
      }
      
      users.push(adminUser)
      await writeJSONFile(USERS_FILE, users)
      console.log('✅ Usuario administrador creado')
    }
  } catch (error) {
    // Si el archivo no existe, crearlo
    const defaultPassword = crypto
      .createHash('sha256')
      .update('admin123')
      .digest('hex')
    
    const adminUser = {
      id: crypto.randomUUID(),
      username: 'admin',
      password: defaultPassword,
      role: 'admin',
      createdAt: new Date().toISOString()
    }
    
    await writeJSONFile(USERS_FILE, [adminUser])
    console.log('✅ Usuario administrador creado')
  }
}

// Inicializar usuario admin al cargar el módulo
createDefaultAdmin()

// POST /api/auth/login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        error: 'Usuario y contraseña son requeridos'
      })
    }

    const users = await readJSONFile(USERS_FILE)
    const passwordHash = crypto
      .createHash('sha256')
      .update(password)
      .digest('hex')

    const user = users.find(
      u => u.username === username && u.password === passwordHash
    )

    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Usuario o contraseña incorrectos'
      })
    }

    // Generar token simple (en producción usar JWT)
    const token = crypto.randomBytes(32).toString('hex')
    
    // Guardar token en el usuario (en producción usar Redis o DB)
    user.token = token
    user.lastLogin = new Date().toISOString()
    await writeJSONFile(USERS_FILE, users)

    res.json({
      success: true,
      message: 'Login exitoso',
      data: {
        token,
        user: {
          id: user.id,
          username: user.username,
          role: user.role
        }
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al iniciar sesión',
      message: error.message
    })
  }
}

// POST /api/auth/logout
export const logout = async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    
    if (token) {
      const users = await readJSONFile(USERS_FILE)
      const user = users.find(u => u.token === token)
      
      if (user) {
        delete user.token
        await writeJSONFile(USERS_FILE, users)
      }
    }

    res.json({
      success: true,
      message: 'Sesión cerrada exitosamente'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al cerrar sesión',
      message: error.message
    })
  }
}

// GET /api/auth/verify
export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Token no proporcionado'
      })
    }

    const users = await readJSONFile(USERS_FILE)
    const user = users.find(u => u.token === token)

    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Token inválido'
      })
    }

    res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          username: user.username,
          role: user.role
        }
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al verificar token',
      message: error.message
    })
  }
}

