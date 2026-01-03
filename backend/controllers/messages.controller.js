import { readJSONFile, writeJSONFile } from '../utils/fileManager.js'
import { v4 as uuidv4 } from 'uuid'

const MESSAGES_FILE = 'messages.json'

// POST /api/messages
export const createMessage = async (req, res) => {
  try {
    const { nombre, apellido, email, asunto } = req.body

    // Validaciones
    if (!nombre || !apellido || !email || !asunto) {
      return res.status(400).json({
        success: false,
        error: 'Faltan campos requeridos: nombre, apellido, email, asunto'
      })
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Email inválido'
      })
    }

    const messages = await readJSONFile(MESSAGES_FILE)

    const newMessage = {
      id: uuidv4(),
      nombre,
      apellido,
      email,
      asunto,
      estado: 'nuevo',
      fecha: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    messages.push(newMessage)
    await writeJSONFile(MESSAGES_FILE, messages)

    res.status(201).json({
      success: true,
      message: 'Mensaje enviado exitosamente',
      data: newMessage
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al crear mensaje',
      message: error.message
    })
  }
}

// GET /api/messages
export const getAllMessages = async (req, res) => {
  try {
    const { estado, search } = req.query
    let messages = await readJSONFile(MESSAGES_FILE)

    // Filtrar por estado
    if (estado && estado !== 'todos') {
      messages = messages.filter(m => m.estado === estado)
    }

    // Buscar en nombre, apellido, email o asunto
    if (search) {
      const searchLower = search.toLowerCase()
      messages = messages.filter(m =>
        m.nombre.toLowerCase().includes(searchLower) ||
        m.apellido.toLowerCase().includes(searchLower) ||
        m.email.toLowerCase().includes(searchLower) ||
        m.asunto.toLowerCase().includes(searchLower)
      )
    }

    // Ordenar por fecha más reciente
    messages.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

    res.json({
      success: true,
      count: messages.length,
      data: messages
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener mensajes',
      message: error.message
    })
  }
}

// GET /api/messages/:id
export const getMessageById = async (req, res) => {
  try {
    const { id } = req.params
    const messages = await readJSONFile(MESSAGES_FILE)
    const message = messages.find(m => m.id === id)

    if (!message) {
      return res.status(404).json({
        success: false,
        error: 'Mensaje no encontrado'
      })
    }

    res.json({
      success: true,
      data: message
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener mensaje',
      message: error.message
    })
  }
}

// PUT /api/messages/:id
export const updateMessage = async (req, res) => {
  try {
    const { id } = req.params
    const updates = req.body
    const messages = await readJSONFile(MESSAGES_FILE)
    const messageIndex = messages.findIndex(m => m.id === id)

    if (messageIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Mensaje no encontrado'
      })
    }

    messages[messageIndex] = {
      ...messages[messageIndex],
      ...updates,
      id, // Asegurar que el ID no cambie
      updatedAt: new Date().toISOString()
    }

    await writeJSONFile(MESSAGES_FILE, messages)

    res.json({
      success: true,
      message: 'Mensaje actualizado exitosamente',
      data: messages[messageIndex]
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al actualizar mensaje',
      message: error.message
    })
  }
}

// PUT /api/messages/:id/status
export const updateMessageStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { estado } = req.body

    const validStatuses = ['nuevo', 'leido', 'respondido']
    if (!estado || !validStatuses.includes(estado)) {
      return res.status(400).json({
        success: false,
        error: `Estado inválido. Estados válidos: ${validStatuses.join(', ')}`
      })
    }

    const messages = await readJSONFile(MESSAGES_FILE)
    const messageIndex = messages.findIndex(m => m.id === id)

    if (messageIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Mensaje no encontrado'
      })
    }

    messages[messageIndex].estado = estado
    messages[messageIndex].updatedAt = new Date().toISOString()

    await writeJSONFile(MESSAGES_FILE, messages)

    res.json({
      success: true,
      message: 'Estado de mensaje actualizado exitosamente',
      data: messages[messageIndex]
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al actualizar estado de mensaje',
      message: error.message
    })
  }
}

// DELETE /api/messages/:id
export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params
    const messages = await readJSONFile(MESSAGES_FILE)
    const filteredMessages = messages.filter(m => m.id !== id)

    if (messages.length === filteredMessages.length) {
      return res.status(404).json({
        success: false,
        error: 'Mensaje no encontrado'
      })
    }

    await writeJSONFile(MESSAGES_FILE, filteredMessages)

    res.json({
      success: true,
      message: 'Mensaje eliminado exitosamente'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al eliminar mensaje',
      message: error.message
    })
  }
}


