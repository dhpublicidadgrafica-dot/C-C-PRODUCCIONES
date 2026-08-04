import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { EventCategory, ServiceId } from '../types';
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

  const handleProjectClick = (targetServiceId?: ServiceId) => {
    const targetId = targetServiceId || 'escenarios';
    if (onSelectService) {
      onSelectService(targetId);
    } else if (onViewEvents) {
      onViewEvents();
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
          {filteredProjects.map((project) => {
            const targetId = project.targetServiceId || 'escenarios';
            return (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.targetServiceId)}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden cursor-pointer hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                {/* IMAGE COVER */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-amber-400 text-[10px] font-poppins font-bold uppercase border border-amber-400/30">
                    {getCategoryBadge(project.category)}
                  </span>
                </div>

                {/* CARD DETAILS */}
                <div className="p-4 flex items-center justify-end">
                  <a
                    href={`/servicios/${targetId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleProjectClick(project.targetServiceId);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-400 hover:text-amber-300 text-xs font-semibold transition-all group-hover:border-amber-400/60"
                  >
                    <span>Ver Más..</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

