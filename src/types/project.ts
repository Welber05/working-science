export type GradeLevel = '1a_serie' | '2a_serie' | '3a_serie';

export type DayOfWeek = 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta';

export type SubjectCategory = 'Matemática' | 'Física' | 'Química' | 'Biologia' | 'Aprofundamento Interdisciplinar';

export interface LessonStep {
  phase: 'Abertura / Problematização' | 'Desenvolvimento / Investigação' | 'Fechamento / Sistematização';
  duration: string;
  title: string;
  description: string;
  teacherActions: string[];
  studentActions: string[];
  activeMethodology: string;
  duaAdaptation?: string;
}

export interface DaySchedule {
  id: DayOfWeek;
  dayName: string;
  classCount: string;
  title: string;
  subtitle: string;
  mainSubjects: SubjectCategory[];
  responsibleTeachers: string;
  bnccSkills: string[];
  coreConcepts: string[];
  disparadoraQuestion: string;
  summary: string;
  
  // Transversal Axes (SEDU/ES)
  ererContext?: string;
  unescoPillars?: {
    saber: string;
    fazer: string;
    viverJuntos: string;
    ser: string;
  };
  duaAccessibility?: {
    representation: string;
    expression: string;
    engagement: string;
  };

  lessonSteps: LessonStep[];
  labProtocol?: {
    title: string;
    objective: string;
    materials: string[];
    procedureSteps: string[];
    dataCollectionTableHeaders: string[];
  };
  peerQuestions: PeerQuestion[];
  evaluationRubric: {
    criteria: string;
    excellent: string;
    satisfactory: string;
    needsImprovement: string;
  }[];
}

export interface GradeProject {
  id: GradeLevel;
  gradeTitle: string;
  projectTitle: string;
  themeSubtitle: string;
  objective: string;
  targetTurma: string;
  totalClasses: string;
  icon: string;
  colorTheme: string;
  ererHighlight?: string;
  weeklySchedule: DaySchedule[];
}

export interface PeerQuestion {
  id: string;
  gradeLevel: GradeLevel;
  day: DayOfWeek;
  subject: SubjectCategory;
  topic: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  teacherMediationTip: string;
  plickersCardCode?: string;
  ererNote?: string;
}

// 1ª Série Specific
export interface EnergyMatrixSource {
  id: string;
  name: string;
  type: 'Renovável' | 'Não Renovável';
  shareBrazilPercentage: number;
  shareESPercentage: number;
  co2GramsPerKwh: number;
  costPerMwh: number;
  pros: string[];
  cons: string[];
  combustionEquation?: string;
}

export interface SchoolEquipment {
  id: string;
  name: string;
  location: 'Sala 3ª V01' | 'Demais Salas Vespertino' | 'Laboratório de Informática' | 'Cantina / Cozinha' | 'Secretaria / Direção' | 'Áreas Comuns / Pátio';
  category: 'Climatização' | 'Iluminação' | 'Refrigeração' | 'Informática' | 'Outros';
  nominalPowerWatts: number;
  quantity: number;
  dailyHoursUsed: number;
  daysPerMonth: number;
  isEfficient: boolean;
  alternativeModelName?: string;
  alternativePowerWatts?: number;
}

export interface TariffBand {
  id: 'verde' | 'amarela' | 'vermelha1' | 'vermelha2' | 'escassez';
  name: string;
  colorHex: string;
  additionalCostPerKwh: number;
  description: string;
}

// 2ª Série Specific
export interface SurfaceMaterial {
  id: string;
  name: string;
  albedo: number;
  thermalConductivity: number;
  emissivity: number;
  color: string;
  type: 'Asfalto / Concreto' | 'Grama / Vegetação' | 'Telha Metálica' | 'Piso Cerâmico Claro' | 'Solo Exposto';
}

export interface MicroclimateMeasurement {
  id: string;
  locationName: string;
  surfaceType: string;
  vegetationPercentage: number;
  temperatureCelsius: number;
  relativeHumidityPercentage: number;
  perceivedTemperatureCelsius: number;
  timeOfDay: string;
}

// 3ª Série Specific
export interface DrugProfile {
  id: string;
  name: string;
  commercialNames: string;
  halfLifeHours: number;
  eliminationRateK: number;
  therapeuticWindowMin: number;
  therapeuticWindowMax: number;
  toxicConcentration: number;
  standardDoseMg: number;
  dosingIntervalHours: number;
  route: 'Oral' | 'Intravenosa' | 'Tópica';
  primaryOrganExcretion: 'Rins' | 'Fígado' | 'Biliar';
  ethnofarmacologyOrigin?: string; // ERER Origin (e.g., Planta medicinal quilombola)
}
