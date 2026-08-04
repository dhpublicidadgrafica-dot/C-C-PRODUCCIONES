import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  ArrowLeft,
  ChevronRight,
  Calculator
} from 'lucide-react';
import { PortfolioProject } from '../types';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface EventsViewProps {
  onBackToHome: () => void;
  onOpenQuoteModal: () => void;
}

export const EventsView: React.FC<EventsViewProps> = ({
  onBackToHome,
  onOpenQuoteModal,
}) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = PORTFOLIO_DATA;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#050505] text-white">
      {/* HEADER HERO BANNER */}
      <div className="relative border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 via-zinc-950 to-[#050505] py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C99327]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* BREADCRUMB / BACK */}
          <div className="flex justify-center mb-8">
            <button 
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#C99327] text-zinc-400 hover:text-white text-xs font-semibold transition-all group"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#C99327] group-hover:-translate-x-1 transition-transform" />
              <span>Volver al Inicio</span>
            </button>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C99327]/10 border border-[#C99327]/30 text-[#C99327] text-xs font-poppins uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Galería Oficial & Casos de Éxito</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white font-poppins tracking-tight uppercase leading-tight">
              Eventos <span className="text-[#C99327]">Realizados</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 font-poppins leading-relaxed max-w-2xl mx-auto">
              Explora nuestra trayectoria en la producción audiovisual, logística de escenarios, iluminación inteligente, sonido profesional y carpas para grandes marcas, festivales y bodas exclusivas.
            </p>
          </div>

        </div>
      </div>

      {/* EVENTS GALLERY GRID SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                }}
                className="group relative bg-zinc-900/80 border border-zinc-800/80 rounded-3xl overflow-hidden cursor-pointer hover:border-[#C99327]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C99327]/10 flex flex-col justify-between"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-72 overflow-hidden bg-zinc-950">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-base font-bold font-poppins drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>

      {/* MODAL DETALLE DE EVENTO (SOLO IMAGEN / LIGHTBOX) */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 transition-all hover:scale-110"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* SINGLE IMAGE DISPLAY */}
            <div className="relative w-full h-[60vh] sm:h-[75vh] bg-black flex items-center justify-center p-2">
              <img
                src={selectedProject.coverImage}
                alt={selectedProject.title}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* CALL TO ACTION BOTTOM BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-[#C99327]/40 p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[#C99327] font-mono text-xs uppercase tracking-widest font-bold">
              ¿Listo para hacer historia con tu próximo evento?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-poppins">
              Diseñamos y Ejecutamos Tu Evento a Medida
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-poppins">
              Contamos con inventario propio en sonido d&b / L-Acoustics, pantallas LED 4K, iluminación grandMA3, carpas alemanas y escenarios modulares.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 bg-[#C99327] hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-2xl shadow-[#C99327]/30 hover:scale-105 flex-shrink-0 flex items-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            Solicitar Cotización Gratis
          </button>
        </div>
      </div>

    </div>
  );
};
