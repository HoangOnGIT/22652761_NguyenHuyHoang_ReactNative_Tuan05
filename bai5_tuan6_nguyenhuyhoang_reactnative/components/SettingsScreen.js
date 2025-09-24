import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.center}>
      <View style={styles.row}>
        <Text style={styles.text}>Thông báo</Text>
        <Switch />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Chế độ tối</Text>
        <Switch />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
    width: 200,
  },
});
