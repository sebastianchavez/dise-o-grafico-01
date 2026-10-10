# 🎨 Studio Creativo - Landing Page Template

Landing page profesional completa para una empresa de diseño gráfico. Template listo para usar, personalizar y desplegar.

## ✨ Características

- **9 páginas HTML** completamente funcionales y conectadas entre sí
- **Tailwind CSS** vía CDN (sin necesidad de build)
- **JavaScript nativo** modular (sin dependencias externas)
- **Totalmente responsive** (mobile, tablet, desktop)
- **Animaciones fluidas** con IntersectionObserver
- **Datos mockeados** listos para usar
- **Imágenes de Unsplash** reales y de alta calidad
- **SEO-friendly** con meta tags y semántica HTML5

## 📁 Estructura

```
diseño-grafico-01/
├── index.html                # Página de inicio
├── screens/
│   ├── nosotros.html         # Sobre nosotros + equipo + timeline
│   ├── servicios.html        # Servicios detallados
│   ├── galeria.html          # Galería con filtros + lightbox
│   ├── precios.html          # Planes + tabla comparativa + FAQ
│   ├── clases.html           # Cursos + horario semanal + modalidades
│   ├── contacto.html         # Formulario + mapa + horarios
│   ├── politicas.html        # Política de privacidad
│   └── terminos.html         # Términos y condiciones
├── assets/
│   ├── css/
│   │   └── styles.css        # Estilos personalizados + animaciones
│   └── js/
│       ├── data.js           # Todos los datos mockeados
│       ├── main.js           # Lógica principal
│       └── gallery.js        # Filtros de galería + lightbox
└── README.md
```

## 🚀 Cómo usar

1. **Abrir el sitio**: Abre `index.html` en cualquier navegador moderno
2. **Personalizar datos**: Edita `assets/js/data.js` con tu información
3. **Cambiar estilos**: Modifica `assets/css/styles.css` o las clases de Tailwind
4. **Cambiar imágenes**: Reemplaza las URLs de Unsplash por las tuyas

## ⚠️ Nota sobre las imágenes

El template incluye un **fallback automático**: si alguna imagen de Unsplash devuelve 404 o no carga, será reemplazada por un placeholder SVG con los colores de la marca. Esto evita espacios vacíos en el diseño.

Si una imagen no carga correctamente, el código en `assets/js/main.js` (función `handleImageError`) se encarga de generar un SVG con gradiente morado-rosa-amarillo.

Para usar imágenes propias, reemplaza las URLs en `assets/js/data.js` por rutas locales (`./assets/images/tu-imagen.jpg`).

## 🎨 Paleta de colores

| Color | Hex | Uso |
|-------|-----|-----|
| Purple | `#7c3aed` | Color principal |
| Pink | `#ec4899` | Acento secundario |
| Yellow | `#fbbf24` | Acento destacado |
| Dark | `#0f0f1a` | Fondos oscuros |
| Light | `#fafafa` | Fondos claros |

## 📝 Secciones de cada página

### 🏠 Inicio (`index.html`)
- Hero animado con estadísticas
- Servicios destacados
- Portafolio preview
- Testimonios (carrusel)
- CTA final con gradiente

### 👥 Nosotros (`screens/nosotros.html`)
- Historia de la empresa
- Misión, Visión, Valores
- Timeline interactivo
- Equipo (6 personas)
- Estadísticas animadas

### 🎨 Servicios (`screens/servicios.html`)
- 6 servicios detallados con features
- Proceso de trabajo (4 pasos)

### 🖼️ Galería (`screens/galeria.html`)
- Grid con 12 proyectos
- Filtros por categoría (branding, web, impreso, social)
- Lightbox al hacer click

### 💰 Precios (`screens/precios.html`)
- 3 planes (Básico, Profesional, Empresarial)
- Tabla comparativa completa
- FAQ acordeón

### 📚 Clases (`screens/clases.html`)
- 6 cursos disponibles
- Horario semanal en tabla
- 3 modalidades (presencial, online, mixta)

### 📞 Contacto (`screens/contacto.html`)
- Formulario completo con validación
- Mapa embebido (Google Maps)
- Información de contacto
- Horarios de atención
- Redes sociales

### 🔒 Políticas (`screens/politicas.html`)
- Política de privacidad completa (9 secciones)

### 📜 Términos (`screens/terminos.html`)
- Términos y condiciones (13 secciones)

## ⚡ Funcionalidades JavaScript

- ✅ Navbar sticky con cambio al hacer scroll
- ✅ Menú hamburguesa responsive
- ✅ Animaciones reveal on scroll
- ✅ Contadores animados
- ✅ Carrusel de testimonios
- ✅ Filtros de galería
- ✅ Lightbox para imágenes
- ✅ Validación de formulario
- ✅ Botón scroll to top
- ✅ FAQ acordeón

## 🛠️ Stack técnico

- HTML5 semántico
- Tailwind CSS 3.x (CDN)
- JavaScript ES6+ (sin frameworks)
- Google Fonts (Inter + Playfair Display)
- Imágenes de Unsplash

## 📱 Responsive breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Compatibilidad

- Chrome / Edge / Firefox / Safari (últimas versiones)
- iOS Safari / Chrome Android
- IE no soportado

## 📄 Licencia

Template libre para uso personal y comercial.

---

**Creado con ❤️ usando Tailwind CSS y JavaScript nativo**