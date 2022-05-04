import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Camera, useCameraDevices, useFrameProcessor } from 'react-native-vision-camera';
import { OCRFrame, scanOCR } from 'vision-camera-ocr';
import LoadingView from './LoadingView';

const CameraView = ({navigation, route}:any) => {
    const [cameraPermission, setCameraPermission] = useState('');
    const [scannedText, setScannedText] = useState({} as OCRFrame);
    const devices = useCameraDevices();
    const device = devices.back;
    const frameProcessor = useFrameProcessor((frame) => {
        'worklet';
        const scannedOcr = scanOCR(frame);
    }, []);

    useEffect(() => {
        const fetchPermission = async () => {
            const newCameraPermission = await Camera.requestCameraPermission();
            setCameraPermission(newCameraPermission);
        }

        fetchPermission()
        .catch(console.error);
    }, [])

    switch(cameraPermission) {
        case 'authorized':
            if (device == null) return <LoadingView />
            return (
                <Camera
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                    frameProcessor={frameProcessor}
                />
            )
        case 'denied':
            return (
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text>
                            Please authorize camera permissions
                        </Text>
                    </View>
                </View>
            )
        default:
            return <LoadingView />
    }
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
    textContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
}); 

export default CameraView
