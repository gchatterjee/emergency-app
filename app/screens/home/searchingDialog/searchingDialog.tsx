import React from 'react';
import { Text } from 'react-native';
import { Dialog, ProgressBar } from 'react-native-paper';
import { searchingDialogText } from './searchingDialog.language';
import { LocationData } from 'expo-location';

class SearchingDialog extends React.Component<{
  visible: boolean;
  onSuccess: (position: LocationData) => void;
  onFailure: () => void;
}> {

  render(): JSX.Element {
    return (
      <Dialog visible={this.props.visible} dismissable={false}>
        <Dialog.Title>Location</Dialog.Title>
        <Dialog.Content>
          <Text>{searchingDialogText}</Text>
          <ProgressBar
            visible={true}
            style={{ margin: 10 }}
            indeterminate={true}
          />
        </Dialog.Content>
      </Dialog>
    );
  }
}

export default SearchingDialog;
