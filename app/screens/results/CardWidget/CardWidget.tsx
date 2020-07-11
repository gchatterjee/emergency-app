import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { SearchResult } from '../../home/SearchWidget/SearchResults';
import UrlButton from './UrlButton';

class CardWidget extends React.Component<{
  resource: SearchResult;
  showSnackbar: (text: string) => void;
}> {
  render(): JSX.Element {
    const { resource, showSnackbar } = this.props;

    const styles = StyleSheet.create({
      card: {
        marginBottom: 10,
      },
    });

    return (
      <Card style={styles.card}>
        <Card.Title title={resource.name}></Card.Title>
        <Card.Actions>
          <UrlButton
            url={resource.phoneNumber && `tel:${resource.phoneNumber}`}
            showSnackbar={showSnackbar}
            text={'Call'}
            snackbarText={{
              executing: 'Calling <%= url %>.',
              cantExecute: "Couldn't call <%= url %>.",
              doesNotExist: "Phone number doesn't exist.",
            }}
          ></UrlButton>
          <UrlButton
            url={resource.url}
            showSnackbar={showSnackbar}
            text={'Visit Website'}
            snackbarText={{
              executing: 'Visiting <%= url %>.',
              cantExecute: "Couldn't visit <%= url %>.",
              doesNotExist: "Url doesn't exist.",
            }}
          ></UrlButton>
        </Card.Actions>
      </Card>
    );
  }
}

export default CardWidget;
