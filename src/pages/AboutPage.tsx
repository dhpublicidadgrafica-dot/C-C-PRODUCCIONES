import React from 'react';
import { AboutUs } from '../components/AboutUs';
import { WorkProcess } from '../components/WorkProcess';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Sparkles, Calculator, Home, Users, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
  onNavigateTab: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenQuoteModal,
  onNavigateTab,
}) => {
  const teamImageUrl = 'https://lh3.googleusercontent.com/d/1HoKZWsYszHvisA_xHk71hXLTvUJRkqXW';

  return (
    <main id="about-page" className="pt-24 min-h-screen bg-[#050505] text-white animate-in fade-in duration-300">
      
      {/* HERO / INTRO HEADER BANNER */}
      <section className="pt-16 pb-12 relative overflow-hidden bg-gradient-to-b from-zinc-950 via-[#070b16] to-[#050505] border-b border-zinc-800/80">
        
        {/* SUBTLE BACKGROUND GLOWS */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C99327]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C99327]/10 border border-[#C99327]/30 text-[#C99327] text-xs font-poppins font-normal uppercase tracking-widest mb-4 motion-fade-down">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NUESTRA TRAYECTORIA & EQUIPO</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white font-poppins tracking-tight max-w-4xl mx-auto motion-fade-up">
            Quiénes Somos
          </h1>
          
          <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-poppins font-normal motion-fade-up motion-delay-150">
            Somos una empresa especializada en la asesoría, diseño, planeación, organización y montaje de eventos de diferente magnitud y la logística técnica que los respalda.
          </p>

        </div>
      </section>

      {/* FEATURED TEAM SHOWCASE SECTION - MAXIMUM VISIBILITY */}
      <section className="py-16 sm:py-20 relative bg-zinc-950 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT / TOP: TEAM PHOTO (CLEAN, PROMINENT, HIGH FIDELITY) */}
            <div className="lg:col-span-7">
              <div className="relative group rounded-3xl overflow-hidden border-2 border-amber-500/30 bg-zinc-900 shadow-2xl shadow-black/80 hover:border-amber-400 transition-all duration-500">
                
                {/* PHOTO CONTAINER */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-zinc-950">
                  <img 
                    src={teamImageUrl} 
                    alt="Equipo de Trabajo C&C Producciones" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (!e.currentTarget.src.includes('/images/equipo-cyc.png')) {
                        e.currentTarget.src = '/images/equipo-cyc.png';
                      }
                    }}
                    className="w-full h-full object-cover object-top filter brightness-100 contrast-105 group-hover:scale-102 transition-transform duration-700"
                  />
                </div>

              </div>
            </div>

            {/* RIGHT / TEXT DESCRIPTION & HIGHLIGHTS */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">

              <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-white tracking-tight leading-snug">
                El Talento Humano detrás de cada Gran Evento
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-poppins font-normal max-w-xl mx-auto lg:mx-0">
                Para garantizar ejecuciones impecables, contamos con un equipo multidisciplinario de gran calidad humana, ingenieros de sonido en sala y monitores, diseñadores de iluminación, directores de escena y técnicos de montaje altamente certificados.
              </p>

              {/* HIGHLIGHT PILLS */}
              <div className="space-y-3 pt-2 text-left">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                  <div className="w-8 h-8 rounded-lg bg-[#C99327]/15 text-[#C99327] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase font-poppins">Capacitación y Rigor Técnico</h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Certificaciones en trabajo seguro en alturas y rigging industrial de alta capacidad.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                  <div className="w-8 h-8 rounded-lg bg-[#C99327]/15 text-[#C99327] flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase font-poppins">Garantía Total de Satisfacción</h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Acompañamiento continuo desde la visita técnica preliminar hasta el cierre de tu evento.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ABOUT US CORE SECTION (MISIÓN, VISIÓN, VALORES) */}
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
              className="px-8 py-3.5 rounded-full bg-[#C99327] text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-[#B27F1C] transition-all flex items-center gap-2 shadow-lg shadow-[#C99327]/20 cursor-pointer"
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
