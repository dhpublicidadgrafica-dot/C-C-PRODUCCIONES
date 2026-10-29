import React, { useState, useEffect } from 'react';
import { ShieldCheck, Award, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onOpenAIChat: () => void;
  onExplore3D: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onOpenAIChat,
  onExplore3D
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Counters animation state
  const [eventsCount, setEventsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [companiesCount, setCompaniesCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setEventsCount(Math.min(500, Math.floor(500 * progress)));
      setYearsCount(Math.min(15, Math.floor(15 * progress)));
      setCompaniesCount(Math.min(100, Math.floor(100 * progress)));
      setSatisfactionCount(Math.min(100, Math.floor(100 * progress)));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent('¡Hola CyC Producciones! Quisiera cotizar la producción técnica y logística para un evento.');
    window.open(`https://wa.me/573001234567?text=${msg}`, '_blank');
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* CINEMATIC BACKGROUND ELEMENTS FROM ELEGANT DARK THEME */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-[#C99327]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* BACKGROUND ATMOSPHERE WITH EVENT IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="https://lh3.googleusercontent.com/d/1IKa9ze1WDzSwbnaUd6JGNrzCusiDRM1e" 
          alt="Concierto Producción Audiovisual" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-65 brightness-110 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-[#050505]/70" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        
        {/* MAIN HEADLINE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] max-w-5xl mx-auto font-poppins uppercase">
          TRANSFORMAMOS TUS <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
            SUEÑOS EN EVENTOS
          </span>{' '}
          <span className="font-bold text-[#C99327]">INOLVIDABLES.</span>
        </h1>

        {/* SUBTITLE COPYWRITING */}
        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-poppins font-normal">
          Producción y logística integral para eventos corporativos y sociales de alto nivel.
        </p>

        {/* CALL TO ACTION BUTTONS */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#C99327] hover:text-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C99327]/20 group cursor-pointer"
            id="hero-cotizar-btn"
          >
            <span>Cotizar Ahora</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

        {/* STATS COUNTERS - ELEGANT DARK STYLE */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center group hover:bg-white/10 hover:border-[#C99327]/50 transition-all cursor-pointer">
            <div className="text-4xl sm:text-5xl font-bold text-[#C99327] font-poppins">
              +{eventsCount}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-2 font-poppins font-normal">
              Eventos Realizados
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center group hover:bg-white/10 hover:border-[#C99327]/50 transition-all cursor-pointer">
            <div className="text-4xl sm:text-5xl font-bold text-[#C99327] font-poppins">
              +{yearsCount}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-2 font-poppins font-normal">
              Años de Experiencia
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center group hover:bg-white/10 hover:border-[#C99327]/50 transition-all cursor-pointer">
            <div className="text-4xl sm:text-5xl font-bold text-[#C99327] font-poppins">
              +{companiesCount}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-2 font-poppins font-normal">
              CLIENTES SATISFECHOS
            </div>
          </div>

        </div>

        {/* TRUST BADGES FOOTER */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C99327]" />
            <span>Equipos 100% Propios & Certificados</span>
          </div>
          <span className="hidden sm:inline text-zinc-800">•</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C99327]" />
            <span>Cobertura Nacional</span>
          </div>
        </div>

      </div>
    </section>
  );
};
