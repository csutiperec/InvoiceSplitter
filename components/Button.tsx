import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

const Button = (props:any) => {
    return (
        <TouchableOpacity style={props.buttonStyle} onPress={props.onPress}>
            <View style={props.buttonStyle}>
                <Text style={props.textStyle}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}
Button.defaultProps = {
    onPress:()=>{},
    buttonStyle:{
        width: 200,
        height:50, 
        backgroundColor:'#f3d6ff', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius:15
    },
    textStyle:{
        textAlign:'center',
        color:'black',
        fontSize:15
    },
    text:'Change me'
};

export default Button
