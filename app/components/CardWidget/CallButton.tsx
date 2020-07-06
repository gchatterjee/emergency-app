import React from 'react';
import { Button } from 'react-native';

class CallButton extends React.Component<{ phoneNumber?: string }> {
  render(): JSX.Element {
    return (
      <Button
        disabled={!this.props.phoneNumber}
        accessibilityLabel={'Call'}
        onPress={() => console.log('pressed call button')}
      >
        Call
      </Button>
    );
  }
}

export default CallButton;
