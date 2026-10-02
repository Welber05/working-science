import React from 'react';
import { Zap } from 'lucide-react';

interface SchoolCrestProps {
  className?: string;
  size?: number;
}

export const SchoolCrest: React.FC<SchoolCrestProps> = ({ className = "w-10 h-10", size }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-2 text-slate-950 shadow-md shadow-amber-500/20 border border-amber-300/40 shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Ícone de Eficiência Energética (Raio)"
    >
      <Zap className="w-full h-full fill-slate-950 text-slate-950 stroke-[2.25]" />
      {/* Decorative Glow */}
      <span className="absolute -inset-0.5 rounded-xl bg-amber-400/30 blur-sm -z-10" />
    </div>
  );
};
