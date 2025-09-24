import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailScreen';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [color, setColor] = useState('blue');

  const colorImages = {
    blue: require('./assets/blue.png'),
    red: require('./assets/red.png'),
    black: require('./assets/black.png'),
    silver: require('./assets/white.png'),
  };

  const props = { navigation, color, setColor, colorImages };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DetailsScreen">
        <Stack.Screen
          name="HomeScreen"
          component={(props) => (
            <HomeScreen
              {...props}
              color={color}
              setColor={setColor}
              colorImages={colorImages}
            />
          )}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={(props) => (
            <DetailsScreen
              {...props}
              color={color}
              setColor={setColor}
              colorImages={colorImages}
            />
          )}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
