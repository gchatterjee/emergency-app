import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home/Home';
import Results from './screens/Results';
import { Provider } from 'react-native-paper';

class App extends React.Component {
  render(): JSX.Element {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Provider>
            <Stack.Navigator>
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='Results' component={Results} />
            </Stack.Navigator>
          </Provider>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}

export default App;
