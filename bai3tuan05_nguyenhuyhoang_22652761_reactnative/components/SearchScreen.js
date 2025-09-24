import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.center}>
      <TextInput
        style={{
          width: 300,
          height: 50,
          backgroundColor: '#FFFFFF',
          color: 'gray',
          borderWidth: 1,
          paddingStart: 10
        }}
        placeholder={'Seach something'}></TextInput>
      <Text>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
