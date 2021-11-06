import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Text, LogBox, FlatList } from 'react-native';
import Button from './Button';

const AddItemToInvoice = ({route, navigation}:any) => {
    const [itemID, setItemID] = useState(-1);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [debters, setDebters] = useState([] as Array<string>);

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);

    useEffect(() => {
        setItemID(route.params.itemID);
        setItemName(route.params.itemName);
        setItemPrice(route.params.itemPrice);
        setDebters(route.params.debters);
    }, [])

    const handleOnPressNext = () =>{
        navigation.goBack();
        route.params.onReturn(itemName, itemPrice, debters, itemID);
    };

    const handleOnListItemChecked = (name:string) =>{
        const index = debters.indexOf(name);
        const newArray = [...debters];
        if(0<=index){
            newArray.splice(index, 1);
        }
        else{
            newArray.push(name);
        }
        setDebters(newArray);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.spaceAfter, styles.spaceBefore]}>
                <TextInput onChangeText={text=>setItemName(text)} value={itemName} placeholder='Name' style={[styles.textField, styles.textFieldText]}/>
            </View>
            <View style={styles.spaceAfter}>
                <TextInput onChangeText={text=>setItemPrice(text)} value={itemPrice.toString()} placeholder='Price' style={[styles.textField, styles.textFieldText]} keyboardType='numeric'/>
            </View>
            <View style={[{maxHeight:'60%'}, styles.spaceAfter]}>
                <FlatList data={route.params.people} renderItem={(item) => {return <AddItemPeopleListItem checked={debters.includes(item.item.name)} name={item.item.name} onClick={()=>{handleOnListItemChecked(item.item.name)}} />}} keyExtractor={item => item.id.toString()}/>
            </View>
            <View style={[styles.spaceAfter, styles.spaceBefore]}>
                <Button onPress={handleOnPressNext} text='Add Item'/>
            </View>
        </View>
    )
}

const AddItemPeopleListItem = (props:{name:string, onClick:any, checked: boolean}) => {

    const onPressHandler = () => {
        props.onClick();
    };

    return(
        <View style={[styles.itemcontainer, styles.spaceBefore]}>
            <View style={styles.nameContainer}>
                <Text>{props.name}</Text>
            </View>
            <Button onPress={onPressHandler} text={props.checked? 'X' : ''} buttonStyle={[styles.checkboxContainer, props.checked? styles.checkboxSelected:styles.checkboxIdle]}/>
        </View>
    )
};

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
    itemcontainer:{
        flexDirection:'row',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#fbf2ff',
        width: 300,
        borderRadius: 15
    },
    checkboxContainer:{
        width: 70,
        height:50, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius:15,
        flex:3
    },
    checkboxIdle:{
        backgroundColor:'#f3d6ff'
    },
    checkboxSelected:{
        backgroundColor:'#dc8aff'
    },
    nameContainer:{
        flex:7,
        marginLeft:15
    },
    spaceAfter:{
        marginBottom:20
    },
    spaceBefore:{
        marginTop:20
    },
  });  

export default AddItemToInvoice;
