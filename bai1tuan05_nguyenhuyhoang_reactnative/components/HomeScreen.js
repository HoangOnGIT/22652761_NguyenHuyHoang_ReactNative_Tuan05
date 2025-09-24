import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ navigation, color, setColor, colorImages }) {
  return (
    <View style={{ flex: 4, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
      <Image
        source={colorImages[color]}
        style={{ height: 350, width: 280 }}
      />
      <Text>Điện thoại VSmart Joy 3 - Hàng Chính Hãng</Text>

      <View
        style={{
          gap: 5,
          width: '100%',
          marginBottom: 20,
          marginTop: 10,
          padding: 10,
          rowGap: 10,
        }}>
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Image
            source={require('../assets/stars.png')}
            style={{ height: 20, width: 100 }}
          />
          <Text>806 đánh giá</Text>
        </View>
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text>1.790.000 đ</Text>
          <Text style={{ textDecorationLine: 'line-through' }}>
            1.790.000 đ
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingStart: 30,
            gap: 10,
          }}>
          <Text style={{ color: 'red' }}>Ở đâu rẻ hơn hoàn tiền</Text>
          <Image
            source={require('../assets/question.png')}
            style={{ height: 20, width: 20 }}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailsScreen')}
            style={{
              width: '100%',
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <Text style={{ textAlign: 'center' }}>4 Màu - Chọn màu</Text>
            <Text style={{ textAlign: 'end' }}>></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',

          gap: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailsScreen')}
          style={{
            width: '100%',
            backgroundColor: '#CA1536',
            borderRadius: 5,
            textAlign: 'center',
            padding: 20,
          }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({});
