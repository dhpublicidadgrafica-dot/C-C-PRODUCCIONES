import React, { useState } from 'react';
import { X, Search, Code, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

interface SEOInspectorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SEOInspectorDrawer: React.FC<SEOInspectorDrawerProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "CyC Producciones",
    "description": "Empresa de producción técnica, logística integral, sonido profesional Line Array, pantallas LED y tarimas para eventos.",
    "url": "https://cycproducciones.com",
    "logo": "https://cycproducciones.com/logo.png",
    "telephone": "+573004978810",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrera 55 # 1B-19",
      "addressLocality": "Medellín",
      "addressCountry": "CO"
    },
    "priceRange": "$$$$"
  };

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-full sm:w-[480px] bg-zinc-900 border-r border-amber-500/30 shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
      
      {/* HEADER */}
      <div className="p-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold text-white font-poppins">Inspector de SEO & Metadatos</h3>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 overflow-y-auto space-y-6 custom-scrollbar text-xs font-mono">
        
        {/* TITLE & META TAGS */}
        <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
          <div className="text-amber-400 uppercase font-bold text-[10px]">Title Tag Actual</div>
          <div className="text-white font-semibold font-sans text-xs">
            CyC Producciones | Producción de Eventos, Alquiler de Luces, Sonido y Pantallas LED
          </div>
          <div className="text-emerald-400 text-[10px] flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> Longitud Óptima (71 caracteres)
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
          <div className="text-amber-400 uppercase font-bold text-[10px]">Meta Description</div>
          <div className="text-zinc-300 font-sans text-xs leading-relaxed">
            Empresa líder en producción de eventos corporativos, sociales y conciertos. Alquiler de sonido Line Array, pantallas LED 4K, carpas, tarimas y logística 360°.
          </div>
          <div className="text-emerald-400 text-[10px] flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> Longitud Óptima (158 caracteres)
          </div>
        </div>

        {/* OPEN GRAPH SOCIAL PREVIEW */}
        <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
          <div className="text-amber-400 uppercase font-bold text-[10px]">Vista Previa Open Graph (Facebook / WhatsApp / LinkedIn)</div>
          
          <div className="rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900">
            <img 
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80" 
              alt="OG Preview" 
              className="w-full h-32 object-cover"
            />
            <div className="p-3 space-y-1">
              <span className="text-[9px] text-zinc-500 uppercase block">CYCPRODUCCIONES.COM</span>
              <span className="text-xs font-bold text-white block">CyC Producciones | Eventos Luxury</span>
              <span className="text-[11px] text-zinc-400 block line-clamp-2">Producción integral de eventos con tecnología de punto de referencia mundial.</span>
            </div>
          </div>
        </div>

        {/* JSON-LD SCHEMA */}
        <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
          <div className="text-amber-400 uppercase font-bold text-[10px] flex items-center gap-1">
            <Code className="w-3.5 h-3.5" /> Schema.org JSON-LD (Organization)
          </div>
          <pre className="p-3 rounded-xl bg-zinc-900 text-[10px] text-emerald-400 overflow-x-auto max-h-48">
            {JSON.stringify(organizationSchema, null, 2)}
          </pre>
        </div>

        {/* SITEMAP DYNAMIC API LINK */}
        <div className="pt-2">
          <a
            href="/api/seo-sitemap"
            target="_blank"
            rel="noreferrer"
            className="w-full p-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs font-sans uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>Ver Sitemap XML Dinámico Completo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

    </div>
  );
};
