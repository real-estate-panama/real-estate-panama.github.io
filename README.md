# Sitio Web Multilingüe - Terreno en Venta cerca del Canal de Panamá

## 🌍 Descripción del Proyecto

Sitio web profesional y responsivo para promocionar una propiedad de 1,880 hectáreas con potencial portuario ubicada estratégicamente cerca del Canal de Panamá. El sitio cuenta con soporte completo para **tres idiomas**: Español, Inglés y Mandarín (中文).

## ✨ Características Principales

### 🌐 Funcionalidad Multilingüe
- **Tres idiomas completos**: Español (ES), Inglés (EN) y Mandarín (ZH)
- **Selector de idioma**: Ubicado en la esquina superior derecha con diseño flotante y atractivo
- **Traducción instantánea**: Cambio de idioma sin recargar la página
- **Persistencia**: Guarda la preferencia de idioma del usuario en localStorage
- **Traducción completa**: Todo el contenido del sitio está traducido, incluyendo meta tags y títulos

### 🎨 Diseño y Experiencia de Usuario
- **Diseño responsivo**: Optimizado para todos los dispositivos (desktop, tablet, móvil)
- **Navegación sticky**: Barra de navegación que permanece visible al hacer scroll
- **Animaciones suaves**: Transiciones y efectos de scroll para mejor experiencia
- **Galería interactiva**: Modal de imágenes al hacer clic para vista ampliada
- **Smooth scrolling**: Desplazamiento suave al navegar entre secciones

### 📋 Secciones del Sitio

1. **Hero Section**: Imagen destacada con título principal y call-to-action
2. **Estadísticas**: Datos clave del terreno (hectáreas, calado, playa, distancias)
3. **Ubicación Estratégica**: Mapa y características de localización
4. **Especificaciones Técnicas**: Detalles técnicos del terreno
5. **Visualización**: Renders conceptuales del potencial portuario
6. **Galería**: 8 imágenes reales de la propiedad
7. **Oportunidad de Inversión**: Información de precios
8. **Ventajas Competitivas**: 8 ventajas principales
9. **Contacto**: Información para consultas
10. **Footer**: Disclaimer y copyright

## 📁 Estructura de Archivos

```
proyecto/
├── index.html          # Página principal con estructura HTML semántica
├── style.css           # Estilos CSS completos y responsivos
├── script.js           # JavaScript con sistema de traducción
└── README.md           # Este archivo
```

## 🚀 Características Técnicas

### HTML
- Estructura semántica con HTML5
- Atributos `data-i18n` para traducción dinámica
- Meta tags optimizados para SEO
- Imágenes externas con URLs proporcionadas
- Accesibilidad mejorada

### CSS
- Variables CSS para colores consistentes
- Diseño modular y reutilizable
- Flexbox y CSS Grid para layouts responsivos
- Animaciones y transiciones suaves
- Media queries para dispositivos móviles
- Efectos hover y estados activos

### JavaScript
- Sistema de traducción dinámico
- Object literal con todas las traducciones
- Funciones para cambio de idioma
- Smooth scrolling nativo
- Intersection Observer para animaciones
- LocalStorage para preferencias
- Modal de galería interactivo

## 🌍 Idiomas Soportados

| Idioma | Código | Estado |
|--------|--------|--------|
| Español | `es` | ✅ Completo (predeterminado) |
| English | `en` | ✅ Completo |
| 中文 | `zh` | ✅ Completo |

## 💡 Uso del Selector de Idioma

El selector de idioma está ubicado en la esquina **superior derecha** con un diseño flotante:

- **ES**: Español
- **EN**: English  
- **中文**: Mandarín

Al hacer clic en cualquier botón, todo el contenido del sitio cambia instantáneamente al idioma seleccionado. El idioma seleccionado se guarda automáticamente y se restaura en la próxima visita.

## 🎯 Funcionalidades Implementadas

### ✅ Completado

1. ✅ Estructura HTML completa con todas las secciones
2. ✅ Diseño CSS profesional y responsivo
3. ✅ Sistema de traducción a 3 idiomas
4. ✅ Selector de idioma flotante en esquina superior derecha
5. ✅ Navegación suave entre secciones
6. ✅ Animaciones de scroll
7. ✅ Galería interactiva con modal
8. ✅ Persistencia de preferencias de idioma
9. ✅ Diseño responsivo para móviles
10. ✅ Efectos hover y transiciones

### 🔄 Posibles Mejoras Futuras

- [ ] Formulario de contacto funcional
- [ ] Integración con sistema de CRM
- [ ] Más imágenes y videos de la propiedad
- [ ] Tour virtual 360°
- [ ] Integración con Google Maps
- [ ] Sistema de reserva de visitas
- [ ] Chat en vivo multilingüe
- [ ] Análisis con Google Analytics

## 📱 Compatibilidad

- ✅ Chrome / Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Dispositivos móviles iOS
- ✅ Dispositivos móviles Android

## 🎨 Paleta de Colores

```css
--primary-color: #1a5490    /* Azul principal */
--secondary-color: #2980b9  /* Azul secundario */
--accent-color: #e67e22     /* Naranja de acento */
--dark-color: #2c3e50       /* Oscuro para textos */
--light-color: #ecf0f1      /* Fondo claro */
--white: #ffffff            /* Blanco */
--gray: #7f8c8d            /* Gris para textos secundarios */
```

## 📝 Cómo Usar

1. **Abrir el sitio**: Simplemente abre `index.html` en cualquier navegador web moderno
2. **Cambiar idioma**: Haz clic en los botones ES/EN/中文 en la esquina superior derecha
3. **Navegar**: Usa el menú de navegación o los botones CTA para moverte entre secciones
4. **Ver imágenes**: Haz clic en cualquier imagen de la galería para verla en tamaño completo

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `style.css`:
```css
:root {
    --primary-color: #tu-color;
    --accent-color: #tu-color;
}
```

### Agregar Más Idiomas
1. Agrega un nuevo objeto de idioma en `script.js` dentro del objeto `translations`
2. Agrega un botón en el selector de idioma en `index.html`
3. Actualiza la función `changeLanguage()` si es necesario

### Modificar Contenido
- **Textos**: Edita el objeto `translations` en `script.js`
- **Imágenes**: Reemplaza las URLs de las imágenes en `index.html`
- **Estilos**: Modifica `style.css` según tus necesidades

## 📊 Estadísticas del Proyecto

- **Líneas de código HTML**: ~420
- **Líneas de código CSS**: ~650
- **Líneas de código JavaScript**: ~480
- **Idiomas soportados**: 3
- **Secciones del sitio**: 10
- **Imágenes**: 8 + 2 renders

## 📄 Licencia y Copyright

© 2025 Real Estate Broker Panamá - Licencia PN-5409. Todos los derechos reservados.

## 🌟 Características Destacadas del Terreno

- **Extensión**: 1,880 hectáreas
- **Calado**: 24 pies (8 metros)
- **Playa**: 3 kilómetro de playa continental
- **Distancia a Tocumen**: 14 kilómetros
- **Ubicación**: Cerca de la entrada del Canal de Panamá
- **Precio**: $7,000 por hectárea

---

**Desarrollado con**: HTML5, CSS3, JavaScript Vanilla
**Tipo de sitio**: Sitio web estático multilingüe
**Optimizado para**: SEO, Rendimiento, Experiencia de Usuario
