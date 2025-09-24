import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://6832918dc3f2222a8cb2b453.mockapi.io/api/v1/products')
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  return (
    <View style={styles.center}>
      <Text style={styles.header}>Danh sách sản phẩm</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
            style={{ marginBottom: 14 }}
          >
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text>Giá: ${item.price}</Text>
                <Text>Cung cấp bởi: {item.provider}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#eee',
  },
  header: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
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
  },
  itemName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});