import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Đây là màn hình Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 18,
    margin: 10
  }
});