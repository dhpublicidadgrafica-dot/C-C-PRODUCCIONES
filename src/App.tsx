import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { EventsPage } from './pages/EventsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AIChatWidget } from './components/AIChatWidget';
import { SEOInspectorDrawer } from './components/SEOInspectorDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Footer } from './components/Footer';

import { ServiceId } from './types';
import { SERVICES_DATA } from './data/servicesData';

interface RouteState {
  tab: string;
  serviceId: ServiceId | null;
  path: string;
}

// Helper to parse any pathname into corresponding route and service
function parsePathname(pathname: string): RouteState {
  const cleanPath = pathname.toLowerCase().replace(/\/$/, '') || '/';

  if (cleanPath === '/' || cleanPath === '/inicio' || cleanPath === '/home') {
    return { tab: 'home', serviceId: null, path: '/' };
  }

  if (cleanPath === '/nosotros' || cleanPath === '/quienes-somos' || cleanPath === '/acerca-de') {
    return { tab: 'quienes-somos', serviceId: null, path: '/nosotros' };
  }

  if (cleanPath === '/servicios' || cleanPath === '/servicios-produccion' || cleanPath === '/services') {
    return { tab: 'servicios', serviceId: null, path: '/servicios' };
  }

  if (cleanPath.startsWith('/servicios/') || cleanPath.startsWith('/servicio/')) {
    const slug = cleanPath.split('/')[2];
    const found = SERVICES_DATA.find((s) => s.id === slug);
    if (found) {
      return { tab: `servicio-${found.id}`, serviceId: found.id, path: `/servicios/${found.id}` };
    }
    return { tab: 'servicios', serviceId: null, path: '/servicios' };
  }

  if (cleanPath.startsWith('/servicio-')) {
    const slug = cleanPath.replace('/servicio-', '');
    const found = SERVICES_DATA.find((s) => s.id === slug);
    if (found) {
      return { tab: `servicio-${found.id}`, serviceId: found.id, path: `/servicios/${found.id}` };
    }
  }

  if (cleanPath === '/eventos' || cleanPath === '/portafolio' || cleanPath === '/galeria') {
    return { tab: 'eventos', serviceId: null, path: '/eventos' };
  }

  if (cleanPath === '/blog' || cleanPath === '/noticias' || cleanPath === '/guias') {
    return { tab: 'blog', serviceId: null, path: '/blog' };
  }

  if (cleanPath === '/contacto' || cleanPath === '/cotizar' || cleanPath === '/contact') {
    return { tab: 'contacto', serviceId: null, path: '/contacto' };
  }

  return { tab: 'home', serviceId: null, path: '/' };
}

// Convert tab / serviceId to canonical URL path
function getUrlForTab(tab: string, serviceId?: ServiceId | null): string {
  if (serviceId) return `/servicios/${serviceId}`;
  if (tab === 'home') return '/';
  if (tab === 'quienes-somos' || tab === 'nosotros') return '/nosotros';
  if (tab === 'servicios') return '/servicios';
  if (tab.startsWith('servicio-')) {
    const id = tab.replace('servicio-', '');
    return `/servicios/${id}`;
  }
  if (tab === 'eventos') return '/eventos';
  if (tab === 'blog') return '/blog';
  if (tab === 'contacto') return '/contacto';
  return '/';
}

export function App() {
  // Initialize route from current browser window.location.pathname
  const [route, setRoute] = useState<RouteState>(() => parsePathname(window.location.pathname));

  // Modals & Drawers State
  const [isAIChatOpen, setIsAIChatOpen] = useState<boolean>(false);
  const [isSEOInspectorOpen, setIsSEOInspectorOpen] = useState<boolean>(false);

  // Core navigation function that syncs URL, history, and page state
  const navigate = useCallback((target: string | { tab?: string; serviceId?: ServiceId | null; path?: string }, replace = false) => {
    let targetPath = '/';
    let targetTab = 'home';
    let targetServiceId: ServiceId | null = null;

    if (typeof target === 'string') {
      if (target.startsWith('/')) {
        const parsed = parsePathname(target);
        targetPath = parsed.path;
        targetTab = parsed.tab;
        targetServiceId = parsed.serviceId;
      } else {
        targetTab = target;
        if (target.startsWith('servicio-')) {
          const sId = target.replace('servicio-', '') as ServiceId;
          const found = SERVICES_DATA.find((s) => s.id === sId);
          if (found) {
            targetServiceId = found.id;
          }
        }
        targetPath = getUrlForTab(targetTab, targetServiceId);
      }
    } else {
      if (target.path) {
        const parsed = parsePathname(target.path);
        targetPath = parsed.path;
        targetTab = parsed.tab;
        targetServiceId = parsed.serviceId;
      } else if (target.serviceId) {
        targetServiceId = target.serviceId;
        targetTab = `servicio-${target.serviceId}`;
        targetPath = `/servicios/${target.serviceId}`;
      } else if (target.tab) {
        targetTab = target.tab;
        targetPath = getUrlForTab(target.tab, null);
      }
    }

    // Update browser history URL
    if (window.location.pathname !== targetPath) {
      if (replace) {
        window.history.replaceState({ path: targetPath, tab: targetTab, serviceId: targetServiceId }, '', targetPath);
      } else {
        window.history.pushState({ path: targetPath, tab: targetTab, serviceId: targetServiceId }, '', targetPath);
      }
    }

    setRoute({
      tab: targetTab,
      serviceId: targetServiceId,
      path: targetPath,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Listen to browser Back and Forward button events (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parsePathname(window.location.pathname);
      setRoute(parsed);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic SEO, Title, Meta, and Canonical Tag updates per independent URL
  useEffect(() => {
    const baseUrl = 'https://c-c-producciones.vercel.app';
    let title = 'C&C Producciones | Producción de Eventos Inolvidables';
    let description = 'Producción técnica y logística 360° para crear eventos inolvidables. Sonido profesional, pantallas LED y escenarios con C&C Producciones.';
    let canonicalUrl = `${baseUrl}${route.path === '/' ? '/' : route.path}`;

    if (route.serviceId) {
      const service = SERVICES_DATA.find((s) => s.id === route.serviceId);
      if (service) {
        title = `${service.name} | C&C Producciones - Eventos Inolvidables`;
        description = `${service.shortDesc} Alquiler y montaje profesional para eventos inolvidables con C&C Producciones.`;
        canonicalUrl = `${baseUrl}/servicios/${service.id}`;
      }
    } else {
      switch (route.tab) {
        case 'quienes-somos':
        case 'nosotros':
          title = 'Nosotros | C&C Producciones - Eventos Inolvidables';
          description = 'Conoce la trayectoria y experiencia de C&C Producciones en la asesoría, diseño y producción técnica de eventos inolvidables.';
          break;
        case 'servicios':
          title = 'Servicios de Producción | C&C Producciones - Eventos Inolvidables';
          description = 'Alquiler de pantallas LED, sonido profesional Line Array, tarimas, carpas e iluminación para eventos inolvidables.';
          break;
        case 'eventos':
          title = 'Eventos y Portafolio | C&C Producciones - Eventos Inolvidables';
          description = 'Explora nuestra galería de eventos corporativos, conciertos y montajes inolvidables producidos por C&C Producciones.';
          break;
        case 'blog':
          title = 'Blog Técnico de Producción | C&C Producciones - Eventos Inolvidables';
          description = 'Guías, consejos y mejores prácticas sobre sonorización, pantallas LED y producción técnica para eventos inolvidables.';
          break;
        case 'contacto':
          title = 'Contacto y Cotizaciones | C&C Producciones - Eventos Inolvidables';
          description = 'Cotiza tu evento inolvidable con nuestro equipo de ingenieros de producción. Atención técnica inmediata en WhatsApp +57 300 497 8810.';
          break;
        default:
          title = 'C&C Producciones | Producción de Eventos Inolvidables';
          description = 'Producción técnica y logística 360° para crear eventos inolvidables. Sonido profesional, pantallas LED y escenarios con C&C Producciones.';
          break;
      }
    }

    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);
  }, [route]);

  const handleSelectService = (id: ServiceId) => {
    navigate(`/servicios/${id}`);
  };

  const handleTabChange = (tab: string) => {
    if (tab.startsWith('/')) {
      navigate(tab);
    } else {
      navigate(tab);
    }
  };

  const handleOpenQuoteWithService = (id?: ServiceId) => {
    let message = '¡Hola C&C Producciones! Quisiera solicitar una cotización para un evento inolvidable.';
    if (id) {
      const service = SERVICES_DATA.find((s) => s.id === id);
      if (service) {
        message = `¡Hola C&C Producciones! Quisiera solicitar una cotización para el servicio de: ${service.name}.`;
      }
    }
    window.open(`https://wa.me/573004978810?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Render current independent page view based on active route
  const renderCurrentPage = () => {
    if (route.serviceId) {
      return (
        <ServiceDetailPage
          serviceId={route.serviceId}
          onNavigateTab={handleTabChange}
          onSelectService={handleSelectService}
          onOpenQuoteModal={handleOpenQuoteWithService}
        />
      );
    }

    switch (route.tab) {
      case 'quienes-somos':
      case 'nosotros':
        return (
          <AboutPage
            onOpenQuoteModal={() => handleOpenQuoteWithService()}
            onNavigateTab={handleTabChange}
          />
        );
      case 'servicios':
        return (
          <ServicesPage
            onSelectService={handleSelectService}
            onOpenQuoteModal={handleOpenQuoteWithService}
            onNavigateTab={handleTabChange}
          />
        );
      case 'eventos':
        return (
          <EventsPage
            onNavigateTab={handleTabChange}
            onOpenQuoteModal={() => handleOpenQuoteWithService()}
          />
        );
      case 'blog':
        return (
          <BlogPage
            onOpenQuoteModal={() => handleOpenQuoteWithService()}
            onNavigateTab={handleTabChange}
          />
        );
      case 'contacto':
        return (
          <ContactPage
            onOpenQuoteModal={() => handleOpenQuoteWithService()}
            onNavigateTab={handleTabChange}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            onSelectService={handleSelectService}
            onOpenQuoteModal={handleOpenQuoteWithService}
            onOpenAIChat={() => setIsAIChatOpen(true)}
            onNavigateTab={handleTabChange}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans antialiased selection:bg-[#C99327] selection:text-black custom-scrollbar relative overflow-x-hidden">
      
      {/* CINEMATIC LIGHT ATMOSPHERE ACCENTS */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-[#C99327]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* NAVBAR WITH INDEPENDENT LINKS */}
      <Navbar
        activeTab={route.tab}
        currentPath={route.path}
        setActiveTab={handleTabChange}
        selectedServiceId={route.serviceId}
        onSelectService={handleSelectService}
        onOpenQuoteModal={() => handleOpenQuoteWithService()}
        onOpenAIChat={() => setIsAIChatOpen(true)}
        onOpenSEOInspector={() => setIsSEOInspectorOpen(true)}
      />

      {/* DYNAMIC INDEPENDENT PAGE ROUTING */}
      {renderCurrentPage()}

      {/* FOOTER WITH INDEPENDENT LINKS */}
      <Footer
        onSelectService={handleSelectService}
        onOpenQuoteModal={() => handleOpenQuoteWithService()}
        onOpenSEOInspector={() => setIsSEOInspectorOpen(true)}
        onNavigateTab={handleTabChange}
      />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppFloatingButton />

      {/* AI ASSIST CHAT DRAWER */}
      <AIChatWidget
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        onOpenQuoteModal={() => handleOpenQuoteWithService()}
      />

      {/* SEO & SCHEMA INSPECTOR DRAWER */}
      <SEOInspectorDrawer
        isOpen={isSEOInspectorOpen}
        onClose={() => setIsSEOInspectorOpen(false)}
      />

    </div>
  );
}

export default App;
