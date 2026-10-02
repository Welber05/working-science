import React from 'react';
import { SchoolCrest } from './SchoolCrest';
import { Calendar, Zap, Calculator, Flame, HelpCircle, FileText, Sparkles, Compass } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenGeminiModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenGeminiModal }) => {
  const navItems = [
    { id: 'cronograma', label: 'Cronograma Semanal', icon: Calendar },
    { id: 'fatura', label: 'Simuladores Práticos', icon: Zap },
    { id: 'auditoria', label: 'Auditoria & Campo', icon: Calculator },
    { id: 'matrizes', label: 'Química & Biologia', icon: Flame },
    { id: 'conceptests', label: 'Peer Instruction', icon: HelpCircle },
    { id: 'transversal', label: 'Matriz SEDU/ES', icon: Compass },
    { id: 'plano-acao', label: 'Plano Final', icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Brand title with Original School Crest, Large Bold PIV2026 and Smaller Italic Description */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('cronograma')}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <SchoolCrest className="w-9 h-9 hover:scale-105 transition-transform" />
              <div className="flex flex-col justify-center">
                <span className="text-xl font-black tracking-tight text-white font-heading group-hover:text-blue-400 transition-colors leading-none">
                  PIV2026
                </span>
                <span className="text-xs italic text-slate-300 font-serif mt-0.5 whitespace-nowrap">
                  Projeto Interdisciplinar Vespertino 2026
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Clean, unboxed segmented control) */}
          <nav className="hidden lg:flex items-center bg-slate-900/80 p-1 rounded-xl border border-slate-800/80">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenGeminiModal}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gerar c/ IA</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Scrollbar */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-800/60 no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-400 bg-slate-900 hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
