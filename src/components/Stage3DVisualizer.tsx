import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, Sparkles, Sliders, Play, Pause, RotateCcw, Calculator, Layers, Tv, Volume2 } from 'lucide-react';

interface Stage3DVisualizerProps {
  onQuoteThisStage: (stageDetails: string) => void;
}

export const Stage3DVisualizer: React.FC<Stage3DVisualizerProps> = ({
  onQuoteThisStage
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Controls
  const [stageWidth, setStageWidth] = useState<number>(18); // 10m to 30m
  const [ledScreenStyle, setLedScreenStyle] = useState<'center' | 'wings' | 'curved' | 'full_wall'>('center');
  const [lightingPreset, setLightingPreset] = useState<'gold_luxury' | 'cyan_neon' | 'magenta_purple' | 'full_rgb'>('gold_luxury');
  const [hasFog, setHasFog] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  // Animation frame reference
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const render = () => {
      time += 0.03;

      // Clear Canvas
      ctx.fillStyle = '#09090b'; // zinc-950
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const stageY = canvas.height * 0.7;
      const stagePixelWidth = Math.min(canvas.width * 0.8, stageWidth * 25);
      const stagePixelHeight = 45;

      // 1. DRAW BACKGROUND ATMOSPHERE & LIGHT BEAMS
      const lightColors = {
        gold_luxury: ['rgba(251, 191, 36, 0.25)', 'rgba(217, 119, 6, 0.2)', 'rgba(255, 255, 255, 0.3)'],
        cyan_neon: ['rgba(6, 182, 212, 0.25)', 'rgba(59, 130, 246, 0.2)', 'rgba(147, 51, 234, 0.2)'],
        magenta_purple: ['rgba(236, 72, 153, 0.25)', 'rgba(168, 85, 247, 0.2)', 'rgba(244, 63, 94, 0.2)'],
        full_rgb: ['rgba(239, 68, 68, 0.25)', 'rgba(34, 197, 94, 0.2)', 'rgba(59, 130, 246, 0.2)']
      }[lightingPreset];

      // Draw Top Truss Structure
      ctx.strokeStyle = '#3f3f46';
      ctx.lineWidth = 4;
      const trussY = 60;
      ctx.beginPath();
      ctx.moveTo(centerX - stagePixelWidth / 2 - 20, trussY);
      ctx.lineTo(centerX + stagePixelWidth / 2 + 20, trussY);
      ctx.stroke();

      // Crosshatch Truss Pattern
      ctx.lineWidth = 1.5;
      for (let x = centerX - stagePixelWidth / 2 - 20; x < centerX + stagePixelWidth / 2 + 20; x += 15) {
        ctx.beginPath();
        ctx.moveTo(x, trussY - 8);
        ctx.lineTo(x + 15, trussY + 8);
        ctx.stroke();
      }

      // Robotic Moving Head Lights Beam Sweep
      const numLights = 8;
      for (let i = 0; i < numLights; i++) {
        const lx = (centerX - stagePixelWidth / 2) + (stagePixelWidth / (numLights - 1)) * i;
        const angle = Math.sin(time + i * 0.5) * 0.4;
        const beamLength = stageY - trussY;
        const targetX = lx + Math.sin(angle) * beamLength;

        // Draw Light Fixture Body
        ctx.fillStyle = '#f4f4f5';
        ctx.fillRect(lx - 4, trussY, 8, 10);

        // Light Beam Cone
        const color = lightColors[i % lightColors.length];
        const grad = ctx.createLinearGradient(lx, trussY + 10, targetX, stageY);
        grad.addColorStop(0, color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(lx, trussY + 10);
        ctx.lineTo(targetX - 30, stageY);
        ctx.lineTo(targetX + 30, stageY);
        ctx.closePath();
        ctx.fill();
      }

      // 2. DRAW FOG / SMOKE PARTICLES IF ENABLED
      if (hasFog) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
        for (let p = 0; p < 25; p++) {
          const px = centerX + Math.sin(time + p) * (stagePixelWidth * 0.4);
          const py = stageY - 30 + Math.cos(time * 0.5 + p) * 20;
          ctx.beginPath();
          ctx.arc(px, py, 40 + (p % 10) * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 3. DRAW LED SCREENS
      if (ledScreenStyle === 'center') {
        const screenWidth = stagePixelWidth * 0.5;
        const screenHeight = 110;
        const screenX = centerX - screenWidth / 2;
        const screenY = stageY - screenHeight - 10;

        // Screen Frame
        ctx.fillStyle = '#18181b';
        ctx.fillRect(screenX - 4, screenY - 4, screenWidth + 8, screenHeight + 8);

        // Animated Screen Content
        const gradScreen = ctx.createLinearGradient(screenX, screenY, screenX + screenWidth, screenY + screenHeight);
        gradScreen.addColorStop(0, '#000000');
        gradScreen.addColorStop(0.5, lightingPreset === 'gold_luxury' ? '#78350f' : '#1e3a8a');
        gradScreen.addColorStop(1, '#000000');
        ctx.fillStyle = gradScreen;
        ctx.fillRect(screenX, screenY, screenWidth, screenHeight);

        // Animated LED Lines
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(centerX, screenY + screenHeight / 2, 25 + Math.sin(time) * 10, 0, Math.PI * 2);
        ctx.stroke();

      } else if (ledScreenStyle === 'wings') {
        // Main Screen + Side Wings
        const mainW = stagePixelWidth * 0.4;
        const wingW = stagePixelWidth * 0.2;
        const screenH = 100;
        const screenY = stageY - screenH - 10;

        // Main Center
        ctx.fillStyle = '#18181b';
        ctx.fillRect(centerX - mainW / 2, screenY, mainW, screenH);
        ctx.fillStyle = '#d97706';
        ctx.fillRect(centerX - mainW / 2 + 2, screenY + 2, mainW - 4, screenH - 4);

        // Left Wing
        const leftWingX = centerX - mainW / 2 - wingW - 15;
        ctx.fillStyle = '#18181b';
        ctx.fillRect(leftWingX, screenY + 10, wingW, screenH - 10);
        ctx.fillStyle = '#92400e';
        ctx.fillRect(leftWingX + 2, screenY + 12, wingW - 4, screenH - 14);

        // Right Wing
        const rightWingX = centerX + mainW / 2 + 15;
        ctx.fillStyle = '#18181b';
        ctx.fillRect(rightWingX, screenY + 10, wingW, screenH - 10);
        ctx.fillStyle = '#92400e';
        ctx.fillRect(rightWingX + 2, screenY + 12, wingW - 4, screenH - 14);

      } else if (ledScreenStyle === 'full_wall') {
        const wallW = stagePixelWidth * 0.85;
        const wallH = 130;
        const wallX = centerX - wallW / 2;
        const wallY = stageY - wallH - 5;

        ctx.fillStyle = '#09090b';
        ctx.fillRect(wallX, wallY, wallW, wallH);

        // Full LED Wall Motion Video Simulation
        const gradWall = ctx.createRadialGradient(centerX, wallY + wallH / 2, 10, centerX, wallY + wallH / 2, wallW / 2);
        gradWall.addColorStop(0, '#f59e0b');
        gradWall.addColorStop(0.7, '#78350f');
        gradWall.addColorStop(1, '#000000');
        ctx.fillStyle = gradWall;
        ctx.fillRect(wallX + 3, wallY + 3, wallW - 6, wallH - 6);
      }

      // 4. DRAW MAIN STAGE PLATFORM (3D PERSP)
      ctx.fillStyle = '#27272a'; // zinc-800
      ctx.beginPath();
      ctx.moveTo(centerX - stagePixelWidth / 2, stageY);
      ctx.lineTo(centerX + stagePixelWidth / 2, stageY);
      ctx.lineTo(centerX + stagePixelWidth / 2 + 25, stageY + stagePixelHeight);
      ctx.lineTo(centerX - stagePixelWidth / 2 - 25, stageY + stagePixelHeight);
      ctx.closePath();
      ctx.fill();

      // Stage Front Face
      ctx.fillStyle = '#18181b';
      ctx.beginPath();
      ctx.moveTo(centerX - stagePixelWidth / 2 - 25, stageY + stagePixelHeight);
      ctx.lineTo(centerX + stagePixelWidth / 2 + 25, stageY + stagePixelHeight);
      ctx.lineTo(centerX + stagePixelWidth / 2 + 25, stageY + stagePixelHeight + 15);
      ctx.lineTo(centerX - stagePixelWidth / 2 - 25, stageY + stagePixelHeight + 15);
      ctx.closePath();
      ctx.fill();

      // Front LED Strip Accent
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(centerX - stagePixelWidth / 2 - 25, stageY + stagePixelHeight, stagePixelWidth + 50, 3);

      if (isAnimating) {
        animationRef.current = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [stageWidth, ledScreenStyle, lightingPreset, hasFog, isAnimating]);

  const handleQuoteClick = () => {
    const details = `Escenario de ${stageWidth}m de ancho, Pantallas LED formato '${ledScreenStyle.toUpperCase()}', Iluminación Preset '${lightingPreset}', Hazer Fog: ${hasFog ? 'Sí' : 'No'}`;
    onQuoteThisStage(details);
  };

  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Visualizador de Escenarios 3D</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-poppins tracking-tight">
            Diseña tu Escenario en Tiempo Real
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Ajusta las dimensiones, la distribución de pantallas LED, el diseño de luces robóticas y efectos especiales antes de la instalación en el evento.
          </p>
        </div>

        {/* VISUALIZER CANVAS CONTAINER */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* CANVAS PREVIEW AREA */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-zinc-950 w-full overflow-hidden flex items-center justify-center">
            <canvas 
              ref={canvasRef} 
              width={1000} 
              height={450} 
              className="w-full h-full object-contain"
            />

            {/* LIVE OVERLAY BADGE */}
            <div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-zinc-800 text-xs text-zinc-300 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Simulación 3D Render DMX</span>
            </div>

            {/* ANIMATION CONTROL */}
            <button
              onClick={() => setIsAnimating(!isAnimating)}
              className="absolute top-4 right-4 bg-zinc-900/90 hover:bg-zinc-800 p-2 rounded-xl border border-zinc-800 text-amber-400 transition-colors"
              title={isAnimating ? 'Pausar Animación' : 'Reanudar Animación'}
            >
              {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>

          {/* CONTROLS DASHBOARD */}
          <div className="p-6 bg-zinc-900/95 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* STAGE WIDTH CONTROL */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono uppercase text-amber-400">Ancho de Escenario</label>
                <span className="text-xs font-mono font-bold text-white bg-zinc-800 px-2 py-0.5 rounded">
                  {stageWidth}m
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="30"
                step="2"
                value={stageWidth}
                onChange={(e) => setStageWidth(Number(e.target.value))}
                className="w-full accent-amber-400 h-2 bg-zinc-800 rounded cursor-pointer"
              />
              <div className="text-[10px] text-zinc-500 font-mono mt-1">
                Superficie aproximada: {stageWidth * 8} m²
              </div>
            </div>

            {/* LED SCREEN LAYOUT */}
            <div>
              <label className="block text-xs font-mono uppercase text-amber-400 mb-2">Configuración Pantallas LED</label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setLedScreenStyle('center')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-colors ${
                    ledScreenStyle === 'center' ? 'bg-amber-400 text-zinc-950 font-bold' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  Central UHD
                </button>
                <button
                  type="button"
                  onClick={() => setLedScreenStyle('wings')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-colors ${
                    ledScreenStyle === 'wings' ? 'bg-amber-400 text-zinc-950 font-bold' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  Con Alas (Wings)
                </button>
                <button
                  type="button"
                  onClick={() => setLedScreenStyle('full_wall')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-colors ${
                    ledScreenStyle === 'full_wall' ? 'bg-amber-400 text-zinc-950 font-bold' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  Wall 360°
                </button>
              </div>
            </div>

            {/* LIGHTING PALETTE */}
            <div>
              <label className="block text-xs font-mono uppercase text-amber-400 mb-2">Atmósfera de Luces</label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setLightingPreset('gold_luxury')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-colors ${
                    lightingPreset === 'gold_luxury' ? 'bg-amber-400 text-zinc-950 font-bold' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  Dorado Luxury
                </button>
                <button
                  type="button"
                  onClick={() => setLightingPreset('cyan_neon')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-colors ${
                    lightingPreset === 'cyan_neon' ? 'bg-amber-400 text-zinc-950 font-bold' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  Cian Neón
                </button>
                <button
                  type="button"
                  onClick={() => setLightingPreset('magenta_purple')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-colors ${
                    lightingPreset === 'magenta_purple' ? 'bg-amber-400 text-zinc-950 font-bold' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  Magenta Fest
                </button>
              </div>
            </div>

            {/* FOG TOGGLE & QUOTE BUTTON */}
            <div className="flex flex-col justify-between gap-3">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-zinc-300">
                <input
                  type="checkbox"
                  checked={hasFog}
                  onChange={(e) => setHasFog(e.target.checked)}
                  className="accent-amber-400 w-4 h-4 rounded"
                />
                <span>Hazer & Humo denso (Efectos)</span>
              </label>

              <button
                onClick={handleQuoteClick}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
              >
                <Calculator className="w-4 h-4" />
                Cotizar este Montaje
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
