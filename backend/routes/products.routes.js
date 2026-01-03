import express from 'express'
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getProductsByCategory
} from '../controllers/products.controller.js'

const router = express.Router()

// GET /api/products - Obtener todos los productos
router.get('/', getAllProducts)

// GET /api/products/featured - Obtener productos destacados
router.get('/featured', getFeaturedProducts)

// GET /api/products/category/:category - Obtener productos por categoría
router.get('/category/:category', getProductsByCategory)

// GET /api/products/:id - Obtener un producto por ID
router.get('/:id', getProductById)

// POST /api/products - Crear un nuevo producto
router.post('/', createProduct)

// PUT /api/products/:id - Actualizar un producto
router.put('/:id', updateProduct)

// DELETE /api/products/:id - Eliminar un producto
router.delete('/:id', deleteProduct)

export default router


