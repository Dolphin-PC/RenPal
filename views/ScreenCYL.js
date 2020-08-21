import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//components
import HeaderText from '../components/HeaderText'

function ScreenCYL({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderText text="Challenge Your Limits!"/>
    </View>
  );
}
export default ScreenCYL;

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
