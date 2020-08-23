import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListText = (props) => {
  return <Text style={styles.listText}>{props.text}</Text>;
};

export default ListText;

const styles = StyleSheet.create({
  listText: {
    width: '50%',
    marginBottom: 10,
  },
});
