import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import FavScreen from './components/FavScreen';
import ProductDetail from './components/ProductDetail';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen({ favs, setFavs }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        options={{ title: 'Home' }}
      >
        {props => <HomeScreen {...props} favs={favs} setFavs={setFavs} />}
      </HomeStack.Screen>
      <HomeStack.Screen
        name="ProductDetail"
        options={{ title: 'Chi tiết sản phẩm' }}
      >
        {props => <ProductDetail {...props} favs={favs} setFavs={setFavs} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

export default function App() {
  const [favs, setFavs] = useState([]);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Fav') iconName = 'heart';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home">
          {props => <HomeStackScreen {...props} favs={favs} setFavs={setFavs} />}
        </Tab.Screen>
        <Tab.Screen name="Fav">
          {props => <FavScreen {...props} favs={favs} setFavs={setFavs} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}