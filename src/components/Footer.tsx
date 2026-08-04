import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { ServiceId } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

interface FooterProps {
  onSelectService: (id: ServiceId) => void;
  onOpenQuoteModal: () => void;
  onOpenSEOInspector: () => void;
  onNavigateTab?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectService,
  onOpenQuoteModal,
  onOpenSEOInspector,
  onNavigateTab
}) => {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/d/1vf9b6qcs3ngizbDkAvu3_Nq2PL23P3k1" 
                alt="C&C Producciones Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tighter text-white font-poppins uppercase leading-none">
                  PRODUCCIONES
                </span>
                <span className="text-[9px] text-[#C99327] tracking-[0.25em] uppercase font-poppins font-normal mt-1">
                  LOGISTICA & EVENTOS
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm font-poppins font-normal">
              Somos una empresa especializada en la asesoría, diseño, planeación, organización y montaje de eventos.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/cycproduccionesmed/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#C99327] hover:text-[#C99327] text-gray-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/cycproduccionesmed" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#C99327] hover:text-[#C99327] text-gray-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCIHKUifCgKe_vTgDnmU8xRQ/videos" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#C99327] hover:text-[#C99327] text-gray-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* SERVICES LINKS */}
          <div className="space-y-3">
            <h4 className="text-xs font-poppins font-bold uppercase text-[#C99327] tracking-[0.2em]">Nuestros Servicios</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-poppins font-normal">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a 
                    href={`/servicios/${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectService(s.id);
                    }}
                    className="hover:text-[#C99327] transition-colors text-left block"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>



        {/* BOTTOM ACCENT GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C99327] to-transparent opacity-30"></div>

      </div>
    </footer>
  );
};
