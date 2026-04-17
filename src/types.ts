// Enums and Types
export enum DataSource {
  RS = 'RS',
  ECHR = 'ECHR',
  CJEU = 'CJEU'
}

export enum DocType {
  DEC = 'DEC',
  OPI = 'OPI'
}

export interface LawItem {
  bwbId: string
  title: string
  abbreviation?: string
  articles?: string[]
}

export interface QueryParameters {
  dataSources: DataSource[]
  degreesSource?: number
  degreesTarget?: number
  dateStart?: string
  dateEnd?: string
  docTypes?: DocType[]
  isSubgraph?: boolean
  engine?: string
  attributesToFetch?: string
  keywords?: string[]
  articles?: string
  selectedLaws?: LawItem[]
  selectedLawsIntersect?: boolean
  eclis?: string[]
  instances?: string[]
  domains?: string[]
  // ECHR-specific
  article_violated?: string[]
  article_applied?: string[]
  article_non_violated?: string[]
  article_violated_mode?: 'AND' | 'OR'
  article_applied_mode?: 'AND' | 'OR'
  article_non_violated_mode?: 'AND' | 'OR'
  articles_mode?: 'AND' | 'OR'
  application_number?: string[]
  respondent_state?: string[]
  document_type?: string[]
  language?: string[]
  date_judgment_start?: string
  date_judgment_end?: string
  date_decision_start?: string
  date_decision_end?: string
  importance?: number[]
  //Similarity search specific
  facts?: string
  reasoning?: string
}

export interface InstancesOptions {
  name: string
  children?: InstancesOptions[]
}

export interface SearchSubmitParams {
  name: string
  query: QueryParameters
  prevId: string | null
}

// API

export interface LegalDocumentQuery {
  documentType?: string;
  clientName?: string;
  jurisdiction?: string;
  dateRange?: string;
  referenceNumber?: string;
  [key: string]: any;
}

export interface LegalDocumentNetwork {
  nodes: LegalDocument[];
  edges: any[];
  messages?: string[];
  pagination?: {
    nextCursor?: string;
    pageSize?: number;
  };
}

export interface LegalDocument {
  id: string;
  type: string;
  title: string;
  date: string;
  url?: string;
  metadata?: Record<string, any>;
}

export interface FullTextDocument {
  ecli: string;
  fullText: string;
}

export interface BWBItem {
  bwb_id: string;
  bwb_label_id: number;
  title: string;
  amount_related_cases: number;
}

export interface LegalDocsClientConfig {
  baseURL?: string;
  apiKey?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export const INSTANCES_OPTIONS: InstancesOptions[] = [
  {
    name: 'Hoge Raad',
  },
  {
    name: 'Raad van State',
  },
  {
    name: 'Centrale Raad van Beroep',
  },
  {
    name: 'College van Beroep voor het bedrijfsleven',
  },
  {
    name: 'Gerechtshoven',
    children: [
      { name: 'Gerechtshof Amsterdam' },
      { name: 'Gerechtshof Arnhem-Leeuwarden' },
      { name: 'Gerechtshof Den Haag' },
      { name: "Gerechtshof 's-Hertogenbosch" },
    ],
  },
  {
    name: 'Rechtbanken',
    children: [
      { name: 'Rechtbank Amsterdam' },
      { name: 'Rechtbank Den Haag' },
      { name: 'Rechtbank Gelderland' },
      { name: 'Rechtbank Limburg' },
      { name: 'Rechtbank Midden-Nederland' },
      { name: 'Rechtbank Noord-Holland' },
      { name: 'Rechtbank Noord-Nederland' },
      { name: 'Rechtbank Oost-Brabant' },
      { name: 'Rechtbank Overijssel' },
      { name: 'Rechtbank Rotterdam' },
      { name: 'Rechtbank Zeeland-West-Brabant' },
    ],
  },
  {
    name: 'Andere instanties binnen het Koninkrijk',
    children: [
      { name: 'Constitutioneel Hof Sint Maarten' },
      {
        name: 'Gemeenschappelijk Hof van Justitie van Aruba, Curacao, Sint Maarten en van Bonaire, Sint Eustatius en Saba',
      },
      {
        name: 'Gerecht in Ambtenarenzaken van Aruba, Curacao, Sint Maarten en van Bonaire, Sint Eustatius en Saba',
      },
      {
        name: 'Raad van Beroep in Ambtenarenzaken van Aruba, Curaçao, Sint Maarten en van Bonaire, Sint Eustatius en Saba',
      },
      {
        name: 'Raad van Beroep voor Belastingzaken van Aruba, Curaçao, Sint Maarten en van Bonaire, Sint Eustatius en Saba',
      },
      { name: 'Gerecht in Eerste Aanleg van Aruba' },
      { name: 'Gerecht in eerste aanleg van Bonaire, Sint Eustatius en Saba' },
      { name: 'Gerecht in eerste aanleg van Curaçao' },
      { name: 'Gerecht in eerste aanleg van Sint Maarten' },
    ],
  },
];


export const DOMAINS_OPTIONS: InstancesOptions[] = [
  {
    name: 'Bestuursrecht',
    children: [
      { name: 'Ambtenarenrecht' },
      { name: 'Belastingrecht' },
      { name: 'Bestuursprocesrecht' },
      { name: 'Bestuursstrafrecht' },
      { name: 'Europees bestuursrecht' },
      { name: 'Mededingingsrecht' },
      { name: 'Omgevingsrecht' },
      { name: 'Socialezekerheidsrecht' },
      { name: 'Vreemdelingenrecht' },
    ],
  },
  {
    name: 'Civiel recht',
    children: [
      { name: 'Aanbestedingsrecht' },
      { name: 'Arbeidsrecht' },
      { name: 'Burgerlijk procesrecht' },
      { name: 'Europees civiel recht' },
      { name: 'Goederenrecht' },
      { name: 'Insolventierecht' },
      { name: 'Intellectueel-eigendomsrecht' },
      { name: 'Internationaal privaatrecht' },
      { name: 'Mededingingsrecht' },
      { name: 'Ondernemingsrecht' },
      { name: 'Personen- en familierecht' },
      { name: 'Verbintenissenrecht' },
    ],
  },
  {
    name: 'Internationaal publiekrecht',
    children: [{ name: 'Mensenrechten' }, { name: 'Volkenrecht' }],
  },
  {
    name: 'Strafrecht',
    children: [
      { name: 'Europees strafrecht' },
      { name: 'Internationaal strafrecht' },
      { name: 'Materieel strafrecht' },
      { name: 'Penitentiair strafrecht' },
      { name: 'Strafprocesrecht' },
    ],
  },
];

