import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import Square from './src/components/screen/Squares';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer >
        <Stack.Navigator
        initialRouteName="Square">
          <Stack.Screen name="screen" component={Square}
          options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;