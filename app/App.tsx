import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Results from './screens/Results';
// import useCachedResources from './hooks/useCachedResources';

class App extends React.Component {
  render(): JSX.Element {
    // const isLoadingComplete = useCachedResources();
    const Stack = createStackNavigator();

    // if (!isLoadingComplete) {
    //   return null;
    // }

    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Results' component={Results} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}

export default App;
