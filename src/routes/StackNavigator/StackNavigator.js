import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts';
import { SignUp, Splash } from '../../screens';
import MainNavigator from '../MainNavigator/MainNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home';

export default function StackNavigator() {

    const stack = createStackNavigator();

    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
         <stack.Screen name="Home" component={Home} />
        </stack.Navigator>
    )
}     