import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBarButton from './NavBarButton';

const NavBar = ({navigation}:any) => {
    return (
        <View style={styles.container}>
            <NavBarButton titleText='History' onPressHandle={()=> navigation.replace('History')}/>
            <NavBarButton titleText='Groups' onPressHandle={()=> navigation.replace('Groups')}/>
            <NavBarButton titleText='New Split' onPressHandle={()=> navigation.replace('NewSplit')}/>
            <NavBarButton titleText='About' onPressHandle={()=> navigation.replace('About')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 0.1,
      flexDirection: 'row',
      backgroundColor: '#78d1fa',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default NavBar
