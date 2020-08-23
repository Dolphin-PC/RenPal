import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  createAppContainer,
  createSwitchNavigator,
  createNavigator,
} from 'react-navigation';

// colors
import * as colors from '../assets/colors';

// Views
import HomeScreen from './HomeScreen';
import ScreenCYL from './ScreenCYL';
import ScreenSYE from './ScreenSYE';
import ScreenFYIP from './ScreenFYIP';
import SearchScreen from './SearchScreen';

const Stack = createStackNavigator();

const DashboardScreen = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
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

export default DashboardScreen;

const CYL = () => {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen name='main' component={ScreenCYL} />
      <NestedStack.Screen name='Search' component={SearchScreen} />
    </NestedStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
