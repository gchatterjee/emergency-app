import React from 'react';
import { Searchbar } from 'react-native-paper';
import { getSearchResults, cleanInput } from './searchWidget.service';
import { StackNavigationProp } from '@react-navigation/stack';

export class SearchWidget extends React.Component<{
  navigation: StackNavigationProp;
  showSnackbar: (text: string) => void;
}> {
  constructor(
    props: Readonly<{
      navigation: StackNavigationProp;
      showSnackbar: (text: string) => void;
    }>,
  ) {
    super(props);
    this.state = { query: '' };
  }

  render(): JSX.Element {
    const { navigation, showSnackbar } = this.props;

    return (
      <Searchbar
        placeholder='Search'
        onChangeText={(query) => this.setState({ query })}
        onSubmitEditing={() =>
          getSearchResults(cleanInput(this.state.query), true) // TODO: remove stub
            .then((results) => {
              if (results.results.length === 0) {
                showSnackbar(`No results for "${this.state.query}"`);
              } else {
                navigation.navigate('Results', results);
              }
            })
            .catch(() => showSnackbar('Something went wrong.'))
        }
        value={this.state.query}
      />
    );
  }
}

export default SearchWidget;
