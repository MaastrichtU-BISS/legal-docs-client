# Legal Docs Client

A TypeScript client library for accessing legal documents from the [Case Law Explorer API](https://api.caselawexplorer.tech/). 

## Installation

```bash
npm install legal-docs-client
```

## Usage

### Basic Setup

```typescript
import { createLegalDocsClient } from 'legal-docs-client';

const client = createLegalDocsClient({
  apiKey: process.env.CITATIONS_API_KEY
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
const fullTextDocs = await client.getFullText(['ECLI:NL:HR:2005:AO9006', 'ECLI:NL:RBSGR:2012:BY5532']);

console.log(fullTextDocs);
```

### Fetching Laws

```typescript
const laws = await client.fetchLaws('Art. 7:669 BW');

console.log(laws);
```

## Environment Configuration

This package requires an API token from the Case Law Explorer API for document requests.

### Setup Instructions

1. **Install dotenv** (if working in Node.js):
```bash
npm install dotenv
```

2. **Create a `.env` file** in your project root:
```env
CITATIONS_API_KEY=your_api_token_here
```

3. **Load environment variables** in your application:
```typescript
import 'dotenv/config';
import { createLegalDocsClient } from 'legal-docs-client';

const client = createLegalDocsClient({
  apiKey: process.env.CITATIONS_API_KEY
});
```

> **Note:** For Vite projects, use `import.meta.env.VITE_CITATIONS_API_KEY` instead and prefix your `.env` variable with `VITE_`.

### Getting an API Token

New API keys can be generated at:
https://api.caselawexplorer.tech/login.html?next=/account.html

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
