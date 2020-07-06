export interface SearchResults {
  query: string;
  results: Array<SearchResult>;
}

export interface SearchResult {
  type?: Array<string>;
  name?: string;
  is24HourHotline?: boolean;
  phoneNumber?: string;
  trsNumber?: string;
  smsNumber?: string;
  smsTrigger?: string;
  coverage?: Array<string>;
  url?: string;
  isOnlineChatAvailable?: boolean;
  notes?: string;
  physicalAddress?: unknown; // TODO: implement location object
}
