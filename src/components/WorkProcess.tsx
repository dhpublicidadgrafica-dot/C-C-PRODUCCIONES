import React from 'react';
import { 
  Sparkles, 
  Search, 
  Calendar, 
  Box, 
  Sliders, 
  Wrench, 
  Play, 
  RotateCcw, 
  CheckCircle 
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/processData';

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  Calendar,
  Box,
  Sliders,
  Wrench,
  Play,
  RotateCcw,
  CheckCircle,
};

export const WorkProcess: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden" id="proceso-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-poppins font-normal uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Metodología de Trabajo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-poppins tracking-tight">
            Nuestro Proceso en 8 Pasos
          </h2>
          <p className="mt-4 text-base text-zinc-400 font-poppins font-normal">
            Un flujo estandarizado paso a paso que garantiza cero imprevistos el día de la ejecución.
          </p>
        </div>

        {/* TIMELINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => {
            const IconComp = ICON_MAP[step.iconName] || CheckCircle;

            return (
              <div
                key={step.number}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* STEP NUMBER BADGE */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-amber-400/20 text-amber-400 font-poppins font-bold text-lg flex items-center justify-center">
                    0{step.number}
                  </span>
                  <div className="p-2 rounded-xl bg-zinc-950 text-zinc-400 group-hover:text-amber-400 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2 flex-1">
                  <span className="text-[10px] font-poppins font-normal text-amber-400 uppercase tracking-widest block">
                    {step.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white font-poppins group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-poppins font-normal">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
