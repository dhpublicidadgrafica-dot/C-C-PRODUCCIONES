import React from 'react';
import { 
  Volume2, 
  Briefcase, 
  Tv, 
  Maximize2, 
  Layers, 
  Home as HomeIcon, 
  Sparkles, 
  Disc, 
  ShoppingBag, 
  ArrowRight
} from 'lucide-react';
import { ServiceId } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

interface ServicesGridProps {
  onSelectService: (id: ServiceId) => void;
  onOpenQuoteModalWithService: (id: ServiceId) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Volume2,
  Briefcase,
  Tv,
  Maximize2,
  Layers,
  Home: HomeIcon,
  Sparkles,
  Disc,
  ShoppingBag,
};

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onOpenQuoteModalWithService
}) => {
  const sonidoImage = SERVICES_DATA.find((s) => s.id === 'sonido-profesional')?.heroImage || SERVICES_DATA[0]?.heroImage;

  return (
    <section className="py-24 bg-[#050505] text-white relative overflow-hidden" id="servicios-section">
      
      {/* BACKGROUND IMAGE OF SONIDO PROFESIONAL WITH OVERLAY */}
      {sonidoImage && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src={sonidoImage} 
            alt="Sonido Profesional Fondo" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-65 brightness-110 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-[#050505]/70" />
        </div>
      )}

      {/* BACKGROUND DECORATIVE ACCENT */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C99327]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-poppins">
            NUESTRO PORTAFOLIO
          </h2>
          <p className="mt-4 text-base text-gray-400 font-poppins font-normal">
            Equipamiento de última generación, ingeniería certificada y soporte técnico continuo para garantizar ejecuciones de nivel mundial.
          </p>
        </div>

        {/* SERVICES CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Sparkles;

            return (
              <div
                key={service.id}
                className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-[#C99327]/40 transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* CARD TOP IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-[#C99327] text-black flex items-center justify-center font-bold shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <a
                      href={`/servicios/${service.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectService(service.id);
                      }}
                      className="block"
                    >
                      <h3 className="text-xl font-bold text-white font-poppins group-hover:text-[#C99327] transition-colors">
                        {service.name}
                      </h3>
                    </a>
                    <p className="mt-2 text-xs text-gray-400 leading-relaxed line-clamp-3 font-poppins font-normal">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* ACTION FOOTER */}
                  <div className="pt-4 flex items-center gap-2">
                    <a
                      href={`/servicios/${service.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectService(service.id);
                      }}
                      className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-center"
                    >
                      Ver Más... <ArrowRight className="w-3.5 h-3.5 text-[#C99327]" />
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
