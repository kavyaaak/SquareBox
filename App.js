// import * as React from 'react';
// // import { Button, Text, View } from 'react-native';
//  import { NavigationContainer } from '@react-navigation/native';
//  import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
// // import Square from './src/components/screen/Squares';
// import Fruits from './src/components/screen/Fruit1';
// import Favorites from './src/components/screen/Favorites';
// import { Provider } from 'react-redux';
// import configStore from './src/redux/stores'; 
// // import { createAppContainer } from 'react-navigation';  

// const Stack = createStackNavigator();
// const stores = configStore();


// export default class App extends React.Component {  
//    render(){
//    return (
//       <Provider store={stores}>
//        <NavigationContainer >
//          <Stack.Navigator
//          initialRouteName="Fruits">
//            <Stack.Screen name="screen" component={Fruits}
//            options={{ headerShown: false }} />
//          </Stack.Navigator>
//         <Stack.Screen name="Favorites" component={Favorites}
//           options={{ headerShown: false }} />
//        </NavigationContainer>
//        </Provider>
//    );
//    }
//  }



      
import React, { Component } from 'react';
//import react in our code. 
import { Button, Text, View,Animated,Easing } from 'react-native';
//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
// import FirstPage from './src/components/screen/FirstPage';
//  import SecondPage from './src/components/screen/SecondPage';
 import Fruits from './src/components/screen/Fruit1';
 import Favorites from './src/components/screen/Favorites';
 import { Provider } from 'react-redux';
 import configStore from './src/redux/stores'; 

const stores = configStore();

const AppNavigator = createStackNavigator({
    Fruits: { screen: Fruits }, 
    Favorites: { screen: Favorites }, 
  },
  {
    initialRouteName: 'Fruits',
  }
);

export default class App extends React.Component {  
  render() {
    return(
      <Provider store={stores}>
       <AppContainer />
       </Provider>
    );
  }
}
const AppContainer = createAppContainer(AppNavigator);
// export default createAppContainer(App);