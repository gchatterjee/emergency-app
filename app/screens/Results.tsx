import React from 'react';
import { ScrollView } from 'react-native';
import {
  SearchResults,
  SearchResult,
} from '../components/SearchWidget/SearchResults';
import { Title } from 'react-native-paper';
import CardWidget from '../components/CardWidget/CardWidget';
import { StackNavigationProp } from '@react-navigation/stack';

class Results extends React.Component<{
  navigation: StackNavigationProp;
  route: { params: SearchResults };
}> {
  render(): JSX.Element {
    const results = this.props.route.params;

    return (
      <>
        <Title>{`Results for "${results.query}"`}</Title>
        <ScrollView>
          {results.results.map((result: SearchResult) => (
            <CardWidget key={result.name} resource={result} />
          ))}
        </ScrollView>
      </>
    );
  }
}

export default Results;
