import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function ScreenFYIP({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Find Your Inner Peace!</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
export default ScreenFYIP;

const styles = StyleSheet.create({});
