import { readJSONFile, writeJSONFile } from '../utils/fileManager.js'

const PRODUCTS_FILE = 'products.json'

// GET /api/products
export const getAllProducts = async (req, res) => {
  try {
    const { category, search, featured } = req.query
    let products = await readJSONFile(PRODUCTS_FILE)

    // Filtrar por categoría
    if (category && category !== 'todos') {
      products = products.filter(p => p.category === category)
    }

    // Filtrar por featured
    if (featured === 'true') {
      products = products.filter(p => p.featured === true)
    }

    // Buscar por nombre o descripción
    if (search) {
      const searchLower = search.toLowerCase()
      products = products.filter(p =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      )
    }

    res.json({
      success: true,
      count: products.length,
      data: products
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener productos',
      message: error.message
    })
  }
}

// GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    const products = await readJSONFile(PRODUCTS_FILE)
    const product = products.find(p => p.id === parseInt(id))

    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Producto no encontrado'
      })
    }

    res.json({
      success: true,
      data: product
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener producto',
      message: error.message
    })
  }
}

// GET /api/products/featured
export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await readJSONFile(PRODUCTS_FILE)
    const featured = products.filter(p => p.featured === true)

    res.json({
      success: true,
      count: featured.length,
      data: featured
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener productos destacados',
      message: error.message
    })
  }
}

// GET /api/products/category/:category
export const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params
    const products = await readJSONFile(PRODUCTS_FILE)
    const filtered = products.filter(p => p.category === category)

    res.json({
      success: true,
      count: filtered.length,
      data: filtered
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener productos por categoría',
      message: error.message
    })
  }
}

// POST /api/products
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, featured, category, stock } = req.body

    // Validaciones
    if (!name || !description || !price || !category) {
      return res.status(400).json({
        success: false,
        error: 'Faltan campos requeridos: name, description, price, category'
      })
    }

    const products = await readJSONFile(PRODUCTS_FILE)
    
    // Generar nuevo ID
    const newId = products.length > 0 
      ? Math.max(...products.map(p => p.id)) + 1 
      : 1

    const newProduct = {
      id: newId,
      name,
      description,
      price: parseFloat(price),
      image: image || '/assets/default-product.png',
      featured: featured || false,
      category,
      stock: stock || 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    products.push(newProduct)
    await writeJSONFile(PRODUCTS_FILE, products)

    res.status(201).json({
      success: true,
      message: 'Producto creado exitosamente',
      data: newProduct
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al crear producto',
      message: error.message
    })
  }
}

// PUT /api/products/:id
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const updates = req.body
    const products = await readJSONFile(PRODUCTS_FILE)
    const productIndex = products.findIndex(p => p.id === parseInt(id))

    if (productIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Producto no encontrado'
      })
    }

    // Actualizar producto
    products[productIndex] = {
      ...products[productIndex],
      ...updates,
      id: parseInt(id), // Asegurar que el ID no cambie
      updatedAt: new Date().toISOString()
    }

    await writeJSONFile(PRODUCTS_FILE, products)

    res.json({
      success: true,
      message: 'Producto actualizado exitosamente',
      data: products[productIndex]
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al actualizar producto',
      message: error.message
    })
  }
}

// DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const products = await readJSONFile(PRODUCTS_FILE)
    const filteredProducts = products.filter(p => p.id !== parseInt(id))

    if (products.length === filteredProducts.length) {
      return res.status(404).json({
        success: false,
        error: 'Producto no encontrado'
      })
    }

    await writeJSONFile(PRODUCTS_FILE, filteredProducts)

    res.json({
      success: true,
      message: 'Producto eliminado exitosamente'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al eliminar producto',
      message: error.message
    })
  }
}


