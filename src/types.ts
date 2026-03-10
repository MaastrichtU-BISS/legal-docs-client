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
}

export interface HierarchicalOption {
  name: string
  children?: HierarchicalOption[]
  expanded?: boolean
  selected?: boolean
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
  id: string;
  fullText: string;
}

export interface LegalDocsClientConfig {
  baseURL?: string;
  apiKey?: string;
  timeout?: number;
  headers?: Record<string, string>;
}
