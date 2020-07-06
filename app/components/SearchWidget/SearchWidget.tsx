import React from 'react';
import { Searchbar } from 'react-native-paper';
import { getSearchResults, cleanInput } from './searchWidget.service';

export class SearchWidget extends React.Component {
  query!: string;

  render(): JSX.Element {
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={(query) => {
          this.query = query;
        }}
        onSubmitEditing={() => {
          getSearchResults(cleanInput(this.query), true); // TODO: remove stub
        }}
        value={this.query}
      />
    );
  }
}

export default SearchWidget;
