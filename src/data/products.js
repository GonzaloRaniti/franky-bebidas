// Importar imágenes desde assets
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

const products = [
  {
    id: 1,
    name: 'Cerveza Rubia 1L',
    description: 'Cerveza artesanal rubia, botella de 1 litro. Sabor suave y refrescante.',
    price: 1200,
    image: cervezaRubia, 
    featured: true,
    category: 'alcoholicas',
  },
  {
    id: 2,
    name: 'Vino Malbec 750ml',
    description: 'Vino tinto Malbec premium, botella de 750ml. Aromas intensos y taninos suaves.',
    price: 2500,
    image: vinoMalbec, 
    featured: true,
    category: 'alcoholicas',
  },
  {
    id: 3,
    name: 'Gaseosa Cola 2.25L',
    description: 'Gaseosa sabor cola, botella de 2.25 litros. Perfecta para compartir.',
    price: 900,
    image: cocaCola,
    featured: true,
    category: 'gaseosas',
  },
  {
    id: 4,
    name: 'Agua Mineral 1.5L',
    description: 'Agua mineral sin gas, botella de 1.5 litros. Hidratación natural.',
    price: 600,
    image: agua,
    featured: false,
    category: 'sin-alcohol',
  },
  {
    id: 5,
    name: 'Whisky Premium 750ml',
    description: 'Whisky premium añejado 12 años, botella de 750ml. Sabor intenso y elegante.',
    price: 8500,
    image: whisky,
    featured: true,
    category: 'alcoholicas',
  },
  {
    id: 6,
    name: 'Gin Tónico 330ml',
    description: 'Gin tónico listo para beber, lata de 330ml. Refrescante y aromático.',
    price: 800,
    image: ginTonic, 
    featured: false,
    category: 'alcoholicas',
  },
  {
    id: 7,
    name: 'Limonada Natural 1L',
    description: 'Limonada natural sin conservantes, botella de 1 litro. Refrescante y saludable.',
    price: 750,
    image: limonada, 
    featured: false,
    category: 'sin-alcohol',
  },
  {
    id: 8,
    name: 'Cerveza Negra 500ml',
    description: 'Cerveza negra artesanal, botella de 500ml. Sabor robusto y maltoso.',
    price: 950,
    image: cervezaNegra, 
    featured: false,
    category: 'alcoholicas',
  },
  {
    id: 9,
    name: 'Gaseosa Limón 1.5L',
    description: 'Gaseosa sabor limón, botella de 1.5 litros. Refrescante y cítrica.',
    price: 750,
    image: gaseosaLimon, 
    featured: false,
    category: 'gaseosas',
  },
  {
    id: 10,
    name: 'Vino Blanco Chardonnay',
    description: 'Vino blanco Chardonnay, botella de 750ml. Aromas frutales y frescos.',
    price: 1800,
    image: vinoChardonnay, 
    featured: false,
    category: 'alcoholicas',
  },
  {
    id: 11,
    name: 'Ron Premium 750ml',
    description: 'Ron premium añejado 8 años, botella de 750ml. Sabor caribeño auténtico.',
    price: 4200,
    image: ron,
    featured: false,
    category: 'alcoholicas',
  },
  {
    id: 12,
    name: 'Agua con Gas 500ml',
    description: 'Agua con gas natural, botella de 500ml. Burbujas finas y refrescantes.',
    price: 450,
    image: aguaConGas, 
    featured: false,
    category: 'sin-alcohol',
  },
  {
    id: 13,
    name: 'Whisky Doble Añejado',
    description: 'Whisky premium doble añejado, botella de 750ml. Sabor intenso y elegante.',
    price: 12000,
    image: whisky2,
    featured: true,
    category: 'alcoholicas',
  },
  {
    id: 14,
    name: 'Whisky Premium Especial',
    description: 'Whisky premium especial, botella de 750ml. Sabor único y refinado.',
    price: 15000,
    image: whisky3,
    featured: false,
    category: 'alcoholicas',
  },
  {
    id: 15,
    name: 'Fernet Branca',
    description: 'Fernet Branca italiano, botella de 750ml. Sabor amargo y aromático.',
    price: 3500,
    image: fernet,
    featured: false,
    category: 'alcoholicas',
  },
  {
    id: 16,
    name: 'Vodka Premium',
    description: 'Vodka premium destilado, botella de 750ml. Sabor suave y limpio.',
    price: 2800,
    image: vodka,
    featured: false,
    category: 'alcoholicas',
  },
  {
    id: 17,
    name: 'Sprite 2.25L',
    description: 'Gaseosa Sprite, botella de 2.25 litros. Refrescante sabor lima-limón.',
    price: 850,
    image: sprite,
    featured: false,
    category: 'gaseosas',
  },
  {
    id: 18,
    name: 'Cerveza Roja 500ml',
    description: 'Cerveza roja artesanal, botella de 500ml. Sabor maltoso y equilibrado.',
    price: 1100,
    image: cervezaRoja,
    featured: false,
    category: 'alcoholicas',
  },
]

export default products 