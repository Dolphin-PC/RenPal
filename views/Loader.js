import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Splash from '../assets/splash.png';

const Loader = () => {
  return (
    <View style={styles.backGround}>
      <Image source={Splash} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
