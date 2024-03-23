import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLOR_PALETTE, Heading } from '../../Fonts'
import { scale } from '../../utils/Scale'

const ImageButton = ({
    image_left,
    onPress,
    img,
    text,
    textColor,
    backgroundColor,
    marginLeft,
    width,
}) => {
    if(image_left){

        return(
            <TouchableOpacity onPress={onPress} style={{justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:backgroundColor ? backgroundColor : '#fff',borderRadius:8,marginVertical:scale(10)}}>
            <Image
            resizeMode={'contain'}
            style={{width:width ? width: 200,aspectRatio:1,marginLeft:marginLeft ? marginLeft : 0}}
            source={img}
            />
            <Heading style={{color:textColor ? textColor : COLOR_PALETTE.primary,fontWeight:'800'}}>{text}</Heading>
        </TouchableOpacity>
    )
}
else{
    return(
        <TouchableOpacity onPress={onPress} style={{justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor: backgroundColor ? backgroundColor :'#fff',borderRadius:8,marginVertical:scale(10)}}>
        <Heading style={{color:textColor ? textColor : COLOR_PALETTE.primary,fontWeight:'800'}}>{text}</Heading>
        <Image
        resizeMode={'contain'}
        style={{width: width ? width : 200,aspectRatio:1,marginLeft:marginLeft ? marginLeft : 0}}
        source={img}
        />
    </TouchableOpacity>
)
}
}

export default ImageButton