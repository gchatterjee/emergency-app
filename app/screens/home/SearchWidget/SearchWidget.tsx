import React from 'react';
import { Searchbar } from 'react-native-paper';
import { getSearchResults, cleanInput } from './searchWidget.service';
import { StackNavigationProp } from '@react-navigation/stack';

export class SearchWidget extends React.Component<{
  navigation: StackNavigationProp;
  showSnackbar: (text: string) => void;
  setDialogVisible: (visible: boolean) => Promise<void>;
}> {
  constructor(
    props: Readonly<{
      navigation: StackNavigationProp;
      showSnackbar: (text: string) => void;
      setDialogVisible: (visible: boolean) => Promise<void>;
    }>,
  ) {
    super(props);
    this.state = { query: '' };
  }

  render(): JSX.Element {
    const { navigation, showSnackbar, setDialogVisible } = this.props;

    return (
      <Searchbar
        placeholder='Search'
        onChangeText={(query) => this.setState({ query })}
        onSubmitEditing={() =>
          setDialogVisible(true)
            .then(() => getSearchResults(cleanInput(this.state.query), true)) // TODO: remove stub
            .then((results) => {
              return setDialogVisible(false).then(() => {
                if (results.results.length === 0) {
                  showSnackbar(`No results for "${this.state.query}"`);
                } else {
                  navigation.navigate('Results', results);
                }
              });
            })
            .catch(() => showSnackbar('Something went wrong.'))
        }
        value={this.state.query}
      />
    );
  }
}

export default SearchWidget;
