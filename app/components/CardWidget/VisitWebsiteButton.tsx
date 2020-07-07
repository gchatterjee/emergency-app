import React from 'react';
import { Linking } from 'react-native';
import { Button } from 'react-native-paper';

class VisitWebsiteButton extends React.Component<{ url?: string }> {
  constructor(props: Readonly<{ url?: string }>) {
    super(props);
  }

  goToUrl(url: string): void {
    if (url) {
      Linking.canOpenURL(url).then((isSupported: boolean) => {
        if (isSupported) {
          Linking.openURL(url);
        }
      });
    }
  }

  render(): JSX.Element {
    const buttonText = 'Visit Website';
    const { url } = this.props;

    return (
      <Button
        disabled={!url}
        accessibilityLabel={buttonText}
        onPress={() => {
          if (url) {
            this.goToUrl(url);
          }
        }}
      >
        {buttonText}
      </Button>
    );
  }
}

export default VisitWebsiteButton;
