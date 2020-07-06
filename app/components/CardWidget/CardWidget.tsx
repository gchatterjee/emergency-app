import React from 'react';
import { Card } from 'react-native-paper';
import { SearchResult } from '../SearchWidget/SearchResults';
import CallButton from './CallButton';
import VisitWebsiteButton from './VisitWebsiteButton';

class CardWidget extends React.Component<{ resource: SearchResult }> {
  render(): JSX.Element {
    const { resource } = this.props;

    return (
      <Card>
        <Card.Title title={resource.name}></Card.Title>
        <Card.Actions>
          <CallButton phoneNumber={resource.phoneNumber}></CallButton>
          <VisitWebsiteButton url={resource.url}></VisitWebsiteButton>
        </Card.Actions>
      </Card>
    );
  }
}

export default CardWidget;
