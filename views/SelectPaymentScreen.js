import React from 'react';
import { StyleSheet, View, TouchableHighlight, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import * as colors from '../assets/colors';
import { color } from 'react-native-reanimated';

const SelectPaymentScreen = (props) => {
  const justPay = () => {
    Alert.alert('You choose just pay', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => props.navigation.navigate('PaymentScreen'),
      },
    ]);
  };

  const visitPay = () => {
    Alert.alert('You choose just visit', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => props.navigation.navigate('VisitScreen'),
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={justPay}
        style={styles.TopTouch}
        underlayColor={colors.signature_Gray}
      >
        <View style={styles.centerView}>
          <Text style={{ color: 'white', fontSize: 80 }}>450रू</Text>
          <Text style={{ color: 'white' }}>+</Text>
          <Text style={{ color: 'white' }}>Deposit 100रू</Text>
        </View>
      </TouchableHighlight>

      <Text h4 style={styles.CenterText}>
        How much can you pay?
      </Text>

      <TouchableHighlight
        onPress={visitPay}
        style={styles.TopTouch}
        underlayColor={colors.signature_Gray}
      >
        <View style={styles.BottomView}>
          <Text style={{ color: colors.signature_Blue, fontSize: 80 }}>
            0रू
          </Text>
          <Text style={{ color: colors.signature_Blue }}>+</Text>
          <Text style={{ color: colors.signature_Blue }}>Deposit 100रू</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default SelectPaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TopTouch: {
    backgroundColor: colors.signature_Blue,
    width: '100%',
    height: '50%',
  },
  BottomView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.signature_Yellow,
    width: '100%',
    height: '50%',
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CenterText: {
    color: 'gray',
    margin: 5,
  },
});
