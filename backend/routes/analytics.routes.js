import express from 'express'
import {
  getContactAnalytics,
  getOrderAnalytics,
  getProductAnalytics,
  getGeneralAnalytics
} from '../controllers/analytics.controller.js'

const router = express.Router()

// GET /api/analytics - Analytics generales
router.get('/', getGeneralAnalytics)

// GET /api/analytics/contact - Analytics de contactos
router.get('/contact', getContactAnalytics)

// GET /api/analytics/orders - Analytics de órdenes
router.get('/orders', getOrderAnalytics)

// GET /api/analytics/products - Analytics de productos
router.get('/products', getProductAnalytics)

export default router


