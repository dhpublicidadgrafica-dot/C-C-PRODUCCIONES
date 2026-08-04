import React, { useState } from 'react';
import { 
  Sparkles, 
  Filter, 
  MapPin, 
  Calendar, 
  Users, 
  X, 
  CheckCircle, 
  Video, 
  Maximize2,
  ArrowRight
} from 'lucide-react';
import { PortfolioProject, EventCategory, ServiceId } from '../types';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface PortfolioGalleryProps {
  onOpenQuoteModal: () => void;
  onViewEvents?: () => void;
  onSelectService?: (id: ServiceId) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ 
  onOpenQuoteModal, 
  onViewEvents,
  onSelectService 
}) => {
  const [activeFilter, setActiveFilter] = useState<EventCategory>('todos');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories: { id: EventCategory; label: string }[] = [
    { id: 'todos', label: 'Todos los Eventos' },
    { id: 'corporativo', label: 'Corporativos & Congresos' },
    { id: 'concierto', label: 'Conciertos & Festivales' },
    { id: 'boda', label: 'Bodas & Social' },
    { id: 'lanzamiento', label: 'Lanzamientos' },
    { id: 'institucional', label: 'Institucionales' },
    { id: 'escenario', label: 'Escenarios & Moda' }
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'corporativo':
        return 'CORPORATIVOS';
      case 'concierto':
        return 'CONCIERTOS';
      case 'boda':
        return 'BODAS';
      case 'lanzamiento':
        return 'LANZAMIENTOS';
      case 'institucional':
        return 'INSTITUCIONALES';
      case 'escenario':
        return 'ESCENARIOS';
      default:
        return category.toUpperCase();
    }
  };

  const filteredProjects = (activeFilter === 'todos'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.category === activeFilter)).slice(0, 3);

  return (
    <section className="py-24 bg-zinc-950 text-white relative" id="portafolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-poppins font-normal uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CASOS DE ÉXITO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-poppins">
            Nuestros Montajes Más Emblemáticos
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-poppins font-normal">
            Explora una selección de congresos internacionales, festivales masivos, bodas y lanzamientos corporativos ejecutados por nuestro equipo.
          </p>
        </div>

        {/* MASONRY / PINTEREST-STYLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden cursor-pointer hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              {/* IMAGE COVER */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-amber-400 text-[10px] font-poppins font-bold uppercase border border-amber-400/30">
                  {getCategoryBadge(project.category)}
                </span>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-zinc-950/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-4 flex items-center justify-end">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const targetId = project.targetServiceId || 'escenarios';
                    if (onSelectService) {
                      onSelectService(targetId);
                    } else if (onViewEvents) {
                      onViewEvents();
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-400 hover:text-amber-300 text-xs font-semibold transition-all group-hover:border-amber-400/60"
                >
                  <span>Ver Más..</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-zinc-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-950/80 text-white hover:text-amber-400 border border-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>

            {/* MODAL HERO */}
            <div className="relative h-80">
              <img 
                src={selectedProject.coverImage} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-zinc-950 text-[10px] font-mono font-bold uppercase">
                  {selectedProject.client}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-poppins">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* MODAL BODY */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
              
              <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-center">
                <div>
                  <span className="text-zinc-400 block text-[10px]">LUGAR</span>
                  <span className="text-white font-bold">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block text-[10px]">ASISTENCIA</span>
                  <span className="text-amber-400 font-bold">{selectedProject.attendees}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block text-[10px]">AÑO</span>
                  <span className="text-white font-bold">{selectedProject.year}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-poppins uppercase tracking-wider text-amber-400 mb-2">
                  Resumen Ejecutivo del Evento
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* TECHNICAL HIGHLIGHTS */}
              <div>
                <h4 className="text-sm font-bold text-white font-poppins uppercase tracking-wider text-amber-400 mb-2">
                  Destacados Técnicos Implementados
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.technicalHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TESTIMONIAL IF AVAILABLE */}
              {selectedProject.testimonial && (
                <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-xs italic text-zinc-200 space-y-2">
                  <p>"{selectedProject.testimonial.quote}"</p>
                  <div className="not-italic font-bold text-amber-400 text-right">
                    — {selectedProject.testimonial.author} ({selectedProject.testimonial.role})
                  </div>
                </div>
              )}

              <div className="pt-4 flex justify-between items-center border-t border-zinc-800">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs text-zinc-400 hover:text-white"
                >
                  Cerrar
                </button>

                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuoteModal();
                  }}
                  className="px-6 py-3 rounded-xl bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider"
                >
                  Cotizar un Evento Similar
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
