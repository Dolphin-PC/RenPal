import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {
  Button,
  ThemeProvider,
  CheckBox,
  Text,
  Icon,
} from 'react-native-elements';

import * as colors from '../assets/colors';
import { color } from 'react-native-reanimated';
import { Directions } from 'react-native-gesture-handler';

import CardHeader from '../components/CardHeader';
import ListText from '../components/ListText';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Card = (props) => {
  const [ischeckedTrekking, setIscheckedTrekking] = useState(false);

  const checkBoxStyles = {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: ischeckedTrekking
      ? colors.signature_Blue
      : colors.signature_Gray,
    flexDirection: 'row',
  };
  return (
    <View style={styles.container}>
      <View style={checkBoxStyles}>
        <CheckBox
          uncheckedIcon='circle-o'
          checkedColor={colors.signature_Yellow}
          uncheckedColor='white'
          checked={ischeckedTrekking}
          onPress={() => setIscheckedTrekking(!ischeckedTrekking)}
        />
        <Text h4 style={styles.checkBoxTextStyle}>
          {props.HeaderText}
        </Text>
      </View>
      <View style={styles.list}>
        {props.ListData.map((context, index) => {
          return <ListText key={index} text={context.text} />;
        })}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  list: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width: '90%',
    marginLeft: '5%',
    borderColor: 'black',
    padding: 20,

    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listText: {
    width: '50%',
  },
  testStyle: {
    width: '90%',
  },
  checkBoxTextStyle: {
    marginTop: 'auto',
    marginBottom: 'auto',
    color: 'white',
  },
});
