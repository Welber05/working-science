import { GradeProject, TariffBand, SchoolEquipment, SurfaceMaterial, MicroclimateMeasurement, DrugProfile, EnergyMatrixSource } from '../types/project';

export const ENERGY_MATRIX_SOURCES: EnergyMatrixSource[] = [
  {
    id: 'hidro',
    name: 'Usinas Hidrelétricas',
    type: 'Renovável',
    shareBrazilPercentage: 62.5,
    shareESPercentage: 42.0,
    co2GramsPerKwh: 24,
    costPerMwh: 180,
    pros: [
      'Fonte renovável sem emissão contínua na operação direta',
      'Permite armazenar energia na forma de água nos reservatórios',
      'Baixo custo de geração após amortização da obra'
    ],
    cons: [
      'Grande impacto no alagamento de biomas e deslocamento de populações',
      'Decomposição de matéria orgânica submersa gera metano (CH4)'
    ]
  },
  {
    id: 'solar',
    name: 'Energia Solar Fotovoltaica',
    type: 'Renovável',
    shareBrazilPercentage: 16.8,
    shareESPercentage: 28.5,
    co2GramsPerKwh: 48,
    costPerMwh: 220,
    pros: [
      'Fonte inesgotável e abundante no ES (alta irradiação solar)',
      'Instalação modular nos telhados da escola',
      'Zero ruído e baixíssima manutenção'
    ],
    cons: [
      'Intermitência (não gera à noite)',
      'Custo inicial de aquisição'
    ]
  },
  {
    id: 'eolica',
    name: 'Energia Eólica',
    type: 'Renovável',
    shareBrazilPercentage: 13.2,
    shareESPercentage: 4.2,
    co2GramsPerKwh: 11,
    costPerMwh: 195,
    pros: [
      'Altíssima eficiência no litoral capixaba',
      'Não emite gases de efeito estufa na geração'
    ],
    cons: [
      'Impacto acústico e visual local',
      'Intermitência de ventos'
    ]
  },
  {
    id: 'termo-gas',
    name: 'Termelétrica a Gás Natural (CH4)',
    type: 'Não Renovável',
    shareBrazilPercentage: 5.2,
    shareESPercentage: 18.0,
    co2GramsPerKwh: 490,
    costPerMwh: 480,
    combustionEquation: 'CH₄ + 2 O₂ → CO₂ + 2 H₂O + ΔH',
    pros: [
      'Acionamento rápido em períodos de seca',
      'Gás natural abundante na bacia do ES'
    ],
    cons: [
      'Alta emissão de CO2 e gases de efeito estufa',
      'Elevação de tarifa na conta de luz'
    ]
  }
];

export const TARIFF_BANDS: TariffBand[] = [
  {
    id: 'verde',
    name: 'Bandeira Verde',
    colorHex: '#22c55e',
    additionalCostPerKwh: 0.00,
    description: 'Condições favoráveis de geração de energia nas usinas hidrelétricas. Sem acréscimo na tarifa.'
  },
  {
    id: 'amarela',
    name: 'Bandeira Amarela',
    colorHex: '#eab308',
    additionalCostPerKwh: 0.01885,
    description: 'Condições de geração menos favoráveis. Acréscimo de R$ 0,01885 por kWh.'
  },
  {
    id: 'vermelha1',
    name: 'Bandeira Vermelha - Patamar 1',
    colorHex: '#f97316',
    additionalCostPerKwh: 0.04463,
    description: 'Acionamento de usinas termelétricas de custo médio.'
  },
  {
    id: 'vermelha2',
    name: 'Bandeira Vermelha - Patamar 2',
    colorHex: '#ef4444',
    additionalCostPerKwh: 0.07877,
    description: 'Geração extremamente custosa. Maior nível de acionamento de térmicas fósseis.'
  },
  {
    id: 'escassez',
    name: 'Escassez Hídrica',
    colorHex: '#a855f7',
    additionalCostPerKwh: 0.14200,
    description: 'Períodos de seca severa nos reservatórios do Sistema Interligado Nacional.'
  }
];

export const INITIAL_SCHOOL_EQUIPMENT: SchoolEquipment[] = [
  {
    id: 'eq-1',
    name: 'Ar-Condicionado Split 18.000 BTU (Antigo Non-Inverter)',
    location: 'Sala 3ª V01',
    category: 'Climatização',
    nominalPowerWatts: 1800,
    quantity: 2,
    dailyHoursUsed: 5,
    daysPerMonth: 22,
    isEfficient: false,
    alternativeModelName: 'Ar-Condicionado Inverter 18.000 BTU (Selo A Procel)',
    alternativePowerWatts: 1050
  },
  {
    id: 'eq-2',
    name: 'Lâmpadas Fluorescentes Tubulares T8 (40W cada)',
    location: 'Sala 3ª V01',
    category: 'Iluminação',
    nominalPowerWatts: 40,
    quantity: 8,
    dailyHoursUsed: 5,
    daysPerMonth: 22,
    isEfficient: false,
    alternativeModelName: 'Lâmpadas LED Tubulares T8 (18W cada)',
    alternativePowerWatts: 18
  },
  {
    id: 'eq-3',
    name: 'Lâmpadas Fluorescentes Tubulares T8 (Demais Salas)',
    location: 'Demais Salas Vespertino',
    category: 'Iluminação',
    nominalPowerWatts: 40,
    quantity: 48,
    dailyHoursUsed: 5,
    daysPerMonth: 22,
    isEfficient: false,
    alternativeModelName: 'Lâmpadas LED Tubulares T8 (18W cada)',
    alternativePowerWatts: 18
  },
  {
    id: 'eq-4',
    name: 'Computadores Desktop do Laboratório de Informática',
    location: 'Laboratório de Informática',
    category: 'Informática',
    nominalPowerWatts: 250,
    quantity: 20,
    dailyHoursUsed: 4,
    daysPerMonth: 20,
    isEfficient: true
  },
  {
    id: 'eq-5',
    name: 'Freezer Horizontal Duplo da Cantina',
    location: 'Cantina / Cozinha',
    category: 'Refrigeração',
    nominalPowerWatts: 350,
    quantity: 2,
    dailyHoursUsed: 24,
    daysPerMonth: 30,
    isEfficient: true
  },
  {
    id: 'eq-6',
    name: 'Refretores de Vapor de Sódio do Pátio (400W cada)',
    location: 'Áreas Comuns / Pátio',
    category: 'Iluminação',
    nominalPowerWatts: 400,
    quantity: 6,
    dailyHoursUsed: 12,
    daysPerMonth: 30,
    isEfficient: false,
    alternativeModelName: 'Refletores LED Externos (150W cada)',
    alternativePowerWatts: 150
  }
];

export const SURFACE_MATERIALS: SurfaceMaterial[] = [
  {
    id: 'asfalto',
    name: 'Asfalto Convencional Escuro',
    albedo: 0.08,
    thermalConductivity: 1.2,
    emissivity: 0.93,
    color: '#1e293b',
    type: 'Asfalto / Concreto'
  },
  {
    id: 'concreto-claro',
    name: 'Piso de Concreto / Paver Claro',
    albedo: 0.35,
    thermalConductivity: 1.5,
    emissivity: 0.90,
    color: '#94a3b8',
    type: 'Asfalto / Concreto'
  },
  {
    id: 'grama-nativa',
    name: 'Grama Nativa / Arborização Urbana',
    albedo: 0.25,
    thermalConductivity: 0.3,
    emissivity: 0.98,
    color: '#22c55e',
    type: 'Grama / Vegetação'
  },
  {
    id: 'telha-metalica',
    name: 'Telhado Metálico Galvanizado Escuro',
    albedo: 0.12,
    thermalConductivity: 50.0,
    emissivity: 0.25,
    color: '#475569',
    type: 'Telha Metálica'
  },
  {
    id: 'telha-branca',
    name: 'Telhado Térmico Pintado de Branco (Cool Roof)',
    albedo: 0.80,
    thermalConductivity: 0.1,
    emissivity: 0.92,
    color: '#f8fafc',
    type: 'Telha Metálica'
  }
];

export const MICROCLIMATE_MEASUREMENTS: MicroclimateMeasurement[] = [
  {
    id: 'm-1',
    locationName: 'Estacionamento Asfaltado (Frente)',
    surfaceType: 'Asfalto Convencional Escuro',
    vegetationPercentage: 5,
    temperatureCelsius: 36.4,
    relativeHumidityPercentage: 42,
    perceivedTemperatureCelsius: 39.8,
    timeOfDay: '14:30'
  },
  {
    id: 'm-2',
    locationName: 'Quadra Esportiva / Pátio Aberto',
    surfaceType: 'Piso de Concreto / Paver Claro',
    vegetationPercentage: 10,
    temperatureCelsius: 33.8,
    relativeHumidityPercentage: 48,
    perceivedTemperatureCelsius: 36.2,
    timeOfDay: '14:35'
  },
  {
    id: 'm-3',
    locationName: 'Jardim Arborizado Interno',
    surfaceType: 'Grama Nativa / Arborização Urbana',
    vegetationPercentage: 75,
    temperatureCelsius: 28.2,
    relativeHumidityPercentage: 68,
    perceivedTemperatureCelsius: 28.5,
    timeOfDay: '14:40'
  },
  {
    id: 'm-4',
    locationName: 'Corredor das Salas do Vespertino',
    surfaceType: 'Piso Cerâmico Claro / Alvenaria',
    vegetationPercentage: 20,
    temperatureCelsius: 31.5,
    relativeHumidityPercentage: 54,
    perceivedTemperatureCelsius: 33.1,
    timeOfDay: '14:45'
  }
];

export const DRUG_PROFILES: DrugProfile[] = [
  {
    id: 'paracetamol',
    name: 'Paracetamol',
    commercialNames: 'Tylenol, Cefaliv, Paracet',
    halfLifeHours: 2.5,
    eliminationRateK: 0.277,
    therapeuticWindowMin: 10,
    therapeuticWindowMax: 20,
    toxicConcentration: 30,
    standardDoseMg: 500,
    dosingIntervalHours: 6,
    route: 'Oral',
    primaryOrganExcretion: 'Fígado'
  },
  {
    id: 'ibuprofeno',
    name: 'Ibuprofeno',
    commercialNames: 'Alivium, Advil, Buscofem',
    halfLifeHours: 2.0,
    eliminationRateK: 0.346,
    therapeuticWindowMin: 15,
    therapeuticWindowMax: 30,
    toxicConcentration: 50,
    standardDoseMg: 400,
    dosingIntervalHours: 8,
    route: 'Oral',
    primaryOrganExcretion: 'Rins'
  },
  {
    id: 'amoxicilina',
    name: 'Amoxicilina (Antibiótico)',
    commercialNames: 'Amoxil, Novocilin',
    halfLifeHours: 1.2,
    eliminationRateK: 0.577,
    therapeuticWindowMin: 4,
    therapeuticWindowMax: 12,
    toxicConcentration: 25,
    standardDoseMg: 500,
    dosingIntervalHours: 8,
    route: 'Oral',
    primaryOrganExcretion: 'Rins'
  },
  {
    id: 'dipirona',
    name: 'Dipirona Sódica',
    commercialNames: 'Novalgina, Anador',
    halfLifeHours: 3.0,
    eliminationRateK: 0.231,
    therapeuticWindowMin: 12,
    therapeuticWindowMax: 25,
    toxicConcentration: 40,
    standardDoseMg: 500,
    dosingIntervalHours: 6,
    route: 'Oral',
    primaryOrganExcretion: 'Rins'
  }
];

export const PROJECTS_BY_GRADE: Record<string, GradeProject> = {
  '1a_serie': {
    id: '1a_serie',
    gradeTitle: '1ª Série - Ensino Médio',
    projectTitle: 'A Conta de Luz e a Eficiência Energética na Escola',
    themeSubtitle: 'Análise de Consumo, Leitura de Faturas EDP, Modelagem por Função Afim e Sustentabilidade',
    objective: 'Investigar o consumo real de energia elétrica da escola, calculando o impacto financeiro e ambiental para propor medidas concretas de eficiência energética.',
    targetTurma: 'Turmas do Vespertino / 1ª Série EEEFM Antônio dos Santos Neves',
    totalClasses: '11 Aulas Vespertinas',
    icon: '⚡',
    colorTheme: 'amber',
    weeklySchedule: [
      {
        id: 'segunda',
        dayName: 'Segunda-feira',
        classCount: '2 Aulas Matemática + Aprofundamentos',
        title: 'Lançamento do Desafio, Faturas & Modelagem por Função Afim',
        subtitle: 'Leitura de contas EDP, Tarifas Progressivas e $f(x) = ax + b$',
        mainSubjects: ['Matemática', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Professores de Matemática & Aprofundamento',
        bnccSkills: ['EM13MAT101', 'EM13MAT302', 'EM13CNT301'],
        coreConcepts: [
          'Leitura crítica da Fatura de Energia Elétrica (EDP)',
          'Estrutura tarifária: TUSD, TE e Tributos (ICMS, PIS/COFINS, COSIP)',
          'Tarifas progressivas e adicionais de Bandeiras Tarifárias',
          'Modelagem por Função Afim: $f(x) = ax + b$ (a = custo/kWh, b = taxa fixa/iluminação pública)'
        ],
        disparadoraQuestion: 'Quanto custa cada minuto que a lâmpada ou o ar-condicionado da sala fica ligado? Como a matemática revela se a fatura da escola está inflacionada?',
        summary: 'Lançamento do desafio da 1ª Série. Análise de faturas reais da escola, dedução da função afim f(x) = ax + b e interpretação dos coeficientes a e b.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '20 min',
            title: 'Análise da Fatura EDP da Escola',
            description: 'Projeção no datashow da fatura de energia real da EEEFM Antônio dos Santos Neves.',
            teacherActions: ['Apresentar a fatura e omitir o valor final, solicitando estimativas dos alunos.'],
            studentActions: ['Localizar o consumo em kWh, valor unitário da tarifa e cobrança fixa COSIP.'],
            activeMethodology: 'Estudo de Caso & Análise Documental'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '50 min',
            title: 'Dedução da Função Afim $f(x) = ax + b$',
            description: 'Construção da equação do custo total em função do consumo de kWh.',
            teacherActions: ['Guiar a dedução no quadro: f(x) = a*x + b onde a = R$/kWh e b = COSIP.'],
            studentActions: ['Resolver os exercícios de modelagem e desenhar retas para diferentes bandeiras.'],
            activeMethodology: 'Modelagem Matemática Ativa'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '20 min',
            title: 'Sessão Plickers / Peer Instruction',
            description: 'Votação conceitual com cartões Plickers sobre taxa de variação e intercepto linear.',
            teacherActions: ['Aplicar questão Conceptest e gerenciar a discussão entre os pares.'],
            studentActions: ['Votar individualmente, discutir com o colega ao lado e revotar.'],
            activeMethodology: 'Peer Instruction & Plickers'
          }
        ],
        labProtocol: {
          title: 'Roteiro de Análise da Fatura EDP',
          objective: 'Extrair coeficientes a e b para construir a função afim do consumo escolar.',
          materials: ['Fatura de Energia EDP', 'Calculadora / App ASNPI2026', 'Régua / Papel Milimetrado'],
          procedureSteps: [
            'Identifique o consumo ativo mensal x (kWh).',
            'Determine a tarifa efetiva por kWh com tributos (a).',
            'Identifique a taxa fixa municipal COSIP (b).',
            'Escreva f(x) = ax + b e simule reduções de 10%, 20% e 30%.'
          ],
          dataCollectionTableHeaders: ['Mês', 'Consumo (kWh)', 'Tarifa c/ Imposto (R$/kWh)', 'COSIP (R$)', 'Custo Total (R$)']
        },
        peerQuestions: [
          {
            id: 'q-1s-seg-1',
            gradeLevel: '1a_serie',
            day: 'segunda',
            subject: 'Matemática',
            topic: 'Modelagem por Função Afim',
            question: 'Se a tarifa de energia da escola é de R$ 0,90 por kWh consumido e a taxa de iluminação pública municipal (COSIP) é de R$ 45,00, qual é a função afim que expressa o custo C(x) em reais para um consumo de x kWh?',
            options: ['A) C(x) = 45x + 0,90', 'B) C(x) = 0,90x + 45', 'C) C(x) = 0,90 + 45x', 'D) C(x) = 45,90x'],
            correctAnswerIndex: 1,
            explanation: 'Coeficiente angular a = 0,90 (custo variável por kWh) e b = 45 (custo fixo). C(x) = 0,90x + 45.',
            teacherMediationTip: 'Muitos alunos somam 0,90 + 45 gerando 45,90x. Reforce que b independe de x.',
            plickersCardCode: 'PLICKERS-1S-MAT1'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Modelagem Matemática Afim',
            excellent: 'Identifica corretamente os termos a e b e plota a reta exata com domínio restrito.',
            satisfactory: 'Monta a equação afim com ajuda pontual nos impostos.',
            needsImprovement: 'Confunde o termo variável com o fixo.'
          }
        ]
      },
      {
        id: 'terca',
        dayName: 'Terça-feira',
        classCount: '2 Aulas Física (Prof. Welber) + Aprofundamentos',
        title: 'Potência Elétrica, kWh, Selo Procel & Levantamento na Escola',
        subtitle: 'Conceitos de Potência ($P = \Delta E / \Delta t$), $P = V \cdot I$, Medições com Wattímetro e Arduino',
        mainSubjects: ['Física', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Prof. Welber (Física) & Professores de Aprofundamento',
        bnccSkills: ['EM13CNT101', 'EM13CNT106', 'EM13CNT308'],
        coreConcepts: [
          'Grandeza Física Potência Elétrica ($P = E / \Delta t \Rightarrow E = P \cdot \Delta t$)',
          'Relação com Corrente e Tensão ($P = V \cdot I$)',
          'Selo PROCEL e Etiqueta ENCE de conservação de energia',
          'Auditoria em campo com Wattímetro de tomada e módulo Arduino'
        ],
        disparadoraQuestion: 'O que gasta mais energia na escola: todas as lâmpadas da sala ligadas a tarde inteira ou o ar-condicionado funcionando por 30 minutos? Como medir isso?',
        summary: 'Aulas com o Prof. Welber. Conceituação de potência e energia elétrica, diferenciação entre Watt (W) e Kilowatt-hora (kWh) e levantamento prático do parque de equipamentos elétricos da escola.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '20 min',
            title: 'Demonstração de Potência com Wattímetro/Arduino',
            description: 'Prof. Welber conecta diferentes aparelhos ao medidor digital de bancada.',
            teacherActions: ['Exibir P (W), V (V) e I (A) de um secador e de uma lâmpada LED.'],
            studentActions: ['Anotar as leituras e converter Watts para kilowatts (kW = W/1000).'],
            activeMethodology: 'Demonstração Investigativa'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '50 min',
            title: 'Trabalho de Campo: Auditoria dos Aparelhos da Escola',
            description: 'Mapeamento de lâmpadas, climatizadores, geladeiras e computadores da EEEFM Antônio dos Santos Neves.',
            teacherActions: ['Orientar os grupos pelos setores (Salas, Lab, Cantina, Pátio, Secretaria).'],
            studentActions: ['Anotar quantidade, potência nominal (W), horas de uso e classificação do Selo Procel.'],
            activeMethodology: 'Investigação em Campo'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '20 min',
            title: 'Cálculo do Consumo Diário e Plickers',
            description: 'Cálculo de $E = P \cdot \Delta t$ em kWh para cada equipamento auditado.',
            teacherActions: ['Aplicar questão conceitual no Plickers sobre W vs. kWh.'],
            studentActions: ['Calcular o consumo em kWh e responder o Plickers.'],
            activeMethodology: 'Peer Instruction & Plickers'
          }
        ],
        labProtocol: {
          title: 'Auditoria Elétrica dos Setores Escolares',
          objective: 'Medir e estimar o consumo em kWh dos aparelhos elétricos da escola.',
          materials: ['Medidor Wattímetro Digital de Tomada', 'Protótipo Arduino com Sensor SCT-013', 'Prancheta de Coleta'],
          procedureSteps: [
            'Conecte o aparelho no medidor e leia a potência P em Watts.',
            'Multiplique pelas horas de uso diário t e divida por 1000 para achar kWh/dia.',
            'Multiplique pelos dias úteis do mês (22) para obter o consumo mensal.'
          ],
          dataCollectionTableHeaders: ['Equipamento', 'Setor', 'Potência (W)', 'Horas/Dia', 'Consumo (kWh/mês)', 'Selo Procel']
        },
        peerQuestions: [
          {
            id: 'q-1s-ter-1',
            gradeLevel: '1a_serie',
            day: 'terca',
            subject: 'Física',
            topic: 'Cálculo de Consumo de Energia em kWh',
            question: 'Um ar-condicionado de potência 1500 W fica ligado por 5 horas diárias em uma sala da escola. Qual é o consumo mensal de energia em kWh para 20 dias letivos?',
            options: ['A) 15 kWh', 'B) 75 kWh', 'C) 150 kWh', 'D) 1500 kWh'],
            correctAnswerIndex: 2,
            explanation: 'E = (1,5 kW) * (5 h/dia * 20 dias) = 1,5 * 100 = 150 kWh.',
            teacherMediationTip: 'Verifique se os alunos lembraram de converter 1500W para 1,5kW.',
            plickersCardCode: 'PLICKERS-1S-FIS1'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Medição e Cálculo de Potência e Energia',
            excellent: 'Mede com precisão W, V e I, converte unidades sem falhas e calcula E em kWh.',
            satisfactory: 'Efetua medições corretas, necessitando de suporte na conversão de W para kW.',
            needsImprovement: 'Confunde a potência instantânea (W) com a energia acumulada (kWh).'
          }
        ]
      },
      {
        id: 'quarta',
        dayName: 'Quarta-feira',
        classCount: '2 Aulas Química + Aprofundamentos',
        title: 'Matrizes Energéticas, Combustão & Emissões de $CO_2$',
        subtitle: 'Fontes Renováveis vs. Fósseis, Termelétricas e Estequiometria do Carbono',
        mainSubjects: ['Química', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Professores de Química & Aprofundamento',
        bnccSkills: ['EM13CNT102', 'EM13CNT206', 'EM13CNT302'],
        coreConcepts: [
          'Matriz Elétrica Brasileira e do ES (Hidro, Solar, Eólica, Gás Natural)',
          'Reações de Combustão Completa de Hidrocarbonetos ($CH_4, C_8H_{18}$)',
          'Estequiometria: Cálculo do $CO_2$ emitido por kWh termelétrico',
          'Variação de Entalpia ($\Delta H < 0$) e Poder Calorífico'
        ],
        disparadoraQuestion: 'Quando ligamos a luz da sala em período de seca, quantas gramas de $CO_2$ a termelétrica lança no ar por cada kWh consumido?',
        summary: 'Estudo das reações químicas de combustão em usinas termelétricas, estequiometria da emissão de CO2 por kWh e comparação da matriz energética capixaba.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '20 min',
            title: 'Equacionamento da Combustão do Metano',
            description: 'Apresentação do papel das usinas termelétricas a gás natural na seca.',
            teacherActions: ['Escrever no quadro $CH_4 + O_2 \rightarrow CO_2 + H_2O$ não balanceada.'],
            studentActions: ['Balancear a equação e calcular as massas molares de $CH_4$ e $CO_2$.'],
            activeMethodology: 'Problematização Química'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '50 min',
            title: 'Cálculo Estequiométrico da Pegada de Carbono',
            description: 'Determinação da massa de $CO_2$ por kWh termelétrico consumido.',
            teacherActions: ['Guiar a regra de três estequiométrica: 16g $CH_4$ gera 44g $CO_2$.'],
            studentActions: ['Calcular o total de $CO_2$ liberado pelo consumo elétrico da escola.'],
            activeMethodology: 'Estequiometria Aplicada'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '20 min',
            title: 'Sessão Plickers sobre Fontes Renováveis',
            description: 'Votação interativa sobre o ciclo do carbono na biomassa vs. gás natural.',
            teacherActions: ['Coordenar a discussão de pares entre votos divergentes.'],
            studentActions: ['Argumentar a neutralidade de carbono da biomassa.'],
            activeMethodology: 'Peer Instruction & Plickers'
          }
        ],
        labProtocol: {
          title: 'Estequiometria da Emissão de Carbono por Termelétricas',
          objective: 'Determinar a massa de CO2 gerada por kWh produzido em termelétricas.',
          materials: ['Tabela Periódica', 'Ficha Estequiométrica ASNPI2026', 'Calculadora'],
          procedureSteps: [
            'Balanceie a reação $CH_4 + 2 O_2 \rightarrow CO_2 + 2 H_2O$.',
            'Calcule as massas molares ($M_{CH4} = 16 g/mol$, $M_{CO2} = 44 g/mol$).',
            'Determine as gramas de $CO_2$ por kWh (aprox. 490g CO2/kWh em térmicas a gás).'
          ],
          dataCollectionTableHeaders: ['Combustível', 'Fórmula', 'Massa Molar', 'CO2/kg', 'CO2/kWh']
        },
        peerQuestions: [
          {
            id: 'q-1s-qua-1',
            gradeLevel: '1a_serie',
            day: 'quarta',
            subject: 'Química',
            topic: 'Estequiometria de Combustão',
            question: 'Na queima completa de 160 gramas de metano (CH4, massa molar 16 g/mol) em uma usina termelétrica, qual é a massa de CO2 (massa molar 44 g/mol) produzida?',
            options: ['A) 160 g', 'B) 220 g', 'C) 440 g', 'D) 880 g'],
            correctAnswerIndex: 2,
            explanation: '160g CH4 = 10 mols. Produz 10 mols de CO2 = 10 * 44g = 440g.',
            teacherMediationTip: 'Incentive a proporção molar 1:1 entre CH4 e CO2.',
            plickersCardCode: 'PLICKERS-1S-QUI1'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Estequiometria e Entendimento de Matrizes',
            excellent: 'Balanceia equações com perfeição e calcula massas de CO2 com clareza.',
            satisfactory: 'Balanceia a reação e realiza a regra de três com auxílio.',
            needsImprovement: 'Demonstra dificuldade em conceituar massa molar e coeficientes estequiométricos.'
          }
        ]
      },
      {
        id: 'quinta',
        dayName: 'Quinta-feira',
        classCount: '2 Aulas Biologia + Aprofundamentos',
        title: 'Impactos Socioambientais, Pegada Ecológica & ODS 7 e 13',
        subtitle: 'Alagamento de Biomas, Metano em Reservatórios e Sustentabilidade Ecossistêmica',
        mainSubjects: ['Biologia', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Professores de Biologia & Aprofundamento',
        bnccSkills: ['EM13CNT202', 'EM13CNT301', 'EM13CNT303'],
        coreConcepts: [
          'Impactos ambientais de hidrelétricas (alagamento, decomposição anaeróbica, metanogênese)',
          'Fragmentação de habitats e piracema de peixes nativos',
          'Pegada Ecológica Escolar ($kg CO_2/ano$)',
          'Objetivos de Desenvolvimento Sustentável (ODS 7 - Energia Limpa e ODS 13 - Ação Climática)'
        ],
        disparadoraQuestion: 'A energia hidrelétrica é 100% limpa? Quais marcas ecológicas invisíveis são deixadas nos rios e florestas pela energia da nossa escola?',
        summary: 'Investigação dos impactos biológicos e ecológicos das usinas hidrelétricas e termelétricas, cálculo da pegada de carbono da escola e alinhamento com os ODS 7 e 13.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '20 min',
            title: 'Análise do Impacto de Reservatórios',
            description: 'Discussão sobre a decomposição anaeróbica da biomassa florestal submersa.',
            teacherActions: ['Explicar a geração de gás metano ($CH_4$) por bactérias anaeróbicas nas represas.'],
            studentActions: ['Mapear as teias alimentares fluviais afetadas pelo represamento.'],
            activeMethodology: 'Estudo de Caso Socioambiental'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '50 min',
            title: 'Matriz de Impacto Ecológico & Pegada Ambiental',
            description: 'Comparação do impacto de usinas Hidro, Solar, Eólica e Termo.',
            teacherActions: ['Supervisionar o preenchimento da Matriz Ecológica na plataforma.'],
            studentActions: ['Calcular a pegada ecológica da 1ª Série em $kg CO_2/ano$.'],
            activeMethodology: 'Aprendizagem Cooperativa'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '20 min',
            title: 'Sessão Plickers e Conexão com os ODS',
            description: 'Votação sobre sustentabilidade energética e compromisso dos alunos.',
            teacherActions: ['Conectar as propostas dos alunos com os ODS 7 e ODS 13 da ONU.'],
            studentActions: ['Responder o Plickers e redigir a meta ecológica da turma.'],
            activeMethodology: 'Peer Instruction & Plickers'
          }
        ],
        labProtocol: {
          title: 'Avaliação da Pegada Ecológica do Consumo Escolar',
          objective: 'Mapear os impactos ecossistêmicos e calcular a emissão anual evitada de CO2.',
          materials: ['Matriz de Impacto Ecológico', 'App ASNPI2026'],
          procedureSteps: [
            'Classifique cada matriz energética por grau de impacto ambiental.',
            'Calcule o $CO_2$ evitado com a substituição de lâmpadas fluorescente por LED.',
            'Redija os compromissos da turma alinhados ao ODS 7 e 13.'
          ],
          dataCollectionTableHeaders: ['Fonte', 'Impacto na Fauna/Flora', 'Emissão de GEE', 'Grau de Sustentabilidade']
        },
        peerQuestions: [
          {
            id: 'q-1s-qui-1',
            gradeLevel: '1a_serie',
            day: 'quinta',
            subject: 'Biologia',
            topic: 'Decomposição Anaeróbica em Reservatórios',
            question: 'Por que o alagamento de florestas para reservatórios hidrelétricos pode contribuir para o efeito estufa?',
            options: [
              'A) Devido ao aumento da evaporação que quebra a camada de ozônio.',
              'B) Porque a vegetação submersa sofre decomposição anaeróbica gerando gás metano (CH4).',
              'C) Porque a água represada impede a fotossíntese dos peixes.',
              'D) Porque as árvores mortas liberam nitrogênio puro no ar.'
            ],
            correctAnswerIndex: 1,
            explanation: 'Sem oxigênio no fundo do reservatório, bactérias anaeróbicas decompõem a biomassa produzindo metano (CH4).',
            teacherMediationTip: 'Enfatize a diferença entre decomposição aeróbica (CO2) e anaeróbica (CH4).',
            plickersCardCode: 'PLICKERS-1S-BIO1'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Análise Crítica de Impactos Ecológicos',
            excellent: 'Articula a metanogênese e os ODS com profundidade científica.',
            satisfactory: 'Entende a relação entre decomposição de plantas e metano.',
            needsImprovement: 'Acredita que usinas hidrelétricas não causam nenhum impacto ecológico.'
          }
        ]
      },
      {
        id: 'sexta',
        dayName: 'Sexta-feira',
        classCount: '3 Aulas Matemática + Aprofundamentos',
        title: 'Tratamento Estatístico em Planilhas, Projeções & Plano de Ação',
        subtitle: 'Gráficos de Porcentagem, Payback Financeiro e Apresentação do Infográfico Final',
        mainSubjects: ['Matemática', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Todos os Professores Integradores da 1ª Série',
        bnccSkills: ['EM13MAT402', 'EM13MAT501', 'EM13CNT308'],
        coreConcepts: [
          'Estatística de consumo (Média, Porcentagem, Gráficos de Setor e Barra)',
          'Análise de cenários "E se..." (Troca de tecnologia vs. Mudança de hábitos)',
          'Cálculo do Retorno sobre Investimento ($Payback = Investimento / Economia_{Mensal}$)',
          'Sintese e apresentação do Plano de Eficiência para a Direção Escolar'
        ],
        disparadoraQuestion: 'Como transformar as medições da semana em uma proposta financeira e ambiental irrecusável para a Direção da nossa escola?',
        summary: 'Culminância do projeto da 1ª Série. Consolidação dos dados em planilhas, cálculo do payback das melhorias elétricas, montagem do infográfico e apresentação para a gestão escolar.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '25 min',
            title: 'Unificação dos Dados e Planilha Estatística',
            description: 'Compilação de todas as medições feitas pelos grupos nos diferentes setores da escola.',
            teacherActions: ['Projetar o painel consolidado no App ASNPI2026.'],
            studentActions: ['Calcular o consumo total e a porcentagem de cada categoria (Ar-condicionado, Iluminação, etc.).'],
            activeMethodology: 'Tratamento de Dados Estatísticos'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '75 min',
            title: 'Simulação de Economia e Cálculo de Payback',
            description: 'Determinação do tempo de retorno financeiro para troca de lâmpadas T8 por LED.',
            teacherActions: ['Explicar a fórmula de Payback: Payback (meses) = Investimento / Economia Mensal.'],
            studentActions: ['Calcular o Payback e montar o infográfico visual com os gráficos de barras.'],
            activeMethodology: 'Design Thinking & Elaboração de Projetos'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '35 min',
            title: 'Culminância & Apresentação para a Direção',
            description: 'Apresentação oficial das propostas de economia para a equipe gestora da EEEFM Antônio dos Santos Neves.',
            teacherActions: ['Mediar as falas dos alunos e entregar a proposta executiva.'],
            studentActions: ['Apresentar os dados, os gráficos e assumir a carta de compromisso de eficiência.'],
            activeMethodology: 'Protagonismo Estudantil'
          }
        ],
        labProtocol: {
          title: 'Consolidação Estatística e Análise de Payback',
          objective: 'Calcular a viabilidade econômica e ecológica das propostas de redução de consumo.',
          materials: ['Planilha Eletrônica / App ASNPI2026', 'Minuta da Proposta Executiva'],
          procedureSteps: [
            'Calcule o consumo total em kWh/mês e o custo total em R$.',
            'Simule a economia de 25% na iluminação e 15% na climatização.',
            'Calcule o tempo de Payback para o investimento na compra de lâmpadas LED.'
          ],
          dataCollectionTableHeaders: ['Ação Proposta', 'Investimento (R$)', 'Economia (kWh/mês)', 'Economia (R$/mês)', 'Payback (Meses)']
        },
        peerQuestions: [
          {
            id: 'q-1s-sex-1',
            gradeLevel: '1a_serie',
            day: 'sexta',
            subject: 'Matemática',
            topic: 'Cálculo de Payback Financeiro',
            question: 'A troca de todas as lâmpadas fluorescentes da escola por LED custará R$ 1.200,00. Se a economia garantida na conta de luz for de R$ 150,00 por mês, em quantos meses o investimento será pago pelo próprio valor economizado (Payback)?',
            options: ['A) 6 meses', 'B) 8 meses', 'C) 10 meses', 'D) 12 meses'],
            correctAnswerIndex: 1,
            explanation: 'Payback = Investimento / Economia = 1200 / 150 = 8 meses.',
            teacherMediationTip: 'Use este exemplo para mostrar como a matemática valida decisões de gestão.',
            plickersCardCode: 'PLICKERS-1S-MAT2'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Tratamento Estatístico e Comunicação Executiva',
            excellent: 'Calcula porcentagens e payback sem erros e apresenta a proposta com clareza e persuasão.',
            satisfactory: 'Calcula a porcentagem e entende a ideia de payback com suporte.',
            needsImprovement: 'Apresenta dificuldade em interpretar tabelas estatísticas simples.'
          }
        ]
      }
    ]
  },

  '2a_serie': {
    id: '2a_serie',
    gradeTitle: '2ª Série - Ensino Médio',
    projectTitle: 'Ilhas de Calor Urbanas e Conforto Térmico',
    themeSubtitle: 'Impermeabilização do Solo, Microclima Escolar, Termologia, Umidade e Intervenção Urbana',
    objective: 'Analisar como a impermeabilização do solo e a ausência de vegetação alteram a temperatura, umidade e sensação térmica no entorno e interior da escola, propondo soluções de bioclimatismo.',
    targetTurma: 'Turmas do Vespertino / 2ª Série EEEFM Antônio dos Santos Neves',
    totalClasses: '11 Aulas Vespertinas',
    icon: '🌡️',
    colorTheme: 'rose',
    weeklySchedule: [
      {
        id: 'segunda',
        dayName: 'Segunda-feira',
        classCount: '2 Aulas Matemática + Aprofundamentos',
        title: 'Estatística Descritiva & Gráficos de Dispersão Térmica',
        subtitle: 'Média, Mediana, Desvio Padrão e Relação Temperatura vs. Cobertura Vegetal',
        mainSubjects: ['Matemática', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Professores de Matemática & Aprofundamento',
        bnccSkills: ['EM13MAT402', 'EM13MAT501', 'EM13CNT301'],
        coreConcepts: [
          'Medidas de tendência central (Média, Mediana e Moda) aplicadas a temperaturas locais',
          'Medidas de dispersão (Amplitude e Desvio Padrão) para variações microclimáticas',
          'Gráficos de Dispersão (Scatter Plot) correlacionando % de Asfalto com Temperatura (°C)',
          'Análise de dados contínuos coletados por termômetros digitais na escola'
        ],
        disparadoraQuestion: 'Por que o estacionamento asfaltado da nossa escola parece "queimar" à tarde enquanto a área sob a árvore permanece agradável? Como provar essa diferença estatisticamente?',
        summary: 'Lançamento do projeto da 2ª Série. Estudo das ferramentas estatísticas descritivas para analisar variações microclimáticas e construção de gráficos de dispersão entre materiais de superfície e temperatura.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '20 min',
            title: 'Sensibilização Térmica no Pátio',
            description: 'Comparação da temperatura percebida em diferentes pontos do terreno escolar.',
            teacherActions: ['Apresentar dados térmicos históricos e introduzir a estatística de variação.'],
            studentActions: ['Registrar estimativas de temperatura para asfalto, grama e corredor.'],
            activeMethodology: 'Problematização Estatística'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '50 min',
            title: 'Cálculo de Média, Mediana e Desvio Padrão',
            description: 'Tratamento de amostras térmicas simuladas da comunidade de Vitória/ES.',
            teacherActions: ['Ensinar a fórmula do desvio padrão para entender a estabilidade do microclima.'],
            studentActions: ['Calcular média e desvio padrão em grupos e plotar o gráfico de dispersão.'],
            activeMethodology: 'Análise Estatística Ativa'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '20 min',
            title: 'Sessão Plickers sobre Estatística Térmica',
            description: 'Votação conceitual sobre interpretação de desvio padrão em dados de temperatura.',
            teacherActions: ['Gerenciar a discussão sobre o significado de um desvio padrão elevado.'],
            studentActions: ['Responder o Plickers e justificar com o colega.'],
            activeMethodology: 'Peer Instruction & Plickers'
          }
        ],
        labProtocol: {
          title: 'Tratamento Estatístico de Séries Térmicas',
          objective: 'Calcular a dispersão das temperaturas coletadas nos setores da escola.',
          materials: ['Planilha Eletrônica / App ASNPI2026', 'Calculadora Científica'],
          procedureSteps: [
            'Insira as medições de temperatura (°C) dos 4 setores monitorados.',
            'Calcule a Média ($\bar{x}$) e a Mediana para cada setor.',
            'Calcule o Desvio Padrão ($s$) para identificar áreas com picos térmicos extremos.'
          ],
          dataCollectionTableHeaders: ['Setor', 'Superfície', 'Média (°C)', 'Mediana (°C)', 'Desvio Padrão (°C)']
        },
        peerQuestions: [
          {
            id: 'q-2s-seg-1',
            gradeLevel: '2a_serie',
            day: 'segunda',
            subject: 'Matemática',
            topic: 'Desvio Padrão e Variação Térmica',
            question: 'Em dois pontos da escola foram registradas 10 medições térmicas ao longo do dia. O Pátio Asfaltado apresentou média de 32°C com desvio padrão de 4,5°C. O Jardim apresentou média de 26°C com desvio padrão de 0,8°C. O que o menor desvio padrão do jardim indica?',
            options: [
              'A) Que o jardim sempre apresenta temperaturas congelantes.',
              'B) Que a temperatura no jardim permaneceu muito mais estável ao longo do dia.',
              'C) Que o jardim absorveu mais radiação infravermelha.',
              'D) Que houve erro na calibração do termômetro do jardim.'
            ],
            correctAnswerIndex: 1,
            explanation: 'Um menor desvio padrão indica menor dispersão dos dados em relação à média, ou seja, maior estabilidade térmica.',
            teacherMediationTip: 'Enfatize que o desvio padrão mede a variabilidade ou instabilidade do fenômeno.',
            plickersCardCode: 'PLICKERS-2S-MAT1'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Análise Estatística de Séries Térmicas',
            excellent: 'Calcula média, mediana e desvio padrão com precisão e interpreta o significado microclimático.',
            satisfactory: 'Calcula média e mediana e entende a ideia de desvio padrão.',
            needsImprovement: 'Confunde média com desvio padrão.'
          }
        ]
      },
      {
        id: 'terca',
        dayName: 'Terça-feira',
        classCount: '2 Aulas Física + Aprofundamentos',
        title: 'Termologia: Calor Sensível, Trocas Térmicas & Sensação Térmica',
        subtitle: 'Mecanismos de Condução, Convecção, Radiação Infravermelha e Albedo das Superfícies',
        mainSubjects: ['Física', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Professores de Física & Aprofundamento',
        bnccSkills: ['EM13CNT101', 'EM13CNT103', 'EM13CNT106'],
        coreConcepts: [
          'Formas de propagação do calor: Condução (piso/asfalto), Convecção (correntes de ar) e Radiação (Infravermelho solar)',
          'Capacidade Térmica e Calor Específico ($Q = m \cdot c \cdot \Delta T$)',
          'Propriedade dos Materiais: Albedo (Refletância) e Emissividade',
          'Índice de Conforto e Sensação Térmica (Relação com radiação e umidade)'
        ],
        disparadoraQuestion: 'Por que superfícies escuras como o asfalto chegam a atingir mais de 50°C sob o sol capixaba enquanto pisos claros ficam bem mais frios? Qual mecanismo físico explica essa diferença?',
        summary: 'Aprofundamento em Física Térmica. Mapeamento das formas de transferência de calor, medição prática com termômetros de infravermelho (mira laser) e determinação do Albedo das superfícies da escola.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '20 min',
            title: 'Demonstração de Radiação com Termômetro Infravermelho',
            description: 'Medição instantânea da temperatura superficial de um piso claro vs. asfalto sob o sol.',
            teacherActions: ['Usar termômetro IR para projetar no quadro as temperaturas de superfícies ao vivo.'],
            studentActions: ['Anotar as diferenças de temperatura e levantar hipóteses sobre o albedo.'],
            activeMethodology: 'Demonstração Física Prática'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '50 min',
            title: 'Trabalho de Campo Térmico na Escola',
            description: 'Mapeamento de 4 setores da escola registrando temperatura de superfície e do ar.',
            teacherActions: ['Distribuir termômetros de mira laser e higrômetros para os grupos.'],
            studentActions: ['Medir asfalto, grama, parede branca, telhado metálico e registrar a sensação térmica.'],
            activeMethodology: 'Investigação em Campo com Sensores'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '20 min',
            title: 'Sessão Plickers: Albedo e Condução Térmica',
            description: 'Votação interativa sobre a relação entre calor específico, albedo e ilhas de calor.',
            teacherActions: ['Aplicar questão Conceptest e gerenciar a troca entre os grupos.'],
            studentActions: ['Responder o Plickers e explicar o conceito ao colega.'],
            activeMethodology: 'Peer Instruction & Plickers'
          }
        ],
        labProtocol: {
          title: 'Mapeamento de Temperatura de Superfície e Albedo',
          objective: 'Medir a temperatura de superfícies urbanas e calcular o impacto do albedo.',
          materials: ['Termômetro de Infravermelho sem contato', 'Higrômetro Digital de Ar', 'Prancheta'],
          procedureSteps: [
            'Aponte a mira laser do termômetro para a superfície a 1 metro de distância.',
            'Registre a temperatura da superfície ($T_{sup}$) e a temperatura do ar ambiente ($T_{ar}$).',
            'Calcule a diferença de gradiente térmico $\Delta T = T_{sup} - T_{ar}$.'
          ],
          dataCollectionTableHeaders: ['Superfície', 'Albedo Estimado', 'Temp. Superfície (°C)', 'Temp. Ar (°C)', 'Gradiente ΔT (°C)']
        },
        peerQuestions: [
          {
            id: 'q-2s-ter-1',
            gradeLevel: '2a_serie',
            day: 'terca',
            subject: 'Física',
            topic: 'Albedo e Absorção de Radiação',
            question: 'O albedo do asfalto escuro é de aproximadamente 0,08, enquanto o albedo de uma tinta térmica branca para telhados é de 0,80. O que significa uma superfície ter um albedo de 0,80?',
            options: [
              'A) Que ela absorve 80% de toda a radiação solar que incide sobre ela.',
              'B) Que ela reflete 80% da radiação solar incidente, absorvendo apenas 20%.',
              'C) Que sua temperatura aumenta 80°C a cada hora de exposição solar.',
              'D) Que ela conduz calor 80 vezes mais rápido que o asfalto.'
            ],
            correctAnswerIndex: 1,
            explanation: 'Albedo é a fração de radiação solar refletida. Um albedo de 0,80 significa que 80% da luz solar é refletida de volta ao espaço.',
            teacherMediationTip: 'Esclareça a diferença: Albedo alto = alta reflexão e baixo aquecimento.',
            plickersCardCode: 'PLICKERS-2S-FIS1'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Entendimento dos Mecanismos de Transferência Térmica',
            excellent: 'Diferencia radiação, condução e convecção e explica a física do albedo com precisão.',
            satisfactory: 'Compreende que o asfalto escuro esquenta mais devido à maior absorção.',
            needsImprovement: 'Confunde temperatura com calor e não entende o conceito de albedo.'
          }
        ]
      },
      {
        id: 'quarta',
        dayName: 'Quarta-feira',
        classCount: '2 Aulas Química + Aprofundamentos',
        title: 'Umidade do Ar, Soluções Atmosféricas & Condutividade de Materiais',
        subtitle: 'Saturação de Vapor d\'Água, Gases Locais do Efeito Estufa e Propriedades dos Materiais de Construção',
        mainSubjects: ['Química', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Professores de Química & Aprofundamento',
        bnccSkills: ['EM13CNT102', 'EM13CNT206', 'EM13CNT302'],
        coreConcepts: [
          'Mistura gasosa atmosférica e Umidade Relativa do Ar (Pressão de vapor d\'água)',
          'Relação Solubilidade de Gases x Temperatura atmosférica',
          'Propriedades Físico-Químicas dos materiais urbanos: Condutividade Térmica e Capacidade Calorífica',
          'Gases Estufa Locais (Vapor d\'água, $CO_2$, $NO_x$) e retenção de calor pelas superfícies'
        ],
        disparadoraQuestion: 'Por que em dias quentes a umidade relativa do ar cai bruscamente nas áreas asfaltadas, criando um ar "seco e sufocante" para os alunos do vespertino?',
        summary: 'Investigação Química do ar e das propriedades térmicas dos materiais urbanos. Estudo da relação entre temperatura, pressão de vapor d\'água e sensação de ressecamento nas ilhas de calor.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '20 min',
            title: 'Análise Química do Ar Urbano',
            description: 'Discussão sobre como o asfalto quente altera a pressão de saturação do vapor d\'água no ar.',
            teacherActions: ['Apresentar a curva de pressão de vapor d\'água em função da temperatura.'],
            studentActions: ['Analisar por que o ar quente suporta mais vapor em termos absolutos, baixando a Umidade Relativa.'],
            activeMethodology: 'Problematização Físico-Química'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '50 min',
            title: 'Ensaio de Condutividade e Retenção Térmica de Materiais',
            description: 'Comparação laboratorial do aquecimento de amostras de Asfalto, Telha Galvanizada, Cerâmica e Tijolo.',
            teacherActions: ['Guiar o experimento com lâmpada de aquecimento e sensores de temperatura em amostras.'],
            studentActions: ['Medir a taxa de resfriamento de cada material e determinar quem retém mais calor.'],
            activeMethodology: 'Laboratório Investigativo'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '20 min',
            title: 'Sessão Plickers sobre Condutividade e Umidade',
            description: 'Votação interativa sobre a Química do conforto térmico.',
            teacherActions: ['Aplicar questão Plickers sobre condensação e saturação de vapor.'],
            studentActions: ['Responder o Plickers e debater com o grupo.'],
            activeMethodology: 'Peer Instruction & Plickers'
          }
        ],
        labProtocol: {
          title: 'Ensaio de Retenção Térmica e Condutividade de Materiais Urbanos',
          objective: 'Comparar a taxa de resfriamento de amostras de materiais de construção da escola.',
          materials: ['Lâmpada Incandescente 100W (Fonte de Calor)', 'Amostras de Asfalto, Concreto, Grama e Madeira', 'Termômetros Digital'],
          procedureSteps: [
            'Aqueça as amostras uniformemente por 10 minutos sob a lâmpada.',
            'Desligue a lâmpada e meça a temperatura a cada 1 minuto durante 10 minutos.',
            'Grave a curva de resfriamento $T(t)$ para identificar o material com maior inércia térmica.'
          ],
          dataCollectionTableHeaders: ['Material', 'Temp. Inicial (°C)', 'Temp. Máxima (°C)', 'Temp. após 10min (°C)', 'Taxa de Resfriamento (°C/min)']
        },
        peerQuestions: [
          {
            id: 'q-2s-qua-1',
            gradeLevel: '2a_serie',
            day: 'quarta',
            subject: 'Química',
            topic: 'Umidade Relativa do Ar e Temperatura',
            question: 'Quando a temperatura do ar em um pátio asfaltado sobe de 25°C para 36°C sem adição de novas moléculas de água, o que acontece com a Umidade Relativa do Ar (UR)?',
            options: [
              'A) A UR aumenta, pois o ar quente cria mais moléculas de água.',
              'B) A UR diminui, pois a capacidade máxima de suporte de vapor do ar aumenta com a temperatura.',
              'C) A UR permanece exatamente a mesma, pois a temperatura não afeta gases.',
              'D) A UR se transforma em pressão atmosférica líquida.'
            ],
            correctAnswerIndex: 1,
            explanation: 'Como a capacidade do ar de reter vapor aumenta com a temperatura, a quantidade fixa de água presente representa um percentual menor da saturação, fazendo a UR cair.',
            teacherMediationTip: 'Compare com uma jarra que aumenta de tamanho: o mesmo volume de água enche uma porcentagem menor da jarra maior.',
            plickersCardCode: 'PLICKERS-2S-QUI1'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Propriedades dos Materiais e Química da Atmosfera',
            excellent: 'Explica com rigor a inércia térmica e a curva de saturação do vapor d\'água.',
            satisfactory: 'Compreende que materiais mais densos retêm calor por mais tempo.',
            needsImprovement: 'Confunde umidade relativa com quantidade absoluta de chuva.'
          }
        ]
      },
      {
        id: 'quinta',
        dayName: 'Quinta-feira',
        classCount: '2 Aulas Biologia + Aprofundamentos',
        title: 'Papel da Vegetação Urbana, Evapotranspiração & Saúde Humana',
        subtitle: 'Fotossíntese, Sombra Biológica, Regulação Microclimática e Prevenção do Estresse Térmico',
        mainSubjects: ['Biologia', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Professores de Biologia & Aprofundamento',
        bnccSkills: ['EM13CNT202', 'EM13CNT301', 'EM13CNT303'],
        coreConcepts: [
          'Mecanismo de Evapotranspiração vegetal (Abertura estomática e resfriamento evaporativo)',
          'Sombreamento biológico e bloqueio de radiação UV / Infravermelha pelas copas das árvores',
          'Impacto das Ilhas de Calor na Saúde Humana: Estresse térmico, desidratação, insolação e crises respiratórias',
          'Infraestrutura Verde e Jardins de Chuva para mitigar impermeabilização urbana'
        ],
        disparadoraQuestion: 'Como uma única árvore consegue funcionar como um "ar-condicionado ecológico" natural capaz de baixar a temperatura no seu entorno em até 5°C?',
        summary: 'Investigação do papel biológico da vegetação na regulação térmica urbana. Mapeamento da transpiração vegetal via estômatos e análise dos efeitos do calor extremo na fisiologia e saúde dos estudantes.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '20 min',
            title: 'Fisiologia da Evapotranspiração',
            description: 'Demonstração do saco plástico envolvido em ramo folhado ao sol para evidenciar a liberação de água.',
            teacherActions: ['Mostrar a condensação de água no plástico evidenciando a transpiração vegetal.'],
            studentActions: ['Explicar o papel dos estômatos e o calor latente de vaporização da água ($L_v = 540 cal/g$).'],
            activeMethodology: 'Demonstração Biológica'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '50 min',
            title: 'Mapeamento da Cobertura Vegetal e Saúde Escolar',
            description: 'Cálculo do percentual de área verde por aluno na EEEFM Antônio dos Santos Neves.',
            teacherActions: ['Orientar a medição da área de copa das árvores da escola usando imagens de satélite/Google Earth.'],
            studentActions: ['Calcular $m^2$ de área verde por estudante e comparar com a recomendação da OMS ($12 m^2/hab$).'],
            activeMethodology: 'Mapeamento Ecológico Ativo'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '20 min',
            title: 'Sessão Plickers sobre Infraestrutura Verde',
            description: 'Votação interativa sobre teto verde, arborização e conforto térmico humano.',
            teacherActions: ['Aplicar questão Plickers e discutir intervenções viáveis para a escola.'],
            studentActions: ['Responder o Plickers e propor locais para plantio na escola.'],
            activeMethodology: 'Peer Instruction & Plickers'
          }
        ],
        labProtocol: {
          title: 'Estudo da Evapotranspiração e Sombreamento Biológico',
          objective: 'Quantificar a redução de temperatura promovida pela cobertura vegetal.',
          materials: ['Termômetro de Solo e de Ar', 'Higrômetro', 'Saco Plástico Transparente com Fita'],
          procedureSteps: [
            'Envolva um ramo folhado em saco plástico transparente e sele a base.',
            'Após 30 minutos sob o sol, meça o volume de água condensada.',
            'Meça a temperatura do solo sob a sombra da árvore e compare com o solo exposto.'
          ],
          dataCollectionTableHeaders: ['Local', 'Tipo de Cobertura', 'Temp. Solo (°C)', 'Temp. Ar (°C)', 'Umidade (%)']
        },
        peerQuestions: [
          {
            id: 'q-2s-qui-1',
            gradeLevel: '2a_serie',
            day: 'quinta',
            subject: 'Biologia',
            topic: 'Evapotranspiração e Resfriamento Microclimático',
            question: 'Por que a evapotranspiração realizada pelas árvores reduz a temperatura do ar ao seu redor, ao contrário de um simples objeto inanimado que apenas faz sombra?',
            options: [
              'A) Porque a árvore consome o calor do ar para realizar a transição de fase da água líquida para vapor (calor latente).',
              'B) Porque a árvore emite ar frio armazenado em suas raízes durante a noite.',
              'C) Porque a fotossíntese destrói os átomos de carbono quentes do ar.',
              'D) Porque as folhas absorvem o oxigênio e exalam gelo microscópico.'
            ],
            correctAnswerIndex: 0,
            explanation: 'A mudança de estado da água (líquida -> vapor) nos estômatos consome energia térmica do ambiente (calor latente), resfriando o ar.',
            teacherMediationTip: 'Conecte com o suor humano: o suor evapora na pele consumindo calor do corpo e nos resfriando.',
            plickersCardCode: 'PLICKERS-2S-BIO1'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Compreensão do Papel Ecológico da Vegetação',
            excellent: 'Explica o resfriamento evaporativo por calor latente e propõe infraestrutura verde viável.',
            satisfactory: 'Entende que as árvores fazem sombra e liberam umidade no ar.',
            needsImprovement: 'Acredita que a sombra das árvores é equivalente à sombra de um toldo de plástico.'
          }
        ]
      },
      {
        id: 'sexta',
        dayName: 'Sexta-feira',
        classCount: '3 Aulas Matemática + Aprofundamentos',
        title: 'Tabulação de Dados Térmicos, Mapa de Calor & Intervenção Urbana',
        subtitle: 'Cruzamento de Variáveis, Gráficos de Contorno/Mapa de Calor e Propostas Bioclimáticas para a Escola',
        mainSubjects: ['Matemática', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Todos os Professores Integradores da 2ª Série',
        bnccSkills: ['EM13MAT402', 'EM13MAT501', 'EM13CNT308'],
        coreConcepts: [
          'Cruzamento e tabulação de matrizes de dados (Temperatura x Horário x Material x Umidade)',
          'Elaboração de "Mapa de Calor" sintético da escola e seu entorno',
          'Modelagem de propostas de intervenção: Pintura refletiva (Cool Roofs), Jardins Verticais e Desimpermeabilização',
          'Cálculo de custo e benefício térmico estimado'
        ],
        disparadoraQuestion: 'Como transformar nossas medições de temperatura, umidade e albedo em um "Mapa de Calor" visual que oriente a reforma bioclimática da nossa escola?',
        summary: 'Culminância do projeto da 2ª Série. Tabulação dos dados microclimáticos em matrizes, desenho do Mapa de Calor da escola e elaboração de propostas de intervenção urbana e bioclimática.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '25 min',
            title: 'Compilação da Matriz Microclimática Escolar',
            description: 'Unificação dos dados térmicos coletados por todos os grupos em planilha compartilhada.',
            teacherActions: ['Projetar o Simulador de Ilha de Calor no App ASNPI2026.'],
            studentActions: ['Inserir as médias térmicas e umidades de cada ponto da escola.'],
            activeMethodology: 'Tratamento Estatístico de Dados'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '75 min',
            title: 'Elaboração do Mapa de Calor e Propostas Bioclimáticas',
            description: 'Criação do mapa colorido da escola destacando pontos críticos de estresse térmico.',
            teacherActions: ['Auxiliar no desenho dos contornos de isopletas de temperatura e propostas de arborização.'],
            studentActions: ['Desenhar o Mapa de Calor e formular a proposta de arborização e pintura de telhados.'],
            activeMethodology: 'Design Thinking & Cartografia Temática'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '35 min',
            title: 'Culminância & Apresentação do Plano de Intervenção',
            description: 'Apresentação das soluções bioclimáticas para a comunidade escolar.',
            teacherActions: ['Conduzir a apresentação final e a entrega do mapa para o conselho de escola.'],
            studentActions: ['Expor os mapas de calor e defender as propostas de plantio de árvores e cool roofs.'],
            activeMethodology: 'Protagonismo Estudantil'
          }
        ],
        labProtocol: {
          title: 'Construção do Mapa de Calor e Plano Bioclimático',
          objective: 'Mapear espacialmente as temperaturas e indicar intervenções urbanas prioritárias.',
          materials: ['Planta Baixa da Escola / App ASNPI2026', 'Lápis de Cor / Software Gráfico'],
          procedureSteps: [
            'Atribua cores de alerta para as faixas de temperatura (<28°C Verde, 28-32°C Amarelo, >32°C Vermelho).',
            'Pinte a planta baixa identificando os focos de ilha de calor na escola.',
            'Calcule a área de solo a ser desimpermeabilizada para o plantio de mudas.'
          ],
          dataCollectionTableHeaders: ['Ponto Focal', 'Temp. Máxima (°C)', 'Nível de Alerta', 'Proposta de Intervenção', 'Custo Estimado']
        },
        peerQuestions: [
          {
            id: 'q-2s-sex-1',
            gradeLevel: '2a_serie',
            day: 'sexta',
            subject: 'Matemática',
            topic: 'Análise de Matrizes e Mapas de Calor',
            question: 'Ao comparar o pátio asfaltado (36°C) com o jardim arborizado (28°C), a equipe da 2ª Série propôs a substituição de 100 m² de asfalto por paver claro com grama. Se essa intervenção reduz a temperatura média do local em 4°C, qual é a taxa de redução térmica por metro quadrado transformado?',
            options: ['A) 0,04 °C/m²', 'B) 0,4 °C/m²', 'C) 4,0 °C/m²', 'D) 40 °C/m²'],
            correctAnswerIndex: 0,
            explanation: 'Taxa = Redução Total / Área = 4°C / 100 m² = 0,04 °C por m².',
            teacherMediationTip: 'Exercite a divisão simples de razões físicas e estatísticas.',
            plickersCardCode: 'PLICKERS-2S-MAT2'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Síntese Espacial e Proposição de Intervenção Urbana',
            excellent: 'Elabora Mapa de Calor preciso, articula conceitos bioclimáticos e propõe soluções viáveis.',
            satisfactory: 'Constrói o mapa de calor e identifica as áreas mais quentes da escola.',
            needsImprovement: 'Apresenta mapas confusos sem legenda de cores ou escala térmica.'
          }
        ]
      }
    ]
  },

  '3a_serie': {
    id: '3a_serie',
    gradeTitle: '3ª Série - Ensino Médio',
    projectTitle: 'Farmacocinética: A Matemática e a Química dos Medicamentos',
    themeSubtitle: 'Decaimento Exponencial, Meia-Vida, Dosagem, Janela Terapêutica e Uso Racional',
    objective: 'Compreender o comportamento dos princípios ativos no organismo humano ao longo do tempo, relacionando dosagem, meia-vida ($t_{1/2}$), eliminação e toxicidade para promover o uso racional de medicamentos.',
    targetTurma: 'Turmas do Vespertino / 3ª Série EEEFM Antônio dos Santos Neves',
    totalClasses: '11 Aulas Vespertinas',
    icon: '💊',
    colorTheme: 'cyan',
    weeklySchedule: [
      {
        id: 'segunda',
        dayName: 'Segunda-feira',
        classCount: '2 Aulas Matemática + Aprofundamentos',
        title: 'Funções Exponenciais, Logaritmos & Meia-Vida ($t_{1/2}$)',
        subtitle: 'Decaimento de Fármacos na Corrente Sanguínea $N(t) = N_0 \cdot e^{-kt}$ e Escalas Logarítmicas',
        mainSubjects: ['Matemática', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Professores de Matemática & Aprofundamento',
        bnccSkills: ['EM13MAT304', 'EM13MAT503', 'EM13CNT301'],
        coreConcepts: [
          'Modelagem por Função Exponencial de Decaimento: $C(t) = C_0 \cdot e^{-k \cdot t}$ ou $C(t) = C_0 \cdot (1/2)^{t / t_{1/2}}$',
          'Conceito Matemático de Meia-Vida ($t_{1/2}$) e constante de eliminação $k = \frac{\ln(2)}{t_{1/2}}$',
          'Uso do Logaritmo Natural ($\ln$) para linearização de curvas exponenciais',
          'Acumulação de doses em intervalos regulares (Séries Geométricas e Estado de Equilíbrio / Steady-State)'
        ],
        disparadoraQuestion: 'Por que o médico manda tomar o remédio exatamente de 8 em 8 horas? O que acontece matematicamente no seu sangue se você esquecer ou tomar antes da hora?',
        summary: 'Lançamento do projeto da 3ª Série. Estudo das funções exponenciais e logarítmicas aplicadas ao decaimento da concentração plasmática de medicamentos e cálculo da meia-vida.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '20 min',
            title: 'O Enigma do Remédio que Desaparece do Sangue',
            description: 'Análise do gráfico de concentração de Paracetamol no sangue ao longo das horas.',
            teacherActions: ['Projetar a curva exponencial de decaimento e perguntar por que o gráfico não é uma reta.'],
            studentActions: ['Identificar o tempo necessário para a concentração cair pela metade ($t_{1/2}$).'],
            activeMethodology: 'Problematização Matemática'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '50 min',
            title: 'Equacionamento Exponencial e Logarítmico',
            description: 'Dedução da fórmula $C(t) = C_0 \cdot (1/2)^{t/t_{1/2}}$ e uso de $\ln$ para encontrar o tempo $t$.',
            teacherActions: ['Guiar a resolução da equação exponencial para achar $t$ quando $C(t)$ atinge a janela terapêutica.'],
            studentActions: ['Calcular a concentração plasmática para o Ibuprofeno ($t_{1/2} = 2h$) em 2h, 4h, 6h e 8h.'],
            activeMethodology: 'Modelagem Exponencial Ativa'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '20 min',
            title: 'Sessão Plickers sobre Decaimento Exponencial',
            description: 'Votação conceitual sobre meia-vida de fármacos e Séries Geométricas.',
            teacherActions: ['Aplicar questão Conceptest e gerenciar a discussão entre os pares.'],
            studentActions: ['Responder o Plickers e explicar a meia-vida ao colega.'],
            activeMethodology: 'Peer Instruction & Plickers'
          }
        ],
        labProtocol: {
          title: 'Simulação da Curva de Decaimento Exponencial Plasmático',
          objective: 'Modelar matematicamente a eliminação de um princípio ativo no tempo.',
          materials: ['Calculadora Científica / App ASNPI2026', 'Papel Semi-Logarítmico'],
          procedureSteps: [
            'Considere uma dose inicial $C_0 = 500 mg/L$ e meia-vida $t_{1/2} = 3 h$.',
            'Calcule $C(t)$ para $t = 0, 3, 6, 9, 12, 15 h$.',
            'Plote o gráfico em escala linear (curva exponencial) e em escala logarítmica (reta).'
          ],
          dataCollectionTableHeaders: ['Tempo t (horas)', 'Nº de Meia-Vidas', 'Concentração C(t) mg/L', 'Faixa Terapêutica']
        },
        peerQuestions: [
          {
            id: 'q-3s-seg-1',
            gradeLevel: '3a_serie',
            day: 'segunda',
            subject: 'Matemática',
            topic: 'Decaimento Exponencial e Meia-Vida',
            question: 'Um paciente toma uma dose de medicamento que atinge concentração inicial de 400 mg/L no sangue. Sabendo que a meia-vida do princípio ativo é de 4 horas, qual será a concentração restante no sangue após 12 horas?',
            options: ['A) 200 mg/L', 'B) 100 mg/L', 'C) 50 mg/L', 'D) 0 mg/L'],
            correctAnswerIndex: 2,
            explanation: '12 horas correspondem a 3 meias-vidas (12/4 = 3). 400 -> 200 (4h) -> 100 (8h) -> 50 mg/L (12h).',
            teacherMediationTip: 'Reforce que após 3 meias-vidas resta (1/2)^3 = 1/8 da dose inicial.',
            plickersCardCode: 'PLICKERS-3S-MAT1'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Modelagem Exponencial e Logarítmica',
            excellent: 'Aplica a equação exponencial C(t) e manipula logaritmos naturais para isolar o tempo com precisão.',
            satisfactory: 'Calcula concentrações dividindo por 2 a cada meia-vida.',
            needsImprovement: 'Trata o decaimento exponencial como se fosse uma função afim linear.'
          }
        ]
      },
      {
        id: 'terca',
        dayName: 'Terça-feira',
        classCount: '2 Aulas Física + Aprofundamentos',
        title: 'Taxas de Variação, Difusão & Transporte em Meios Biológicos',
        subtitle: 'Gradiente de Concentração, Lei de Fick, Viscosidade e Escalas de Transporte Passivo e Ativo',
        mainSubjects: ['Física', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Professores de Física & Aprofundamento',
        bnccSkills: ['EM13CNT101', 'EM13CNT103', 'EM13CNT207'],
        coreConcepts: [
          'Taxa de variação temporal da concentração ($\frac{dC}{dt}$)',
          'Fenômenos de Transporte Biológico: Difusão Simples e Facilitada (Lei de Fick: $J = -D \cdot \frac{dC}{dx}$)',
          'Influência da Viscosidade do Sangue e Temperatura corporal na velocidade de difusão',
          'Pressão Osmótica e Gradiente de Concentração nas membranas celulares'
        ],
        disparadoraQuestion: 'Como a molécula do remédio sai do estômago e consegue atravessar as membranas celulares para chegar até o local da dor no seu corpo? Qual força física empurra esse movimento?',
        summary: 'Aprofundamento na Biofísica dos medicamentos. Análise dos processos de difusão molecular a favor do gradiente de concentração, Lei de Fick e fatores que alteram a velocidade de absorção dos fármacos.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '20 min',
            title: 'Demonstração de Difusão em Meio Líquido',
            description: 'Gota de corante/fármaco adicionada em água fria vs. água morna.',
            teacherActions: ['Mostrar a dispersão do corante e perguntar qual o papel da energia cinética molecular.'],
            studentActions: ['Medir o tempo de difusão completa em diferentes temperaturas.'],
            activeMethodology: 'Demonstração Biofísica'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '50 min',
            title: 'Investigação da Lei de Fick e Permeabilidade',
            description: 'Simulação do fluxo de difusão através de membranas sintéticas de porosidades variadas.',
            teacherActions: ['Apresentar a Lei de Fick $J = -D \cdot \frac{\Delta C}{\Delta x}$ relacionando fluxo e espessura.'],
            studentActions: ['Calcular o fluxo de difusão $J$ em função do gradiente de concentração.'],
            activeMethodology: 'Investigação em Biofísica'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '20 min',
            title: 'Sessão Plickers sobre Difusão e Transporte',
            description: 'Votação interativa sobre fatores físicos que aceleram a absorção dos remédios.',
            teacherActions: ['Aplicar questão Conceptest e gerenciar a troca entre os grupos.'],
            studentActions: ['Responder o Plickers e discutir com os colegas.'],
            activeMethodology: 'Peer Instruction & Plickers'
          }
        ],
        labProtocol: {
          title: 'Estudo Experimental da Difusão em Membranas',
          objective: 'Determinar a influência da temperatura e gradiente de concentração na velocidade de difusão.',
          materials: ['Tubos de Ensaio', 'Membrana de Celofane/Dialise', 'Solução de Amido/Iodo', 'Cronômetro'],
          procedureSteps: [
            'Monte a câmara de difusão com a membrana separando as soluções.',
            'Cronometre o tempo para o surgimento da coloração no compartimento oposto.',
            'Varie a concentração inicial para determinar a taxa de variação do fluxo.'
          ],
          dataCollectionTableHeaders: ['Gradiente ΔC', 'Temp. (°C)', 'Tempo de Difusão (s)', 'Fluxo J Estimado']
        },
        peerQuestions: [
          {
            id: 'q-3s-ter-1',
            gradeLevel: '3a_serie',
            day: 'terca',
            subject: 'Física',
            topic: 'Lei de Fick e Difusão Biológica',
            question: 'Segundo a Lei de Fick, o fluxo de difusão J de um princípio ativo através de uma membrana biológica é diretamente proporcional ao gradiente de concentração (ΔC/Δx). Se a concentração do remédio no intestino aumentar bastante após a ingestão de um comprimido, o que acontece com a taxa de absorção inicial para o sangue?',
            options: [
              'A) A taxa de absorção diminui, pois o sangue fica saturado instantaneamente.',
              'B) A taxa de absorção aumenta, pois a força motriz do gradiente de concentração fica maior.',
              'C) A taxa de absorção permanece inalterada, pois difusão não depende de concentração.',
              'D) O remédio é empurrado de volta para a boca.'
            ],
            correctAnswerIndex: 1,
            explanation: 'Quanto maior o gradiente de concentração entre os dois lados da membrana (ΔC), maior é a força motriz e mais rápido o fármaco difunde para o sangue.',
            teacherMediationTip: 'Associe a difusão a uma rampa: quanto mais alta a diferença de nível (gradiente), mais rápido a bola rola.',
            plickersCardCode: 'PLICKERS-3S-FIS1'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Compreensão dos Fenômenos Físicos de Transporte',
            excellent: 'Aplica a Lei de Fick e relaciona gradiente, viscosidade e temperatura à taxa de difusão.',
            satisfactory: 'Compreende que o fármaco se move do local mais concentrado para o menos concentrado.',
            needsImprovement: 'Confunde transporte passivo por difusão com bomba ativa de energia.'
          }
        ]
      },
      {
        id: 'quarta',
        dayName: 'Quarta-feira',
        classCount: '2 Aulas Química + Aprofundamentos',
        title: 'Funções Orgânicas, Polaridade & Solubilidade dos Fármacos',
        subtitle: 'Estrutura Química dos Princípios Ativos, Lipofilicidade vs. Hidrofilicidade e Interações Com Receptor',
        mainSubjects: ['Química', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Professores de Química & Aprofundamento',
        bnccSkills: ['EM13CNT102', 'EM13CNT104', 'EM13CNT205'],
        coreConcepts: [
          'Identificação de Funções Orgânicas em fármacos (Fenol, Ácido Carboxílico, Amina, Amida, Éster, Éter)',
          'Polaridade das Moléculas e Forças Intermoleculares (Ligações de Hidrogênio, Dipolo-Dipolo, Dispersão de London)',
          'Solubilidade: Lipofilicidade (coeficiente de partição $K_{ow}$) x Hidrofilicidade para travessia de membranas lipídicas',
          'Interação Fármaco-Receptor (Modelo Chave-Fechadura e Encaixe Induzido)'
        ],
        disparadoraQuestion: 'Por que alguns remédios precisam ser tomados junto com a refeição engordurada enquanto outros devem ser tomados apenas com água pura em jejum? Qual segredo químico está na molécula?',
        summary: 'Investigação da Química Orgânica dos medicamentos. Identificação dos grupos funcionais presentes na Dipirona, Paracetamol, Aspirina e Amoxicilina, e análise da relação entre polaridade, solubilidade e absorção.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '20 min',
            title: 'Mapeamento das Moléculas dos Remédios Comuns',
            description: 'Projeção das fórmulas estruturais do Paracetamol, Aspirina e Ibuprofeno.',
            teacherActions: ['Pedir para os alunos circularem os grupos funcionais reconhecidos nas moléculas.'],
            studentActions: ['Identificar fenol, amida, ácido carboxílico e anéis aromáticos.'],
            activeMethodology: 'Reconhecimento de Estruturas Orgânicas'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '50 min',
            title: 'Estudo de Polaridade e Solubilidade ($K_{ow}$)',
            description: 'Análise da solubilidade dos princípios ativos em solventes polares (água) e apolares (óleo/octanol).',
            teacherActions: ['Explicar o coeficiente de partição $K_{ow} = [Fármaco]_{octanol} / [Fármaco]_{água}$.'],
            studentActions: ['Classificar os medicamentos em lipofílicos ou hidrofílicos e deduzir sua absorção.'],
            activeMethodology: 'Investigação Química em Grupo'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '20 min',
            title: 'Sessão Plickers sobre Química de Fármacos',
            description: 'Votação interativa sobre funções orgânicas e forças intermoleculares em remédios.',
            teacherActions: ['Aplicar questão Conceptest no Plickers e gerenciar os debates.'],
            studentActions: ['Responder o Plickers e argumentar com base na polaridade das ligações.'],
            activeMethodology: 'Peer Instruction & Plickers'
          }
        ],
        labProtocol: {
          title: 'Identificação de Grupos Funcionais e Ensaio de Solubilidade',
          objective: 'Correlacionar a estrutura química do fármaco à sua solubilidade em meio aquoso e lipídico.',
          materials: ['Modelos Moleculares', 'Amostras de Fármacos (Ácido Acetilsalicílico, Paracetamol)', 'Água, Álcool e Óleo Veg.'],
          procedureSteps: [
            'Monte a estrutura 3D da molécula de Paracetamol com os kits.',
            'Identifique os sítios de ligação de hidrogênio (grupos -OH e -NH-CO-).',
            'Sinta e meça a dissolução da amostra pulverizada em água e em óleo.'
          ],
          dataCollectionTableHeaders: ['Fármaco', 'Funções Orgânicas', 'Grupos Polares', 'Solubilidade em Água', 'Caráter Lipofílico']
        },
        peerQuestions: [
          {
            id: 'q-3s-qua-1',
            gradeLevel: '3a_serie',
            day: 'quarta',
            subject: 'Química',
            topic: 'Funções Orgânicas e Polaridade',
            question: 'A molécula do Paracetamol possui um anel aromático ligado a um grupo hidroxila (-OH) e a um grupo amida (-NH-CO-CH3). Quais funções orgânicas estão presentes nessa estrutura?',
            options: [
              'A) Álcool e Ácido Carboxílico.',
              'B) Fenol e Amida.',
              'C) Éter e Amina.',
              'D) Aldeído e Cetona.'
            ],
            correctAnswerIndex: 1,
            explanation: 'A hidroxila (-OH) ligada diretamente ao anel aromático caracteriza a função Fenol. O grupo -NH-CO- caracteriza a função Amida.',
            teacherMediationTip: 'Cuidado para não confundir hidroxila em anel aromático (Fenol) com hidroxila em carbono saturado (Álcool).',
            plickersCardCode: 'PLICKERS-3S-QUI1'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Reconhecimento Estrutural e Polaridade Orgânica',
            excellent: 'Identifica corretamente todas as funções orgânicas e explica a solubilidade com base nas forças intermoleculares.',
            satisfactory: 'Identifica as funções orgânicas principais com pequeno auxílio.',
            needsImprovement: 'Confunde amina com amida e álcool com fenol.'
          }
        ]
      },
      {
        id: 'quinta',
        dayName: 'Quinta-feira',
        classCount: '2 Aulas Biologia + Aprofundamentos',
        title: 'Fisiologia Humana: Absorção, Metabolismo Hepático & Excreção Renal',
        subtitle: 'Caminho do Fármaco no Organismo (LADME), Citocromo P450, Néfrons e Homeostase',
        mainSubjects: ['Biologia', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Professores de Biologia & Aprofundamento',
        bnccSkills: ['EM13CNT202', 'EM13CNT207', 'EM13CNT301'],
        coreConcepts: [
          'Etapas da Farmacocinética: LADME (Liberação, Absorção, Distribuição, Metabolismo/Biotransformação e Excreção)',
          'Absorção Intestinal (Microvilosidades e vascularização) e Efeito de Primeira Passagem Hepática',
          'Biotransformação Hepática: Enzimas do complexo Citocromo P450 e inativação/ativação de pró-fármacos',
          'Excreção Renal: Filtração Glomerular, Reabsorção Tubular e Secreção nos Néfrons',
          'Risco da Auto-medicação: Sobrecarga hepática/renal e Hepatotoxicidade'
        ],
        disparadoraQuestion: 'O que o seu fígado e os seus rins fazem com o remédio assim que ele entra no seu corpo? Por que misturar remédios ou tomar doses altas pode falhar seus órgãos?',
        summary: 'Investigação da Fisiologia Humana aplicada aos medicamentos. Mapeamento do percurso do fármaco desde a absorção no sistema digestório, metabolização hepática pelo Citocromo P450 até a eliminação pelos rins.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '20 min',
            title: 'Mapeamento da Viagem do Fármaco (LADME)',
            description: 'Acompanhamento do trajeto de uma drágea desde a deglutição até a urina.',
            teacherActions: ['Projetar o esquema do sistema digestório, circulatório, hepático e renal.'],
            studentActions: ['Desenhar a rota do fármaco e identificar os órgãos filtros (Fígado e Rins).'],
            activeMethodology: 'Mapeamento Fisiológico'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '50 min',
            title: 'Estudo do Metabolismo Hepático e Toxicidade',
            description: 'Análise de casos de hepatotoxicidade por superdosagem de Paracetamol.',
            teacherActions: ['Explicar o papel do Citocromo P450 na conversão de metabólitos ativos e inativos.'],
            studentActions: ['Analisar o efeito do álcool e de múltiplos remédios na sobrecarga enzimática do fígado.'],
            activeMethodology: 'Estudo de Caso Fisiológico'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '20 min',
            title: 'Sessão Plickers sobre Uso Racional de Medicamentos',
            description: 'Votação interativa sobre riscos da automedicação e descarte correto.',
            teacherActions: ['Aplicar questão Plickers sobre excreção renal e hepatotoxicidade.'],
            studentActions: ['Responder o Plickers e formular alertas para a comunidade.'],
            activeMethodology: 'Peer Instruction & Plickers'
          }
        ],
        labProtocol: {
          title: 'Estudo das Etapas LADME e Sobrecarga Fisiológica',
          objective: 'Mapear as vias de biotransformação hepática e eliminação renal de metabólitos.',
          materials: ['Esquema Anatômico do Sistema Renal e Hepático', 'App ASNPI2026'],
          procedureSteps: [
            'Trace a rota de um fármaco oral indicando os locais de absorção (estômago/intestino).',
            'Identifique a veia porta hepática e o efeito de primeira passagem.',
            'Descreva o processo de filtração nos néfrons e o impacto da desidratação na toxicidade.'
          ],
          dataCollectionTableHeaders: ['Etapa LADME', 'Órgão Envolvido', 'Mecanismo Fisiológico', 'Fator de Risco / Alteração']
        },
        peerQuestions: [
          {
            id: 'q-3s-qui-1',
            gradeLevel: '3a_serie',
            day: 'quinta',
            subject: 'Biologia',
            topic: 'Efeito de Primeira Passagem Hepática',
            question: 'Quando um medicamento é administrado por via oral, antes de alcançar a circulação sistêmica e o local da dor, ele passa obrigatoriamente pelo fígado através da veia porta hepática. Como se chama esse fenômeno fisiológico que pode inativar parte da dose ingerida?',
            options: [
              'A) Filtração Glomerular Renal.',
              'B) Efeito de Primeira Passagem Hepática.',
              'C) Peristaltismo Estomacal Inverso.',
              'D) Reabsorção Tubular Passiva.'
            ],
            correctAnswerIndex: 1,
            explanation: 'O efeito de primeira passagem hepática é a metabolização inicial do fármaco pelo fígado logo após sua absorção intestinal.',
            teacherMediationTip: 'Explique por que alguns remédios precisam ser sublinguais ou injetáveis para fugir desse efeito.',
            plickersCardCode: 'PLICKERS-3S-BIO1'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Entendimento da Fisiologia LADME e Toxicidade',
            excellent: 'Articula com clareza as etapas de absorção, metabolização hepática e excreção renal.',
            satisfactory: 'Identifica que o fígado metaboliza e o rim excreta o remédio.',
            needsImprovement: 'Acredita que os remédios adivinham onde está a dor sem passar pelo sangue.'
          }
        ]
      },
      {
        id: 'sexta',
        dayName: 'Sexta-feira',
        classCount: '3 Aulas Matemática + Aprofundamentos',
        title: 'Tratamento de Simulação de Dosagem, Consolidação & Cartilha Racional',
        subtitle: 'Curvas Concentração-Tempo, Janela Terapêutica, Cartilha de Orientação e Conscientização',
        mainSubjects: ['Matemática', 'Aprofundamento Interdisciplinar'],
        responsibleTeachers: 'Todos os Professores Integradores da 3ª Série',
        bnccSkills: ['EM13MAT402', 'EM13MAT501', 'EM13CNT308'],
        coreConcepts: [
          'Tratamento e simulação estatística de regimes de dosagem repetida',
          'Definição da Janela Terapêutica (Concentração Mínima Eficaz $CME$ x Concentração Mínima Tóxica $CMT$)',
          'Elaboração da "Cartilha do Uso Racional de Medicamentos" para a comunidade escolar',
          'Análise de riscos da interrupção precoce de antibióticos e superdosagem de analgésicos'
        ],
        disparadoraQuestion: 'Como transformar nossas equações de meia-vida, química orgânica e fisiologia em uma Cartilha Ilustrada capaz de salvar vidas na nossa comunidade escolar?',
        summary: 'Culminância do projeto da 3ª Série. Consolidação dos cálculos de dosagem em simuladores virtuais, montagem da Cartilha do Uso Racional de Medicamentos e apresentação para a comunidade escolar.',
        lessonSteps: [
          {
            phase: 'Abertura / Problematização',
            duration: '25 min',
            title: 'Simulação de Múltiplas Doses e Estado Estacionário',
            description: 'Análise do gráfico de acúmulo de doses repetidas de 8 em 8 horas no Simulador ASNPI2026.',
            teacherActions: ['Mostrar o gráfico de serra (oscilação entre picos e vales na janela terapêutica).'],
            studentActions: ['Verificar o tempo necessário para atingir o estado de equilíbrio (Steady-State aprox. 4 a 5 meias-vidas).'],
            activeMethodology: 'Simulação Computacional Ativa'
          },
          {
            phase: 'Desenvolvimento / Investigação',
            duration: '75 min',
            title: 'Montagem da Cartilha de Orientação sobre Fármacos',
            description: 'Redação das seções de Dosagem, Meia-Vida, Riscos do Álcool e Descarte Correto.',
            teacherActions: ['Orientar os grupos na divisão de tarefas da cartilha (Analgésicos, Antibióticos, Anti-inflamatórios).'],
            studentActions: ['Criar ilustrações, infográficos de meia-vida e textos explicativos simples.'],
            activeMethodology: 'Design Thinking & Comunicação Científica'
          },
          {
            phase: 'Fechamento / Sistematização',
            duration: '35 min',
            title: 'Culminância & Apresentação da Cartilha',
            description: 'Apresentação pública da Cartilha de Uso Racional de Medicamentos.',
            teacherActions: ['Mediar a entrega dos exemplares da cartilha para a coordenação e estudantes.'],
            studentActions: ['Apresentar as conclusões sobre a matemática dos horários dos remédios e conscientizar a escola.'],
            activeMethodology: 'Protagonismo Estudantil'
          }
        ],
        labProtocol: {
          title: 'Elaboração da Cartilha de Orientação e Uso Racional',
          objective: 'Sintetizar o conhecimento de matemática, química e biologia em material educativo.',
          materials: ['Simulador de Farmacocinética / App ASNPI2026', 'Modelos de Cartilha'],
          procedureSteps: [
            'Simule a curva de acúmulo de doses para um antibiótico.',
            'Identifique a consequência de pular uma dose (queda abaixo da Concentração Mínima Eficaz).',
            'Formate as orientações sobre descarte correto em farmácias e postos de saúde.'
          ],
          dataCollectionTableHeaders: ['Fármaco', 'Intervalo Ideal (h)', 'Janela Terapêutica (mg/L)', 'Risco de Superdosagem', 'Orientação Principal']
        },
        peerQuestions: [
          {
            id: 'q-3s-sex-1',
            gradeLevel: '3a_serie',
            day: 'sexta',
            subject: 'Matemática',
            topic: 'Janela Terapêutica e Estado Estacionário',
            question: 'A Concentração Mínima Eficaz (CME) de um antibiótico é de 5 mg/L e a Concentração Mínima Tóxica (CMT) é de 20 mg/L. Se um paciente tomar o dobro da dose recomendada para "curar mais rápido", o que acontece com a curva plasmática?',
            options: [
              'A) Permanece perfeitamente dentro da janela terapêutica sem nenhum efeito colateral.',
              'B) Ultrapassa a Concentração Mínima Tóxica (20 mg/L), causando riscos graves de intoxicação.',
              'C) Transforma o antibiótico em uma função afim decrescente.',
              'D) Cancela o efeito do remédio instantaneamente.'
            ],
            correctAnswerIndex: 1,
            explanation: 'Dobrar a dose faz o pico plasmático ultrapassar o limite superior da janela terapêutica (CMT), entrando na faixa de toxicidade.',
            teacherMediationTip: 'Destaque o perigo da ideia popular de que "dobrar a dose cura na metade do tempo".',
            plickersCardCode: 'PLICKERS-3S-MAT2'
          }
        ],
        evaluationRubric: [
          {
            criteria: 'Sintese Farmacocinética e Comunicação Comunitária',
            excellent: 'Interpreta a janela terapêutica com precisão e constrói cartilha educativa esclarecedora.',
            satisfactory: 'Compreende a ideia de janela terapêutica e contribui na elaboração da cartilha.',
            needsImprovement: 'Apresenta visão errônea de que tomar mais remédio é sempre melhor.'
          }
        ]
      }
    ]
  }
};
