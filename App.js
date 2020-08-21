import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createAppContainer,createSwitchNavigator } from 'react-navigation'

//colors
import * as colors from './assets/colors'

//views
import HomeScreen from './views/HomeScreen';
import ScreenCYL from './views/ScreenCYL';
import ScreenSYE from './views/ScreenSYE';
import ScreenFYIP from './views/ScreenFYIP';
import LoadingScreen from './views/LoadingScreen'
import LoginScreen from './views/LoginScreen'
import DashboardScreen from './views/DashboardScreen'

import firebase from 'firebase'
import {firebaseConfig} from './firebaseConfig'

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'RenPal',
            headerStyle: {
              backgroundColor: colors.signature_Blue,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name='CYL' component={ScreenCYL} />
        <Stack.Screen name='SYE' component={ScreenSYE} />
        <Stack.Screen name='FYIP' component={ScreenFYIP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
