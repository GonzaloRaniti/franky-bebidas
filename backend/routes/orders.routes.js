import express from 'express'
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus
} from '../controllers/orders.controller.js'

const router = express.Router()

// GET /api/orders - Obtener todas las órdenes
router.get('/', getAllOrders)

// GET /api/orders/:id - Obtener una orden por ID
router.get('/:id', getOrderById)

// POST /api/orders - Crear una nueva orden
router.post('/', createOrder)

// PUT /api/orders/:id/status - Actualizar estado de una orden
router.put('/:id/status', updateOrderStatus)

export default router


