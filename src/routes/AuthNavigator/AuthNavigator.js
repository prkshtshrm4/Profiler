
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigator } from '../DrawerNavigator/DrawerNavigator';
export default function AuthNavigator() {

    const stack = createStackNavigator();

    const {
        splashLoading,
        authenticated,
        newUser,
        firstTime,
        handleFirstTimeChange,
    } = useContext(AuthContext);

   


    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
               <stack.Screen
                            name="DrawerNavigator"
                            component={DrawerNavigator}
                        />
        </stack.Navigator>
    )
}     