import React from 'react';
import { GradeLevel } from '../types/project';
import { PROJECTS_BY_GRADE } from '../data/projectData';

interface GradeSelectorProps {
  selectedGrade: GradeLevel;
  onSelectGrade: (grade: GradeLevel) => void;
}

export const GradeSelector: React.FC<GradeSelectorProps> = ({ selectedGrade, onSelectGrade }) => {
  const grades: GradeLevel[] = ['1a_serie', '2a_serie', '3a_serie'];

  return (
    <div className="bg-slate-900/80 border-b border-slate-800/80 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-slate-300 font-heading">
            Selecione o Projeto da Série:
          </span>
        </div>

        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
          {grades.map((gradeId) => {
            const project = PROJECTS_BY_GRADE[gradeId];
            const isSelected = selectedGrade === gradeId;

            return (
              <button
                key={gradeId}
                onClick={() => onSelectGrade(gradeId)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  isSelected
                    ? 'bg-blue-600 text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <span>{project.icon}</span>
                <span>{project.gradeTitle.split(' - ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
