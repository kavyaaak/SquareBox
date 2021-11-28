import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
// import SplashScreen from './src/components/screen/splash';
import Square from './src/components/screen/Squares';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer >
        <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
        initialRouteName="Square">
        {/* <Stack.Screen name="splash" component={SplashScreen}
          options={{ headerShown: false }} /> */}
          <Stack.Screen name="screen" component={Square}
          options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
  );
}

export default App;