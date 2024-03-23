import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNavigator from '../MainNavigator/MainNavigator';
import { View, Text } from 'react-native';
import StackNavigator from '../StackNavigator/StackNavigator';
import DrawerContent from './DrawerContent';
export const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

//   const DrawerContent = () => {
//     return (
//       <View>
//         <Text style={{backgroundColor:'red'}}>{'LOGO'}</Text>
        
//       </View>
//     );
//   };

  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  );
};
