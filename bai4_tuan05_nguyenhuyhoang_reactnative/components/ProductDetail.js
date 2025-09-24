import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProductDetail({ route, favs, setFavs }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://6832918dc3f2222a8cb2b453.mockapi.io/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Không tìm thấy sản phẩm.</Text>
      </View>
    );
  }

  const isFav = favs.some(item => item.id === product.id);

  const handleFav = () => {
    if (isFav) {
      setFavs(favs.filter(item => item.id !== product.id));
    } else {
      setFavs([...favs, product]);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Giá: ${product.price}</Text>
      <Text style={styles.provider}>Cung cấp bởi: {product.provider}</Text>
      <Text style={styles.desc}>Mô tả: {product.description ?? 'Không có mô tả.'}</Text>
      <TouchableOpacity
        style={styles.favBtn}
        onPress={handleFav}
      >
        <Ionicons name={isFav ? 'heart' : 'heart-outline'} size={32} color="crimson" />
        <Text style={styles.favText}>{isFav ? 'Bỏ yêu thích' : 'Thêm vào yêu thích'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  price: { fontSize: 18, marginBottom: 8 },
  provider: { fontSize: 16, color: 'gray', marginBottom: 12 },
  desc: { fontSize: 16, color: '#333' },
  favBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'crimson',
    backgroundColor: '#fff0f3',
  },
  favText: {
    fontSize: 18,
    color: 'crimson',
    marginLeft: 8,
    fontWeight: 'bold',
  },
});