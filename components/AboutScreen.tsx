import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainTitleContainer}>
                <Text style={styles.mainTitle}>Invoice Splitter</Text>
            </View>
            <View style={styles.normalTextContainer}>
                <Text style={styles.normalText}>This application was created by Peter Csutoras</Text>
                <Text style={styles.normalText}>Contact: csutiperec@gmail.com</Text>
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
    mainTitle:{
        fontSize:28,
    },
    mainTitleContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    normalText:{
        fontSize:14,
    },
    normalTextContainer:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    }
});  

export default AboutScreen;
