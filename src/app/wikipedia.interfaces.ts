
export interface WikipediaData {
  ns: number;
  pageid: number;
  size: number;
  snippet: string;
  timestamp: string;
  title: string;
  wordcount: number;
}

export interface WikipediaResponse {
  batchcomplete: string;
  continue: {
    sroffset: number;
    continue: string;
  };
  query: {
    search: WikipediaData[];
    searchinfo: {
      suggestion: string;
      suggestionsnippet: string;
      totalhits: number;
    };
  };
}
