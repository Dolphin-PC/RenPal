import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ThemeProvider, CheckBox, Text } from 'react-native-elements';

// colors
import * as colors from '../assets/colors';

const CardHeader = (props) => {
  return (
    <View style={props.ischeckStyle}>
      <CheckBox
        uncheckedIcon='circle-o'
        checkedColor={colors.signature_Yellow}
        uncheckedColor='white'
        checked={props.ischecked}
      />
      <Text h4 style={styles.checkBoxTextStyle}>
        {/* Trekking */}
        {props.test}
      </Text>
    </View>
  );
};

export default CardHeader;

const styles = StyleSheet.create({});
