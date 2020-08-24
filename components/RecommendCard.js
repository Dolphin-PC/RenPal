import React from 'react';
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Text } from 'react-native-elements';

import * as image from '../assets/images/imageIndex';

const RecommendCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          borderRadius='10'
          resizeMode='contain'
          style={styles.imageStyle}
          source={props.imageSrc}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.headerStyle}>{props.headerText}</Text>
        <Text>{props.descText}</Text>
      </View>
    </View>
  );
};

export default RecommendCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: '5%',
    width: '100%',
    height: 100,
  },

  imageView: {
    width: '30%',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  textView: {
    width: '70%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    borderColor: 'black',
    padding: 20,
  },
  headerStyle: {
    fontSize: 20,
    marginBottom: 10,
  },
});
