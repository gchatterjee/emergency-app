import React from 'react';
import { Snackbar, Portal } from 'react-native-paper';
import SearchWidget from '../../components/SearchWidget/SearchWidget';
import LocationDialog from './locationDialog';
import { StackNavigationProp } from '@react-navigation/stack';

class Home extends React.Component<{ navigation: StackNavigationProp }> {
  constructor(props: { navigation: StackNavigationProp }) {
    super(props);
    this.showSnackbar = this.showSnackbar.bind(this);
    this.showDialog = this.showDialog.bind(this);
    this.state = {
      snackbarVisible: false,
      snackbarText: '',
      dialogVisible: false,
      position: null,
    };
  }

  showSnackbar(text: string): void {
    if (this.state.snackbarVisible) {
      this.setState(
        { ...this.state, snackbarVisible: false, snackbarText: text },
        () =>
          this.setState({
            ...this.state,
            snackbarVisible: true,
            snackbarText: text,
          }),
      );
    } else {
      this.setState((state) => ({
        ...state,
        snackbarVisible: true,
        snackbarText: text,
      }));
    }
  }

  showDialog(): void {
    this.setState({ ...this.state, dialogVisible: true });
  }

  render(): JSX.Element {
    return (
      <>
        <SearchWidget
          navigation={this.props.navigation}
          showSnackbar={this.showSnackbar}
        />
        <Portal>
          <LocationDialog />
        </Portal>
        <Snackbar
          visible={this.state.snackbarVisible}
          onDismiss={() =>
            this.setState({
              ...this.state,
              snackbarVisible: false,
              snackbarText: '',
            })
          }
          duration={Snackbar.DURATION_SHORT}
        >
          {this.state.snackbarText}
        </Snackbar>
      </>
    );
  }
}

export default Home;
