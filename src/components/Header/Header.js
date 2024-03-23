import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { BodyMedium } from '../../Fonts'
import { scale } from '../../utils/Scale'
import { useCartStore } from '../../stores/useCartStore'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'


const Header = (
    {
        onPress,
        tittle,
        logo
    }
) => {
    const navigation = useNavigation();
    const totalItems = useCartStore(state => state.totalItems);
    const icon_color = '#000';
    const icon_size = 30;
   if(logo){
    return(
        <View style={{backgroundColor:'#fff',width:'100%',flexDirection:'row',paddingVertical:10}}>
            <TouchableOpacity onPress={onPress} style={{marginLeft:10,zIndex:10}}>
                <AntDesign name="arrowleft" color={'#000'} size={30} />
            </TouchableOpacity>
            <View style={{marginLeft:scale(-30),flexDirection:'row',width:'94%'}}>
                <Image source={require('../../assets/logo/logo.png')} resizeMode={'contain'} style={{height:scale(30),width:200,}} />
                <TouchableOpacity onPress={()=>{
                navigation.navigate('Cart')
            }} style={{marginLeft:15,position:'absolute',right:0}}>
                <View style={{position:'absolute', top:-5, left:-5, zIndex:10, borderRadius:15,alignItems:'center',height:20, width:20, backgroundColor:'red'}}>
                <Text style={{
                    fontWeight:'bold',
                    fontSize:scale(12),
                    color: '#ffffff',
                }}>{totalItems}</Text>
                </View>
        <Entypo name={'shopping-cart'} size={icon_size} color={icon_color} />

            </TouchableOpacity>
                {/* <BodyMedium style={{color:'#000',fontWeight:'600',fontSize:20,}} >{tittle}</BodyMedium> */}
            </View>
            
        </View>
    )
   }
   else{
    return(
        <View style={{backgroundColor:'#fff',width:'100%',flexDirection:'row',paddingVertical:10}}>
            <TouchableOpacity onPress={onPress} style={{marginLeft:10}}>
                <AntDesign name="arrowleft" color={'#000'} size={30} />
            </TouchableOpacity>
            <View style={{marginLeft:10}}>
                <BodyMedium style={{color:'#000',fontWeight:'600',fontSize:20,}} >{tittle}</BodyMedium>
            </View>
            
        </View>
    )
   }
}

export default Header