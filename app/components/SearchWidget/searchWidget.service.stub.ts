import { SearchResults } from './SearchResults';
import { stubData } from '../searchWidget.constant.stub';

export function getSearchResultsStub(query: string): Promise<SearchResults> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({ query, results: query === 'mental health' ? stubData : [] }),
      1500,
    ),
  );
}
