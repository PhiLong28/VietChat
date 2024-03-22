import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent'
import { globalStyles } from '../styles/globalStyles'
import { appColors } from '../constants/appColors'
import { fontfamilies } from '../constants/fontFamilies'

interface Props {
    icon?: ReactNode,
    text: string,
    type?: 'primary' | 'text' | 'Link',
    color?: string,
    styles?: StyleProp<ViewStyle>,
    textColor?: string,
    textStyles?: StyleProp<TextStyle>,
    onPress?: ()=>void,
    iconFlex?: 'right'| 'left',
}

const ButtonComponent = (props: Props) => {
  
    const {
        icon,text, textColor, textStyles, color, styles, onPress, iconFlex, type
    } = props

    return (
        type === 'primary' ?
            <TouchableOpacity 
                style={[
                    globalStyles.button, 
                    {
                        backgroundColor: color ?? appColors.primary,
                    }, 
                    styles]}>
                {icon && icon}
                <TextComponent 
                    text={text} 
                    color={textColor ?? appColors.white} 
                    styles={[
                        textStyles, 
                        {
                        marginLeft: icon ? 12 : 0,
                        },
                    ]}
                    flex={icon && iconFlex === 'right' ? 1 : 0}
                />
                {icon && iconFlex === 'right' && icon}
            </TouchableOpacity>
        : <TouchableOpacity>
            <TextComponent text={text}
                color={type === 'Link' ? appColors.primary : appColors.text}
            />
        </TouchableOpacity>
    )
}

export default ButtonComponent