import React from 'react';
import { ScrollView } from 'react-native';
import {
  SearchResults,
  SearchResult,
} from '../home/SearchWidget/SearchResults';
import { Title, Snackbar } from 'react-native-paper';
import CardWidget from './CardWidget/CardWidget';
import { StackNavigationProp } from '@react-navigation/stack';

class Results extends React.Component<{
  navigation: StackNavigationProp;
  route: { params: SearchResults };
}> {
  constructor(
    props: Readonly<{
      navigation: StackNavigationProp;
      route: { params: SearchResults };
    }>,
  ) {
    super(props);
    this.setStateP = this.setStateP.bind(this);
    this.setSnackbarVisible = this.setSnackbarVisible.bind(this);
    this.state = { snackbarVisible: false, snackbarText: '' };
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  setStateP(state: object): Promise<void> {
    return new Promise((resolve) => {
      this.setState(state, () => resolve());
    });
  }

  setSnackbarVisible(visible: boolean, text?: string): Promise<void> {
    return this.setStateP({
      snackbarVisible: false,
      snackbarText: '',
    }).then(() =>
      visible
        ? this.setStateP({ snackbarVisible: true, snackbarText: text || '' })
        : Promise.resolve(),
    );
  }

  render(): JSX.Element {
    const results = this.props.route.params;
    return (
      <>
        <ScrollView>
          <Title>{`Results for "${results.query}"`}</Title>
          {results.results.map((result: SearchResult, index) => (
            <CardWidget
              key={`${result.name}${index}`}
              resource={result}
              showSnackbar={(text: string) =>
                this.setSnackbarVisible(true, text)
              }
            />
          ))}
        </ScrollView>
        <Snackbar
          visible={this.state.snackbarVisible}
          onDismiss={() => this.setSnackbarVisible(false)}
          duration={Snackbar.DURATION_SHORT}
        >
          {this.state.snackbarText}
        </Snackbar>
      </>
    );
  }
}

export default Results;
