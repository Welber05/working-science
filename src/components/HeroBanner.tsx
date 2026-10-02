import React from 'react';
import { SchoolCrest } from './SchoolCrest';
import { School, ChevronRight, Zap, Lightbulb } from 'lucide-react';

interface HeroBannerProps {
  onSelectTab: (tab: string) => void;
  onOpenGemini: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onSelectTab, onOpenGemini }) => {
  return (
    <div className="bg-slate-900/60 border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-4 max-w-3xl">
          {/* Unboxed Metadata Header */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 font-semibold text-blue-400">
              <School className="w-3.5 h-3.5" />
              EEEFM "Antônio dos Santos Neves"
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Boa Esperança - ES</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Vespertino (11 Aulas)</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-amber-400 font-medium">Matemática & Ciências da Natureza</span>
          </div>

          {/* Clean Headline & Subtitle */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug font-heading">
              Projetos Integradores Interdisciplinares <span className="text-amber-400">2026</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Planejamento pedagógico e simuladores práticos alinhados à SEDU/ES, unindo Matemática, Física (Prof. Welber), Química e Biologia com metodologias ativas e uso de tecnologia na escola.
            </p>
          </div>

          {/* Quick Actions Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={() => onSelectTab('cronograma')}
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Ver Cronograma da Semana</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onSelectTab('fatura')}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Simuladores Práticos</span>
            </button>

            <button
              onClick={onOpenGemini}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700/80 font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>IA Pedagógica</span>
            </button>
          </div>
        </div>

        {/* Official School Crest Emblem Badge */}
        <div className="hidden sm:flex items-center justify-center p-4 bg-slate-950/80 rounded-2xl border border-slate-800 shrink-0">
          <SchoolCrest className="w-24 h-28 drop-shadow-md" />
        </div>
      </div>
    </div>
  );
};
