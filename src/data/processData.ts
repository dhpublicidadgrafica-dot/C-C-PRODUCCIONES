import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Diagnóstico & Briefing',
    subtitle: 'Entendimiento de Necesidades',
    description: 'Analizamos el concepto, objetivo, presupuesto, aforo proyectado y características arquitectónicas del lugar del evento.',
    iconName: 'Search',
    keyDeliverable: 'Análisis de Requerimientos & Cotización Inicial'
  },
  {
    number: 2,
    title: 'Planeación & Logística',
    subtitle: 'Cronograma y Recursos',
    description: 'Estructuramos la hoja de ruta técnica, plan de cargas eléctricas trifásicas, acreditaciones de personal y rutas de transporte.',
    iconName: 'Calendar',
    keyDeliverable: 'Master Schedule & Rider Técnico'
  },
  {
    number: 3,
    title: 'Diseño & Render 3D',
    subtitle: 'Modelado Hiperrealista',
    description: 'Diseñamos la escenografía en 3D con simulación de iluminación DMX, mapas de cobertura acústica e integración de marca.',
    iconName: 'Box',
    keyDeliverable: 'Plano 3D Renderizado & Distribución de Espacios'
  },
  {
    number: 4,
    title: 'Producción & Preparación',
    subtitle: 'Testing en Bodega',
    description: 'Ensamblamos y probamos el 100% de los equipos en nuestros centros logísticos antes de realizar el traslado.',
    iconName: 'Sliders',
    keyDeliverable: 'Certificados de Mantenimiento & Checklists'
  },
  {
    number: 5,
    title: 'Montaje & Rigging',
    subtitle: 'Ingeniería en Terreno',
    description: 'Instalación de estructuras Truss, pantallas LED, alineación láser de cajas acopladas y calibración de microfonía.',
    iconName: 'Wrench',
    keyDeliverable: 'Puesta a Punto & Soundcheck'
  },
  {
    number: 6,
    title: 'Ejecución en Vivo',
    subtitle: 'Dirección de Escena',
    description: 'Stage management, mezcla de audio en vivo, conmutación de video 4K y operación de iluminación durante todo el evento.',
    iconName: 'Play',
    keyDeliverable: 'Evento Impecable en Tiempo Real'
  },
  {
    number: 7,
    title: 'Desmontaje Seguro',
    subtitle: 'Desalojo Eficiente',
    description: 'Retiro ordenado y rápido de estructuras y equipos, respetando las normativas de seguridad del recinto.',
    iconName: 'RotateCcw',
    keyDeliverable: 'Entrega del Espacio en Estado Original'
  },
  {
    number: 8,
    title: 'Seguimiento & Feedback',
    subtitle: 'Evaluación de Resultados',
    description: 'Reunión de cierre, entrega de grabación 4K, memoria fotográfica y reporte final de satisfacción.',
    iconName: 'CheckCircle',
    keyDeliverable: 'Informe Post-Evento & Archivos Digitales'
  }
];
