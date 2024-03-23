import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import { COLOR_PALETTE } from '../../themes';
import { ActivityIndicator } from 'react-native-paper';
import { scale } from '../../utils/Scale';

const PrimaryCTA = ({
  onPress,
  theme,
  text,
  icon,
  onlyText,
  containerStyle,
  style,
  backgroundColor,
  loading,
  disabled,
  width,
  fontSize,
  iconSize,
  height,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled ? disabled : false}
      style={[styles({ theme, backgroundColor, width, }).container, containerStyle && {...containerStyle}]}>
      <View style={styles({ theme }).wrapper}>
        <View>
          <Text style={[{
            fontSize: scale(fontSize ? fontSize : 14),
            color: theme == 'dark' ? COLOR_PALETTE.grayShadeDark : COLOR_PALETTE.secondary1
          }, style ? { ...style } : {}]}>
            {text}
          </Text>
          {/* <Text style={styles({ theme }).text}>{text}</Text> */}
        </View>
        {loading ? (
          <View>
            <ActivityIndicator
              color={'#000'}
              size={iconSize ? iconSize : 20}
              style={{ marginLeft: scale(10) }}
            />
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryCTA;
const styles = (props) =>
  StyleSheet.create({
    container: {
      backgroundColor: props.backgroundColor
        ? props?.backgroundColor
        : 'rgba(69, 68, 68, 0.3)',
      width: props?.width ? props?.width : '90%',
      borderRadius: 8,
      
    },
    wrapper: {
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
      flexDirection: 'row',
    },
    text: {
      fontFamily: 'Manrope',
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 21,
      color:
        props?.theme === 'dark'
          ? 'rgba(197, 197, 197, 1)'
          : COLOR_PALETTE.primary1,
    },
  });
