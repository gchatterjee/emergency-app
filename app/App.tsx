import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Home } from './screens/Home.tsx';
import useCachedResources from './hooks/useCachedResources.ts';

export default function App() : JSX.Element {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}
