import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import firebase from 'firebase';

const LoadingScreen = (props) => {
  const checkLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        props.navigation.navigate('LoginScreen');
      } else {
        props.navigation.navigate('DashboardScreen');
      }
    });
  };
  useEffect(() => {
    checkLoggedIn();
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
