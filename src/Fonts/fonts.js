import { Text } from "react-native"
import { scale } from "../utils/Scale"
import { COLOR_PALETTE } from "../themes"
import React from 'react'

export const Heading = ({children, style, theme}) => {
    return (
        children ? <Text style={[{
            fontSize: scale(20),
            fontFamily:'Manrope-Medium',
            color: theme == 'dark' ? COLOR_PALETTE.grayShadeDark : COLOR_PALETTE.primary
        }, style ? {...style} : {}]}>
           {children}
        </Text>: null
    )
}
export const Subheading = ({children, style, theme}) => {
    return (
        children ? <Text style={[{
            fontSize: scale(18),
            fontFamily:'Manrope-Medium',
            color: theme == 'dark' ? COLOR_PALETTE.grayShadeDark : COLOR_PALETTE.secondary
        }, style ? {...style} : {}]}>
           {children}
        </Text>: null
    )
}
export const Body = ({children, style, theme}) => {
    return (
        children ? <Text style={[{
            fontSize: scale(12),
            fontFamily:'Manrope-Regular',
            color: theme == 'dark' ? COLOR_PALETTE.grayShadeDark : COLOR_PALETTE.secondary
        }, style ? {...style} : {}]}>
           {children}
        </Text>: null
    )
}
export const BodyMedium = ({children, style, theme,numberOfLines}) => {
    return (
        children ? <Text numberOfLines={numberOfLines ? numberOfLines : null} style={[{
            fontSize: scale(15),
            fontFamily:'Manrope-Medium',
            color: theme == 'dark' ? COLOR_PALETTE.grayShadeDark : COLOR_PALETTE.secondary
        }, style ? {...style} : {}]}>
           {children}
        </Text>: null
    )
}
export const SubBody = ({children, style, theme}) => {
    return (
        children ? <Text style={[{
            fontSize: scale(10),
            fontFamily:'Manrope-Regular',
            color: theme == 'dark' ? COLOR_PALETTE.grayShadeDark : COLOR_PALETTE.secondary
        }, style ? {...style} : {}]}>
           {children}
        </Text>: null
    )
}
export const Information = ({children, style, theme}) => {
    return (
        children ? <Text style={[{
            fontSize: scale(8),
            fontFamily:'Manrope-Regular',
            color: theme == 'dark' ? COLOR_PALETTE.grayShadeDark : COLOR_PALETTE.secondary
        }, style ? {...style} : {}]}>
           {children}
        </Text>: null
    )
}
export const PrimaryCTA = ({children, style, theme}) => {
    return (
        children ? <Text style={[{
            fontSize: scale(14),
            fontFamily:'Manrope-SemiBold',
            color: theme == 'dark' ? COLOR_PALETTE.grayShadeDark : COLOR_PALETTE.secondary
        }, style ? {...style} : {}]}>
           {children}
        </Text>: null
    )
}
export const SecondaryCTA = ({children, style, theme}) => {
    return (
        children ? <Text style={[{
            fontSize: scale(14),
            fontFamily:'Manrope-Medium',
            color: theme == 'dark' ? COLOR_PALETTE.grayShadeDark : COLOR_PALETTE.secondary
        }, style ? {...style} : {}]}>
           {children}
        </Text>: null
    )
}