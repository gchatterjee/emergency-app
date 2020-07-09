import React from 'react';
import template from 'lodash.template';
import { Button } from 'react-native-paper';
import { goToUrl } from './cardWidget.service';

class UrlButton extends React.Component<{
  url?: string;
  showSnackbar: (text: string) => void;
  text: string;
  snackbarText: {
    executing: string;
    cantExecute: string;
    doesNotExist: string;
  };
}> {
  render(): JSX.Element {
    const { url, showSnackbar, text, snackbarText } = this.props;
    const { executing, cantExecute, doesNotExist } = snackbarText;

    return (
      <Button
        disabled={!url}
        accessibilityLabel={text}
        onPress={() => {
          if (url) {
            goToUrl(url)
              .then((success) =>
                showSnackbar(
                  success
                    ? template(executing)({ url })
                    : template(cantExecute)({ url }),
                ),
              )
              .catch(() => showSnackbar(template(cantExecute)({ url })));
          } else {
            showSnackbar(doesNotExist);
          }
        }}
      >
        {text}
      </Button>
    );
  }
}

export default UrlButton;
