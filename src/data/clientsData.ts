import { ClientTestimonial } from '../types';

export const CLIENT_LOGOS = [
  { name: 'Google Cloud', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=200&q=80' },
  { name: 'BMW Group', logo: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=200&q=80' },
  { name: 'Samsung Electronics', logo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=200&q=80' },
  { name: 'Nestlé Corporate', logo: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80' },
  { name: 'Toyota Motor Corp', logo: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=200&q=80' },
  { name: 'Asobancaria', logo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=200&q=80' },
  { name: 'Red Bull LATAM', logo: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=200&q=80' },
  { name: 'Bancolombia', logo: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=200&q=80' }
];

export const TESTIMONIALS_DATA: ClientTestimonial[] = [
  {
    id: 'test-1',
    clientName: 'Ing. Fernando Morales',
    company: 'Director de Comunicaciones - Samsung LATAM',
    logoUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=200&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'Trabajar con CyC Producciones fue la mejor decisión para nuestro lanzamiento regional. La puntualidad en los montajes, la calidad de los renders 3D y la nitidez de las pantallas LED superaron todas nuestras expectativas.',
    rating: 5,
    eventName: 'Lanzamiento Galaxy Series 2025',
    date: 'Diciembre 2025'
  },
  {
    id: 'test-2',
    clientName: 'Dra. Patricia Alarcón',
    company: 'Presidenta del Comité Organizador - Congreso de Medicina',
    logoUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=200&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d8773445a2?auto=format&fit=crop&w=200&q=80',
    comment: 'Tuvimos más de 2,200 médicos de todo el mundo. El sistema de audio d&b y la traducción simultánea funcionaron como un reloj suizo. Su equipo de ingenieros estuvo al tanto de cada segundo.',
    rating: 5,
    eventName: 'Congreso Panamericano de Cardiología',
    date: 'Noviembre 2025'
  },
  {
    id: 'test-3',
    clientName: 'Roberto Gómez',
    company: 'CEO - Live Concerts & Entertainment',
    logoUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=200&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'En eventos masivos de más de 30,000 personas no te puedes permitir fallas en el techo ni en los motores de elevación. CyC Producciones es sinónimo de rigor técnico y garantía absoluta.',
    rating: 5,
    eventName: 'Festival Neón Experience 2025',
    date: 'Octubre 2025'
  }
];
