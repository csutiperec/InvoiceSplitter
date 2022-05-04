import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from './Button';

const InvoiceIn = ({navigation, route}:any) => {

    const onManualInput = () => {
        navigation.navigate('Invoice', {groupName:route.params.groupName, people: route.params.people, saveID: route.params.saveID});
    }
    const onCameraInput = () => {
        navigation.navigate('CameraView', {groupName:route.params.groupName, people: route.params.people, saveID: route.params.saveID});
    }

    return (
        <View style={styles.container}>
            <View style={styles.spaceAfter}>
                <Button onPress={onCameraInput} text='Take a picture' />
            </View>
            <View style={styles.spaceAfter}>
                <Button onPress={onManualInput} text='Manual input' />
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
