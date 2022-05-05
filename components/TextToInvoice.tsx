import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const TextToInvoice = ({navigation, route}:any) => {

    useEffect(() => {
      console.log(route.params.scannedText);
    }, []);
    
    return (
        <View style={styles.container}>
            <Text>
                {route.params.scannedText.result.text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    spaceAfter:{
        marginBottom:20
    }
});  

export default TextToInvoice