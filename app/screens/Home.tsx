import React from 'react';
import SearchWidget from '../components/SearchWidget/SearchWidget';
import { StackNavigationProp } from '@react-navigation/stack';

class Home extends React.Component<{ navigation: StackNavigationProp }> {
  render(): JSX.Element {
    return (
      <>
        <SearchWidget navigation={this.props.navigation} />
      </>
    );
  }
}

export default Home;
