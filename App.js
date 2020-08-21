import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//views
import HomeScreen from './views/HomeScreen';
import ScreenCYL from './views/ScreenCYL';
import ScreenSYE from './views/ScreenSYE';
import ScreenFYIP from './views/ScreenFYIP';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'RenPal',
            headerStyle: {
              backgroundColor: 'blue',
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
