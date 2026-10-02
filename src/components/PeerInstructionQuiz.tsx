import React, { useState } from 'react';
import { GradeLevel, PeerQuestion } from '../types/project';
import { PROJECTS_BY_GRADE } from '../data/projectData';
import { HelpCircle, CheckCircle2, XCircle, Users, RefreshCw, Printer } from 'lucide-react';

interface PeerInstructionQuizProps {
  selectedGrade: GradeLevel;
}

export const PeerInstructionQuiz: React.FC<PeerInstructionQuizProps> = ({ selectedGrade }) => {
  const currentProject = PROJECTS_BY_GRADE[selectedGrade];
  
  // Aggregate all questions for the current selected grade
  const allQuestions: PeerQuestion[] = currentProject.weeklySchedule.flatMap(d => d.peerQuestions);

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [simulatedVotes, setSimulatedVotes] = useState<{ [key: number]: number }>({ 0: 15, 1: 45, 2: 25, 3: 15 });

  const currentQuestion = allQuestions[selectedQuestionIndex] || allQuestions[0];

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
    setShowExplanation(true);
  };

  const handleResetQuiz = () => {
    setSelectedOption(null);
    setShowExplanation(false);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-md text-xs font-semibold text-purple-300 mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Banco de Conceptests & Plickers · Metodologia Ativa</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-heading">
              Peer Instruction (Instrução por Pares) & Votação Plickers
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Questões conceituais preparadas para aplicação na sala de aula da EEEFM Antônio dos Santos Neves com mediação e debate em duplas.
            </p>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300">
            <div><strong className="text-white">Série Atual:</strong> {currentProject.gradeTitle}</div>
            <div><strong className="text-white font-mono">{allQuestions.length} Questões</strong> Prontas para Uso</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Question Navigator Sidebar */}
        <div className="lg:col-span-4 space-y-3 bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-heading">
            Selecione o Conceptest ({currentProject.gradeTitle.split(' - ')[0]}):
          </h3>

          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
            {allQuestions.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => {
                  setSelectedQuestionIndex(idx);
                  handleResetQuiz();
                }}
                className={`w-full text-left p-3 rounded-xl border transition-all text-xs ${
                  selectedQuestionIndex === idx
                    ? 'bg-purple-500/15 border-purple-500/50 text-white font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-purple-400 font-bold font-heading">{q.subject}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{q.plickersCardCode}</span>
                </div>
                <p className="line-clamp-2 text-slate-300 font-normal">{q.question}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Question Card */}
        <div className="lg:col-span-8 space-y-6">
          {currentQuestion && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block font-heading">
                    {currentQuestion.subject} · {currentQuestion.topic}
                  </span>
                  <span className="text-xs text-slate-400">
                    Dia do Projeto: {currentQuestion.day.toUpperCase()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded font-mono text-xs font-bold">
                    {currentQuestion.plickersCardCode}
                  </span>
                </div>
              </div>

              {/* Question Enunciate */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                  {currentQuestion.question}
                </p>
              </div>

              {/* Options Grid */}
              <div className="space-y-2.5">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.correctAnswerIndex;

                  let borderStyle = 'border-slate-800 bg-slate-950 text-slate-200 hover:border-slate-700';

                  if (showExplanation) {
                    if (isCorrect) {
                      borderStyle = 'bg-emerald-500/15 border-emerald-500/60 text-emerald-200 font-semibold';
                    } else if (isSelected) {
                      borderStyle = 'bg-rose-500/15 border-rose-500/60 text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs sm:text-sm flex items-center justify-between ${borderStyle}`}
                    >
                      <span>{opt}</span>
                      {showExplanation && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {showExplanation && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Teacher Tip Box */}
              {showExplanation && (
                <div className="space-y-3 pt-2">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl text-xs space-y-1">
                    <strong className="text-emerald-400 block font-heading text-sm">
                      ✅ Justificação Científica:
                    </strong>
                    <p className="text-emerald-100 leading-relaxed">{currentQuestion.explanation}</p>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl text-xs space-y-1">
                    <strong className="text-amber-400 block font-heading text-sm">
                      🗣️ Roteiro de Mediação do Professor (Peer Instruction):
                    </strong>
                    <p className="text-amber-100 leading-relaxed">{currentQuestion.teacherMediationTip}</p>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleResetQuiz}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Refazer Votação</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
