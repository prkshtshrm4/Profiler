import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StatusBar, ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts';
import { AuthNavigator } from './src/routes';
import { COLOR_PALETTE } from './src/themes';


const App = () => {
  const [trigger, setTrigger] = useState(false);
  

  if(trigger){
    return(
      <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size={50} color={COLOR_PALETTE?.primary} />
        <Text style={{alignSelf:'center',justifyContent:'center',textAlign:'center',color:COLOR_PALETTE.primary,fontSize:20,fontWeight:'700',lineHeight:30}}>{'Something went wrong with our servers :('}</Text>


      </View>
    )


  }
  else{
  return (
    <AuthProvider>
      <StatusBar
    backgroundColor={COLOR_PALETTE.primary1}
    barStyle="light-content"
  />
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <AuthNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
  }
};

export default App;
