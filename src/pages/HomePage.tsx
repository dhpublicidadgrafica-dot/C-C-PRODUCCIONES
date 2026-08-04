import React from 'react';
import { Hero } from '../components/Hero';
import { PortfolioGallery } from '../components/PortfolioGallery';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ClientsTicker } from '../components/ClientsTicker';
import { ServiceId } from '../types';
import { Sparkles, Calculator } from 'lucide-react';

interface HomePageProps {
  onSelectService: (id: ServiceId) => void;
  onOpenQuoteModal: (id?: ServiceId) => void;
  onOpenAIChat: () => void;
  onNavigateTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectService,
  onOpenQuoteModal,
  onOpenAIChat,
  onNavigateTab,
}) => {
  return (
    <main id="home-page" className="animate-in fade-in duration-300">
      {/* HERO BANNER */}
      <Hero
        onOpenQuoteModal={() => onOpenQuoteModal()}
        onOpenAIChat={onOpenAIChat}
        onExplore3D={() => onNavigateTab('servicios')}
      />

      {/* PORTFOLIO HIGHLIGHTS */}
      <PortfolioGallery
        onOpenQuoteModal={() => onOpenQuoteModal()}
        onViewEvents={() => onSelectService('eventos-corporativos')}
        onSelectService={onSelectService}
      />

      {/* CLIENTS TICKER */}
      <ClientsTicker />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* QUICK CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#B27F1C] via-[#C99327] to-[#B27F1C] text-zinc-950 relative overflow-hidden shadow-2xl">
        <div className="absolute -right-20 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 border border-white/30 text-white text-xs font-poppins font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-white" />
            <span>¿Listo para hacer realidad tu evento?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins text-white max-w-3xl mx-auto tracking-tight">
            Diseñamos e Implementamos la Experiencia Audiovisual de tu Próximo Proyecto
          </h2>
          <p className="text-white/90 font-medium max-w-2xl mx-auto text-sm sm:text-base font-poppins">
            Cotizaciónes y asesorías técnicas personalizadas con nuestros ingenieros de producción.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-8 py-4 rounded-full bg-zinc-950 text-white font-bold text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all shadow-2xl flex items-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#C99327]" />
              <span>Solicitar Cotización Gratis</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
