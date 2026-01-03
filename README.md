# 🍺 Franky Bebidas - E-commerce Fullstack

E-commerce de bebidas desarrollado con React (Frontend) y Node.js/Express (Backend).

## 📋 Características

- ✅ Catálogo de productos con filtros y búsqueda
- ✅ Carrito de compras
- ✅ Sistema de checkout y órdenes
- ✅ Formulario de contacto
- ✅ Panel de administración **protegido con autenticación**
- ✅ Analytics y estadísticas
- ✅ Diseño responsive
- ✅ API REST completa
- ✅ Sistema de login/autenticación

## 🔐 Acceso al Panel Admin

El panel de administración está protegido con autenticación. Las credenciales se configuran al iniciar el servidor por primera vez.

## 🚀 Instalación y Configuración

### Frontend

1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo `.env` en la raíz del proyecto:
```env
VITE_API_URL=http://localhost:3000/api
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

### Backend

1. Navegar a la carpeta backend:
```bash
cd backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env`:
```env
PORT=3000
NODE_ENV=development
```

4. Iniciar servidor:
```bash
# Desarrollo
npm run dev

# Producción
npm start
```

El backend estará disponible en `http://localhost:3000`

## 📚 Documentación de la API

La documentación completa de la API está disponible en [backend/README.md](./backend/README.md)

### Endpoints principales:

- **Productos**: `/api/products`
- **Órdenes**: `/api/orders`
- **Mensajes**: `/api/messages`
- **Analytics**: `/api/analytics`

## 🚢 Deploy

### Frontend (Vercel)

1. Conectar repositorio a Vercel
2. Configurar variable de entorno:
   - `VITE_API_URL`: URL del backend deployado
3. Deploy automático

### Backend (Render / Railway / Vercel)

1. Conectar repositorio
2. Configurar:
   - Build command: `cd backend && npm install`
   - Start command: `cd backend && npm start`
3. Variables de entorno:
   - `PORT`: Asignado automáticamente por la plataforma
   - `NODE_ENV`: `production`

## 🛠️ Tecnologías

### Frontend
- React 19
- React Router
- Formik + Yup
- Vite

### Backend
- Node.js
- Express.js
- CORS
- dotenv

## 📝 Estructura del Proyecto

```
franky-app/
├── backend/           # API REST
│   ├── controllers/  # Controladores
│   ├── routes/       # Rutas
│   ├── data/         # Datos (JSON)
│   ├── utils/        # Utilidades
│   └── server.js      # Servidor principal
├── src/              # Frontend React
│   ├── components/   # Componentes
│   ├── pages/        # Páginas
│   ├── services/     # Servicios API
│   ├── context/      # Context API
│   └── assets/       # Imágenes y recursos
└── public/           # Archivos estáticos
```

## 📄 Licencia

Este proyecto es parte del integrador de Backend de Nucba.

