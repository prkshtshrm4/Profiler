import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext,useEffect,useState } from 'react'
import { Button } from 'react-native-paper'
import { AuthContext } from '../../contexts'

import { COLOR_PALETTE } from '../../themes';
import { BodyMedium } from '../../Fonts';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/Header';

import { useNavigation } from '@react-navigation/native';

export default function MainNavigator() {
    const [userData, setUserData] = useState(null);

    const navigation = useNavigation();
    const {signOutAfterConfirmation} = useContext(AuthContext);
   
 
    useEffect(() => {
        
    
      return () => {
        
      }
    }, [])
    
    return (
        <View style={{backgroundColor:'#efefef',flex:1}}>
<Header tittle={'My Account'}
onPress={()=>{
    navigation.goBack()
}} />
        <View style={{backgroundColor:'#fff',borderRadius:8,flexDirection:'row',marginHorizontal:10,marginVertical:10,padding:10,alignItems:'center'}}>
            <View style={{backgroundColor:COLOR_PALETTE.grayShadeLight,borderRadius:30,borderWidth:0.5,justifyContent:'center',alignItems:'center',padding:12,aspectRatio:1,height:60}}>
                <Text style={{color:'#000',fontSize:20}}>{userData?.Name ?  userData?.Name.slice(0,1) : "?"}</Text>
            </View>
            <View style={{marginLeft:20}}>
                <BodyMedium style={{color:'#000'}}>{userData?.Name ? userData?.Name : "Unknown User"}</BodyMedium>
            </View>
            <View style={{marginLeft:20,width:'50%',alignItems:'flex-end'}}>
                {/* <BodyMedium style={{color:'#000',fontSize:16}}>{'Edit'}</BodyMedium> */}
                <Entypo name={'chevron-thin-right'} color={'#000'} size={20} />
            </View>
            

        </View>
        <View style={{backgroundColor:'#fff',borderRadius:8,marginHorizontal:10}}>
        <TouchableOpacity onPress={()=>{
            navigation.navigate("MyOrders")
        }} style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,padding:10,alignItems:'center'}}>
            <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
                {/* <Text style={{color:'#000',fontSize:20}}>{'TS'}</Text> */}
                <MaterialIcons name="list" color={'#000'} size={20} />

            </View>
            <View style={{marginLeft:20}}>
                <BodyMedium style={{color:'#000'}}>{'My Orders'}</BodyMedium>
            </View>
            <View style={{marginLeft:20,width:'50%',alignItems:'flex-end'}}>
                {/* <BodyMedium style={{color:'#000',fontSize:16}}>{'Edit'}</BodyMedium> */}
                <Entypo name={'chevron-thin-right'} color={'#000'} size={20} />
            </View>

            

        </TouchableOpacity>
            <View style={{borderWidth:0.2,width:'80%',marginHorizontal:30}} />


            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,padding:10,alignItems:'center'}}>
            <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
                {/* <Text style={{color:'#000',fontSize:20}}>{'TS'}</Text> */}
                <MaterialIcons name="shopping-cart" color={'#000'} size={20} />

            </View>
            <View style={{marginLeft:20}}>
                <BodyMedium style={{color:'#000'}}>{'My Cart    '}</BodyMedium>
            </View>
            <View style={{marginLeft:20,width:'50%',alignItems:'flex-end'}}>
                {/* <BodyMedium style={{color:'#000',fontSize:16}}>{'Edit'}</BodyMedium> */}
                <Entypo name={'chevron-thin-right'} color={'#000'} size={20} />
            </View>

            

        </View>
        <View style={{borderWidth:0.2,width:'80%',marginHorizontal:30}} />


        <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,padding:10,alignItems:'center'}}>
            <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
                {/* <Text style={{color:'#000',fontSize:20}}>{'TS'}</Text> */}
                <Entypo name="text-document-inverted" color={'#000'} size={20} />

            </View>
            <View style={{marginLeft:20}}>
                <BodyMedium style={{color:'#000'}}>{'Term        '}</BodyMedium>
            </View>
            <View style={{marginLeft:20,width:'50%',alignItems:'flex-end'}}>
                {/* <BodyMedium style={{color:'#000',fontSize:16}}>{'Edit'}</BodyMedium> */}
                <Entypo name={'chevron-thin-right'} color={'#000'} size={20} />
            </View>

            

        </View>
        {/* <View style={{borderWidth:0.2,width:'80%',marginHorizontal:30}} /> */}


        </View>
        
            {/* <Text style={{ color: 'black' }}>MainNavigator</Text> */}

            <Button mode={'contained'} style={{marginHorizontal:40,marginVertical:20,backgroundColor:COLOR_PALETTE.primary,borderRadius:8}} onPress={signOutAfterConfirmation}>
                <Text style={{color:'#000'}}>{'Sign Out'}</Text>
            </Button>
        </View>
    )
}