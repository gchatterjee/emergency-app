import { SearchResults } from './SearchResults';
import { getSearchResultsStub } from './searchWidget.service.stub';

export function getSearchResults(
  query: string,
  stub = false,
): Promise<SearchResults> {
  if (stub) {
    console.log(getSearchResultsStub(query));
    return getSearchResultsStub(query);
  } else {
    return Promise.resolve({ query, results: [] }); // TODO: implement
  }
}

export function cleanInput(query: string): string {
  return query.trim().toLowerCase();
}
