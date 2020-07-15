export interface SearchResults {
  query: string;
  results: SearchResult[];
}

export interface SearchResult {
  type?: string[];
  name?: string;
  is24HourHotline?: boolean;
  phoneNumber?: string;
  trsNumber?: string;
  smsNumber?: string;
  smsTrigger?: string;
  coverage?: string[];
  url?: string;
  isOnlineChatAvailable?: boolean;
  notes?: string;
  physicalAddress?: unknown; // TODO: implement location object
}
