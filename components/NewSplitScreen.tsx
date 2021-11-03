import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { PickerItem } from 'react-native-woodpicker'
import { Picker } from 'react-native-woodpicker'
import Button from './Button'

const NewSplitScreen = ({navigation}:any) => {
    const [pickedGroupName, setpickedGroupName] = useState<PickerItem>({label: 'None', value: 0})

    const group: Array<PickerItem> = [
        {label: 'None', value: 0},
        {label: 'Test Data1', value: 1},
        {label: 'Test Data2', value: 2},
        {label: 'Test Data3', value: 3},
        {label: 'Test Data4', value: 4}
    ];

    const handleOnPress = () =>{
        navigation.navigate('SplittingPeopleList', {selectedGroup:pickedGroupName.label});
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.spaceAfter}>
                    <Text style={styles.picker_text}>Select a friend group!</Text>
                    <Picker textInputStyle={styles.picker_value_text} containerStyle={styles.picker_container} item={pickedGroupName} items={group} onItemChange={setpickedGroupName}/>
                </View>
                <View style={styles.spaceAfter}>
                    <Button onPress={handleOnPress} text='Next' buttonStyle={styles.picker_container} textStyle={styles.picker_value_text}/>
                </View>
                
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
    picker_container:{
        width:200, 
        height:50, 
        backgroundColor:'#f3d6ff', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius:15
    },
    picker_value_text:{
        textAlign:'center',
        color:'black',
        fontSize:15
    },
    picker_text:{
        textAlign:'center',
        fontSize:17,
        marginBottom:7
    },
    spaceAfter:{
        marginBottom:20
    }
  });  

export default NewSplitScreen;
