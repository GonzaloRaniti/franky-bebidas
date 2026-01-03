import express from 'express'
import {
  login,
  logout,
  verify
} from '../controllers/auth.controller.js'

const router = express.Router()

// POST /api/auth/login
router.post('/login', login)

// POST /api/auth/logout
router.post('/logout', logout)

// GET /api/auth/verify
router.get('/verify', verify)

export default router


