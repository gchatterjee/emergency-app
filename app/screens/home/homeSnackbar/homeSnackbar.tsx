import React from 'react';
import { Snackbar } from 'react-native-paper';

export class HomeSnackbar extends React.Component<{
  visible: boolean;
  onDismiss: () => void;
  text: string;
}> {
  constructor(props: {
    visible: boolean;
    onDismiss: () => void;
    text: string;
  }) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <Snackbar
        visible={this.props.visible}
        onDismiss={this.props.onDismiss}
        duration={Snackbar.DURATION_SHORT}
      >
        {this.props.text}
      </Snackbar>
    );
  }
}
