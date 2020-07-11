import React from 'react';
import { Dialog, Button } from 'react-native-paper';
import { locationDialogText } from './locationDialog.language';
import { getLocation } from '../../../lib/location';
import { LocationData } from 'expo-location';

export class LocationDialog extends React.Component {
  constructor(props: {
    visible: boolean;
    onSuccess: (position: LocationData) => void;
    onFailure: () => void;
  }) {
    super(props);
    this.state = { progressBarVisible: false };
  }

  render() {
    return (
      <Dialog visible={this.props.visible} dismissable={false}>
        <Dialog.Title>Location</Dialog.Title>
        <Dialog.Content>
          <Text>{locationDialogText}</Text>
          <ProgressBar style={{ margin: 10 }} indeterminate={true} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() =>
              this.setState({ progressBarVisible: true }, () =>
                getLocation().then((position) => {
                  this.setState({ progressBarVisible: false }, () => {
                    if (position) {
                      this.props.onSuccess(position);
                    } else {
                      this.props.onFailure();
                    }
                  });
                }),
              )
            }
          >
            Okay
          </Button>
        </Dialog.Actions>
      </Dialog>
    );
  }
}
