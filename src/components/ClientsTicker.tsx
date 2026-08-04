import React, { useState } from 'react';
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CLIENT_LOGOS, TESTIMONIALS_DATA } from '../data/clientsData';

export const ClientsTicker: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(prev => 
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(prev => 
      prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentTestimonialIndex];

  return (
    <section className="py-20 bg-white text-zinc-900 relative border-t border-zinc-200" id="clientes-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-poppins font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Respaldo Institucional</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 font-poppins tracking-tight">
            Confían en Nosotros
          </h2>
          <p className="mt-3 text-sm text-zinc-600 font-poppins font-normal">
            Grandes multinacionales, agencias de publicidad y familias han delegado la producción de sus momentos más importantes en CyC.
          </p>
        </div>

        {/* LOGO TICKER */}
        <div className="relative w-full overflow-hidden mb-16 py-6 bg-zinc-50 rounded-3xl border border-zinc-200/80 shadow-inner">
          <div className="flex space-x-8 animate-marquee whitespace-nowrap items-center">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
              <div key={idx} className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-zinc-200 rounded-2xl shrink-0 hover:border-amber-500/60 transition-colors shadow-sm">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-6 h-6 rounded-full object-cover border border-zinc-300" 
                  referrerPolicy="no-referrer"
                />
                <span className="text-sm font-bold text-zinc-800 font-poppins">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIAL SLIDER */}
        <div className="max-w-2xl mx-auto bg-zinc-50 border border-zinc-200/80 rounded-2xl p-5 sm:p-6 relative shadow-md">
          <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 left-4" />

          <div className="relative z-10 space-y-4 text-center">
            
            {/* RATING STARS */}
            <div className="flex justify-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>

            <p className="text-xs sm:text-sm font-normal text-zinc-700 leading-relaxed max-w-lg mx-auto font-poppins">
              "{currentTestimonial.comment}"
            </p>

            <div className="pt-2 flex items-center justify-center gap-3">
              <img 
                src={currentTestimonial.avatarUrl} 
                alt={currentTestimonial.clientName} 
                className="w-10 h-10 rounded-full object-cover border-2 border-amber-500 shadow-sm"
              />
              <div className="text-left">
                <h4 className="text-xs font-bold text-zinc-900 font-poppins">{currentTestimonial.clientName}</h4>
                <p className="text-[11px] text-amber-700 font-poppins font-semibold">{currentTestimonial.company}</p>
                <p className="text-[10px] text-zinc-500 font-poppins font-normal">{currentTestimonial.eventName} • {currentTestimonial.date}</p>
              </div>
            </div>

            {/* CONTROLS */}
            <div className="pt-1 flex justify-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-1.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 border border-zinc-300 shadow-sm transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-1.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 border border-zinc-300 shadow-sm transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
