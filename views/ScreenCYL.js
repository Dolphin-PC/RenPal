import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function ScreenCYL({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Challenge Your Limits!</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
export default ScreenCYL;

const styles = StyleSheet.create({});
