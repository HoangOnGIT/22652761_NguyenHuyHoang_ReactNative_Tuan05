import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import SettingsScreen from './components/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ' }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Hồ sơ' }} />
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Cài đặt' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}