import React from 'react';
import { Sparkles, Star, Quote } from 'lucide-react';
import { CLIENT_LOGOS, TESTIMONIALS_DATA } from '../data/clientsData';

export const ClientsTicker: React.FC = () => {
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

        {/* 3 INDEPENDENT SEPARATE TESTIMONIAL BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" id="testimonios-grid">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              id={`testimonio-card-${item.id}`}
              className="bg-zinc-50 border border-zinc-200/90 rounded-2xl p-6 sm:p-7 relative shadow-sm hover:shadow-xl hover:border-amber-500/50 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
            >
              {/* TOP ACCENT & QUOTE */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* RATING STARS */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-amber-500/25 group-hover:text-amber-500/40 transition-colors" />
                </div>

                {/* TESTIMONIAL TEXT */}
                <p className="text-xs sm:text-sm font-normal text-zinc-700 leading-relaxed font-poppins mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* CLIENT AUTHOR & EVENT INFO */}
              <div className="pt-4 border-t border-zinc-200/80 flex items-center gap-3.5">
                <img 
                  src={item.avatarUrl} 
                  alt={item.clientName} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-500 shadow-sm shrink-0" 
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-zinc-900 font-poppins truncate">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-amber-800 font-poppins font-medium truncate">
                    {item.company}
                  </p>
                  <p className="text-[11px] text-zinc-500 font-poppins font-normal truncate mt-0.5">
                    {item.eventName} • {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

