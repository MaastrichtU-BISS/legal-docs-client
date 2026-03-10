# Legal Docs Client

A TypeScript client library for accessing legal documents from the Case Law Explorer API.

## Installation

```bash
npm install legal-docs-client
```

## Usage

### Basic Setup

```typescript
import { createLegalDocsClient } from 'legal-docs-client';

const client = createLegalDocsClient({
  baseURL: 'https://api.caselawexplorer.tech/api',
  timeout: 30000,
});
```

### Fetching Documents

```typescript
const documents = await client.fetchDocuments({
  query: {
        dataSources: ["RS"],
        degreesSource: 0,
        degreesTarget: 0,
        dateStart: "1900-01-01",
        dateEnd: "2026-03-10",
        docTypes: ["DEC"],
        engine: "ES",
        attributesToFetch: "ALL",
        keywords: ["armenia"],
        selectedLawsIntersect: true,
      },
});

console.log(documents);
```

### Getting Full Text

```typescript
const fullTextDocs = await client.getFullText(['ECLI:ID:1', 'ECLI:ID:2']);

console.log(fullTextDocs);
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
