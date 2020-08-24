import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';

//colors
import * as colors from '../assets/colors';
import { color } from 'react-native-reanimated';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={{ flex: 1 }}
        onPress={() => navigation.navigate('CYL')}
      >
        <View style={styles.section_cyl}>
          <Text style={styles.text_cyl}>Challenge Your Limits!</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={{ flex: 1 }}
        onPress={() => navigation.navigate('SYE')}
      >
        <View style={styles.section_sye}>
          <Text style={styles.text_sye}>Share Your Experience!</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={{ flex: 1 }}
        onPress={() => navigation.navigate('FYIP')}
      >
        <View style={styles.section_fyip}>
          <Text style={styles.text_fyip}>Find Your Inner Peace!</Text>
        </View>
      </TouchableHighlight>
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
    flex: 1,
  },
  text_cyl: {
    fontSize: 30,
    color: 'white',
  },
  section_sye: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.signature_Yellow,
    flex: 1,
  },
  text_sye: {
    fontSize: 30,
    color: colors.signature_Blue,
  },
  section_fyip: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  text_fyip: {
    fontSize: 30,
    color: colors.signature_Yellow,
  },
});
