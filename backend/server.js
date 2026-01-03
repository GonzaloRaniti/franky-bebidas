import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import productsRoutes from './routes/products.routes.js'
import ordersRoutes from './routes/orders.routes.js'
import messagesRoutes from './routes/messages.routes.js'
import analyticsRoutes from './routes/analytics.routes.js'
import authRoutes from './routes/auth.routes.js'
import { authenticate } from './middleware/auth.middleware.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes públicas
app.use('/api/auth', authRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/orders', ordersRoutes)
app.use('/api/messages', messagesRoutes) // POST es público, GET/PUT/DELETE requieren auth (manejado en la ruta)

// Routes protegidas (requieren autenticación)
app.use('/api/analytics', authenticate, analyticsRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Franky Bebidas API is running',
    timestamp: new Date().toISOString()
  })
})

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API de Franky Bebidas',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      products: '/api/products',
      orders: '/api/orders',
      messages: '/api/messages',
      analytics: '/api/analytics'
    },
    documentation: '/api/docs'
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The route ${req.method} ${req.path} does not exist`
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📚 API Documentation available at http://localhost:${PORT}/api/docs`)
})

