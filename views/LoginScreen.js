import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';

const LoginScreen = () => {
  const IOS_CLIENT_ID =
    '1059935049745-vm4edqd7htnaspm6c27m044qgdmvnnni.apps.googleusercontent.com';

  const signInWithGoogleAsync = async () => {
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        // androidClientId: YOUR_CLIENT_ID_HERE,
        behavior: 'web',
        iosClientId: IOS_CLIENT_ID,
        scopes: ['profile', 'email'],
      });

      if (type === 'success') {
        return accessToken;
        console.log(user);
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  return (
    <View style={styles.container}>
      <Button
        title='Sign In With Google'
        onPress={() => signInWithGoogleAsync()}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
