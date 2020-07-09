import React from 'react';
import { Button } from 'react-native-paper';
import { call } from './cardWidget.service';

class CallButton extends React.Component<{
  phoneNumber?: string;
  showSnackbar: (text: string) => void;
}> {
  render(): JSX.Element {
    const buttonText = 'Call';
    const { phoneNumber, showSnackbar } = this.props;

    return (
      <Button
        disabled={!phoneNumber}
        accessibilityLabel={buttonText}
        onPress={() => {
          if (phoneNumber) {
            call(phoneNumber)
              .then(() => showSnackbar(`Calling ${phoneNumber}.`))
              .catch(() => showSnackbar(`Couldn't call ${phoneNumber}.`));
          } else {
            showSnackbar(`Couldn't call ${phoneNumber}.`);
          }
        }}
      >
        {buttonText}
      </Button>
    );
  }
}

export default CallButton;
