import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  // Giả lập thông tin user
  const user = {
    name: 'Nguyễn Huy Hoàng',
    email: 'hoang@example.com'
  };
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Tên: {user.name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
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