import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const HistoryScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>This is the History Screen</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});  

export default HistoryScreen;
