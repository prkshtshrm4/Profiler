import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialIcons } from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../../screens/HomeSceen/HomeScreen';
import MyOrders from '../../screens/Orders/MyOrders';
import Cart from '../../screens/Cart/Cart';
import MainNavigator from '../MainNavigator/MainNavigator';
import { COLOR_PALETTE } from '../../themes';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false
      })}
      
      tabBarOptions={{
        activeTintColor: COLOR_PALETTE.primary,
        inactiveTintColor: 'gray',

      }}
    >
      <Tab.Screen name="Home"  component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="My Orders" component={MyOrders}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="list" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Cart" component={Cart}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="shopping-cart" color={color} size={size} />
        )
      }} />
     <Tab.Screen
  name="My Account"
  component={MainNavigator}
  options={{
    tabBarIcon: ({ color, size }) => (
      <MaterialIcons name="person" color={color} size={size} />
    )
  }}
/>

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
