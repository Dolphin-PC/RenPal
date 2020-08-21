import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//colors
import * as colors from '../assets/colors'
import { color } from 'react-native-reanimated';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.section_cyl}>
        <Text
          style={styles.text_cyl}
          onPress={() => navigation.navigate('CYL')}
        >
          Challenge Your Limits!
        </Text>
      </View>
      <View style={styles.section_sye}>
        <Text
          style={styles.text_sye}
          onPress={() => navigation.navigate('SYE')}
        >
          Share Your Experience!
        </Text>
      </View>
      <View style={styles.section_fyip}>
        <Text
          style={styles.text_fyip}
          onPress={() => navigation.navigate('FYIP')}
        >
          Find Your Inner Peace!
        </Text>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  section_cyl: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.signature_Blue,
    height: '33.3%',
  },
  text_cyl: {
    fontSize: 30,
    color: 'white',
  },
  section_sye: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.signature_Yellow,
    height: '33.3%',
  },
  text_sye: {
    fontSize: 30,
    color: colors.signature_Blue,
  },
  section_fyip: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '33.3%',
  },
  text_fyip: {
    fontSize: 30,
    color: colors.signature_Yellow,
  },
});
