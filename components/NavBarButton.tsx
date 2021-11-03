import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const NavBarButton = (props:NavBarButtonProps) => {
    return (
        <TouchableWithoutFeedback onPress={props.onPressHandle}>
            <View style={styles.container} >
                <Text>{props.titleText}</Text>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

type NavBarButtonProps = {
    titleText: string,
    onPressHandle: any
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height:'100%'
    }
});

export default NavBarButton
