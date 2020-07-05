import React from 'react';
import { Searchbar } from 'react-native-paper';

export class SearchWidget extends React.Component {
    query!: string;

    render() : JSX.Element {
      return <Searchbar placeholder="Search" onChangeText={console.log} value={this.query} />;
    }
}

export default SearchWidget;
