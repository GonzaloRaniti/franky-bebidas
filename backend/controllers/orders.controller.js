import { readJSONFile, writeJSONFile } from '../utils/fileManager.js'
import { v4 as uuidv4 } from 'uuid'

const ORDERS_FILE = 'orders.json'
const PRODUCTS_FILE = 'products.json'

// POST /api/orders
export const createOrder = async (req, res) => {
  try {
    const { items, customer, paymentMethod } = req.body

    // Validaciones
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'La orden debe contener al menos un producto'
      })
    }

    if (!customer || !customer.nombre || !customer.email || !customer.direccion) {
      return res.status(400).json({
        success: false,
        error: 'Faltan datos del cliente requeridos'
      })
    }

    if (!paymentMethod) {
      return res.status(400).json({
        success: false,
        error: 'Método de pago requerido'
      })
    }

    // Verificar stock y calcular total
    const products = await readJSONFile(PRODUCTS_FILE)
    let total = 0
    const orderItems = []

    for (const item of items) {
      const product = products.find(p => p.id === item.id)
      
      if (!product) {
        return res.status(404).json({
          success: false,
          error: `Producto con ID ${item.id} no encontrado`
        })
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          error: `Stock insuficiente para ${product.name}. Disponible: ${product.stock}`
        })
      }

      orderItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        subtotal: product.price * item.quantity
      })

      total += product.price * item.quantity
    }

    // Crear orden
    const order = {
      id: uuidv4(),
      orderNumber: `ORD-${Date.now()}`,
      items: orderItems,
      customer: {
        nombre: customer.nombre,
        apellido: customer.apellido || '',
        email: customer.email,
        telefono: customer.telefono || '',
        direccion: customer.direccion,
        ciudad: customer.ciudad || '',
        codigoPostal: customer.codigoPostal || ''
      },
      paymentMethod,
      total,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Guardar orden
    const orders = await readJSONFile(ORDERS_FILE)
    orders.push(order)
    await writeJSONFile(ORDERS_FILE, orders)

    // Actualizar stock de productos
    for (const item of items) {
      const productIndex = products.findIndex(p => p.id === item.id)
      if (productIndex !== -1) {
        products[productIndex].stock -= item.quantity
        products[productIndex].updatedAt = new Date().toISOString()
      }
    }
    await writeJSONFile(PRODUCTS_FILE, products)

    res.status(201).json({
      success: true,
      message: 'Orden creada exitosamente',
      data: order
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al crear orden',
      message: error.message
    })
  }
}

// GET /api/orders
export const getAllOrders = async (req, res) => {
  try {
    const { status, email } = req.query
    let orders = await readJSONFile(ORDERS_FILE)

    // Filtrar por estado
    if (status) {
      orders = orders.filter(o => o.status === status)
    }

    // Filtrar por email del cliente
    if (email) {
      orders = orders.filter(o => o.customer.email === email)
    }

    // Ordenar por fecha más reciente
    orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    res.json({
      success: true,
      count: orders.length,
      data: orders
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener órdenes',
      message: error.message
    })
  }
}

// GET /api/orders/:id
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params
    const orders = await readJSONFile(ORDERS_FILE)
    const order = orders.find(o => o.id === id || o.orderNumber === id)

    if (!order) {
      return res.status(404).json({
        success: false,
        error: 'Orden no encontrada'
      })
    }

    res.json({
      success: true,
      data: order
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener orden',
      message: error.message
    })
  }
}

// PUT /api/orders/:id/status
export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body

    const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled']
    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: `Estado inválido. Estados válidos: ${validStatuses.join(', ')}`
      })
    }

    const orders = await readJSONFile(ORDERS_FILE)
    const orderIndex = orders.findIndex(o => o.id === id || o.orderNumber === id)

    if (orderIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Orden no encontrada'
      })
    }

    orders[orderIndex].status = status
    orders[orderIndex].updatedAt = new Date().toISOString()

    await writeJSONFile(ORDERS_FILE, orders)

    res.json({
      success: true,
      message: 'Estado de orden actualizado exitosamente',
      data: orders[orderIndex]
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al actualizar estado de orden',
      message: error.message
    })
  }
}


