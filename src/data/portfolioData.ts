import { PortfolioProject } from '../types';

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Cumbre Internacional de Innovación & Tech 2025',
    category: 'corporativo',
    targetServiceId: 'eventos-corporativos',
    client: 'Google & Tech Alliance',
    location: 'Centro de Convenciones Ágora',
    year: '2025',
    attendees: '2,800 Asistentes',
    coverImage: 'https://lh3.googleusercontent.com/d/1BNLGHzL4mijRnnUgGwF2MlYVpGzYUPjI',
    images: [
      'https://lh3.googleusercontent.com/d/1ifg8syUUgNdTd4p5jZqoKdeS_CLWuIcf',
      'https://lh3.googleusercontent.com/d/15s6PPWIyRDDfzm8S866a0x-bZTptRNOq',
      'https://lh3.googleusercontent.com/d/1keB4nxSBRhbtvQQW8YEaNhti2ehGLZuo'
    ],
    summary: 'Montaje escenográfico y audiovisual integral para la cumbre tecnológica más relevante de la región. Instalación de 120m² de Pantalla LED P2.5 4K, sistema de sonido d&b V-Series, traducción simultánea en 3 idiomas y streaming satelital 4K.',
    technicalHighlights: [
      'Pantalla LED P2.5 Curved UHD de 120m²',
      'Audio Line Array d&b audiotechnik V8 con arreglo cardioide',
      'Traducción infrarroja Bosch Integrus para 2,500 personas',
      'Dirección técnica en vivo con servidor Barco E2'
    ],
    testimonial: {
      quote: 'La precisión en los tiempos y la nitidez impecable de las pantallas 4K permitieron que la cumbre fuera calificada con un 10/10 por nuestros ejecutivos de Silicon Valley.',
      author: 'Carolina Restrepo',
      role: 'Directora de Eventos LATAM'
    }
  },
  {
    id: 'proj-2',
    title: 'Festival Neón Experience & Concierto Masivo',
    category: 'concierto',
    targetServiceId: 'escenarios',
    client: 'Live Entertainment Corp',
    location: 'Estadio El Campín / Parque Simon Bolívar',
    year: '2025',
    attendees: '35,000 Personas',
    coverImage: 'https://lh3.googleusercontent.com/d/1dRG853WLYYHSFsxuMG5DYj9Mq8ebBa62',
    images: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508997449629-303059a039c0?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Diseño de escenario Roof Truss de 24x16 metros, sonorización masiva con L-Acoustics K2 y más de 180 luces robóticas Beam y Wash operadas con consola grandMA3 Full Size.',
    technicalHighlights: [
      'Escenario principal Roof System con capacidad de elevación de 18 toneladas',
      'Sistemas L-Acoustics K2 + KS28 Subwoofers con presión de 138 dB',
      'Lighting Design con grandMA3 & 180 luminarias robóticas Elation',
      '300m² de pantallas LED P3.9 Outdoor Ultra High Brightness'
    ],
    testimonial: {
      quote: 'CyC Producciones demostró una solvencia técnica impresionante en un montaje de solo 24 horas. Cero fallas durante las 10 horas de festival.',
      author: 'Santiago Mendoza',
      role: 'Productor General Festivales'
    }
  },
  {
    id: 'proj-3',
    title: 'Boda Royal & Noche de Gala',
    category: 'boda',
    targetServiceId: 'decoracion-eventos',
    client: 'Privado',
    location: 'Hacienda San José de las Palmas',
    year: '2025',
    attendees: '450 Invitados',
    coverImage: 'https://lh3.googleusercontent.com/d/1UqddmBl5OYyiZ4-LT2xH8RaxSjbJv_Px',
    images: [
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Instalación de carpa transparente cristal de 800m², piso de madera de teca sobre estructura de nivelación, pista de baile interactiva LED y cielo estrellado con más de 10,000 micro-LEDs cálidos.',
    technicalHighlights: [
      'Carpa alemana transparente cristal impermeabilizada de 800m²',
      'Pista de baile LED personalizada con monograma en vinilo antideslizante',
      'Climatización con 6 chillers de aire acondicionado silencioso',
      'Iluminación arquitectónica de jardines e iluminación cálida dimerizable'
    ],
    testimonial: {
      quote: 'Crearon una atmósfera sacada de un cuento de hadas. La temperatura dentro de la carpa fue perfecta toda la noche.',
      author: 'Valeria & Mateo',
      role: 'Anfitriones'
    }
  },
  {
    id: 'proj-4',
    title: 'Lanzamiento Automotriz SUV 2026',
    category: 'lanzamiento',
    targetServiceId: 'pantallas-led',
    client: 'BMW & BMW Group',
    location: 'Pabellón de Exposiciones Corferias',
    year: '2025',
    attendees: '1,200 Invitados VIP',
    coverImage: 'https://images.unsplash.com/photo-1508997449629-303059a039c0?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Revelación cinematográfica con sistema de velo de seda caída DMX, túnel de pantallas LED inmersivo de 360 grados, iluminación automotriz con luz fría constante y tarimas reforzadas para soportar vehículos de 2.5 toneladas.',
    technicalHighlights: [
      'Túnel LED inmersivo de 360° con servidor de medios Resolume',
      'Tarima reforzada resistente a 2,500 kg por vehículo',
      'Sistema Kabuki DMX para caída de cortina en el instante exacto',
      'Sonido surround tridimensional de alta resolución'
    ]
  },
  {
    id: 'proj-5',
    title: 'Semana de la Moda Fashion Runway 2025',
    category: 'escenario',
    targetServiceId: 'pasarelas',
    client: 'Fashion Industry Federation',
    location: 'Hotel Grand Hyatt Ballroom',
    year: '2025',
    attendees: '1,500 Espectadores',
    coverImage: 'https://lh3.googleusercontent.com/d/1_3YgkFa16GCl5ILKZYeICgQUHhxF0-jH',
    images: [
      'https://lh3.googleusercontent.com/d/1UOka1xMVNdZsZQenMcQ1HkavqpfOHScJ',
      'https://lh3.googleusercontent.com/d/1A-0PTLGQDbDRGhp7jLl2H73zv0beqsE1',
      'https://lh3.googleusercontent.com/d/1CqZrK33_Oods84huSILRxq7_x1NrErTK'
    ],
    summary: 'Pasarela en T con superficie de charol negro espejo de 35 metros de longitud, iluminación de pasarela libre de sombras con índice CRI 98 y camerinos equipados para 40 modelos.',
    technicalHighlights: [
      'Pasarela de 35 metros con acabado Charol Negro Espejo',
      'Luminarias LED Elation Ovation CRI > 98 para fidelidad de color',
      'Backing LED transparente de 8x4m para proyección de marca'
    ]
  },
  {
    id: 'proj-6',
    title: 'Asamblea Anual de Bancos & Finanzas',
    category: 'institucional',
    client: 'Asobancaria',
    location: 'Hotel Hilton Cartagena',
    year: '2025',
    attendees: '1,800 Ejecutivos',
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Asamblea institucional con voto electrónico sincronizado, pantallas LED divididas para presentación de balances, microfonía parlamentaria Bosch y grabación en 4K.',
    technicalHighlights: [
      'Microfonía de discusión parlamentaria Bosch Dicentis',
      'Pantallas de apoyo de 85" 4K para delegados',
      'Sistemas de respaldo de energía UPS redundantes de 100kVA'
    ]
  },
  {
    id: 'proj-7',
    title: 'Expo Agro & Tecnología Industrial 2025',
    category: 'feria',
    client: 'Cámara Agrícola Nacional',
    location: 'Plaza Mayor Medellín',
    year: '2025',
    attendees: '12,000 Visitantes',
    coverImage: 'https://images.unsplash.com/photo-1531058240690-006c446962d8?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Diseño y montaje de 85 stands comerciales de gran formato, estructuras de trusses colgantes de aluminio industrial, pantallas LED de señalización dinámica e iluminación de pabellones.',
    technicalHighlights: [
      '85 Stands modulares con acabados en aluminio extruido y vinilo mate',
      'Pintura y Branding personalizado con material POP de alta durabilidad',
      'Iluminación robotizada para pabellones de maquinaria pesada'
    ]
  },
  {
    id: 'proj-8',
    title: 'Gala Anual de Premios de Cine & TV',
    category: 'corporativo',
    client: 'Academia de Artes Escénicas',
    location: 'Teatro Mayor Julio Mario Santo Domingo',
    year: '2025',
    attendees: '1,400 Invitados VIP',
    coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Alfombra roja de 60 metros con photocall personalizado, iluminación dramática con gobos móviles, sistemas de microfonía de solapa Sennheiser Digital 6000 y mesa broadcast 4K.',
    technicalHighlights: [
      'Alfombra roja de 60m con iluminación cálida continuo CRI 98',
      'Photocall LED interactivo de 12 metros',
      'Consola de iluminación grandMA3 con 120 robóticas Martin Quantum'
    ]
  },
  {
    id: 'proj-9',
    title: 'Festival Electrónico Sunset Beats',
    category: 'concierto',
    client: 'Sunset Music Group',
    location: 'Playa Venecia / Cartagena',
    year: '2025',
    attendees: '8,500 Espectadores',
    coverImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Escenario frente al mar con protección IP65 contra brisa marina y humedad. Iluminación Láser Kvant de 30W, CO2 jets, efectos de llama DMX y sonido d&b audiotechnik SL-Series.',
    technicalHighlights: [
      'Sonido resistente a intemperie con presión acústica de 140 dB',
      'Efectos especiales FX: Láser Kvant 30W, Criogénico CO2 y Chispas Frías',
      'Truss triangular de aluminio de alta capacidad antineblina salina'
    ]
  }
];
