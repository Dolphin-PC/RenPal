import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as colors from '../assets/colors';

const ConfirmButton = (props) => {
  return (
    <View style={styles.BottomButton}>
      <Button
        title='CONFIRM'
        color={colors.signature_Blue}
        backgroundColor={colors.signature_Yellow}
        onPress={() => props.navigation.navigate(props.toScreenName)}
      />
    </View>
  );
};

export default ConfirmButton;

const styles = StyleSheet.create({
  BottomButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.signature_Yellow,
  },
});
