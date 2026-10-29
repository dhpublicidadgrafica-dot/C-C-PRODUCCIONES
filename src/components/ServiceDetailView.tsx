import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calculator, 
  ShieldCheck, 
  ChevronLeft,
  ChevronRight,
  Maximize,
  X
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailViewProps {
  service: ServiceItem;
  onBackToServices: () => void;
  onOpenQuoteForService: () => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBackToServices,
  onOpenQuoteForService
}) => {
  // Carousel state
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Images in gallery (e.g. 4 for Pasarelas, 5 for Sonido)
  const galleryImages = service.gallery && service.gallery.length > 0 
    ? service.gallery 
    : [service.heroImage];

  // Auto-play carousel slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <article className="min-h-screen pt-28 pb-24 bg-zinc-950 text-white">
      
      {/* TOP NAVIGATION BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <a
          href="/servicios"
          onClick={(e) => {
            e.preventDefault();
            onBackToServices();
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-amber-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-amber-400" />
          Volver al Catálogo de Servicios
        </a>
      </div>

      {/* SERVICE HERO BANNER */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 min-h-[420px] flex items-center p-8 sm:p-12 shadow-2xl">
          
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <img 
              src={service.heroImage} 
              alt={service.seoTitle} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-50 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-poppins tracking-tight leading-tight uppercase">
              {service.name}
            </h1>

            <p className="text-base text-zinc-200 leading-relaxed font-normal">
              {service.fullDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteForService}
                className="px-8 py-3.5 rounded-full bg-[#C99327] hover:bg-[#B27F1C] text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C99327]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Cotizar Ahora</span>
              </button>

              <div className="text-xs text-zinc-400 font-mono flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Garantía de Disponibilidad & Soporte Técnico</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5-IMAGE INTERACTIVE CAROUSEL SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">

          {/* MAIN FEATURED SLIDE DISPLAY */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 group">
            <img 
              src={galleryImages[currentSlideIndex]} 
              alt={`${service.name} Imagen ${currentSlideIndex + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-700 filter brightness-95 group-hover:scale-105"
            />
            
            {/* OVERLAY GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

            {/* EXPAND LIGHTBOX BUTTON */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-zinc-950/70 hover:bg-amber-400 text-zinc-300 hover:text-zinc-950 border border-zinc-800 transition-colors cursor-pointer"
              title="Ver pantalla completa"
            >
              <Maximize className="w-4 h-4" />
            </button>

            {/* PREV BUTTON */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-zinc-950/70 hover:bg-amber-400 text-white hover:text-zinc-950 border border-zinc-700/60 flex items-center justify-center transition-all shadow-xl cursor-pointer"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* NEXT BUTTON */}
            <button
              onClick={handleNextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-zinc-950/70 hover:bg-amber-400 text-white hover:text-zinc-950 border border-zinc-700/60 flex items-center justify-center transition-all shadow-xl cursor-pointer"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* THUMBNAILS SELECTOR BAR */}
          <div className={`grid gap-2 sm:gap-4 pt-2 ${
            galleryImages.length === 4 
              ? 'grid-cols-4' 
              : galleryImages.length === 3 
                ? 'grid-cols-3' 
                : galleryImages.length === 6 
                  ? 'grid-cols-6' 
                  : 'grid-cols-5'
          }`}>
            {galleryImages.map((img, idx) => {
              const isActive = currentSlideIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    isActive 
                      ? 'border-amber-400 ring-2 ring-amber-400/30 scale-105' 
                      : 'border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Miniatura ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className={`absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                    isActive ? 'bg-amber-400 text-zinc-950' : 'bg-zinc-950/80 text-zinc-300'
                  }`}>
                    {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-zinc-800 text-white hover:bg-amber-400 hover:text-zinc-950 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-800 text-white hover:bg-amber-400 hover:text-zinc-950 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[85vh] p-2">
            <img 
              src={galleryImages[currentSlideIndex]} 
              alt="Vista ampliada" 
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[80vh] object-contain mx-auto rounded-2xl shadow-2xl border border-zinc-800"
            />
            <div className="text-center mt-4 text-xs font-mono text-zinc-400">
              {service.name} • Imagen {currentSlideIndex + 1} de {galleryImages.length}
            </div>
          </div>

          <button
            onClick={handleNextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-800 text-white hover:bg-amber-400 hover:text-zinc-950 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}


      {/* BOTTOM CTA */}
      <section className="py-16 bg-zinc-900 border-t border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-white">
            ¿Listo para cotizar {service.name} para tu evento?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Asesoría técnica y presupuesto personalizado con nuestros ingenieros de producción.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteForService}
              className="px-8 py-3.5 rounded-full bg-[#C99327] text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-[#B27F1C] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C99327]/20 cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Cotizar Ahora</span>
            </button>
          </div>
        </div>
      </section>

    </article>
  );
};
