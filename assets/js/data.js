/* ============================================
   STUDIO CREATIVO - Datos Mockeados
   ============================================ */

const COMPANY = {
  name: "Studio Creativo",
  tagline: "Diseñamos el futuro de tu marca",
  description: "Somos un estudio de diseño gráfico especializado en crear identidades visuales memorables que conectan marcas con personas.",
  email: "hola@studiocreativo.com",
  phone: "+34 91 234 56 78",
  whatsapp: "+34 612 345 678",
  address: "Calle Creatividad 123, 28013 Madrid, España",
  schedule: {
    weekdays: "Lunes a Viernes: 9:00 - 19:00",
    saturday: "Sábados: 10:00 - 14:00",
    sunday: "Domingos: Cerrado"
  },
  social: {
    instagram: "https://instagram.com/studiocreativo",
    facebook: "https://facebook.com/studiocreativo",
    behance: "https://behance.net/studiocreativo",
    linkedin: "https://linkedin.com/company/studiocreativo"
  }
};

const SERVICES = [
  {
    id: 1,
    icon: "palette",
    title: "Diseño de Logo",
    description: "Creamos logos únicos y memorables que representan la esencia de tu marca.",
    features: ["Investigación de mercado", "3 propuestas iniciales", "Manual de marca", "Archivos en alta resolución"]
  },
  {
    id: 2,
    icon: "layers",
    title: "Branding Corporativo",
    description: "Construimos identidades de marca completas que comunican tus valores.",
    features: ["Estrategia de marca", "Identidad visual completa", "Papelería", "Guía de estilo"]
  },
  {
    id: 3,
    icon: "monitor",
    title: "Diseño Web & UX",
    description: "Diseñamos sitios web atractivos, funcionales y optimizados para conversión.",
    features: ["Diseño responsive", "UX/UI personalizado", "Optimización SEO", "Mantenimiento mensual"]
  },
  {
    id: 4,
    icon: "printer",
    title: "Diseño Impreso",
    description: "Llevamos tus ideas al papel con diseños profesionales para impresión.",
    features: ["Tarjetas de presentación", "Catálogos", "Flyers y posters", "Packaging"]
  },
  {
    id: 5,
    icon: "share-2",
    title: "Social Media Design",
    description: "Creamos contenido visual atractivo para tus redes sociales.",
    features: ["Posts personalizados", "Stories y reels", "Plantillas editables", "Estrategia visual"]
  },
  {
    id: 6,
    icon: "video",
    title: "Motion Graphics",
    description: "Animaciones y videos que dan vida a tu marca en el mundo digital.",
    features: ["Animación 2D/3D", "Videos explicativos", "Reels animados", "Efectos visuales"]
  }
];

const TEAM = [
  {
    name: "Ana García",
    role: "Directora Creativa",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "15 años de experiencia en branding internacional."
  },
  {
    name: "Carlos Ruiz",
    role: "Diseñador Senior",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Especialista en identidad visual y diseño editorial."
  },
  {
    name: "María López",
    role: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Apasionada por crear experiencias digitales increíbles."
  },
  {
    name: "Diego Martín",
    role: "Motion Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Da vida a las marcas con animaciones cautivadoras."
  },
  {
    name: "Laura Sánchez",
    role: "Ilustradora",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Sus ilustraciones han dado vida a cientos de marcas."
  },
  {
    name: "Pablo Torres",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Coordina cada proyecto con precisión y dedicación."
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "Branding Cafetería Aroma",
    category: "branding",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    description: "Identidad completa para cafetería artesanal"
  },
  {
    id: 2,
    title: "Web App Fintech",
    category: "web",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    description: "Diseño UX/UI para aplicación financiera"
  },
  {
    id: 3,
    title: "Catálogo Moda Verano",
    category: "impreso",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
    description: "Diseño editorial para marca de moda"
  },
  {
    id: 4,
    title: "Social Media Restaurant",
    category: "social",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    description: "Estrategia visual para redes sociales"
  },
  {
    id: 5,
    title: "Identidad Estudio Yoga",
    category: "branding",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
    description: "Branding minimalista y sereno"
  },
  {
    id: 6,
    title: "E-commerce Joyería",
    category: "web",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
    description: "Tienda online elegante y minimalista"
  },
  {
    id: 7,
    title: "Packaging Cosmética",
    category: "impreso",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop",
    description: "Packaging premium para línea cosmética"
  },
  {
    id: 8,
    title: "Campaña Lanzamiento",
    category: "social",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
    description: "Diseño de campaña para redes sociales"
  },
  {
    id: 9,
    title: "Branding Clínica Dental",
    category: "branding",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
    description: "Identidad profesional y cercana"
  },
  {
    id: 10,
    title: "Landing Startup Tech",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Diseño web para startup tecnológica"
  },
  {
    id: 11,
    title: "Revista Cultural",
    category: "impreso",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
    description: "Diseño editorial trimestral"
  },
  {
    id: 12,
    title: "Branding Bebidas Artesanales",
    category: "branding",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&h=600&fit=crop",
    description: "Etiqueta y branding para cervecería"
  }
];

const PRICING_PLANS = [
  {
    name: "Básico",
    price: 499,
    period: "proyecto",
    description: "Ideal para emprendedores que inician",
    features: [
      "Diseño de logo (3 propuestas)",
      "Manual de marca básico",
      "Tarjetas de presentación",
      "2 rondas de revisión",
      "Archivos digitales",
      "Entrega en 7 días"
    ],
    notIncluded: ["Diseño web", "Redes sociales", "Packaging"],
    popular: false
  },
  {
    name: "Profesional",
    price: 1299,
    period: "proyecto",
    description: "El más elegido por nuestros clientes",
    features: [
      "Todo lo del plan Básico",
      "Identidad visual completa",
      "Diseño web one-page",
      "Plantillas para redes sociales",
      "5 rondas de revisión",
      "Papelería corporativa",
      "Entrega en 14 días"
    ],
    notIncluded: ["E-commerce", "Motion graphics"],
    popular: true
  },
  {
    name: "Empresarial",
    price: 2999,
    period: "proyecto",
    description: "Para empresas que buscan destacar",
    features: [
      "Todo lo del plan Profesional",
      "Diseño web completo",
      "E-commerce / multi-página",
      "Estrategia de marca",
      "10 rondas de revisión",
      "Sesión fotográfica",
      "Video institucional",
      "Soporte 3 meses",
      "Entrega en 21 días"
    ],
    notIncluded: [],
    popular: false
  }
];

const CLASSES = [
  {
    id: 1,
    name: "Diseño Gráfico Fundamentals",
    description: "Aprende los principios básicos del diseño: tipografía, color, composición y jerarquía visual.",
    duration: "8 semanas",
    level: "Principiante",
    price: 199,
    modality: "ambas",
    schedule: "Lunes y Miércoles - 18:00 a 20:00",
    professor: "Ana García",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Adobe Illustrator Profesional",
    description: "Domina Illustrator desde cero: vectorización, ilustración digital y diseño de logotipos.",
    duration: "6 semanas",
    level: "Intermedio",
    price: 249,
    modality: "online",
    schedule: "Martes y Jueves - 19:00 a 21:00",
    professor: "Carlos Ruiz",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Photoshop Avanzado",
    description: "Técnicas profesionales de Photoshop: retoque fotográfico, composición y diseño digital.",
    duration: "8 semanas",
    level: "Intermedio",
    price: 249,
    modality: "ambas",
    schedule: "Lunes y Miércoles - 10:00 a 12:00",
    professor: "María López",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Branding y Estrategia de Marca",
    description: "Aprende a construir marcas memorables desde la estrategia hasta la ejecución visual.",
    duration: "10 semanas",
    level: "Avanzado",
    price: 349,
    modality: "presencial",
    schedule: "Viernes - 16:00 a 19:00",
    professor: "Ana García",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    name: "UI/UX Design Bootcamp",
    description: "Diseña interfaces digitales increíbles. Figma, prototipado y diseño centrado en el usuario.",
    duration: "12 semanas",
    level: "Intermedio",
    price: 449,
    modality: "online",
    schedule: "Martes y Jueves - 18:00 a 21:00",
    professor: "María López",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Motion Graphics con After Effects",
    description: "Crea animaciones impactantes y videos profesionales con Adobe After Effects.",
    duration: "8 semanas",
    level: "Avanzado",
    price: 299,
    modality: "online",
    schedule: "Sábados - 10:00 a 13:00",
    professor: "Diego Martín",
    image: "https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=600&h=400&fit=crop"
  }
];

const TESTIMONIALS = [
  {
    name: "Roberto Fernández",
    company: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    rating: 5,
    text: "Studio Creativo transformó completamente nuestra imagen corporativa. El equipo es profesional, creativo y muy atento a los detalles."
  },
  {
    name: "Carmen Vega",
    company: "Fundadora, Bloom Café",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 5,
    text: "El branding que crearon para nuestra cafetería superó todas nuestras expectativas. Nuestras ventas crecieron un 40% tras el rebranding."
  },
  {
    name: "Javier Moreno",
    company: "Director, Studio Studio",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
    rating: 5,
    text: "Trabajar con ellos fue una experiencia increíble. Su creatividad y profesionalismo hicieron que nuestro proyecto fuera un éxito total."
  },
  {
    name: "Lucía Hernández",
    company: "Marketing, Lush Cosmetics",
    image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=200&h=200&fit=crop",
    rating: 5,
    text: "Diseñaron nuestra campaña de lanzamiento y los resultados fueron espectaculares. Altamente recomendados."
  },
  {
    name: "Miguel Ángel Castro",
    company: "Fundador, EcoVerde",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    rating: 5,
    text: "Su enfoque sostenible y creativo encajó perfectamente con nuestra marca. El resultado final fue simplemente perfecto."
  },
  {
    name: "Patricia Núñez",
    company: "CEO, FitLife App",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    rating: 5,
    text: "El diseño de nuestra app superó todas las expectativas. La interfaz es intuitiva y nuestros usuarios están encantados."
  }
];

const STATS = [
  { value: "500+", label: "Proyectos realizados" },
  { value: "350+", label: "Clientes satisfechos" },
  { value: "15", label: "Años de experiencia" },
  { value: "25", label: "Premios ganados" }
];

const TIMELINE = [
  { year: "2009", title: "Fundación", description: "Nace Studio Creativo con la visión de transformar marcas." },
  { year: "2013", title: "Expansión", description: "Abrimos nuestra primera sede física y crecimos a 10 personas." },
  { year: "2017", title: "Internacionalización", description: "Comenzamos a trabajar con clientes de toda Europa y Latinoamérica." },
  { year: "2020", title: "Transformación Digital", description: "Lanzamos nuestro estudio virtual y servicios de motion graphics." },
  { year: "2024", title: "Líderes del sector", description: "Reconocidos como uno de los mejores estudios de diseño del país." }
];

const VALUES = [
  { icon: "sparkles", title: "Creatividad", description: "Cada proyecto es único. Buscamos soluciones originales e innovadoras." },
  { icon: "heart", title: "Pasión", description: "Amamos lo que hacemos y eso se refleja en cada detalle de nuestro trabajo." },
  { icon: "users", title: "Colaboración", description: "Trabajamos junto a nuestros clientes como partners creativos." },
  { icon: "target", title: "Resultados", description: "Medimos el éxito por el impacto real en tu negocio." }
];

const FAQS = [
  {
    question: "¿Cuánto tiempo toma un proyecto de branding?",
    answer: "El tiempo varía según la complejidad. Un logo toma entre 1-2 semanas, mientras que un proyecto de branding completo puede tomar entre 3-6 semanas."
  },
  {
    question: "¿Cuántas revisiones incluyen los proyectos?",
    answer: "Depende del plan elegido. Nuestros planes van desde 2 revisiones en el Básico hasta ilimitadas en planes personalizados."
  },
  {
    question: "¿Trabajan con clientes internacionales?",
    answer: "Sí, trabajamos con clientes de todo el mundo. Tenemos experiencia en proyectos en Europa, Latinoamérica y Estados Unidos."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos transferencia bancaria, tarjeta de crédito, PayPal y Bizum. Ofrecemos planes de pago para proyectos grandes."
  },
  {
    question: "¿Puedo ver el proyecto durante el proceso?",
    answer: "Por supuesto. Trabajamos de forma colaborativa y te enviamos actualizaciones periódicas para tu feedback."
  }
];

// Exportar al scope global
window.STUDIO_DATA = {
  COMPANY,
  SERVICES,
  TEAM,
  PROJECTS,
  PRICING_PLANS,
  CLASSES,
  TESTIMONIALS,
  STATS,
  TIMELINE,
  VALUES,
  FAQS
};