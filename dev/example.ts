import { createLegalDocsClient, DataSource, DocType } from "../src/index";
import type { QueryParameters } from "../src/index";

async function main() {
  const client = createLegalDocsClient({
  });

  try {
    const queryParams: QueryParameters = {
      dataSources: [DataSource.RS],
      degreesSource: 0,
      degreesTarget: 0,
      dateStart: "1900-01-01",
      dateEnd: "2026-03-10",
      docTypes: [DocType.DEC],
      engine: "ES",
      attributesToFetch: "ALL",
      keywords: ["armenia"],
      selectedLawsIntersect: true,
    };

    const documents = await client.fetchDocuments(queryParams);
    console.log("Documents:", documents);

    console.log("Client initialized successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
