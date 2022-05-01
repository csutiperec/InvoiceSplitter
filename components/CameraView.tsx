import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Camera } from 'react-native-vision-camera';

const CameraView = ({navigation, route}:any) => {
    const [cameraPermission, setCameraPermission] = useState('');

    useEffect(() => {
        const fetchPermission = async () => {
            const newCameraPermission = await Camera.requestCameraPermission();
            setCameraPermission(newCameraPermission);
        }

        fetchPermission()
        .catch(console.error);
    }, [])

    return (
        <View style={styles.container}>
            <Text>
                {cameraPermission}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        alignItems:'center',
    },
    spaceAfter:{
        marginBottom:20
    },
    spaceBefore:{
        marginTop:20
    },
}); 

export default CameraView
