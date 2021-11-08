import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Text, LogBox, FlatList } from 'react-native';
import Button from './Button';

const AddItemToInvoice = ({route, navigation}:any) => {
    const [itemID, setItemID] = useState(-1);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [debters, setDebters] = useState([] as Array<Debter>);

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

    const handleOnListItemAdd = (name:string) =>{
        const item = debters.find((i)=>{return i.name===name});
        const newArray = [...debters];
        if (item === undefined){
            newArray.push({name:name, number:1});
        }
        else{
            const index = debters.indexOf(item);
            newArray.splice(index, 1, {name:name, number:item.number+1});
        }
        setDebters(newArray);
    };

    const handleOnListItemSub = (name:string) =>{
        const item = debters.find((i)=>{return i.name===name});
        const newArray = [...debters];
        if (item){
            const index = debters.indexOf(item);
            const newNumber = item.number-1;
            if(newNumber === 0){
                newArray.splice(index, 1);
            }
            else
                newArray.splice(index, 1, {name:name, number:newNumber});
        }
        setDebters(newArray);
    };

    const getNumberForName = (name:string):number => {
        const item = debters.find((i)=>{return i.name===name});
        if(item){
            return item.number
        }
        return 0;
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
                <FlatList data={route.params.people} renderItem={(item) => {return <AddItemPeopleListItem buyNumber={getNumberForName(item.item.name)} name={item.item.name} onClickAdd={()=>{handleOnListItemAdd(item.item.name)}} onClickSub={()=>{handleOnListItemSub(item.item.name)}} />}} keyExtractor={item => item.id.toString()}/>
            </View>
            <View style={[styles.spaceAfter, styles.spaceBefore]}>
                <Button onPress={handleOnPressNext} text='Add Item'/>
            </View>
        </View>
    )
}

const AddItemPeopleListItem = (props:{name:string, onClickAdd:any, onClickSub:any, buyNumber: number}) => {

    const onPressAddHandler = () => {
        props.onClickAdd();
    };

    const onPressSubHandler = () => {
        props.onClickSub();
    };

    return(
        <View style={[styles.itemcontainer, styles.spaceBefore]}>
            <View style={styles.nameContainer}>
                <Text>{props.name}</Text>
            </View>
            <View style={styles.valueContainer}>
                {props.buyNumber>0?<Button onPress={onPressSubHandler} text='-' buttonStyle={[styles.checkboxIdle, styles.subContainer]}/>:null}
                <Button onPress={onPressAddHandler} text={props.buyNumber>0? props.buyNumber.toString() : ''} buttonStyle={[styles.checkboxContainer, props.buyNumber>0? styles.checkboxSelected:styles.checkboxIdle]}/>
            </View>
        </View>
    )
};

type Debter = {
    name:string,
    number:number
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
    itemcontainer:{
        flexDirection:'row',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#fbf2ff',
        width: 300,
        borderRadius: 15
    },
    valueContainer:{
        flexDirection:'row',
        alignItems: 'center', 
        justifyContent: 'flex-end',
        flex: 4
    },
    nameContainer:{
        flex:6,
        marginLeft:15
    },
    checkboxContainer:{
        width: 70,
        height:50, 
        alignItems: 'center',
        justifyContent: 'center', 
        borderRadius:15,
    },
    subContainer:{
        width: 25,
        height:25, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius:15,
        marginRight:5
    },
    checkboxIdle:{
        backgroundColor:'#f3d6ff'
    },
    checkboxSelected:{
        backgroundColor:'#dc8aff'
    },
    spaceAfter:{
        marginBottom:20
    },
    spaceBefore:{
        marginTop:20
    },
  });  

export default AddItemToInvoice;
