import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Loading = ({
  backgroundColor,
}) => {
  return (
    <LottieView
      source={require('../../assets/lottie/loading.json')}
      colorFilters={[
        {
          keypath: 'Shape Layer 1',
          color: backgroundColor ? backgroundColor : '#fff',
        },
       
      ]}
      style={{flex:1,alignSelf:'center'}}
      autoPlay
      loop
    />
  )
}

export default Loading