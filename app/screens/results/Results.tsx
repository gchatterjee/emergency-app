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
    this.state = { snackbarVisible: false, snackbarText: '' };
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
              showSnackbar={(text: string) => {
                if (this.state.snackbarVisible) {
                  this.setState(
                    { snackbarVisible: false, snackbarText: text },
                    () =>
                      this.setState({
                        snackbarVisible: true,
                        snackbarText: text,
                      }),
                  );
                } else {
                  this.setState({ snackbarVisible: true, snackbarText: text });
                }
              }}
            />
          ))}
        </ScrollView>
        <Snackbar
          visible={this.state.snackbarVisible}
          onDismiss={() => {
            this.setState({ snackbarVisible: false });
          }}
          duration={Snackbar.DURATION_SHORT}
        >
          {this.state.snackbarText}
        </Snackbar>
      </>
    );
  }
}

export default Results;
