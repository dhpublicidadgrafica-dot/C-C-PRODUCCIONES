import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sonido-profesional',
    name: 'SONIDO PROFESIONAL',
    shortDesc: 'Convertimos cada evento en una experiencia auditiva memorable.',
    fullDesc: 'Convertimos cada evento en una experiencia auditiva memorable. Ofrecemos alquiler y operación de equipos de sonido de alta fidelidad para todo tipo de eventos: corporativos, sociales, culturales y más. Claridad, Potencia y Confiabilidad Garantizadas.',
    iconName: 'Volume2',
    badge: 'Audio Hi-Fi High-End',
    heroImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Sistemas Line Array d&b audiotechnik V-Series y L-Acoustics K2',
      'Consolas digitales DiGiCo SD12 & Allen & Heath dLive',
      'Microfonía Digital Shure Axient & Sennheiser Digital 6000',
      'Procesamiento DSP Meyer Sound Galileo GALAXY',
      'Monitoreo In-Ear Sennheiser EW-DX con antenas de diversidad',
      'Soporte técnico con ingenieros de sala y monitores dedicados'
    ],
    equipmentList: [
      { name: 'Sistemas Line Array', spec: 'd&b V8 / L-Acoustics K2', count: 'Hasta 32 Cajas' },
      { name: 'Subwoofers Cardioides', spec: 'd&b V-SUB / L-Acoustics KS28', count: '16 Unidades' },
      { name: 'Consola Principal', spec: 'DiGiCo Quantum 338 con Waves SoundGrid', count: '2 Unidades' },
      { name: 'Microfonía Inalámbrica', spec: 'Shure Axient Digital con cápsulas KSM9', count: '24 Canales' }
    ],
    useCases: [
      'Conciertos y Festivales Masivos',
      'Congresos y Convenciones Internacionales',
      'Lanzamientos de Vehículos y Marcas Exclusivas',
      'Bodas de Alto Nivel y Galas Empresariales'
    ],
    basePriceUSD: 850,
    faqs: [
      {
        question: '¿Qué capacidad de personas puede cubrir el sistema de sonido?',
        answer: 'Tenemos arquitecturas modulares escalables desde recintos VIP de 50 personas hasta festivales multitudinarios de más de 30,000 asistentes en campo abierto.'
      },
      {
        question: '¿Incluyen personal técnico especializado?',
        answer: 'Sí. Todos nuestros alquileres incluyen ingenieros de sonido titulados, operadores de sistemas de radiofrecuencia (RF) y personal de montaje certificado.'
      }
    ],
    seoTitle: 'Alquiler de Sonido Profesional para Eventos | CyC Producciones',
    seoMeta: 'Alquiler de sonido profesional Line Array d&b audiotechnik y L-Acoustics en Colombia. Consolas DiGiCo, micrófonos inalámbricos y soporte de ingenieros.',
    keywords: ['sonido profesional eventos', 'alquiler line array', 'l acoustics colombia', 'sonido congresos', 'digico sd12']
  },
  {
    id: 'pasarelas',
    name: 'PASARELAS',
    shortDesc: 'Diseñamos y montamos pasarelas que capturan miradas y elevan tu presentación.',
    fullDesc: 'Diseñamos y montamos pasarelas que capturan miradas y elevan tu presentación. Soluciones a medida para desfiles de moda, galas y eventos corporativos. Calidad, Seguridad y un Impacto Visual Garantizado.',
    iconName: 'Sparkles',
    badge: 'Fashion Week Quality',
    heroImage: 'https://lh3.googleusercontent.com/d/12aFGoJPoXqqRkHj-30odI0Z-lwIZyaqv',
    gallery: [
      'https://lh3.googleusercontent.com/d/12aFGoJPoXqqRkHj-30odI0Z-lwIZyaqv',
      'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Piso en acabado charol negro espejo o acrílico blanco brillante sin uniones',
      'Iluminación de moda con recortes LED Elation / Chauvet Ovation',
      'Backstage equipado con espejos camerino iluminados y racks de vestir',
      'Sincronización de audio y video con código de tiempo SMPTE',
      'Sistemas de iluminación frontal libre de sombras ni parpadeos',
      'Asientos de primera fila tipo Front Row VIP'
    ],
    equipmentList: [
      { name: 'Pasarela Acrílico Blanco', spec: 'Tramos modulares de 2x1m', count: '80 Módulos' },
      { name: 'Luces de Recorte Moda', spec: 'Chauvet Ovation E-910FC CRI>95', count: '24 Unidades' },
      { name: 'Camerinos Portátiles', spec: 'Espejos Hollywood LED & Racks', count: '8 Sets' }
    ],
    useCases: [
      'Semanas de la Moda y Fashion Shows',
      'Lanzamientos de Colección de Ropa y Joyería',
      'Certámenes de Belleza y Pasarelas de Marcas'
    ],
    basePriceUSD: 900,
    faqs: [
      {
        question: '¿Qué longitud de pasarela pueden construir?',
        answer: 'Desde pasarelas íntimas de 10 metros hasta recorridos continuos en U o T de más de 40 metros de extensión.'
      }
    ],
    seoTitle: 'Alquiler y Montaje de Pasarelas de Moda | CyC Producciones',
    seoMeta: 'Montaje de pasarelas de moda con acabado brillante, acrílico e iluminación especial CRI 95+. Ideal para diseñadores y marcas de lujo.',
    keywords: ['pasarelas de moda', 'alquiler pasarela charol', 'iluminacion moda', 'fashion show produccion', 'camerinos eventos']
  },
  {
    id: 'eventos-corporativos',
    name: 'EVENTOS CORPORATIVOS',
    shortDesc: 'Somos tu aliado estratégico para eventos corporativos exitosos.',
    fullDesc: 'Somos tu aliado estratégico para eventos corporativos exitosos. Conferencias, reuniones, incentivos, lanzamiento de productos y más. Ofrecemos planificación estratégica, producción técnica avanzada y ejecución sin fisuras para realizar tu marca y alcanzar tus metas.',
    iconName: 'Briefcase',
    badge: 'Producción B2B Integral',
    heroImage: 'https://lh3.googleusercontent.com/d/1ievGlw5GaYJOEaPYRxqz7F4bPybfQ-0S',
    gallery: [
      'https://lh3.googleusercontent.com/d/1ievGlw5GaYJOEaPYRxqz7F4bPybfQ-0S',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Dirección técnica y stage management en tiempo real',
      'Pantallas LED Full HD & 4K con procesadores Barco E2 / Novastar',
      'Streaming híbrido multicámara 4K Broadcast',
      'Traducción simultánea digital infrarroja',
      'Acreditaciones inteligentes RFID & Códigos QR',
      'Branding escenográfico y arquitectura efímera personalizada'
    ],
    equipmentList: [
      { name: 'Procesamiento de Video', spec: 'Barco E2 Gen 2 / Novastar VX1000', count: '4 Sistemas' },
      { name: 'Traducción Simultánea', spec: 'Bosch Integrus Infrarrojo', count: 'Hasta 1,500 Receptores' },
      { name: 'Cámaras Broadcast', spec: 'Sony FX6 Cinema Line 4K UHD', count: '6 Cámaras' },
      { name: 'Control de Presentaciones', spec: 'Master Cue V6 & DSan PerfectCue', count: '4 Kits' }
    ],
    useCases: [
      'Congresos Anuales de Gremios e Industrias',
      'Lanzamientos de Productos y Automóviles',
      'Asambleas General de Accionistas',
      'Activaciones BTL y Stands en Ferias'
    ],
    basePriceUSD: 1800,
    faqs: [
      {
        question: '¿Con cuánto tiempo de anticipación se debe planear un evento corporativo?',
        answer: 'Recomendamos entre 2 y 6 semanas según la magnitud del evento. Sin embargo, nuestro equipo de producción rápida puede ejecutar montajes complejos en 72 horas.'
      },
      {
        question: '¿Manejan transmisión en vivo (streaming)?',
        answer: 'Sí, ofrecemos enlaces satelitales redundantes, servidor privado CDN y landing page personalizada para tu evento híbrido.'
      }
    ],
    seoTitle: 'Producción de Eventos Corporativos y Congresos | CyC Producciones',
    seoMeta: 'Producción integral de eventos corporativos, congresos, ferias y lanzamientos de marca. Tecnología 4K, sonido Hi-Fi y logística profesional.',
    keywords: ['eventos corporativos', 'produccion congresos', 'lanzamiento marcas', 'asambleas accionistas', 'tecnologia eventos']
  },
  {
    id: 'decoracion-eventos',
    name: 'DECORACION DE EVENTOS',
    shortDesc: 'Convertimos tus ideas en una realidad deslumbrante.',
    fullDesc: 'Convertimos tus ideas en una realidad deslumbrante. Nos especializamos en la decoración de eventos que no solo lucen espectaculares, sino que también cuentan tu historia y crean ambientes mágicos.',
    iconName: 'Sparkles',
    badge: 'Diseño Escenográfico',
    heroImage: 'https://lh3.googleusercontent.com/d/1jCewqnqSwVP3qDR4tFoO51y9qm8D55Di',
    gallery: [
      'https://lh3.googleusercontent.com/d/1jCewqnqSwVP3qDR4tFoO51y9qm8D55Di',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Iluminación arquitectónica perimetral Smart Wireless RGBW',
      'Mobiliario Lounge estilo Velvet, Cuero Chesterfield y Dorado Gold',
      'Backing fotográfico interactivo con letreros neón personalizados',
      'Techos de luces micro-LED cálidas tipo cielo estrellado',
      'Arreglos florales con flores importadas e integración vegetal',
      'Render conceptual previo para validación del cliente'
    ],
    equipmentList: [
      { name: 'Bañadores Arquitectónicos', spec: 'Chauvet Freedom Par T6 Batería', count: '48 Unidades' },
      { name: 'Mobiliario Lounge VIP', spec: 'Salas doradas, velour y mesas espejo', count: '20 Juegos' },
      { name: 'Lustres de Cristal', spec: 'Candelabros tipo Araña estilo imperio', count: '12 Unidades' }
    ],
    useCases: [
      'Bodas de Gala y Aniversarios Exclusivos',
      'Galas de Premiación Empresarial',
      'Fiestas de Fin de Año Corporativas',
      'Cenas de Gala e Instalaciones de Marca'
    ],
    basePriceUSD: 750,
    faqs: [
      {
        question: '¿Adaptan la decoración a la identidad corporativa de mi empresa?',
        answer: 'Totalmente. Programamos las luces y diseñamos los elementos escenográficos respetando la paleta institucional y valores de tu marca.'
      }
    ],
    seoTitle: 'Decoración y Ambientación de Eventos | CyC Producciones',
    seoMeta: 'Diseño decorativo y ambientación premium para eventos sociales y corporativos. Iluminación arquitectónica, mobiliario exclusivo y backings.',
    keywords: ['decoracion eventos', 'ambientacion luxury', 'iluminacion arquitectonica', 'mobiliario lounge eventos', 'bodas de lujo']
  },
  {
    id: 'carpas',
    name: 'CARPAS',
    shortDesc: 'Te ofrecemos el alquiler de carpas para eventos que transforman cualquier espacio.',
    fullDesc: 'Te ofrecemos el alquiler de carpas para eventos que transforman cualquier espacio en el escenario ideal, garantizando comodidad y protección para tus invitados.',
    iconName: 'Home',
    badge: 'Estructuras Climatizadas',
    heroImage: 'https://lh3.googleusercontent.com/d/1TBNhT79JchCIWkVy5-7cBTtw36xGVXgT',
    gallery: [
      'https://lh3.googleusercontent.com/d/1TBNhT79JchCIWkVy5-7cBTtw36xGVXgT',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1531058240690-006c446962d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Carpas tipo Estructura Alemana Patios de 10m, 15m, 20m y 30m de ancho',
      'Lona de PVC blanco apagado ignífuga M2 o carpa transparente Cristal',
      'Climatización industrial portátil (Chillers e Inverters de aire fresco)',
      'Cielo falso decorativo en velo blanco con iluminación fairy lights',
      'Piso de madera elevado para protección térmica e impermeabilidad',
      'Resistencia a vientos de hasta 90 km/h con contrapesos de concreto'
    ],
    equipmentList: [
      { name: 'Carpa Alemana Cristal', spec: 'Ancho 20m x Largo modular ilimitado', count: '1,500 m²' },
      { name: 'Carpas Tensionadas Bedouin', spec: 'Membrana elástica impermeabilizada', count: '800 m²' },
      { name: 'Sistemas de Aire Acondicionado', spec: '50,000 BTU Portátiles', count: '12 Unidades' }
    ],
    useCases: [
      'Bodas Campestres y Sociales VIP',
      'Lanzamientos Automotrices al Aire Libre',
      'Ferias Comerciales y Pabellones Temporales',
      'Comedores e Instalaciones Industriales de Emergencia'
    ],
    basePriceUSD: 950,
    faqs: [
      {
        question: '¿Las carpas resisten lluvias fuertes y vientos?',
        answer: 'Sí. Nuestras lonas vulcanizadas termoselladas son 100% impermeables y están ancladas con estándares de seguridad ingenieril.'
      }
    ],
    seoTitle: 'Alquiler de Carpas y Domos para Eventos | CyC Producciones',
    seoMeta: 'Alquiler de carpas alemanas, carpas transparentes cristal y carpas tensionadas. Climatización, decoración interior e impermeabilidad total.',
    keywords: ['alquiler carpas eventos', 'carpas alemanas transparentes', 'carpas para bodas', 'carpas domo', 'carpas industriales']
  },
  {
    id: 'tarimas',
    name: 'TARIMAS',
    shortDesc: 'Somos tu aliado experto en el alquiler de tarimas para eventos.',
    fullDesc: 'Somos tu aliado experto en el alquiler de tarimas para eventos. Te ofrecemos soluciones robustas, seguras y adaptables para que tu presentación, show o celebración tenga la altura y visibilidad que merece.',
    iconName: 'Layers',
    badge: 'Módulos Certificados',
    heroImage: 'https://lh3.googleusercontent.com/d/1W1IVnXMEfenu4w68igrWoG0wuzj-XBp9',
    gallery: [
      'https://lh3.googleusercontent.com/d/1W1IVnXMEfenu4w68igrWoG0wuzj-XBp9',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Tarimas modulares de 2x1m e 1x1m regulables desde 20cm hasta 2.50m',
      'Resistencia probada de 750 kg/m² certificada',
      'Faldón perimetral plisado en tela negra o vinilo de marca',
      'Escaleras con pasamanos de seguridad y rampas de acceso minusválidos',
      'Acabados en triplex marino antiderrapante o vidrio templado',
      'Nivelación láser milimétrica en terrenos de grama o arena'
    ],
    equipmentList: [
      { name: 'Módulos de Tarima', spec: 'Mojo Barriers / Nivoflex Event 2x1m', count: '250 Módulos' },
      { name: 'Niveladores Telescópicos', spec: 'Patas de aluminio 0.20m a 2.00m', count: '1,000 Patas' },
      { name: 'Faldones Perimetrales', spec: 'Velcro industrial retardante al fuego', count: '500 Metros' }
    ],
    useCases: [
      'Tarimas para Presídem y Oradores',
      'Escenarios de Danza y Orquestas',
      'Superficies Niveladas sobre Pasto o Piscinas',
      'Plataformas VIP para Producción de TV'
    ],
    basePriceUSD: 400,
    faqs: [
      {
        question: '¿Se pueden instalar tarimas sobre una piscina o superficie de césped?',
        answer: 'Absolutamente. Contamos con vigas estructurales especiales de distribución de peso para cubrir piscinas y proteger superficies delicadas.'
      }
    ],
    seoTitle: 'Alquiler de Tarimas Modulares para Eventos | CyC Producciones',
    seoMeta: 'Alquiler de tarimas modulares resistentes y niveladas. Perfectas para escenarios, conferencias, eventos corporativos y bodas.',
    keywords: ['alquiler tarimas', 'tarimas modulares', 'tarimas para eventos', 'escenarios nivelados', 'plataformas eventos']
  },
  {
    id: 'pantallas-led',
    name: 'PANTALLAS LED',
    shortDesc: 'Alquiler de pantallas LED para eventos que transforman cualquier espacio.',
    fullDesc: 'Te ofrecemos el alquiler de pantallas LED para eventos que transforman cualquier espacio en un espectáculo visual. Desde conciertos y conferencias hasta bodas y activaciones de marca, nuestras pantallas garantizan mensajes claros y experiencias inolvidables.',
    iconName: 'Tv',
    badge: '4K High Brightness HDR',
    heroImage: 'https://lh3.googleusercontent.com/d/1tCzN2HWJL05LFdD6Qyv3c2Le_XVjvor6',
    gallery: [
      'https://lh3.googleusercontent.com/d/1tCzN2HWJL05LFdD6Qyv3c2Le_XVjvor6',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508997449629-303059a039c0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Pixel Pitch fino Indoor P1.9 y P2.5 Ultra HD',
      'Módulos Outdoor P3.9 de 5000 nits de brillo resistente a intemperie IP65',
      'Estructuras de elevación Ground Support & Truss volar',
      'Procesadores Novastar MCTRL4K & VX16s',
      'Formatos curvos (convexo/cóncavo) y totems transparentes',
      'Garantía de cero parpadeo en cámara (High Refresh Rate 3840Hz)'
    ],
    equipmentList: [
      { name: 'Módulos LED P2.5 Indoor', spec: '500x500mm Die-cast Aluminum', count: '300 m²' },
      { name: 'Módulos LED P3.9 Outdoor', spec: '500x1000mm IP65 High Brightness', count: '450 m²' },
      { name: 'Procesadores de Video', spec: 'Novastar Taurus & VX1000', count: '8 Unidades' },
      { name: 'Media Servers', spec: 'Resolume Arena 7 / Disguise vx4', count: '4 Servidores' }
    ],
    useCases: [
      'Escenarios para Conciertos y Festivales',
      'PANTALLAS Gigantes para Congresos',
      'Escenografía Interactiva para Pasarelas',
      'Centros Comerciales y Publicidad BTL'
    ],
    basePriceUSD: 650,
    faqs: [
      {
        question: '¿Qué diferencia hay entre pantallas LED Indoor y Outdoor?',
        answer: 'Las pantallas Outdoor cuentan con protección IP65 impermeable y mayor brillo (4500-5500 nits) para verse nítidas bajo la luz directa del sol. Las Indoor priorizan la alta densidad de píxeles (P1.9/P2.5) para visión cercana impecable.'
      }
    ],
    seoTitle: 'Alquiler de Pantallas LED 4K para Eventos | CyC Producciones',
    seoMeta: 'Alquiler de pantallas LED Indoor y Outdoor P2.5 y P3.9 en Colombia. Brillo HDR, procesamiento 4K y montaje en estructura truss.',
    keywords: ['alquiler pantallas led', 'pantallas led p2.5', 'pantallas led exteriores', 'videowall led eventos', 'novastar 4k']
  },
  {
    id: 'pistas-de-baile',
    name: 'PISTAS DE BAILE',
    shortDesc: 'Somos especialistas en el alquiler de pistas de baile para eventos.',
    fullDesc: 'Somos especialistas en el alquiler de pistas de baile para eventos. Ofrecemos soluciones que no solo se ven espectaculares, sino que invitan a la diversión y garantizan la seguridad de todos, creando el ambiente perfecto para la celebración.',
    iconName: 'Disc',
    badge: 'Pistas LED & Vinilo',
    heroImage: 'https://lh3.googleusercontent.com/d/11xNFRJMrMofdyAoZ8If06obvDCbt82U4',
    gallery: [
      'https://lh3.googleusercontent.com/d/11xNFRJMrMofdyAoZ8If06obvDCbt82U4',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Pistas de baile LED interactivas con sensores de presión y patrones RGB',
      'Pistas en teca / madera noble pulida con marcos dorados en bisel',
      'Revestimiento en vinilo adhesivo personalizado con monograma o logo',
      'Pistas de cristal templado transparente con luces subacuáticas o LED',
      'Fácil montaje y encaje hermético de seguridad',
      'Superficie resistente a tacones y derrames de líquidos'
    ],
    equipmentList: [
      { name: 'Módulos Pista LED Interactive', spec: 'Paneles de 50x50cm Vidrio Templado', count: '100 m²' },
      { name: 'Pista Madera Parquet', spec: 'Módulos ensambables barnizados', count: '120 m²' }
    ],
    useCases: [
      'Recepciones de Boda y Fiestas de 15 Años',
      'Galas de Fin de Año Empresariales',
      'Fiestas de Integración Corporativa'
    ],
    basePriceUSD: 500,
    faqs: [
      {
        question: '¿Se pueden personalizar las pistas de baile con el logo o monograma de la empresa/boda?',
        answer: 'Sí. Aplicamos impresión en vinilo de alta densidad con protección antideslizante para resaltar tu logo o monograma.'
      }
    ],
    seoTitle: 'Alquiler de Pistas de Baile LED e Interactivas | CyC Producciones',
    seoMeta: 'Alquiler de pistas de baile LED, pistas de madera pulida y superficies personalizadas con vinilado para bodas y eventos.',
    keywords: ['pistas de baile led', 'alquiler pista de baile', 'pista madera eventos', 'pista baile interactiva', 'vinilado pista boda']
  },
  {
    id: 'escenarios',
    name: 'ESCENARIOS PARA EVENTOS',
    shortDesc: 'Diseñamos y construimos el escenario perfecto para tus eventos.',
    fullDesc: 'Somos especialistas en el montaje de escenarios para eventos. Desde conciertos masivos hasta elegantes pasarelas y conferencias inspiradoras, diseñamos y construimos la plataforma perfecta para que tu mensaje y tus artistas brillen con la máxima seguridad y profesionalidad.',
    iconName: 'Maximize2',
    badge: 'Ingeniería & Renders 3D',
    heroImage: 'https://lh3.googleusercontent.com/d/1qU45C7aAb5vIiBt9n7SSBsiw-01mJp5i',
    gallery: [
      'https://lh3.googleusercontent.com/d/1qU45C7aAb5vIiBt9n7SSBsiw-01mJp5i',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508997449629-303059a039c0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Renderizado 3D escenográfico hiperrealista con simulación de luces DMX',
      'Estructuras Truss de aluminio TAF / Global Truss certificado',
      'Motores de cadena eléctricos CM Lodestar con control centralizado',
      'Sistemas Roof Truss de techo cubierto para resistencia a vientos',
      'Pisos con acabado antifricción y revestimientos charol / acrílico',
      'Certificados de seguridad estructural emitidos por ingenieros colegiados'
    ],
    equipmentList: [
      { name: 'Estructuras Truss de Aluminio', spec: 'SQ-4040 Heavy Duty Eurotruss', count: '1,200 Metros' },
      { name: 'Motores Eléctricos', spec: 'CM Lodestar 1 Tonelada D8+', count: '24 Motores' },
      { name: 'Techos Roof System', spec: 'Capacidad 12x10m & 16x14m cubiertos', count: '3 Techos' },
      { name: 'Controles de Motores', spec: 'Prolyft Direct Control 8 Canales', count: '4 Consolas' }
    ],
    useCases: [
      'Festivales de Música al Aire Libre',
      'Escenarios Principales de Convenciones',
      'Plazas Públicas y Conciertos Masivos',
      'Lanzamientos Automotrices de Alto Tonelaje'
    ],
    basePriceUSD: 1200,
    faqs: [
      {
        question: '¿Entregan renders 3D antes de la ejecución del evento?',
        answer: 'Sí. Todos nuestros proyectos incluyen renders 3D con distribución espacial exacta, planos técnicos y vistas pre-renderizadas.'
      }
    ],
    seoTitle: 'Alquiler de Escenarios y Montajes Truss | CyC Producciones',
    seoMeta: 'Diseño 3D y alquiler de escenarios para conciertos y eventos masivos. Estructuras Truss certificadas, techos motorizados y máxima seguridad.',
    keywords: ['alquiler escenarios', 'renders 3d eventos', 'estructuras truss', 'roof truss concierto', 'cm lodestar']
  }
];
