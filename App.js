import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  createAppContainer,
  createSwitchNavigator,
  createNavigator,
} from 'react-navigation';

//colors
import * as colors from './assets/colors';

//views
import HomeScreen from './views/HomeScreen';
import ScreenCYL from './views/ScreenCYL';
import ScreenSYE from './views/ScreenSYE';
import ScreenFYIP from './views/ScreenFYIP';
import LoadingScreen from './views/LoadingScreen';
import LoginScreen from './views/LoginScreen';
import DashboardScreen from './views/DashboardScreen';
import SearchScreen from './views/SearchScreen';

import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';
import SelectPaymentScreen from './views/SelectPaymentScreen';
import PaymentScreen from './views/PaymentScreen';
import VisitScreen from './views/VisitScreen';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const CYLStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='CYL' component={ScreenCYL} />
        <Stack.Screen name='SYE' component={ScreenSYE} />
        <Stack.Screen name='FYIP' component={ScreenFYIP} />
        <Stack.Screen name='SearchScreen' component={SearchScreen} />
        <Stack.Screen
          name='SelectPaymentScreen'
          component={SelectPaymentScreen}
        />
        <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
        <Stack.Screen name='VisitScreen' component={VisitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const CYL = () => {
//   return (
//     <CYLStack.Navigator>
//       <CYLStack.Screen name='CYL-HOME' component={ScreenCYL} />
//       <CYLStack.Screen name='SearchScreen' component={SearchScreen} />
//     </CYLStack.Navigator>
//   );
// };

// const AppSwitchNavigator = createSwitchNavigator({
//   LoadingScreen: LoadingScreen,
//   LoginScreen: LoginScreen,
//   DashboardScreen: DashboardScreen,
//   ScreenCYL: ScreenCYL,
//   SearchScreen: SearchScreen,
// });

// const AppNavigator = createAppContainer(AppSwitchNavigator);

export default App;
