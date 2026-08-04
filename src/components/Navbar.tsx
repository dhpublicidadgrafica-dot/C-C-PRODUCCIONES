import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  Phone, 
  Calculator, 
  Bot, 
  Calendar,
  Layers,
  Volume2,
  Tv,
  Briefcase,
  Home as HomeIcon,
  ShoppingBag,
  Disc,
  Maximize2
} from 'lucide-react';
import { ServiceId } from '../types';

interface NavbarProps {
  activeTab: string;
  currentPath?: string;
  setActiveTab: (tab: string) => void;
  selectedServiceId: ServiceId | null;
  onSelectService: (id: ServiceId) => void;
  onOpenQuoteModal: () => void;
  onOpenAIChat: () => void;
  onOpenSEOInspector: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  currentPath = '/',
  setActiveTab,
  selectedServiceId,
  onSelectService,
  onOpenQuoteModal,
  onOpenAIChat,
  onOpenSEOInspector,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setActiveTab(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-amber-500/10 py-3 shadow-2xl shadow-black/80' 
          : 'bg-gradient-to-b from-zinc-950/90 via-zinc-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          
          {/* LOGO */}
          <a 
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
            id="cyc-logo-button"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1vf9b6qcs3ngizbDkAvu3_Nq2PL23P3k1" 
              alt="C&C Producciones Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="text-xl font-bold tracking-tighter text-white flex items-center gap-1.5 font-poppins uppercase">
                PRODUCCIONES
              </span>
              <span className="block text-[9px] text-[#C99327] uppercase tracking-[0.25em] font-poppins font-normal">
                LOGISTICA & EVENTOS
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION (CENTERED) */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/80 p-1.5 rounded-full border border-zinc-800/80 shadow-inner lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <a
              href="/"
              onClick={(e) => handleNavClick('/', e)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                (activeTab === 'home' || currentPath === '/') && !selectedServiceId
                  ? 'bg-amber-400 text-zinc-950 shadow-md shadow-amber-400/20 font-bold'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              Inicio
            </a>

            <a
              href="/nosotros"
              onClick={(e) => handleNavClick('/nosotros', e)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'quienes-somos' || activeTab === 'nosotros' || currentPath === '/nosotros'
                  ? 'bg-amber-400 text-zinc-950 shadow-md shadow-amber-400/20 font-bold'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              Nosotros
            </a>

            {/* DIRECT BUTTON TO MAIN SERVICES PAGE */}
            <a
              href="/servicios"
              onClick={(e) => handleNavClick('/servicios', e)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'servicios' || currentPath === '/servicios' || (activeTab.startsWith('servicio-') && !selectedServiceId)
                  ? 'bg-amber-400 text-zinc-950 shadow-md shadow-amber-400/20 font-bold'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              Servicios
            </a>

            <a
              href="/eventos"
              onClick={(e) => handleNavClick('/eventos', e)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'eventos' || currentPath === '/eventos'
                  ? 'bg-amber-400 text-zinc-950 shadow-md shadow-amber-400/20 font-bold'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              Eventos
            </a>

            <a
              href="/contacto"
              onClick={(e) => handleNavClick('/contacto', e)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'contacto' || currentPath === '/contacto'
                  ? 'bg-amber-400 text-zinc-950 shadow-md shadow-amber-400/20 font-bold'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              Contacto
            </a>
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 hover:scale-105 transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              Cotizar
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE SLIDE-OUT MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-b border-zinc-800 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-zinc-800">
            <a
              href="/"
              onClick={(e) => handleNavClick('/', e)}
              className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-colors block ${
                activeTab === 'home' || currentPath === '/' ? 'bg-amber-400 text-zinc-950 font-bold' : 'bg-zinc-900 text-zinc-300'
              }`}
            >
              Inicio
            </a>
            <a
              href="/nosotros"
              onClick={(e) => handleNavClick('/nosotros', e)}
              className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-colors block ${
                activeTab === 'quienes-somos' || activeTab === 'nosotros' || currentPath === '/nosotros' ? 'bg-amber-400 text-zinc-950 font-bold' : 'bg-zinc-900 text-zinc-300'
              }`}
            >
              Nosotros
            </a>
            <a
              href="/servicios"
              onClick={(e) => handleNavClick('/servicios', e)}
              className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-colors block ${
                activeTab === 'servicios' || currentPath === '/servicios' ? 'bg-amber-400 text-zinc-950 font-bold' : 'bg-zinc-900 text-zinc-300'
              }`}
            >
              Servicios
            </a>

            <a
              href="/eventos"
              onClick={(e) => handleNavClick('/eventos', e)}
              className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-colors block ${
                activeTab === 'eventos' || currentPath === '/eventos' ? 'bg-amber-400 text-zinc-950 font-bold' : 'bg-zinc-900 text-zinc-300'
              }`}
            >
              Eventos
            </a>

            <a
              href="/contacto"
              onClick={(e) => handleNavClick('/contacto', e)}
              className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-colors block ${
                activeTab === 'contacto' || currentPath === '/contacto' ? 'bg-amber-400 text-zinc-950 font-bold' : 'bg-zinc-900 text-zinc-300'
              }`}
            >
              Contacto
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-xl bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
