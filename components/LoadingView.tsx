import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoadingView = () => {
  return (
        <View style={styles.container}>
            <View style={styles.loaderContainer}>
                <ActivityIndicator />
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
    loaderContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default LoadingView