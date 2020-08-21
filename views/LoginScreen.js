import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import * as GoogleSignIn from 'expo-google-sign-in';

const IOS_CLIENT_ID = "1059935049745-vm4edqd7htnaspm6c27m044qgdmvnnni.apps.googleusercontent.com"

const LoginScreen = () => {
    const [user,setUser] = useState(null);

    useEffect(() => {
        initAsync();
    })

    initAsync = async () => {
        await GoogleSignIn.initAsync({
            clientId:IOS_CLIENT_ID
        });
        _syncUserWithStateAsync();
    }

    _syncUserWithStateAsync = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync();
        setUser({user})
    }

    signOutAsync = async () => {
        await GoogleSignIn.signOutAsync();
        setUser(null)
    }

    signInAsync = async () => {
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

      onPress = () => {
        if (user) {
          signOutAsync();
        } else {
          signInAsync();
        }
      };

    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
            <Button onPress={onPress} title="Google Login"/>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
