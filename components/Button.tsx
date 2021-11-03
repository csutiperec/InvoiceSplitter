import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

const Button = (props:any) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={props.buttonStyle}>
                <Text style={props.textStyle}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}
Button.defaultProps = {
    onPress:()=>{},
    buttonStyle:{backgroundColor:'blue'},
    textStyle:{color:'white'},
    text:'Change me'
};

export default Button
