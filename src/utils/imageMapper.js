// Mapeo de imágenes para productos del backend
import cocaCola from '../assets/coca-cola.jpeg'
import agua from '../assets/agua.webp'
import ron from '../assets/ron.jpg'
import whisky from '../assets/whisky.jpg'
import whisky2 from '../assets/whisky2.jpg'
import whisky3 from '../assets/whisky3.webp'
import fernet from '../assets/fernet.webp'
import vodka from '../assets/vodka.jpg'
import cervezaRubia from '../assets/cerveza-rubia.png'
import vinoMalbec from '../assets/vino-malbec.png'
import ginTonic from '../assets/gin-tonico.png'
import limonada from '../assets/Limonada.png'
import cervezaNegra from '../assets/cerveza-negra.png'
import gaseosaLimon from '../assets/gaseosa-limon.png'
import vinoChardonnay from '../assets/vino-chardonnay.png'
import aguaConGas from '../assets/agua-con.gas.png'
import sprite from '../assets/sprite.jpg'
import cervezaRoja from '../assets/cerveza-roja.jpg'

// Mapeo de rutas del backend a imports locales
const imageMap = {
  '/assets/cerveza-rubia.png': cervezaRubia,
  '/assets/vino-malbec.png': vinoMalbec,
  '/assets/coca-cola.jpeg': cocaCola,
  '/assets/agua.webp': agua,
  '/assets/whisky.jpg': whisky,
  '/assets/gin-tonico.png': ginTonic,
  '/assets/Limonada.png': limonada,
  '/assets/cerveza-negra.png': cervezaNegra,
  '/assets/gaseosa-limon.png': gaseosaLimon,
  '/assets/vino-chardonnay.png': vinoChardonnay,
  '/assets/ron.jpg': ron,
  '/assets/agua-con.gas.png': aguaConGas,
  '/assets/whisky2.jpg': whisky2,
  '/assets/whisky3.webp': whisky3,
  '/assets/fernet.webp': fernet,
  '/assets/vodka.jpg': vodka,
  '/assets/sprite.jpg': sprite,
  '/assets/cerveza-roja.jpg': cervezaRoja,
}

// Función para obtener la imagen correcta
export const getProductImage = (imagePath) => {
  if (!imagePath) return null
  
  // Si es una ruta del backend, mapearla
  if (imageMap[imagePath]) {
    return imageMap[imagePath]
  }
  
  // Si ya es un import (objeto), devolverlo directamente
  if (typeof imagePath === 'object' || imagePath.startsWith('blob:') || imagePath.startsWith('http')) {
    return imagePath
  }
  
  // Intentar usar la ruta directamente
  return imagePath
}

export default imageMap


