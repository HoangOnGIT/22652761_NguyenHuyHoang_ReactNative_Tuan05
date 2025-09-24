import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function DetailsScreen({ navigation, color, setColor, colorImages }) {
 
  return (
    <View style={{ flex: 5, justifyContent: 'center' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 10,
        }}>
        <Image source={colorImages[color]} style={{ height: 80, width: 68 }} />
        <Text>Điện thoại VSmart Joy 3 - Hàng Chính Hãng</Text>
      </View>
      <View
        style={{
          flex: 5,
          padding: 10,
          backgroundColor: '#C4C4C4',
        }}>
        <Text>Chọn một màu bên dưới:</Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 10,
            gap: 20,
            backgroundColor: '#C4C4C4',
          }}>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#C5F1FB',
            }}
            onPress={() => setColor('white')}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'red',
            }}
            onPress={() => setColor('red')}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#000000',
            }}
            onPress={() => setColor('black')}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#234896',
            }}
            onPress={() => setColor('blue')}></TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={{
            width: '100%',
            backgroundColor: '#CA1536',
            borderRadius: 5,
            textAlign: 'center',
            padding: 20,
          }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
