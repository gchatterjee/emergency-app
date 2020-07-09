import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { SearchResult } from '../SearchWidget/SearchResults';
import CallButton from './CallButton';
import VisitWebsiteButton from './VisitWebsiteButton';

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
          <CallButton
            phoneNumber={resource.phoneNumber}
            showSnackbar={showSnackbar}
          ></CallButton>
          <VisitWebsiteButton
            url={resource.url}
            showSnackbar={showSnackbar}
          ></VisitWebsiteButton>
        </Card.Actions>
      </Card>
    );
  }
}

export default CardWidget;
