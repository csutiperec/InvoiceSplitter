import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from './Button';

const InvoiceIn = ({navigation, route}:any) => {
    return (
        <View style={styles.container}>
            <View style={styles.spaceAfter}>
                <Button text='Take a picture' />
            </View>
            <View style={styles.spaceAfter}>
                <Button text='Manual input' />
            </View>
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

export default InvoiceIn
