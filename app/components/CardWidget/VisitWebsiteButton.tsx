import React from 'react';
import { Button } from 'react-native-paper';
import { goToUrl } from './cardWidget.service';

class VisitWebsiteButton extends React.Component<{
  url?: string;
  showSnackbar: (text: string) => void;
}> {
  render(): JSX.Element {
    const buttonText = 'Visit Website';
    const { url, showSnackbar } = this.props;

    return (
      <Button
        disabled={!url}
        accessibilityLabel={buttonText}
        onPress={() => {
          if (url) {
            goToUrl(url)
              .then((went) =>
                showSnackbar(went ? `Going to ${url}.` : `Can't open ${url}.`),
              )
              .catch(() => showSnackbar('Something went wrong.'));
          } else {
            showSnackbar('There is no valid URL.');
          }
        }}
      >
        {buttonText}
      </Button>
    );
  }
}

export default VisitWebsiteButton;
