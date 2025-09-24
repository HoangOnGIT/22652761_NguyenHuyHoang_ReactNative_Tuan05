import {View, Text, StyleSheet, Image} from 'react-native'

export default function ProfileScreen() {
  return (
   <View style={styles.center}>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
        style={styles.avatar}
      />
      <Text style={styles.header}>Nguyễn Huy Hoàng</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
   avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 20,
  },
});