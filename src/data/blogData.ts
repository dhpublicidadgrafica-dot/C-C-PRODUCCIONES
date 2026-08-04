import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'tendencias-produccion-eventos-2026',
    title: 'Tendencias Clave en Producción de Eventos Corporativos para 2026',
    category: 'Producción',
    date: '18 Febrero 2026',
    readTime: '6 min de lectura',
    author: 'Ing. Carlos Castillo',
    authorRole: 'Director de Innovación & Producción en CyC',
    coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Descubre cómo las pantallas LED 4K con píxel pitch ultrafino, el streaming inmersivo, los escenarios renderizados en 3D y la iluminación inteligente están redefiniendo las experiencias corporativas.',
    content: [
      'En la era post-digital, los asistentes a congresos y lanzamientos de marca esperan experiencias visuales envolventes que superen el formato tradicional de diapositivas en proyectores obsoletos.',
      '1. Pistas y Pantallas LED de Fine Pitch: Las pantallas P1.9 y P2.5 permiten que el público sentado a escasos dos metros de distancia perciba gráficos nítidos sin ver píxeles ni parpadeos en grabaciones de video.',
      '2. Renders 3D e Ingeniería Preventiva: La posibilidad de simular el escenario en un modelo tridimensional reduce en un 80% las eventualidades de montaje en el recinto.',
      '3. Sonido Inteligente con Arreglos Cardioides: Minimiza el rebote acústico en recintos cerrados con paredes de vidrio o concreto, permitiendo que la voz del orador se escuche cristalina.',
      'En CyC Producciones integramos estas tecnologías en cada cotización para garantizar eventos memorables.'
    ],
    keywords: ['tendencias eventos 2026', 'pantallas led eventos', 'produccion audiovisual', 'eventos corporativos colombia']
  },
  {
    id: 'post-2',
    slug: 'guia-eleccion-sonido-line-array',
    title: 'Guía Práctica: Cómo Elegir el Sistema de Sonido Adecuado para tu Evento',
    category: 'Audio',
    date: '10 Enero 2026',
    readTime: '8 min de lectura',
    author: 'Ing. Alejandro Silva',
    authorRole: 'Chief Sound Engineer',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Aprende a calcular los decibeles, la dispersión sonora y los canales de microfonía que necesitas según el número de asistentes y las características acústicas del lugar.',
    content: [
      'El sonido de un evento es el canal primario de emoción e información. Un sistema deficiente destruye la atención del auditorio en cuestión de minutos.',
      'Factores a evaluar:',
      '• Altura del techo y absorción acústica: Espacios con mármol o vidrio requieren altavoces d&b con directividad controlada.',
      '• Radiofrecuencia (RF): En ciudades congestionadas es vital usar microfonía digital como Shure Axient para evitar interferencias de telefonía móvil.',
      '• Potencia vs Inteligibilidad: No se trata de ensordecer a la gente, sino de lograr presión sonora uniforme desde la primera fila hasta el último rincón.'
    ],
    keywords: ['guia sonido eventos', 'line array db audiotechnik', 'microfonos shure axient', 'acustica recintos']
  },
  {
    id: 'post-3',
    slug: 'diferencias-pantallas-p2-p3',
    title: 'Pantallas LED P2.5 vs P3.9: ¿Cuál Necesita tu Evento?',
    category: 'Pantallas LED',
    date: '28 Diciembre 2025',
    readTime: '5 min de lectura',
    author: 'Laura Bermúdez',
    authorRole: 'Especialista en Mapeo Visual',
    coverImage: 'https://images.unsplash.com/photo-1508997449629-303059a039c0?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Entiende la diferencia técnica entre Pixel Pitch, brillo en nits, tasa de refresco y protección IP65 para hacer la inversión adecuada.',
    content: [
      'La letra P significa Pixel Pitch (distancia en milímetros entre el centro de un LED y el siguiente).',
      'P2.5 (2.5mm): Diseñada para recintos cerrados donde las personas están a menos de 3 metros de la pantalla. Ideal para conferencias corporativas con cuadros de datos detallados.',
      'P3.9 Outdoor (3.9mm): Diseñada para eventos al aire libre o grandes escenarios. Cuenta con un brillo superior a 4500 nits para vencer la luz solar directa.'
    ],
    keywords: ['pantallas led p2.5', 'pantallas led p3.9', 'alquiler videowall', 'resolume arena']
  }
];
