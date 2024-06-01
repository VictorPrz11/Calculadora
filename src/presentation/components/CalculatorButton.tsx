import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, styles } from '../../config/theme/AppTheme'
interface props {
    label : string,
    color?:string,
    doubleSize ?: boolean,
    onPress:Function
}
const CalculatorButton = ({label, color = colors.darkGray, doubleSize = false,onPress}:props) => {
  return (
    <Pressable style = {({pressed})=>({
        ...styles.button,
        opacity: (pressed) ? 0.8 : 1,
        backgroundColor:  color,
        width: doubleSize ? 188 : 90,
})} onPress = {()=>onPress()}>
        <Text style= {styles.buttonText}>{label}</Text>
    </Pressable>    
  )
}
export default CalculatorButton
