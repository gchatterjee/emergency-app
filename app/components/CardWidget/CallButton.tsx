import React from 'react';
import { Button } from 'react-native-paper';

class CallButton extends React.Component<{ phoneNumber?: string }> {
  render(): JSX.Element {
    const buttonText = 'Call';

    return (
      <Button
        disabled={!this.props.phoneNumber}
        accessibilityLabel={buttonText}
        onPress={() => console.log('pressed call button')}
      >
        {buttonText}
      </Button>
    );
  }
}

export default CallButton;
