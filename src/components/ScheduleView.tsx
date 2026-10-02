import React, { useState } from 'react';
import { GradeProject, DayOfWeek } from '../types/project';
import { BookOpen, Users, HelpCircle, FileText, CheckCircle2, Award, Lightbulb, FlaskConical, Play } from 'lucide-react';

interface ScheduleViewProps {
  project: GradeProject;
  onSelectConceptest?: (questionId: string) => void;
}

export const ScheduleView: React.FC<ScheduleViewProps> = ({ project }) => {
  const [activeDay, setActiveDay] = useState<DayOfWeek>('segunda');

  const days: { id: DayOfWeek; name: string }[] = [
    { id: 'segunda', name: 'Segunda-feira' },
    { id: 'terca', name: 'Terça-feira' },
    { id: 'quarta', name: 'Quarta-feira' },
    { id: 'quinta', name: 'Quinta-feira' },
    { id: 'sexta', name: 'Sexta-feira' },
  ];

  const currentDaySchedule = project.weeklySchedule.find(d => d.id === activeDay) || project.weeklySchedule[0];

  return (
    <div className="space-y-6">
      {/* Project Title & Series Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
              <span>{project.icon}</span>
              <span>{project.gradeTitle}</span>
              <span>•</span>
              <span className="text-slate-400">{project.totalClasses}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {project.projectTitle}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-3xl">
              {project.themeSubtitle}
            </p>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
            <div><strong className="text-white">Público:</strong> {project.targetTurma}</div>
            <div><strong className="text-white">Metodologias:</strong> Peer Instruction, Plickers, Investigação</div>
          </div>
        </div>

        {/* Day Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-6 pt-4 border-t border-slate-800">
          {days.map((day) => {
            const dayData = project.weeklySchedule.find(d => d.id === day.id);
            const isSelected = activeDay === day.id;
            return (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`p-3 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-blue-600 border-blue-500 text-white font-semibold shadow-sm'
                    : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <div className="text-xs font-bold font-heading">{day.name}</div>
                <div className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
                  {dayData?.classCount || '2 Aulas'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Day Details */}
      <div className="space-y-6">
        {/* Day Header Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1 font-heading">
                {currentDaySchedule.dayName} · {currentDaySchedule.classCount}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                {currentDaySchedule.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                {currentDaySchedule.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {currentDaySchedule.mainSubjects.map((sub, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-slate-800 border border-slate-700/80 rounded-md text-xs font-medium text-slate-200"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Disparadora Question Callout */}
          <div className="bg-slate-950 p-4 rounded-xl border border-blue-500/30">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block font-heading">
                  Pergunta Disparadora (Investigação Inicial)
                </span>
                <p className="text-slate-100 text-sm font-medium mt-1 leading-relaxed">
                  "{currentDaySchedule.disparadoraQuestion}"
                </p>
              </div>
            </div>
          </div>

          {/* Summary & Teachers */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs pt-2">
            <div className="md:col-span-8 space-y-2">
              <span className="font-semibold text-slate-300 block">Resumo do Dia:</span>
              <p className="text-slate-400 leading-relaxed">{currentDaySchedule.summary}</p>
            </div>

            <div className="md:col-span-4 space-y-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="font-semibold text-slate-300 block">Docentes Responsáveis:</span>
              <p className="text-slate-400">{currentDaySchedule.responsibleTeachers}</p>
            </div>
          </div>

          {/* UNESCO 4 Pillars, ERER & DUA Transversal Section */}
          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-amber-400 font-heading uppercase tracking-wider block">
              🌐 Articulação dos Eixos Transversais SEDU/ES 2026:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                <strong className="text-amber-300 block font-heading">✊ ERER (Leis 10.639/03 e 11.645/08):</strong>
                <p className="text-slate-300 leading-relaxed font-normal">
                  {currentDaySchedule.ererContext || 'Valorização das contribuições científicas, racismo ambiental nas cidades e saberes ancestrais quilombolas e indígenas no Espírito Santo.'}
                </p>
              </div>

              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                <strong className="text-cyan-300 block font-heading">♿ DUA (Desenho Universal):</strong>
                <ul className="list-disc list-inside text-slate-300 space-y-0.5 font-normal">
                  <li><strong>Representação:</strong> {currentDaySchedule.duaAccessibility?.representation || 'Suporte áudio, tátil, alto contraste e gráficos visualmente estruturados.'}</li>
                  <li><strong>Ação/Expressão:</strong> {currentDaySchedule.duaAccessibility?.expression || 'Respostas via Plickers, aplicativo interativo ou cartazes.'}</li>
                </ul>
              </div>

              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                <strong className="text-purple-300 block font-heading">❤️ 4 Pilares da UNESCO:</strong>
                <ul className="list-disc list-inside text-slate-300 space-y-0.5 font-normal">
                  <li><strong>Saber:</strong> {currentDaySchedule.unescoPillars?.saber || 'Conceitos científicos fundamentais.'}</li>
                  <li><strong>Fazer:</strong> {currentDaySchedule.unescoPillars?.fazer || 'Prototipagem, sensores e simulações.'}</li>
                  <li><strong>Viver Juntos:</strong> {currentDaySchedule.unescoPillars?.viverJuntos || 'Peer Instruction e empatia.'}</li>
                  <li><strong>Ser:</strong> {currentDaySchedule.unescoPillars?.ser || 'Autonomia e ética.'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BNCC Skills & Core Concepts */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-3 border-t border-slate-800/80">
            <div className="md:col-span-5 space-y-2">
              <span className="text-xs font-semibold text-slate-300 block">Habilidades BNCC Alinhadas:</span>
              <div className="flex flex-wrap gap-1.5">
                {currentDaySchedule.bnccSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded text-[11px] font-mono font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 space-y-2">
              <span className="text-xs font-semibold text-slate-300 block">Conceitos-Chave da Aula:</span>
              <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                {currentDaySchedule.coreConcepts.map((concept, i) => (
                  <li key={i}>{concept}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-step Lesson Sequence (Abertura, Desenvolvimento, Fechamento) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
            <Play className="w-4 h-4 text-amber-400" />
            <span>Sequência Didática Detalhada Passo a Passo</span>
          </h4>

          <div className="space-y-4">
            {currentDaySchedule.lessonSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-white font-heading">
                      {step.phase} ({step.duration})
                    </span>
                  </div>
                  <span className="text-[11px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded font-medium">
                    {step.activeMethodology}
                  </span>
                </div>

                <div>
                  <h5 className="text-sm font-bold text-slate-200">{step.title}</h5>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{step.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800/80 space-y-1">
                    <strong className="text-amber-400 block font-heading">Ações do Professor:</strong>
                    <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                      {step.teacherActions.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800/80 space-y-1">
                    <strong className="text-blue-400 block font-heading">Ações do Estudante:</strong>
                    <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                      {step.studentActions.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Laboratory / Practical Protocol if available */}
        {currentDaySchedule.labProtocol && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-emerald-400" />
              <span>Roteiro do Laboratório & Coleta de Dados Práticos</span>
            </h4>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <h5 className="text-sm font-bold text-emerald-300 font-heading">
                  {currentDaySchedule.labProtocol.title}
                </h5>
                <span className="text-xs text-slate-400">
                  <strong>Objetivo:</strong> {currentDaySchedule.labProtocol.objective}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300 block">Materiais e Insumos:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentDaySchedule.labProtocol.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded text-xs"
                    >
                      • {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-slate-300 block">Procedimento Experimental:</span>
                <ol className="list-decimal list-inside text-xs text-slate-300 space-y-1">
                  {currentDaySchedule.labProtocol.procedureSteps.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ol>
              </div>

              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-300 block mb-1">
                  Cabeçalho da Tabela de Registro dos Alunos:
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {currentDaySchedule.labProtocol.dataCollectionTableHeaders.map((header, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-900 text-amber-300 border border-slate-800 rounded">
                      [{header}]
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Peer Instruction & Plickers Conceptest Preview */}
        {currentDaySchedule.peerQuestions.length > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400" />
                <span>Questões Conceptest para Peer Instruction / Plickers</span>
              </h4>
              <span className="text-xs text-slate-400 font-mono">
                {currentDaySchedule.peerQuestions.length} Questões Disponíveis
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {currentDaySchedule.peerQuestions.map((q) => (
                <div key={q.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-purple-300 font-heading">
                      {q.subject} · {q.topic}
                    </span>
                    {q.plickersCardCode && (
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded font-mono">
                        {q.plickersCardCode}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-white font-medium">{q.question}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-lg border ${
                          idx === q.correctAnswerIndex
                            ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-200 font-semibold'
                            : 'bg-slate-900 border-slate-800 text-slate-300'
                        }`}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-900/90 p-3 rounded-lg text-xs space-y-1 border border-slate-800">
                    <strong className="text-amber-400 block font-heading">💡 Dica de Mediação para o Professor:</strong>
                    <p className="text-slate-300 leading-relaxed">{q.teacherMediationTip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Evaluation Rubric */}
        {currentDaySchedule.evaluationRubric.length > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Rubrica de Avaliação Formativa</span>
            </h4>

            <div className="grid grid-cols-1 gap-3 text-xs">
              {currentDaySchedule.evaluationRubric.map((rubric, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <span className="font-bold text-amber-300 text-sm block font-heading">
                    Critério: {rubric.criteria}
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg">
                      <strong className="text-emerald-400 block mb-1 font-heading">Excelente (100%):</strong>
                      <p className="text-emerald-200">{rubric.excellent}</p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg">
                      <strong className="text-blue-400 block mb-1 font-heading">Satisfatório (70%):</strong>
                      <p className="text-blue-200">{rubric.satisfactory}</p>
                    </div>
                    <div className="bg-rose-500/10 border border-rose-500/20 p-3 rounded-lg">
                      <strong className="text-rose-400 block mb-1 font-heading">Em Desenvolvimento (&lt;50%):</strong>
                      <p className="text-rose-200">{rubric.needsImprovement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
