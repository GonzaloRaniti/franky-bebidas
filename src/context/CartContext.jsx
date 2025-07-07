import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

const getInitialCart = () => {
  const stored = localStorage.getItem('cart')
  return stored ? JSON.parse(stored) : []
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialCart())

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const found = prev.find(item => item.id === product.id)
      if (found) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => setCart([])

  const updateQuantity = (id, quantity) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, quantity } : item
    ))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
} 