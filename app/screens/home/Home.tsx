import React from 'react';
import { Portal } from 'react-native-paper';
import SearchWidget from './SearchWidget/SearchWidget';
import LocationDialog from './locationDialog/locationDialog';
import SearchingDialog from './searchingDialog/searchingDialog';
import { StackNavigationProp } from '@react-navigation/stack';
import { LocationData } from 'expo-location';
import { HomeSnackbar } from './homeSnackbar/homeSnackbar';

class Home extends React.Component<{ navigation: StackNavigationProp }> {
  constructor(props: { navigation: StackNavigationProp }) {
    super(props);
    this.setSnackbarVisible = this.setSnackbarVisible.bind(this);
    this.setStateP = this.setStateP.bind(this);
    this.state = {
      snackbarVisible: false,
      snackbarText: '',
      locationDialogVisible: false,
      searchingDialogVisible: false,
      position: null,
    };
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
    return (
      <>
        <SearchWidget
          navigation={this.props.navigation}
          showSnackbar={(text) => this.setSnackbarVisible(true, text)}
          setDialogVisible={(visible: boolean) =>
            this.setStateP({ searchingDialogVisible: visible })
          }
        />
        <Portal>
          <LocationDialog
            visible={!this.state.position || this.state.dialogVisible}
            onSuccess={(position: LocationData) =>
              this.setStateP({ position })
                .then(() => this.setStateP({ dialogVisible: false }))
                .then(() => console.log(this.state.position))
            }
            onFailure={() =>
              this.setSnackbarVisible(true, "Couldn't get location.")
            }
          />
          <SearchingDialog visible={this.state.searchingDialogVisible} />
        </Portal>
        <HomeSnackbar
          visible={this.state.snackbarVisible}
          text={this.state.snackbarText}
          onDismiss={() => this.setSnackbarVisible(false)}
        />
      </>
    );
  }
}

export default Home;
