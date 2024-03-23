import React, { useContext,useEffect,useState } from 'react';
import { View, Text, TouchableOpacity,Image, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { COLOR_PALETTE } from '../../themes';
import { scale } from '../../utils/Scale';
import { AuthContext } from '../../contexts';


const DrawerContent = (props) => {
  const [user_data, setUser_data] = useState(null)
  const UID = 'example'
    const {signOutAfterConfirmation} = useContext(AuthContext);
  const logout = () => {
    signOutAfterConfirmation();
    // Implement your logout logic here
  };

  useEffect(() => {
   
  
    return () => {
      
    }
  }, [])


  const DrawerItem = ({ label, icon, onPress,icon_name }) => {
    // console.log(icon)
    return(
    <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
      {/* {icon} */}
      <MaterialIcons name={`${icon_name}`} size={24} color={COLOR_PALETTE.primary} style={{marginRight:14}} />
      <Text style={styles.drawerItemText}>{label}</Text>
    </TouchableOpacity>
  )};


  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:COLOR_PALETTE.secondary,flex:1}}>
      <View style={{ alignItems: 'center', paddingVertical: 20 }}>
        <Image resizeMode={'contain'} source={require('../../assets/logo/logo.png')} style={{width:scale(220),aspectRatio:1}} />
        <Text style={{color:COLOR_PALETTE.primary}}>--------------  ORDER NOW  --------------</Text>
      </View>
      {/* <DrawerItemList {...props} /> */}

      <DrawerItem
        label="Home"
        icon_name="home"
        icon={() => {return(<MaterialIcons name="home" size={24}  />)}}
        onPress={() => props.navigation.navigate('HomeScreen')}
      />
      <DrawerItem
        label="My Orders"
        icon_name="shopping-basket"
        icon={() => {return(<MaterialIcons name="shopping-basket" size={24} color={'black'}/>)}}
        onPress={() => props.navigation.navigate('MyOrders')}
      />
      <DrawerItem
        label="Wallet"
        icon_name="account-balance-wallet"
        icon={() => {return(<MaterialIcons name="account-balance-wallet" size={24} />)}}
        onPress={() => props.navigation.navigate('Wallet')}
      />
     {user_data?.credit?.active ? <DrawerItem
        label="Credit"
        icon_name="account-balance-wallet"
        icon={() => {return(<MaterialIcons name="account-balance-wallet" size={24} />)}}
        onPress={() => props.navigation.navigate('Credit')}
      /> : null}
            <DrawerItem
        label="Edit Profile"
        icon_name="person"
        icon={() => {return(<MaterialIcons name="home" size={24}  />)}}
        onPress={() => props.navigation.navigate('EditUserProfileScreen')}
      />
            <DrawerItem
        label="About Us"
        icon_name="book"
        icon={() => {return(<MaterialIcons name="home" size={24}  />)}}
        onPress={() => props.navigation.navigate('AboutUs')}
      />
            <DrawerItem
        label="Contact Us"
        icon_name="call"
        icon={() => {return(<MaterialIcons name="home" size={24}  />)}}
        onPress={() => Linking.openURL('tel:+919811409007')}
      />
      <DrawerItem
        label="Cart"
        icon_name="shopping-cart"
        icon={() => {return(<MaterialIcons name="shopping-cart" size={24} />)}}
        onPress={() => props.navigation.navigate('Cart')}
      />
    
    <View style={{position:'absolute',bottom:40}}>
    <Text style={{color:COLOR_PALETTE.secondary1,alignSelf:'flex-start',marginLeft:scale(20),marginTop:scale(5),marginBottom:scale(20),fontSize:16,fontWeight:'600'}}>{`Welcome \n${user_data?.Name?.slice(0,20)}`}</Text>
    </View>
      <TouchableOpacity style={{...styles.drawerItem,position:'absolute',bottom:10}} onPress={logout}>
      {/* {icon} */}
      <MaterialIcons name={`logout`} size={24} color={COLOR_PALETTE.primary} style={{marginRight:14}} />
      <Text style={styles.drawerItemText}>{"Logout"}</Text>
      
    </TouchableOpacity>
    <View style={{ alignItems: 'center', paddingVertical: 20,position:'absolute',bottom:0,right:10 }}>
        {/* <Image resizeMode={'contain'} source={require('../../assets/logo/logo.png')} style={{width:scale(220),aspectRatio:1}} /> */}
        <Text style={{color:COLOR_PALETTE.primary,fontSize:10,fontWeight:'800'}}>{'version 1.1.0'}</Text>
      </View>
    
    </DrawerContentScrollView>
  );
};

const styles = {
    drawerContentContainer: {
      flex: 1,
    },
    drawerItemsContainer: {
      marginTop: 20,
    },
    drawerItem: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      flexDirection:'row',
    },
    drawerItemText: {
      fontSize: 16,
      color: 'black',
    },
  };

export default DrawerContent;
