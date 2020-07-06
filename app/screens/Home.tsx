import React from 'react';
import { Appbar } from 'react-native-paper';
import SearchWidget from '../components/SearchWidget/SearchWidget.tsx';

export function Home(): JSX.Element {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Emergency" />
      </Appbar.Header>
      <SearchWidget />
    </>
  );
}

export default Home;
