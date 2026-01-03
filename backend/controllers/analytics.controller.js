import { readJSONFile } from '../utils/fileManager.js'

const MESSAGES_FILE = 'messages.json'
const ORDERS_FILE = 'orders.json'
const PRODUCTS_FILE = 'products.json'

// GET /api/analytics
export const getGeneralAnalytics = async (req, res) => {
  try {
    const messages = await readJSONFile(MESSAGES_FILE)
    const orders = await readJSONFile(ORDERS_FILE)
    const products = await readJSONFile(PRODUCTS_FILE)

    // Analytics de mensajes
    const messagesByStatus = messages.reduce((acc, msg) => {
      acc[msg.estado] = (acc[msg.estado] || 0) + 1
      return acc
    }, {})

    // Analytics de órdenes
    const ordersByStatus = orders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1
      return acc
    }, {})

    const totalRevenue = orders
      .filter(o => o.status !== 'cancelled')
      .reduce((sum, order) => sum + order.total, 0)

    // Analytics de productos
    const totalProducts = products.length
    const featuredProducts = products.filter(p => p.featured).length
    const lowStockProducts = products.filter(p => p.stock < 10).length

    res.json({
      success: true,
      data: {
        messages: {
          total: messages.length,
          byStatus: messagesByStatus,
          nuevos: messagesByStatus.nuevo || 0,
          leidos: messagesByStatus.leido || 0,
          respondidos: messagesByStatus.respondido || 0
        },
        orders: {
          total: orders.length,
          byStatus: ordersByStatus,
          totalRevenue,
          averageOrderValue: orders.length > 0 
            ? totalRevenue / orders.length 
            : 0
        },
        products: {
          total: totalProducts,
          featured: featuredProducts,
          lowStock: lowStockProducts
        }
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener analytics',
      message: error.message
    })
  }
}

// GET /api/analytics/contact
export const getContactAnalytics = async (req, res) => {
  try {
    const messages = await readJSONFile(MESSAGES_FILE)

    // Mensajes por día
    const messagesByDay = messages.reduce((acc, msg) => {
      const date = new Date(msg.fecha).toDateString()
      acc[date] = (acc[date] || 0) + 1
      return acc
    }, {})

    // Mensajes por estado
    const messagesByStatus = messages.reduce((acc, msg) => {
      acc[msg.estado] = (acc[msg.estado] || 0) + 1
      return acc
    }, {})

    // Último mensaje
    const lastMessage = messages.length > 0
      ? messages.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))[0]
      : null

    res.json({
      success: true,
      data: {
        totalMensajes: messages.length,
        mensajesPorDia: messagesByDay,
        mensajesPorEstado: messagesByStatus,
        ultimoEnvio: lastMessage ? lastMessage.fecha : null,
        hoy: messages.filter(m => {
          const hoy = new Date().toDateString()
          const fechaMsg = new Date(m.fecha).toDateString()
          return fechaMsg === hoy
        }).length
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener analytics de contactos',
      message: error.message
    })
  }
}

// GET /api/analytics/orders
export const getOrderAnalytics = async (req, res) => {
  try {
    const orders = await readJSONFile(ORDERS_FILE)

    // Órdenes por estado
    const ordersByStatus = orders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1
      return acc
    }, {})

    // Órdenes por día
    const ordersByDay = orders.reduce((acc, order) => {
      const date = new Date(order.createdAt).toDateString()
      acc[date] = (acc[date] || 0) + 1
      return acc
    }, {})

    // Revenue por día
    const revenueByDay = orders
      .filter(o => o.status !== 'cancelled')
      .reduce((acc, order) => {
        const date = new Date(order.createdAt).toDateString()
        acc[date] = (acc[date] || 0) + order.total
        return acc
      }, {})

    const totalRevenue = orders
      .filter(o => o.status !== 'cancelled')
      .reduce((sum, order) => sum + order.total, 0)

    res.json({
      success: true,
      data: {
        totalOrders: orders.length,
        ordersByStatus,
        ordersByDay,
        revenueByDay,
        totalRevenue,
        averageOrderValue: orders.length > 0 
          ? totalRevenue / orders.filter(o => o.status !== 'cancelled').length 
          : 0
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener analytics de órdenes',
      message: error.message
    })
  }
}

// GET /api/analytics/products
export const getProductAnalytics = async (req, res) => {
  try {
    const products = await readJSONFile(PRODUCTS_FILE)
    const orders = await readJSONFile(ORDERS_FILE)

    // Productos más vendidos
    const productSales = {}
    orders.forEach(order => {
      order.items.forEach(item => {
        if (!productSales[item.id]) {
          productSales[item.id] = {
            id: item.id,
            name: item.name,
            quantity: 0,
            revenue: 0
          }
        }
        productSales[item.id].quantity += item.quantity
        productSales[item.id].revenue += item.subtotal
      })
    })

    const topProducts = Object.values(productSales)
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 10)

    // Productos por categoría
    const productsByCategory = products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1
      return acc
    }, {})

    // Stock bajo
    const lowStockProducts = products
      .filter(p => p.stock < 10)
      .map(p => ({
        id: p.id,
        name: p.name,
        stock: p.stock
      }))

    res.json({
      success: true,
      data: {
        totalProducts: products.length,
        productsByCategory,
        featuredProducts: products.filter(p => p.featured).length,
        lowStockProducts: lowStockProducts.length,
        lowStock: lowStockProducts,
        topProducts
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener analytics de productos',
      message: error.message
    })
  }
}


