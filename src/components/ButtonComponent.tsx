import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent'
import { globalStyles } from '../styles/globalStyles'
import { appColors } from '../constants/appColors'
import { fontfamilies } from '../constants/fontFamilies'

interface Props {
    icon?: ReactNode,
    text: string,
    type?: 'primary' | 'text' | 'link',
    color?: string,
    styles?: StyleProp<ViewStyle>,
    textFont?: string,
    textColor?: string,
    textStyles?: StyleProp<TextStyle>,
    onPress?: ()=>void,
    iconFlex?: 'right'| 'left',
}

const ButtonComponent = (props: Props) => {
  
    const {
        icon,text, textColor, textStyles, color, styles, textFont,onPress, iconFlex, type
    } = props

    return type === 'primary' ?  (
            <View style={{alignItems:"center"}}>
                <TouchableOpacity 
                    onPress={onPress}
                    style={[
                        globalStyles.button, 
                        globalStyles.shadow,
                        {
                            backgroundColor: color ?? appColors.primary,
                            marginBottom: 17,
                            width: '90%',
                        }, 
                        styles]}>
                    {icon && iconFlex === 'left' && icon}
                    <TextComponent 
                        text={text} 
                        color={textColor ?? appColors.white} 
                        styles={[
                            textStyles, 
                            {
                            marginLeft: icon ? 12 : 0,
                            fontSize: 16,
                            textAlign: 'center',
                            },
                        ]}
                        flex={icon && iconFlex === 'right' ? 1 : 0}
                        font={textFont ?? fontfamilies.medium}
                    />
                    {icon && iconFlex === 'right' && icon}
                </TouchableOpacity>
            </View>
            
     )   :  (
        <TouchableOpacity onPress={onPress}>
            <TextComponent 
            
                text={text}
                color={type === 'link' ? appColors.primary : appColors.text}
            />
        </TouchableOpacity>
    )
}

export default ButtonComponent