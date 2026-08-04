import React from 'react';
import { Sparkles, ShieldCheck, Award, Users, Target, Eye, Heart, Clock } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const timeline = [
    { year: '2010', title: 'Fundación de CyC', desc: 'Inicio de operaciones con foco en sonido profesional y tarimas modulares para eventos empresariales.' },
    { year: '2015', title: 'Expansión de Pantallas LED', desc: 'Adquisición de los primeros 100m² de tecnología LED P3.9 Outdoor y consolas de iluminación DMX.' },
    { year: '2020', title: 'Streaming 4K & Renders 3D', desc: 'Implementación de servidores de medios Barco E2 y salas de simulación tridimensional para congresos.' },
    { year: '2026', title: 'Líderes de Mercado', desc: 'Mas de 500 eventos ejecutados con 100% de cumplimiento técnico en cobertura nacional e internacional.' }
  ];

  return (
    <section className="py-24 bg-white text-zinc-900 relative" id="quienes-somos-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 font-poppins tracking-tight">
            Ingeniería & Pasión por la Producción de Eventos
          </h2>
        </div>

        {/* MISSION, VISION, VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="bg-zinc-50 border border-zinc-200/80 p-8 rounded-3xl space-y-4 hover:border-[#C99327]/50 shadow-sm transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#C99327]/15 text-[#C99327] flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 font-poppins">Nuestra Misión</h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-poppins">
              Transformar cada evento en una experiencia sensorial inolvidable mediante el uso de tecnología audiovisual de vanguardia, ingeniería certificada y un servicio de producción ejecutiva cálido y riguroso.
            </p>
          </div>

          <div className="bg-zinc-50 border border-zinc-200/80 p-8 rounded-3xl space-y-4 hover:border-[#C99327]/50 shadow-sm transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#C99327]/15 text-[#C99327] flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 font-poppins">Nuestra Visión</h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-poppins">
              Ser consolidados como la empresa número uno de producción integral de eventos en Colombia, reconocida por nuestro estándar de innovación, calidad y garantía total de satisfacción.
            </p>
          </div>

          <div className="bg-zinc-50 border border-zinc-200/80 p-8 rounded-3xl space-y-4 hover:border-[#C99327]/50 shadow-sm transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#C99327]/15 text-[#C99327] flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 font-poppins">Nuestros Valores</h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-poppins">
              Puntualidad, precisión en montajes, seguridad de personal y asistentes, innovación continua y comunicación transparente con nuestros clientes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
