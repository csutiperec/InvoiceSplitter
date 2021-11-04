import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Button from './Button'
import { LogBox } from 'react-native';

const AddNewPerson = ({route, navigation}:any) => {
    const [text, setText] = useState('');

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);

    const handleOnPress = () =>{
        navigation.goBack();
        route.params.onReturn(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.spaceAfter}>
                <TextInput onChangeText={text=>setText(text)} value={text} placeholder='Name' style={[styles.textField, styles.textFieldText]}/>
            </View>
            <View style={styles.spaceAfter}>
                <Button onPress={handleOnPress} text='Next'/>
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
    textField:{
        width:200, 
        height:50, 
        backgroundColor:'#f3d6ff', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius:15
    },
    textFieldText:{
        textAlign:'center',
        color:'black',
        fontSize:15
    },
    spaceAfter:{
        marginBottom:20
    }
  });  

export default AddNewPerson;
