import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function ScreenSYE({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Share Your Experience!</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default ScreenSYE;

const styles = StyleSheet.create({});
