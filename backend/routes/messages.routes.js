import express from 'express'
import { authenticate } from '../middleware/auth.middleware.js'
import {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
  updateMessageStatus
} from '../controllers/messages.controller.js'

const router = express.Router()

// POST /api/messages - Crear un nuevo mensaje (público, desde formulario de contacto)
router.post('/', createMessage)

// Rutas protegidas (requieren autenticación)
// GET /api/messages - Obtener todos los mensajes
router.get('/', authenticate, getAllMessages)

// GET /api/messages/:id - Obtener un mensaje por ID
router.get('/:id', authenticate, getMessageById)

// PUT /api/messages/:id - Actualizar un mensaje
router.put('/:id', authenticate, updateMessage)

// PUT /api/messages/:id/status - Actualizar estado de un mensaje
router.put('/:id/status', authenticate, updateMessageStatus)

// DELETE /api/messages/:id - Eliminar un mensaje
router.delete('/:id', authenticate, deleteMessage)

export default router

