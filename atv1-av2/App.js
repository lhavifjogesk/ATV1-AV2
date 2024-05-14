import React from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import ParentComponent from './components/ParentComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <ParentComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
