import React from 'react';
import { Searchbar } from 'react-native-paper';
import { getSearchResults, cleanInput } from './searchWidget.service';
import { StackNavigationProp } from '@react-navigation/stack';

export class SearchWidget extends React.Component<{
  navigation: StackNavigationProp;
}> {
  query!: string;

  render(): JSX.Element {
    return (
      <Searchbar
        placeholder='Search'
        onChangeText={(query) => {
          this.query = query;
        }}
        onSubmitEditing={() => {
          getSearchResults(cleanInput(this.query), true)
            .then((results) => {
              this.props.navigation.navigate('Results', results);
            })
            .catch((err) => console.log(err)); // TODO: remove stub
        }}
        value={this.query}
      />
    );
  }
}

export default SearchWidget;
