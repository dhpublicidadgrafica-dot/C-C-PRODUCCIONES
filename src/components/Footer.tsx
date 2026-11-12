import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube,
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CreditCard, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ServiceId } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { LOGO_BASE64 } from '../assets/logoBase64';

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
  const handleNavClick = (tabOrPath: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onNavigateTab) {
      onNavigateTab(tabOrPath);
    }
  };

  // Select top 6 featured services for clean column display
  const featuredServices = SERVICES_DATA.slice(0, 6);

  return (
    <footer className="bg-[#040814] text-white border-t border-white/10 pt-16 pb-8 relative text-xs font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN 4-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* COLUMN 1: BRAND IDENTITY & ACTION */}
          <div className="space-y-4 text-left">
            <a 
              href="/"
              onClick={(e) => handleNavClick('/', e)}
              className="inline-flex items-center gap-3 group text-left cursor-pointer"
            >
              <img 
                src={LOGO_BASE64} 
                alt="C&C Producciones Logo" 
                className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white font-poppins uppercase leading-none">
                  C&C PRODUCCIONES
                </span>
                <span className="text-[9px] text-[#C99327] tracking-[0.25em] uppercase font-poppins font-normal mt-1">
                  LOGÍSTICA & EVENTOS
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-300/80 leading-relaxed font-normal max-w-sm">
              Empresa líder en asesoría, diseño, planeación, organización y montaje técnico de eventos corporativos, sociales y masivos de alto nivel en Colombia.
            </p>

            {/* SOCIAL MEDIA ICONS */}
            <div className="flex items-center gap-2.5 pt-1">
              <a 
                href="https://www.facebook.com/cycproduccionesmed" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-8 h-8 rounded-md bg-white/10 hover:bg-[#C99327] hover:text-black text-slate-300 flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/cycproduccionesmed/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-md bg-white/10 hover:bg-[#C99327] hover:text-black text-slate-300 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCIHKUifCgKe_vTgDnmU8xRQ/videos" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-8 h-8 rounded-md bg-white/10 hover:bg-[#C99327] hover:text-black text-slate-300 flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: NAVEGACIÓN */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2 font-poppins">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99327]" />
              <span>Navegación</span>
            </h4>
            
            <ul className="space-y-2.5 text-xs text-slate-300/85">
              <li>
                <a 
                  href="/"
                  onClick={(e) => handleNavClick('/', e)}
                  className="flex items-center gap-2 hover:text-[#C99327] transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C99327]" />
                  <span>Inicio</span>
                </a>
              </li>
              <li>
                <a 
                  href="/nosotros"
                  onClick={(e) => handleNavClick('/nosotros', e)}
                  className="flex items-center gap-2 hover:text-[#C99327] transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C99327]" />
                  <span>Nosotros</span>
                </a>
              </li>
              <li>
                <a 
                  href="/servicios"
                  onClick={(e) => handleNavClick('/servicios', e)}
                  className="flex items-center gap-2 hover:text-[#C99327] transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C99327]" />
                  <span>Servicios de Eventos</span>
                </a>
              </li>
              <li>
                <a 
                  href="/contacto"
                  onClick={(e) => handleNavClick('/contacto', e)}
                  className="flex items-center gap-2 hover:text-[#C99327] transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C99327]" />
                  <span>Contacto</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICIOS TÉCNICOS */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2 font-poppins">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99327]" />
              <span>Servicios Técnicos</span>
            </h4>

            <ul className="space-y-2 text-xs text-slate-300/85">
              {featuredServices.map((s) => (
                <li key={s.id}>
                  <a 
                    href={`/servicios/${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectService(s.id);
                    }}
                    className="hover:text-[#C99327] transition-colors text-left block truncate"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>

            <a 
              href="/servicios"
              onClick={(e) => handleNavClick('/servicios', e)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFE6A7] hover:text-[#FCD34D] pt-1 transition-colors"
            >
              <span>Ver todos los {SERVICES_DATA.length} servicios</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* COLUMN 4: CONTACTO DIRECTO */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2 font-poppins">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99327]" />
              <span>Contacto</span>
            </h4>

            <div className="space-y-3.5 text-xs text-slate-300">
              
              {/* PHONE */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C99327] shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="tel:+573004978810" 
                    className="font-medium text-white hover:text-[#C99327] block transition-colors"
                  >
                    +57 300 497 8810
                  </a>
                  <span className="text-[10px] text-slate-400 block">Atención telefónica & WhatsApp</span>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C99327] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <a 
                    href="mailto:cycproducciones2015@gmail.com" 
                    className="font-medium text-white hover:text-[#C99327] block transition-colors break-all"
                  >
                    cycproducciones2015@gmail.com
                  </a>
                  <span className="text-[10px] text-slate-400 block">Cotizaciones y consultas</span>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C99327] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Carrera 55 # 1B-19</span>
                  <span className="text-[10px] text-slate-400 block">Medellín, Antioquia — Sede Principal</span>
                </div>
              </div>

              {/* SCHEDULE */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C99327] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Lunes a Sábado: 7:00 a.m. – 8:00 p.m.</span>
                  <span className="text-[10px] text-slate-400 block">Atención técnica y logística</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL NOTICE */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            <strong className="text-slate-300">C&C Producciones S.A.S.:</strong> Empresa especializada en la producción técnica, montaje estructural, sonorización profesional, iluminación inteligente y pantallas LED para todo tipo de eventos corporativos, sociales y masivos.
          </p>

          <div className="text-center md:text-right shrink-0 space-y-1">
            <p>© {new Date().getFullYear()} C&C Producciones. Todos los derechos reservados.</p>
            <div className="flex items-center justify-center md:justify-end gap-3 text-[10px]">
              <span className="hover:text-slate-200 cursor-pointer">Política de Privacidad</span>
              <span>|</span>
              <span className="hover:text-slate-200 cursor-pointer">Términos del Servicio</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
