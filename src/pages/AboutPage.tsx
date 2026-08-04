import React from 'react';
import { AboutUs } from '../components/AboutUs';
import { WorkProcess } from '../components/WorkProcess';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Sparkles, ArrowRight, ShieldCheck, Users, Award, Calculator, Home } from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
  onNavigateTab: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenQuoteModal,
  onNavigateTab,
}) => {
  return (
    <main id="about-page" className="pt-24 min-h-screen bg-[#050505] text-white animate-in fade-in duration-300">
      
      {/* PAGE HEADER BANNER */}
      <section className="py-20 border-b border-zinc-800/80 relative overflow-hidden bg-[#050505]">
        {/* BACKGROUND ATMOSPHERE WITH EVENT IMAGE & OVERLAY */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://lh3.googleusercontent.com/d/1HoKZWsYszHvisA_xHk71hXLTvUJRkqXW" 
            alt="Nosotros CyC Producciones" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-65 brightness-110 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-[#050505]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          {/* BREADCRUMB */}
          <div className="flex items-center justify-center gap-2 text-xs font-poppins font-normal text-zinc-400 mb-4">
            <button 
              onClick={() => onNavigateTab('home')}
              className="hover:text-[#C99327] flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </button>
            <span>/</span>
            <span className="text-[#C99327] font-semibold">Nosotros</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C99327]/10 border border-[#C99327]/30 text-[#C99327] text-xs font-poppins font-normal uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NUESTRA TRAYECTORIA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-white font-poppins tracking-tight max-w-4xl mx-auto">
            Quienes Somos
          </h1>
          <div className="mt-4 space-y-4 text-zinc-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-poppins font-normal text-center">
            <p>
              Somos una empresa especializada en la asesoría, diseño, planeación, organización y montaje de eventos de diferente magnitud y la logística que los soporta, dirigidos a empresas, instituciones educativas, organizaciones y clientes particulares.
            </p>
            <p>
              Para ello contamos con personal calificado de gran calidad humana y altamente capacitados y con equipos modernos que dan sustento a nuestro propósito, con el único y más grande fin: <strong className="text-[#C99327] font-bold block sm:inline mt-1 sm:mt-0">LA SATISFACCIÓN TOTAL DE NUESTROS CLIENTES</strong>
            </p>
          </div>



        </div>
      </section>

      {/* ABOUT US CORE SECTION */}
      <AboutUs />

      {/* WORK PROCESS 8 STEPS */}
      <WorkProcess />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* BOTTOM CTA */}
      <section className="py-16 bg-zinc-900 border-t border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-white">
            ¿Tienes un evento planificado y necesitas asesoría profesional?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Nuestro equipo de ingenieros de producción está disponible para realizar una visita técnica previa y asesorarte.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 rounded-full bg-[#C99327] text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-[#B27F1C] transition-all flex items-center gap-2 shadow-lg shadow-[#C99327]/20"
            >
              <Calculator className="w-4 h-4" />
              <span>Cotizar Ahora</span>
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};
