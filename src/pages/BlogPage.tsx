import React from 'react';
import { BlogSection } from '../components/BlogSection';
import { FaqSection } from '../components/FaqSection';
import { Sparkles, Home, Calculator, BookOpen } from 'lucide-react';

interface BlogPageProps {
  onOpenQuoteModal: () => void;
  onNavigateTab: (tab: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onOpenQuoteModal,
  onNavigateTab,
}) => {
  return (
    <main id="blog-page" className="pt-24 min-h-screen bg-[#050505] text-white animate-in fade-in duration-300">
      
      {/* PAGE HEADER BANNER */}
      <section className="py-16 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border-b border-zinc-800/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C99327]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4">
            <button 
              onClick={() => onNavigateTab('home')}
              className="hover:text-[#C99327] flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </button>
            <span>/</span>
            <span className="text-[#C99327] font-semibold">Blog Técnico</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C99327]/10 border border-[#C99327]/30 text-[#C99327] text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RECURSOS & CONOCIMIENTO TÉCNICO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white font-poppins tracking-tight max-w-4xl">
            Blog de Producción, Sonido & Montajes
          </h1>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Guías técnicas, mejores prácticas de sonorización Line Array, cálculo de pitch para Pantallas LED, normativa de seguridad estructural y tendencias en eventos B2B.
          </p>

          <div className="mt-8">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 rounded-full bg-[#C99327] text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-[#B27F1C] transition-all flex items-center gap-2 shadow-lg shadow-[#C99327]/20"
            >
              <Calculator className="w-4 h-4" />
              <span>Cotizar Equipamiento</span>
            </button>
          </div>

        </div>
      </section>

      {/* BLOG ARTICLES CONTENT */}
      <BlogSection />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <FaqSection />

    </main>
  );
};
