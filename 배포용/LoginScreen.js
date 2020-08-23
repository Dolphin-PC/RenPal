// expo-google-sign-in 은
// 배포 시에만 사용가능.

// 참고
// https://medium.com/react-native-seoul/react-native-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-expo%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-googlesignin-%EC%9D%B4%EC%9A%A9%EA%B8%B0-acd0404d1977

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';

const LoginScreen = () => {
  const IOS_CLIENT_ID =
    '1059935049745-9kee50le6ncmmoboffa1p54l0ui5qqfl.apps.googleusercontent.com';
  const [user, setUser] = useState(null);

  const initAsync = async () => {
    await GoogleSignIn.initAsync({
      clientId: IOS_CLIENT_ID,
    });
    _syncUserWithStateAsync();
  };

  const _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    setUser({ user });
  };

  const signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    setUser(null);
  };

  const signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        _syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  const onPress = () => {
    if (user) {
      signOutAsync();
    } else {
      signInAsync();
    }
  };
  useEffect(() => {
    initAsync();
  });
  // const signInWithGoogleAsync = async () => {
  //   try {
  //     const result = await Google.logInAsync({
  //       // androidClientId: YOUR_CLIENT_ID_HERE,
  //       behavior: 'web',
  //       iosClientId: IOS_CLIENT_ID,

  //       scopes: ['profile', 'email'],
  //     });

  //     if (result.type === 'success') {
  //       return result.accessToken;
  //     } else {
  //       return { cancelled: true };
  //     }
  //   } catch (e) {
  //     return { error: true };
  //   }
  // };
  return (
    <View style={styles.container}>
      <Button title='Sign In With Google' onPress={() => onPress()} />
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
