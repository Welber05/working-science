import React, { useState } from 'react';
import { GradeLevel } from './types/project';
import { PROJECTS_BY_GRADE } from './data/projectData';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { GradeSelector } from './components/GradeSelector';
import { ScheduleView } from './components/ScheduleView';
import { BillSimulator } from './components/BillSimulator';
import { AuditCalculator } from './components/AuditCalculator';
import { HeatIslandSimulator } from './components/HeatIslandSimulator';
import { PharmacokineticsSimulator } from './components/PharmacokineticsSimulator';
import { MatrixChemistryLab } from './components/MatrixChemistryLab';
import { PeerInstructionQuiz } from './components/PeerInstructionQuiz';
import { ActionPlanGenerator } from './components/ActionPlanGenerator';
import { ErerDuaHub } from './components/ErerDuaHub';
import { GeminiPedagogicalModal } from './components/GeminiPedagogicalModal';

export default function App() {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('1a_serie');
  const [activeTab, setActiveTab] = useState<string>('cronograma');
  const [isGeminiModalOpen, setIsGeminiModalOpen] = useState<boolean>(false);

  const currentProject = PROJECTS_BY_GRADE[selectedGrade];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenGeminiModal={() => setIsGeminiModalOpen(true)}
      />

      {/* Grade / Series Switcher Bar */}
      <GradeSelector
        selectedGrade={selectedGrade}
        onSelectGrade={setSelectedGrade}
      />

      {/* Main Content Area */}
      <main className="flex-1 space-y-0">
        {/* Hero Section */}
        <HeroBanner
          onSelectTab={setActiveTab}
          onOpenGemini={() => setIsGeminiModalOpen(true)}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* Tab 1: Weekly Schedule (11 Aulas) */}
          {activeTab === 'cronograma' && (
            <ScheduleView project={currentProject} />
          )}

          {/* Tab 2: Mathematical / Physical Simulator */}
          {activeTab === 'fatura' && (
            <div className="space-y-8">
              {selectedGrade === '1a_serie' && <BillSimulator />}
              {selectedGrade === '2a_serie' && <HeatIslandSimulator />}
              {selectedGrade === '3a_serie' && <PharmacokineticsSimulator />}
            </div>
          )}

          {/* Tab 3: School Audit & Field Inventory */}
          {activeTab === 'auditoria' && (
            <div className="space-y-8">
              {selectedGrade === '1a_serie' && <AuditCalculator />}
              {selectedGrade === '2a_serie' && <HeatIslandSimulator />}
              {selectedGrade === '3a_serie' && <PharmacokineticsSimulator />}
            </div>
          )}

          {/* Tab 4: Chemistry & Biology Interdisciplinary Lab */}
          {activeTab === 'matrizes' && (
            <MatrixChemistryLab />
          )}

          {/* Tab 5: Peer Instruction & Plickers Conceptest Hub */}
          {activeTab === 'conceptests' && (
            <PeerInstructionQuiz selectedGrade={selectedGrade} />
          )}

          {/* Tab 6: SEDU/ES Transversal Axes (ERER, DUA, UNESCO) */}
          {activeTab === 'transversal' && (
            <ErerDuaHub selectedGrade={selectedGrade} />
          )}

          {/* Tab 7: Final Action Plan & Printable Output */}
          {activeTab === 'plano-acao' && (
            <ActionPlanGenerator selectedGrade={selectedGrade} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400 space-y-2">
        <div className="flex items-center justify-center gap-2 font-heading font-bold text-slate-300">
          <span>⚡ PIV2026</span>
          <span>·</span>
          <span className="italic">Projeto Interdisciplinar Vespertino 2026</span>
          <span>·</span>
          <span>EEEFM "Antônio dos Santos Neves"</span>
        </div>
        <p>
          Projetos Integradores Interdisciplinares de Ciências da Natureza e Matemática · Ensino Médio Vespertino
        </p>
      </footer>

      {/* AI Pedagogical Modal */}
      <GeminiPedagogicalModal
        isOpen={isGeminiModalOpen}
        onClose={() => setIsGeminiModalOpen(false)}
      />
    </div>
  );
}
