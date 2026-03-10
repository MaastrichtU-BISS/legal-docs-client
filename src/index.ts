// Export client
export { LegalDocsClient, createLegalDocsClient } from "./client";

// Export types and enums
export type {
  LegalDocsClientConfig,
  LegalDocumentNetwork,
  LegalDocument,
  FullTextDocument,
  QueryParameters,
  LawItem,
  InstancesOptions,
  SearchSubmitParams,
} from "./types";

export { DataSource, DocType, DUTCH_COURT_INSTANCES } from "./types";
