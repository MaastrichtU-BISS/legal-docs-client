import { 
  LegalDocument, 
  LegalDocumentNetwork, 
  LegalDocsClientConfig, 
  FullTextDocument,
  QueryParameters 
} from "./types";
import axios, { AxiosInstance } from "axios";

export class LegalDocsClient {
  private client: AxiosInstance;
  private config: LegalDocsClientConfig;

  constructor(config: LegalDocsClientConfig) {
    this.config = {
      baseURL: "https://api.caselawexplorer.tech/api",
      timeout: 30000,
      ...config,
    };

    this.client = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout,
      headers: {
        "Content-Type": "application/json",
        ...this.config.headers,
      },
    });

    this.client.interceptors.request.use(
      (config) => {
        // You can add custom logic here (e.g., logging, authentication)
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const errorMessage =
          error.response?.data?.message || error.message || "An error occurred";
        return Promise.reject(new Error(errorMessage));
      },
    );
  }

  async fetchDocuments(query: QueryParameters): Promise<LegalDocument[]> {
    try {
      const response = await this.client.post<LegalDocumentNetwork>(
        "/network",
        {
          arguments: query,
        },
      );
      return response.data.nodes;
    } catch (error: any) {
      throw new Error(`Failed to fetch documents: ${error.message}`);
    }
  }

  async getFullText(eclis: string[]): Promise<FullTextDocument[]> {
    try {
      const response = await this.client.post<FullTextDocument[] | FullTextDocument>(
        "/network/text",
        {
          ecli: eclis,
        },
      );
      // Ensure response is always an array
      const data = Array.isArray(response.data) ? response.data : [response.data];
      return data;
    } catch (error: any) {
      throw new Error(`Failed to fetch documents: ${error.message}`);
    }
  }

  setApiKey(apiKey: string): void {
    this.client.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
  }

  setHeaders(headers: Record<string, string>): void {
    Object.assign(this.client.defaults.headers.common, headers);
  }
}

export function createLegalDocsClient(
  config: LegalDocsClientConfig,
): LegalDocsClient {
  return new LegalDocsClient(config);
}
