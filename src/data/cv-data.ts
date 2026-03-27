import type { LanguageCode } from '@/i18n';

export interface PersonalData {
  name: string;
  fullName: string;
  location: string;
  phone: string;
  email: string;
  linkedin?: string;
  currentRole: string;
  currentCompany: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

export interface ClientItem {
  company: string;
  country: string;
  relationship: string;
}

export interface FeeItem {
  type: string;
  duration: string;
  rate: string;
  includes: string;
}

export interface CVContent {
  profile: string;
  about: {
    quote: string;
    quoteDescription: string;
  };
  skills: {
    technical: string[];
    equipment: string[];
    software: string[];
    softSkills: string[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  services: ServiceItem[];
  methodology: MethodologyStep[];
  clients: ClientItem[];
  events: string[];
  fees: FeeItem[];
}

export interface LuisData {
  personal: PersonalData;
  stats: { value: string; label: string }[];
  cv: Record<LanguageCode, CVContent>;
}

const personal: PersonalData = {
  name: 'Luis Guzman',
  fullName: 'Luis Eudoro Guzman Sanchez',
  location: 'Panama City, Panama',
  phone: '+507 6938 9715',
  email: 'luiseudoro@gmail.com',
  currentRole: 'Regional Sales LATAM',
  currentCompany: 'Zermatt Tools Ferramentas de Precisao Ltda.',
};

const stats = [
  { value: '27+', label: 'years.experience' },
  { value: '60+', label: 'people.led' },
  { value: '8+', label: 'plants.latam' },
  { value: '5+', label: 'countries' },
];

export const luisData: LuisData = {
  personal,
  stats,
  cv: {
    es: {
      profile:
        'Tecnologo en Ingenieria Industrial con mas de 27 anos de experiencia en mantenimiento, reparacion y coordinacion de equipos de produccion en la industria de envases metalicos. Especialista en fabricacion de envases de aluminio de dos piezas con trayectoria directa en Crown Colombiana, EUBALL Panama y soporte tecnico-comercial en varias plantas de LATAM.',
      about: {
        quote: 'Conozco los problemas porque los he vivido.',
        quoteDescription:
          'Luis combina experiencia real de planta, liderazgo operativo y criterio tecnico para entrar rapido al problema y convertirlo en una accion util.',
      },
      skills: {
        technical: [
          'Mantenimiento preventivo y correctivo',
          'Interpretacion de diagramas mecanicos, hidraulicos y electricos',
          'Analisis de fallas y metrologia mecanica',
          'Montaje y ajuste de componentes',
          'Control estadistico de procesos',
          'ISO 9001 / ISO 14001 / OHSAS 18001',
          'SAP y MP9',
        ],
        equipment: [
          'Multiplicadores de torque hidraulicos',
          'Bombas hidraulicas',
          'Pistolas de impacto',
          'Camara termografica',
          'Rugosimetro',
          'Videoscopio',
          'Banco de pruebas',
        ],
        software: ['SAP (key user)', 'MP9', 'Microsoft Office'],
        softSkills: [
          'Trabajo en equipo',
          'Orientacion a resultados',
          'Comunicacion clara',
          'Capacitacion tecnica',
          'Disponibilidad para visitas tecnicas',
        ],
      },
      experience: [
        {
          role: 'Regional Sales LATAM',
          company: 'Zermatt Tools Ferramentas de Precisao Ltda.',
          location: 'America Latina',
          period: 'Ago 2024 - Presente',
          description:
            'Desarrollo comercial y soporte tecnico para clientes de la industria de envases metalicos, con apertura de negocios en Colombia, Panama, Guatemala y Mexico.',
        },
        {
          role: 'Jefe de Area Back End',
          company: 'EUBALL Panama',
          location: 'Panama City, Panama',
          period: 'Ene 2022 - May 2024',
          description:
            'Responsable de mantenimiento, disponibilidad de equipos y pruebas de nuevos materiales y herramientas para mejorar el proceso y optimizar costos.',
        },
        {
          role: 'Jefe de Garantia de Calidad y Mejora Continua',
          company: 'EUBALL Panama',
          location: 'Panama City, Panama',
          period: 'Jul 2020 - Dic 2021',
          description:
            'Control de variables de proceso y coordinacion de ACR / 3D para atender fallas de equipo, proceso y producto.',
        },
        {
          role: 'Coordinador de Mantenimiento',
          company: 'EUBALL Panama',
          location: 'Panama City, Panama',
          period: 'Jun 2017 - Jul 2020',
          description:
            'Planificacion y coordinacion de mantenimiento mensual y anual de equipos de produccion mediante SAP y MP9.',
        },
        {
          role: 'Ingeniero de Control de Produccion',
          company: 'EUBALL Panama',
          location: 'Panama City, Panama',
          period: 'Ene 2015 - May 2017',
          description:
            'Validacion de registros de produccion, materias primas, tiempos de fabricacion e inventario en SAP.',
        },
        {
          role: 'Coordinador de Produccion',
          company: 'Crown Colombiana S.A.',
          location: 'Colombia',
          period: 'Ene 2000 - Sep 2013',
          description:
            'Liderazgo de 60 personas en 3 turnos con foco en eficiencia, reduccion de desperdicio y cumplimiento de seguridad.',
        },
        {
          role: 'Mecanico de Mantenimiento y Herramenteria',
          company: 'Crown Colombiana S.A.',
          location: 'Colombia',
          period: 'Jun 1997 - Dic 1999',
          description:
            'Revision, mantenimiento y rectificacion de herramientas para fabricacion de envases de aluminio de dos piezas.',
        },
      ],
      education: [
        { degree: 'Tecnologo en Ingenieria Industrial', institution: 'UNAD', year: '2013' },
        { degree: 'Tecnico en Mantenimiento Industrial', institution: 'SENA', year: '1991' },
        { degree: 'Bachiller Tecnico en Mecanica Industrial y Fundicion', institution: 'Colegio Distrital Tomas Rueda Vargas', year: '1985' },
      ],
      services: [
        {
          title: 'Asistencia tecnica en sitio',
          description:
            'Supervision presencial en planta, soporte tecnico durante pruebas y recomendaciones inmediatas para ajustar proceso, equipos o herramentales.',
        },
        {
          title: 'Supervision de pruebas de herramientas de precision',
          description:
            'Validacion de herramientas nuevas en linea, comparacion de resultados y documentacion tecnica para toma de decision.',
        },
        {
          title: 'Diagnostico y analisis de fallas',
          description:
            'Identificacion de causa raiz, levantamiento tecnico y plan de accion correctiva para equipos de produccion.',
        },
        {
          title: 'Capacitacion y transferencia de conocimiento',
          description:
            'Formacion para tecnicos y operadores en mantenimiento, criterios de operacion y buenas practicas de industria.',
        },
        {
          title: 'Consultoria en programas de mantenimiento',
          description:
            'Revision y optimizacion de rutinas preventivas, correctivas, indicadores y uso de SAP / MP9 para elevar disponibilidad.',
        },
      ],
      methodology: [
        { number: '01', title: 'Preparacion pre-visita', description: 'Revision de informacion tecnica, historicos y objetivo puntual de la intervencion.' },
        { number: '02', title: 'Evaluacion inicial en sitio', description: 'Lectura operativa del area, equipos, parametros y alineacion con el equipo local.' },
        { number: '03', title: 'Ejecucion y supervision', description: 'Acompanamiento de pruebas, observacion de variables criticas y ajuste tecnico cuando se requiere.' },
        { number: '04', title: 'Analisis y resultados', description: 'Comparacion contra objetivo, hallazgos tecnicos y oportunidades de mejora.' },
        { number: '05', title: 'Informe y seguimiento', description: 'Entrega de recomendaciones, plan de accion y seguimiento posterior.' },
      ],
      clients: [
        { company: 'Crown Colombiana S.A.', country: 'Colombia', relationship: '16 anos de experiencia directa en planta' },
        { company: 'EUBALL Panama', country: 'Panama', relationship: '10 anos en multiples roles de liderazgo' },
        { company: 'Envases Universales / Ball', country: 'Panama, Guatemala, Mexico', relationship: 'Relacion comercial activa' },
        { company: 'Canpack Colombia', country: 'Colombia', relationship: 'Relacion comercial establecida' },
        { company: 'Crown Cork', country: 'Mexico', relationship: 'Presentaciones tecnicas y comerciales' },
        { company: 'Heineken Meoqui', country: 'Mexico', relationship: 'Presentaciones tecnicas de herramientas' },
        { company: 'ECA', country: 'Guatemala', relationship: 'Proyectos comerciales' },
      ],
      events: ['LATAMCAN Brasil 2025', 'LATAMCAN Mexico 2026'],
      fees: [
        { type: 'Tarifa por hora', duration: '1 hora', rate: '$120 USD', includes: 'Consultoria remota o presencial' },
        { type: 'Medio dia', duration: 'Hasta 4 horas', rate: '$500 USD', includes: 'Visita tecnica y reporte preliminar' },
        { type: 'Dia completo', duration: '8 horas', rate: '$950 USD', includes: 'Visita tecnica, supervision, analisis e informe' },
      ],
    },
    en: {
      profile:
        'Industrial Engineering Technologist with more than 27 years of experience in maintenance, repair, and production-equipment coordination within the metal packaging industry. Specialist in two-piece aluminum can manufacturing with direct plant experience at Crown Colombiana, EUBALL Panama, and multiple LATAM technical-commercial operations.',
      about: {
        quote: 'I know the problems because I have lived them.',
        quoteDescription:
          'Luis combines hands-on plant experience, operational leadership, and technical judgment to move quickly from symptom to action.',
      },
      skills: {
        technical: [
          'Preventive and corrective maintenance',
          'Mechanical, hydraulic, and electrical drawing interpretation',
          'Failure analysis and mechanical metrology',
          'Component assembly and adjustment',
          'Statistical process control',
          'ISO 9001 / ISO 14001 / OHSAS 18001',
          'SAP and MP9',
        ],
        equipment: [
          'Hydraulic torque multipliers',
          'Hydraulic pumps',
          'Impact guns',
          'Thermographic camera',
          'Roughness tester',
          'Videoscope',
          'Test bench',
        ],
        software: ['SAP (key user)', 'MP9', 'Microsoft Office'],
        softSkills: [
          'Team leadership',
          'Results focus',
          'Clear communication',
          'Technical training',
          'On-site support readiness',
        ],
      },
      experience: [
        {
          role: 'Regional Sales LATAM',
          company: 'Zermatt Tools Ferramentas de Precisao Ltda.',
          location: 'Latin America',
          period: 'Aug 2024 - Present',
          description:
            'Commercial development and technical support for metal packaging clients, opening business across Colombia, Panama, Guatemala, and Mexico.',
        },
        {
          role: 'Back End Area Manager',
          company: 'EUBALL Panama',
          location: 'Panama City, Panama',
          period: 'Jan 2022 - May 2024',
          description:
            'Accountable for equipment maintenance, line availability, and trials for new materials and tools.',
        },
        {
          role: 'Quality Assurance and Continuous Improvement Manager',
          company: 'EUBALL Panama',
          location: 'Panama City, Panama',
          period: 'Jul 2020 - Dec 2021',
          description:
            'Led process-variable control and ACR / 3D coordination for equipment, process, and product issues.',
        },
        {
          role: 'Maintenance Coordinator',
          company: 'EUBALL Panama',
          location: 'Panama City, Panama',
          period: 'Jun 2017 - Jul 2020',
          description:
            'Planned monthly and annual maintenance for production equipment through SAP and MP9.',
        },
        {
          role: 'Production Control Engineer',
          company: 'EUBALL Panama',
          location: 'Panama City, Panama',
          period: 'Jan 2015 - May 2017',
          description:
            'Validated production records, raw materials, manufacturing times, and inventory control in SAP.',
        },
        {
          role: 'Production Coordinator',
          company: 'Crown Colombiana S.A.',
          location: 'Colombia',
          period: 'Jan 2000 - Sep 2013',
          description:
            'Led 60 people across rotating shifts with focus on efficiency, waste reduction, and safety compliance.',
        },
        {
          role: 'Maintenance Mechanic and Tooling Specialist',
          company: 'Crown Colombiana S.A.',
          location: 'Colombia',
          period: 'Jun 1997 - Dec 1999',
          description:
            'Tool review, maintenance, and reconditioning for two-piece aluminum can manufacturing.',
        },
      ],
      education: [
        { degree: 'Industrial Engineering Technologist', institution: 'UNAD', year: '2013' },
        { degree: 'Industrial Maintenance Technician', institution: 'SENA', year: '1991' },
        { degree: 'Technical High School Diploma in Industrial Mechanics and Foundry', institution: 'Colegio Distrital Tomas Rueda Vargas', year: '1985' },
      ],
      services: [
        { title: 'On-site technical assistance', description: 'Plant-floor supervision, test support, and immediate recommendations to adjust process, equipment, or tooling.' },
        { title: 'Precision tooling test supervision', description: 'Qualification of new tools in production lines with result comparison and technical documentation.' },
        { title: 'Failure diagnosis and analysis', description: 'Technical diagnosis, root-cause identification, and corrective-action definition for production equipment.' },
        { title: 'Training and knowledge transfer', description: 'Training for technicians and operators in maintenance routines, operating criteria, and industry best practices.' },
        { title: 'Maintenance-program consulting', description: 'Optimization of preventive and corrective plans, KPIs, and SAP / MP9 use to improve equipment availability.' },
      ],
      methodology: [
        { number: '01', title: 'Pre-visit preparation', description: 'Review of technical data, plant context, history, and intervention scope.' },
        { number: '02', title: 'On-site initial assessment', description: 'Operational reading of the area, equipment review, parameters, and local-team alignment.' },
        { number: '03', title: 'Execution and supervision', description: 'Direct support during tests, observation of critical variables, and technical adjustment when needed.' },
        { number: '04', title: 'Analysis and results', description: 'Comparison against targets, technical findings, and improvement opportunities.' },
        { number: '05', title: 'Report and follow-up', description: 'Recommendations, action plan, and follow-up after the visit.' },
      ],
      clients: [
        { company: 'Crown Colombiana S.A.', country: 'Colombia', relationship: '16 years of direct plant experience' },
        { company: 'EUBALL Panama', country: 'Panama', relationship: '10 years in multiple leadership roles' },
        { company: 'Envases Universales / Ball', country: 'Panama, Guatemala, Mexico', relationship: 'Active commercial relationship' },
        { company: 'Canpack Colombia', country: 'Colombia', relationship: 'Established commercial relationship' },
        { company: 'Crown Cork', country: 'Mexico', relationship: 'Technical and commercial presentations' },
        { company: 'Heineken Meoqui', country: 'Mexico', relationship: 'Technical tooling presentations' },
        { company: 'ECA', country: 'Guatemala', relationship: 'Commercial projects' },
      ],
      events: ['LATAMCAN Brazil 2025', 'LATAMCAN Mexico 2026'],
      fees: [
        { type: 'Hourly rate', duration: '1 hour', rate: '$120 USD', includes: 'Remote or on-site consulting' },
        { type: 'Half day', duration: 'Up to 4 hours', rate: '$500 USD', includes: 'Technical visit and preliminary report' },
        { type: 'Full day', duration: '8 hours', rate: '$950 USD', includes: 'Technical visit, supervision, analysis, and report' },
      ],
    },
    pt: {
      profile:
        'Tecnologo em Engenharia Industrial com mais de 27 anos de experiencia em manutencao, reparo e coordenacao de equipamentos de producao na industria de embalagens metalicas. Especialista em fabricacao de latas de aluminio de duas pecas com experiencia direta em Crown Colombiana, EUBALL Panama e operacoes tecnico-comerciais na LATAM.',
      about: {
        quote: 'Conheco os problemas porque os vivi.',
        quoteDescription:
          'Luis combina experiencia real de planta, lideranca operacional e criterio tecnico para sair rapido do sintoma e chegar a uma acao pratica.',
      },
      skills: {
        technical: [
          'Manutencao preventiva e corretiva',
          'Interpretacao de desenhos mecanicos, hidraulicos e eletricos',
          'Analise de falhas e metrologia mecanica',
          'Montagem e ajuste de componentes',
          'Controle estatistico de processos',
          'ISO 9001 / ISO 14001 / OHSAS 18001',
          'SAP e MP9',
        ],
        equipment: [
          'Multiplicadores de torque hidraulicos',
          'Bombas hidraulicas',
          'Pistolas de impacto',
          'Camera termografica',
          'Rugosimetro',
          'Videoscopio',
          'Bancada de testes',
        ],
        software: ['SAP (key user)', 'MP9', 'Microsoft Office'],
        softSkills: [
          'Lideranca de equipe',
          'Foco em resultados',
          'Comunicacao clara',
          'Treinamento tecnico',
          'Prontidao para visitas tecnicas',
        ],
      },
      experience: [
        {
          role: 'Regional Sales LATAM',
          company: 'Zermatt Tools Ferramentas de Precisao Ltda.',
          location: 'America Latina',
          period: 'Ago 2024 - Presente',
          description:
            'Desenvolvimento comercial e suporte tecnico para clientes da industria de embalagens metalicas na Colombia, Panama, Guatemala e Mexico.',
        },
        {
          role: 'Chefe de Area Back End',
          company: 'EUBALL Panama',
          location: 'Cidade do Panama, Panama',
          period: 'Jan 2022 - Mai 2024',
          description:
            'Responsavel por manutencao, disponibilidade de equipamentos e testes de novos materiais e ferramentas.',
        },
        {
          role: 'Chefe de Garantia da Qualidade e Melhoria Continua',
          company: 'EUBALL Panama',
          location: 'Cidade do Panama, Panama',
          period: 'Jul 2020 - Dez 2021',
          description:
            'Controle de variaveis de processo e coordenacao de ACR / 3D para problemas de equipamento, processo e produto.',
        },
        {
          role: 'Coordenador de Manutencao',
          company: 'EUBALL Panama',
          location: 'Cidade do Panama, Panama',
          period: 'Jun 2017 - Jul 2020',
          description:
            'Planejamento da manutencao mensal e anual de equipamentos de producao via SAP e MP9.',
        },
        {
          role: 'Engenheiro de Controle de Producao',
          company: 'EUBALL Panama',
          location: 'Cidade do Panama, Panama',
          period: 'Jan 2015 - Mai 2017',
          description:
            'Validacao de registros de producao, materias-primas, tempos de fabricacao e inventario em SAP.',
        },
        {
          role: 'Coordenador de Producao',
          company: 'Crown Colombiana S.A.',
          location: 'Colombia',
          period: 'Jan 2000 - Set 2013',
          description:
            'Lideranca de 60 pessoas em turnos rotativos com foco em eficiencia, reducao de desperdicio e seguranca.',
        },
        {
          role: 'Mecanico de Manutencao e Ferramentaria',
          company: 'Crown Colombiana S.A.',
          location: 'Colombia',
          period: 'Jun 1997 - Dez 1999',
          description:
            'Revisao, manutencao e recuperacao de ferramentas para fabricacao de latas de aluminio de duas pecas.',
        },
      ],
      education: [
        { degree: 'Tecnologo em Engenharia Industrial', institution: 'UNAD', year: '2013' },
        { degree: 'Tecnico em Manutencao Industrial', institution: 'SENA', year: '1991' },
        { degree: 'Ensino tecnico em Mecanica Industrial e Fundicao', institution: 'Colegio Distrital Tomas Rueda Vargas', year: '1985' },
      ],
      services: [
        { title: 'Assistencia tecnica em campo', description: 'Supervisao presencial em planta, apoio tecnico durante testes e recomendacoes imediatas para ajustar processo, equipamento ou ferramental.' },
        { title: 'Supervisao de testes de ferramentas de precisao', description: 'Qualificacao de novas ferramentas em linha, comparacao de resultados e documentacao tecnica para decisao.' },
        { title: 'Diagnostico e analise de falhas', description: 'Diagnostico tecnico, identificacao de causa raiz e definicao de acao corretiva para equipamentos de producao.' },
        { title: 'Treinamento e transferencia de conhecimento', description: 'Formacao de tecnicos e operadores em manutencao, criterio operacional e boas praticas da industria.' },
        { title: 'Consultoria em programas de manutencao', description: 'Otimizacao de planos preventivos, corretivos, indicadores e uso de SAP / MP9 para aumentar a disponibilidade.' },
      ],
      methodology: [
        { number: '01', title: 'Preparacao pre-visita', description: 'Revisao de dados tecnicos, historico e objetivo da intervencao.' },
        { number: '02', title: 'Avaliacao inicial em campo', description: 'Leitura operacional da area, revisao dos equipamentos, parametros e alinhamento com a equipe local.' },
        { number: '03', title: 'Execucao e supervisao', description: 'Apoio durante testes, observacao de variaveis criticas e ajuste tecnico quando necessario.' },
        { number: '04', title: 'Analise e resultados', description: 'Comparacao com metas, achados tecnicos e identificacao de oportunidades de melhoria.' },
        { number: '05', title: 'Relatorio e acompanhamento', description: 'Recomendacoes, plano de acao e acompanhamento apos a visita.' },
      ],
      clients: [
        { company: 'Crown Colombiana S.A.', country: 'Colombia', relationship: '16 anos de experiencia direta em planta' },
        { company: 'EUBALL Panama', country: 'Panama', relationship: '10 anos em varios cargos de lideranca' },
        { company: 'Envases Universales / Ball', country: 'Panama, Guatemala, Mexico', relationship: 'Relacao comercial ativa' },
        { company: 'Canpack Colombia', country: 'Colombia', relationship: 'Relacao comercial estabelecida' },
        { company: 'Crown Cork', country: 'Mexico', relationship: 'Apresentacoes tecnicas e comerciais' },
        { company: 'Heineken Meoqui', country: 'Mexico', relationship: 'Apresentacoes tecnicas de ferramentas' },
        { company: 'ECA', country: 'Guatemala', relationship: 'Projetos comerciais' },
      ],
      events: ['LATAMCAN Brasil 2025', 'LATAMCAN Mexico 2026'],
      fees: [
        { type: 'Tarifa por hora', duration: '1 hora', rate: '$120 USD', includes: 'Consultoria remota ou presencial' },
        { type: 'Meio dia', duration: 'Ate 4 horas', rate: '$500 USD', includes: 'Visita tecnica e relatorio preliminar' },
        { type: 'Dia completo', duration: '8 horas', rate: '$950 USD', includes: 'Visita tecnica, supervisao, analise e relatorio' },
      ],
    },
  },
};
