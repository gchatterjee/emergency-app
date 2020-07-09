import React from 'react';
import { Snackbar } from 'react-native-paper';
import SearchWidget from '../components/SearchWidget/SearchWidget';
import { StackNavigationProp } from '@react-navigation/stack';

class Home extends React.Component<{ navigation: StackNavigationProp }> {
  constructor(props: { navigation: StackNavigationProp }) {
    super(props);
    this.state = { snackbarVisible: false, snackbarText: '' };
  }

  render(): JSX.Element {
    return (
      <>
        <SearchWidget
          navigation={this.props.navigation}
          showSnackbar={(text: string) => {
            if (this.state.snackbarVisible) {
              this.setState(
                { snackbarVisible: false, snackbarText: text },
                () =>
                  this.setState({ snackbarVisible: true, snackbarText: text }),
              );
            } else {
              this.setState({ snackbarVisible: true, snackbarText: text });
            }
          }}
        />
        <Snackbar
          visible={this.state.snackbarVisible}
          onDismiss={() => {
            this.setState({ snackbarVisible: false, snackbarText: '' });
          }}
          duration={Snackbar.DURATION_SHORT}
        >
          {this.state.snackbarText}
        </Snackbar>
      </>
    );
  }
}

export default Home;
