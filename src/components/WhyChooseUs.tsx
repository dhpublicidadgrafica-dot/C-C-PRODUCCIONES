import React from 'react';
import { 
  Sparkles, 
  Users, 
  Cpu, 
  Clock, 
  Globe2, 
  Truck, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Headphones 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Personal Especializado',
      desc: 'Ingenieros de audio titulados, operadores DMX certificados y riggers con entrenamiento en alturas.'
    },
    {
      icon: Cpu,
      title: 'Equipos de Última Generación',
      desc: 'Sistemas d&b, L-Acoustics, consolas DiGiCo, procesadores Novastar 4K y pantallas P2.5/P3.9.'
    },
    {
      icon: Clock,
      title: 'Respuesta Rápida & Inmediata',
      desc: 'Atención personalizada para cotizaciones inmediatas con asesor técnico asignado.'
    },
    {
      icon: Globe2,
      title: 'Cobertura Nacional',
      desc: 'Centros logísticos estratégicos para operabilidad en todo el territorio nacional.'
    },
    {
      icon: Truck,
      title: 'Logística Integral',
      desc: 'Nos encargamos del transporte, permisos, pruebas eléctricas, montaje y operación continua.'
    },
    {
      icon: ShieldCheck,
      title: 'Puntualidad & Garantía',
      desc: 'Cumplimiento estricto del cronograma de montaje sin retrasos en el inicio del evento.'
    }
  ];

  return (
    <section className="py-24 bg-white text-zinc-900 relative" id="por-que-elegirnos-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C99327]/10 border border-[#C99327]/30 text-[#C99327] text-xs font-poppins font-normal uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Diferenciales de Excelencia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 font-poppins tracking-tight">
            Por Que Elegirnos
          </h2>
          <p className="mt-4 text-base text-zinc-600 font-poppins font-normal">
            Tranquilidad absoluta para tu empresa con un aliado técnico que responde antes, durante y después del evento.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-[#C99327]/50 transition-all duration-300 hover:shadow-lg shadow-sm space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C99327]/15 text-[#C99327] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 font-poppins group-hover:text-[#C99327] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-poppins font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
