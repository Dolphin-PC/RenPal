import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {} from 'react-native-elements';

//components
import HeaderText from '../components/HeaderText';
import Card from '../components/Card';

// colors
import * as colors from '../assets/colors';
import { color } from 'react-native-reanimated';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const trekkingCardData = [
  {
    text: '#4-person tent',
  },
  {
    text: '#BackPack',
  },
  {
    text: '#Sleeping bag',
  },
  {
    text: '#Trekking Stick',
  },
  {
    text: '#Trekking Shoes',
  },
  {
    text: '#High altitude jacket',
  },
];
const mountaineeringCardData = [
  {
    text: '#Backpack',
  },
  {
    text: '#An ice axe',
  },
  {
    text: '#Crampons',
  },
  {
    text: '#Hydration system',
  },
  {
    text: '#A climbing helmet',
  },
  {
    text: '#M. boots',
  },
  {
    text: '#Altimeter',
  },
  {
    text: '#First aid',
  },
  {
    text: '#Headlamp',
  },
  {
    text: '#Sleeping bag',
  },
  {
    text: '#Sleeping backpack',
  },
  {
    text: '#Trekking stick',
  },
];
function ScreenCYL(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <HeaderText text='Challenge Your Limits!' />
        <ScrollView>
          <Card
            style={styles.card}
            HeaderText='Trekking'
            ListData={trekkingCardData}
          />
          <Card
            style={styles.card}
            HeaderText='Mountaineering'
            ListData={mountaineeringCardData}
          />
        </ScrollView>
      </View>

      <View style={styles.BottomButton}>
        <Button
          title='CONFIRM'
          color={colors.signature_Blue}
          backgroundColor={colors.signature_Yellow}
          onPress={() => props.navigation.navigate('SearchScreen')}
        />
      </View>
    </SafeAreaView>
  );
}
export default ScreenCYL;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mainView: {
    marginTop: '10%',
    width: '100%',
    height: '80%',
    alignItems: 'center',
  },
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
