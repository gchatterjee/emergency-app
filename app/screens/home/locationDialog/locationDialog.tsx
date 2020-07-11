import React from 'react';
import { Text } from 'react-native';
import { Dialog, Button, ProgressBar } from 'react-native-paper';
import { locationDialogText } from './locationDialog.language';
import { getLocation } from '../../../lib/location';
import { LocationData } from 'expo-location';

class LocationDialog extends React.Component<{
  visible: boolean;
  onSuccess: (position: LocationData) => void;
  onFailure: () => void;
}> {
  constructor(props: {
    visible: boolean;
    onSuccess: (position: LocationData) => void;
    onFailure: () => void;
  }) {
    super(props);
    this.setStateP = this.setStateP.bind(this);
    this.state = { progressBarVisible: false };
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  setStateP(state: object): Promise<void> {
    return new Promise((resolve) => {
      this.setState(state, () => resolve());
    });
  }

  componentDidMount(): void {
    this.setStateP({ progressBarVisible: true })
      .then(getLocation)
      .then((position) =>
        this.setStateP({ progressBarVisible: false }).then(() =>
          position ? this.props.onSuccess(position) : this.props.onFailure(),
        ),
      );
  }

  render(): JSX.Element {
    return (
      <Dialog visible={this.props.visible} dismissable={false}>
        <Dialog.Title>Location</Dialog.Title>
        <Dialog.Content>
          <Text>{locationDialogText}</Text>
          <ProgressBar
            visible={this.state.progressBarVisible}
            style={{ margin: 10 }}
            indeterminate={true}
          />
        </Dialog.Content>
      </Dialog>
    );
  }
}

export default LocationDialog;
