import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section_cyl}>
        <Text style={styles.text_cyl}>Challenge Your Limits!</Text>
      </View>
      <View style={styles.section_sye}>
        <Text style={styles.text_sye}>Share Your Experience!</Text>
      </View>
      <View style={styles.section_fyip}>
        <Text style={styles.text_fyip}>Find Your Inner Peace!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-around',
  },
  section_cyl: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: '33.3%',
  },
  text_cyl: {
    fontSize: 30,
    color: 'white',
  },
  section_sye: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    height: '33.3%',
  },
  text_sye: {
    fontSize: 30,
    color: 'blue',
  },
  section_fyip: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '33.3%',
  },
  text_fyip: {
    fontSize: 30,
    color: 'yellow',
  },
});

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { View, Text } from 'react-native';

// export default function App() {
//   return (
//     <View>
//       <Text>App</Text>
//       <StatusBar style='auto' />
//     </View>
//   );
// }
