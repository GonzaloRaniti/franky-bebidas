# 🍺 Franky Bebidas - Backend API

API REST para el e-commerce de Franky Bebidas desarrollado con Node.js y Express.

## 📋 Requisitos

- Node.js 18+ 
- npm o yarn

## 🚀 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo `.env` basado en `.env.example`:
```bash
cp .env.example .env
```

3. Iniciar el servidor:
```bash
# Desarrollo
npm run dev

# Producción
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 📚 Documentación de la API

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### Health Check
- **GET** `/api/health`
  - Verifica el estado del servidor
  - Respuesta: `{ status: 'OK', message: '...', timestamp: '...' }`

---

### 🔐 Autenticación

#### Login
- **POST** `/api/auth/login`
  - Body:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
  - Respuesta: `{ success: true, data: { token, user } }`
  - **Nota**: Las credenciales se configuran al iniciar el servidor por primera vez

#### Verificar Token
- **GET** `/api/auth/verify`
  - Headers: `Authorization: Bearer <token>`
  - Respuesta: `{ success: true, data: { user } }`

#### Logout
- **POST** `/api/auth/logout`
  - Headers: `Authorization: Bearer <token>`
  - Respuesta: `{ success: true, message: '...' }`

**⚠️ IMPORTANTE**: Las rutas de `/api/messages` (GET, PUT, DELETE) y `/api/analytics` requieren autenticación. Solo el POST de mensajes es público.

---

### 📦 Productos

#### Obtener todos los productos
- **GET** `/api/products`
  - Query params opcionales:
    - `category`: Filtrar por categoría (alcoholicas, gaseosas, sin-alcohol)
    - `search`: Buscar por nombre o descripción
    - `featured`: `true` para obtener solo destacados
  - Respuesta: `{ success: true, count: number, data: Product[] }`

#### Obtener producto por ID
- **GET** `/api/products/:id`
  - Respuesta: `{ success: true, data: Product }`

#### Obtener productos destacados
- **GET** `/api/products/featured`
  - Respuesta: `{ success: true, count: number, data: Product[] }`

#### Obtener productos por categoría
- **GET** `/api/products/category/:category`
  - Respuesta: `{ success: true, count: number, data: Product[] }`

#### Crear producto
- **POST** `/api/products`
  - Body:
    ```json
    {
      "name": "string",
      "description": "string",
      "price": number,
      "image": "string",
      "featured": boolean,
      "category": "string",
      "stock": number
    }
    ```
  - Respuesta: `{ success: true, message: '...', data: Product }`

#### Actualizar producto
- **PUT** `/api/products/:id`
  - Body: Campos a actualizar (parcial)
  - Respuesta: `{ success: true, message: '...', data: Product }`

#### Eliminar producto
- **DELETE** `/api/products/:id`
  - Respuesta: `{ success: true, message: '...' }`

---

### 🛒 Órdenes

#### Crear orden
- **POST** `/api/orders`
  - Body:
    ```json
    {
      "items": [
        {
          "id": number,
          "quantity": number
        }
      ],
      "customer": {
        "nombre": "string",
        "apellido": "string",
        "email": "string",
        "telefono": "string",
        "direccion": "string",
        "ciudad": "string",
        "codigoPostal": "string"
      },
      "paymentMethod": "string"
    }
    ```
  - Respuesta: `{ success: true, message: '...', data: Order }`

#### Obtener todas las órdenes
- **GET** `/api/orders`
  - Query params opcionales:
    - `status`: Filtrar por estado (pending, processing, shipped, delivered, cancelled)
    - `email`: Filtrar por email del cliente
  - Respuesta: `{ success: true, count: number, data: Order[] }`

#### Obtener orden por ID
- **GET** `/api/orders/:id`
  - Respuesta: `{ success: true, data: Order }`

#### Actualizar estado de orden
- **PUT** `/api/orders/:id/status`
  - Body: `{ "status": "string" }`
  - Estados válidos: `pending`, `processing`, `shipped`, `delivered`, `cancelled`
  - Respuesta: `{ success: true, message: '...', data: Order }`

---

### 📧 Mensajes de Contacto

#### Crear mensaje
- **POST** `/api/messages`
  - Body:
    ```json
    {
      "nombre": "string",
      "apellido": "string",
      "email": "string",
      "asunto": "string"
    }
    ```
  - Respuesta: `{ success: true, message: '...', data: Message }`

#### Obtener todos los mensajes
- **GET** `/api/messages`
  - Query params opcionales:
    - `estado`: Filtrar por estado (nuevo, leido, respondido)
    - `search`: Buscar en nombre, apellido, email o asunto
  - Respuesta: `{ success: true, count: number, data: Message[] }`

#### Obtener mensaje por ID
- **GET** `/api/messages/:id`
  - Respuesta: `{ success: true, data: Message }`

#### Actualizar mensaje
- **PUT** `/api/messages/:id`
  - Body: Campos a actualizar (parcial)
  - Respuesta: `{ success: true, message: '...', data: Message }`

#### Actualizar estado de mensaje
- **PUT** `/api/messages/:id/status`
  - Body: `{ "estado": "string" }`
  - Estados válidos: `nuevo`, `leido`, `respondido`
  - Respuesta: `{ success: true, message: '...', data: Message }`

#### Eliminar mensaje
- **DELETE** `/api/messages/:id`
  - Respuesta: `{ success: true, message: '...' }`

---

### 📊 Analytics

**🔒 Todas las rutas de Analytics requieren autenticación**

#### Analytics generales
- **GET** `/api/analytics`
  - Headers: `Authorization: Bearer <token>`
  - Respuesta: `{ success: true, data: { messages, orders, products } }`

#### Analytics de contactos
- **GET** `/api/analytics/contact`
  - Headers: `Authorization: Bearer <token>`
  - Respuesta: `{ success: true, data: { totalMensajes, mensajesPorDia, mensajesPorEstado, ... } }`

#### Analytics de órdenes
- **GET** `/api/analytics/orders`
  - Headers: `Authorization: Bearer <token>`
  - Respuesta: `{ success: true, data: { totalOrders, ordersByStatus, revenueByDay, ... } }`

#### Analytics de productos
- **GET** `/api/analytics/products`
  - Headers: `Authorization: Bearer <token>`
  - Respuesta: `{ success: true, data: { totalProducts, topProducts, lowStock, ... } }`

---

## 📝 Modelos de Datos

### Product
```json
{
  "id": number,
  "name": "string",
  "description": "string",
  "price": number,
  "image": "string",
  "featured": boolean,
  "category": "string",
  "stock": number,
  "createdAt": "ISO date",
  "updatedAt": "ISO date"
}
```

### Order
```json
{
  "id": "uuid",
  "orderNumber": "string",
  "items": [
    {
      "id": number,
      "name": "string",
      "price": number,
      "quantity": number,
      "subtotal": number
    }
  ],
  "customer": {
    "nombre": "string",
    "apellido": "string",
    "email": "string",
    "telefono": "string",
    "direccion": "string",
    "ciudad": "string",
    "codigoPostal": "string"
  },
  "paymentMethod": "string",
  "total": number,
  "status": "string",
  "createdAt": "ISO date",
  "updatedAt": "ISO date"
}
```

### Message
```json
{
  "id": "uuid",
  "nombre": "string",
  "apellido": "string",
  "email": "string",
  "asunto": "string",
  "estado": "string",
  "fecha": "ISO date",
  "createdAt": "ISO date",
  "updatedAt": "ISO date"
}
```

---

## 🚢 Deploy

### Render / Railway / Vercel

1. Configurar variables de entorno en la plataforma
2. El servidor debe escuchar en el puerto proporcionado por la plataforma
3. Asegurarse de que el build command sea: `npm install`
4. El start command debe ser: `npm start`

### Variables de entorno necesarias:
- `PORT`: Puerto del servidor (generalmente asignado automáticamente)

---

## 🛠️ Tecnologías Utilizadas

- **Express.js**: Framework web para Node.js
- **CORS**: Middleware para habilitar CORS
- **dotenv**: Gestión de variables de entorno
- **uuid**: Generación de IDs únicos

---

## 📄 Licencia

Este proyecto es parte del integrador de Backend de Nucba.

