# 📸 Guía para Agregar Imágenes de Productos

## 📁 Estructura de Carpetas

Crea la siguiente estructura en tu proyecto:

```
franky-app/
├── public/
│   └── images/
│       ├── cerveza-rubia-1l.jpg
│       ├── vino-malbec-750ml.jpg
│       ├── gaseosa-cola-2.25l.jpg
│       ├── agua-mineral-1.5l.jpg
│       ├── whisky-premium-750ml.jpg
│       ├── gin-tonic-330ml.jpg
│       ├── limonada-natural-1l.jpg
│       ├── cerveza-negra-500ml.jpg
│       ├── gaseosa-limon-1.5l.jpg
│       ├── vino-blanco-chardonnay-750ml.jpg
│       ├── ron-premium-750ml.jpg
│       └── agua-gas-500ml.jpg
```

## 🖼️ Especificaciones de Imágenes

### **Formato recomendado:**
- **Formato:** JPG o PNG
- **Tamaño:** 400x400 píxeles (mínimo)
- **Resolución:** 72 DPI
- **Fondo:** Preferiblemente blanco o transparente
- **Calidad:** Alta (para web)

### **Nombres de archivos:**
Usa exactamente estos nombres (en minúsculas, con guiones):

```
cerveza-rubia-1l.jpg
vino-malbec-750ml.jpg
gaseosa-cola-2.25l.jpg
agua-mineral-1.5l.jpg
whisky-premium-750ml.jpg
gin-tonic-330ml.jpg
limonada-natural-1l.jpg
cerveza-negra-500ml.jpg
gaseosa-limon-1.5l.jpg
vino-blanco-chardonnay-750ml.jpg
ron-premium-750ml.jpg
agua-gas-500ml.jpg
```

## 📋 Pasos para Agregar Imágenes

### **1. Crear la carpeta:**
```bash
mkdir -p franky-app/public/images
```

### **2. Colocar las imágenes:**
- Copia tus imágenes de botellas alcohólicas en `franky-app/public/images/`
- Asegúrate de que los nombres coincidan exactamente

### **3. Verificar que funcionen:**
- Las imágenes aparecerán automáticamente en las cards de productos
- Si una imagen no carga, se mostrará el emoji correspondiente como fallback

## 🎯 Consejos para las Imágenes

### **Mejores prácticas:**
- **Fondo limpio:** Fondo blanco o transparente
- **Iluminación uniforme:** Sin sombras duras
- **Ángulo frontal:** Botella vista desde el frente
- **Tamaño consistente:** Todas las imágenes del mismo tamaño
- **Calidad web:** Optimizadas para carga rápida

### **Formatos aceptados:**
- ✅ JPG (recomendado)
- ✅ PNG (con transparencia)
- ✅ WebP (moderno y eficiente)

## 🔧 Personalización

### **Para cambiar una imagen:**
1. Reemplaza el archivo en `public/images/`
2. Mantén el mismo nombre
3. La imagen se actualizará automáticamente

### **Para agregar nuevos productos:**
1. Agrega la imagen a `public/images/`
2. Actualiza `src/data/products.js` con la nueva ruta
3. El sistema detectará automáticamente la imagen

## 🚀 Resultado Final

Una vez agregadas las imágenes, tu tienda tendrá:
- ✅ **Cards profesionales** con imágenes reales
- ✅ **Fallback automático** a emojis si no carga la imagen
- ✅ **Optimización automática** para diferentes dispositivos
- ✅ **Carga rápida** con imágenes optimizadas

¡Tu tienda se verá súper profesional con las imágenes reales de las botellas! 