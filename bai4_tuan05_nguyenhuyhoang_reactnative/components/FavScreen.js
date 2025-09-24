import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

export default function FavScreen({ favs }) {
  if (!favs.length) {
    return (
      <View style={styles.center}>
        <Text>Chưa có sản phẩm yêu thích.</Text>
      </View>
    );
  }

  return (
    <View style={styles.center}>
      <Text style={styles.header}>Sản phẩm yêu thích</Text>
      <FlatList
        data={favs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>Giá: ${item.price}</Text>
              <Text>Cung cấp bởi: {item.provider}</Text>
            </View>
          </View>
        )}
      />
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
  header: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#eee',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    marginBottom: 14,
  },
  itemName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});