import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Button from './Button'

const Invoice = ({navigation, route}:any) => {
    const [invoiceItems, setInvoiceItems] = useState([] as Array<InvoiceItem>)

    const onReturn = (itemName:string, itemPrice:number, debters:Array<string>, itemID:number) => {
        if(itemName!='' && itemPrice!=0){
            if(debters.length===0){
                debters = route.params.people.map((person:{id:number, name:string})=>{return person.name});
            }
            const newArray = [...invoiceItems];
            if(itemID<0){
                
                newArray.push({id:newArray.length, itemName:itemName, itemPrice:itemPrice, debters:debters});
            }
            else{
                const item_ = newArray.find((item)=>{return item.id===itemID});
                if(item_=== undefined) return;
                const index = newArray.indexOf(item_);
                newArray.splice(index, 1, {id:newArray.length, itemName:itemName, itemPrice:itemPrice, debters:debters});
            }
            setInvoiceItems(newArray);
        }
    }
    const onAddItemClick = () => {
        navigation.navigate('AddItemToInvoice', {onReturn:onReturn, groupName:route.params.groupName, people: route.params.people})
    };

    const onListItemClick = (item:InvoiceItem) => {
        navigation.navigate('AddItemToInvoice', {onReturn:onReturn, groupName:route.params.groupName, people: route.params.people, itemID:item.id, itemName:item.itemName, itemPrice:item.itemPrice, debters:item.debters})
    };

    const onCalculateClick = () => {
        if(0<invoiceItems.length)
            navigation.navigate('InvoiceSummary', {groupName:route.params.groupName, invoiceItems:invoiceItems});
    };

    return (
        <View style={styles.container}>
            <View style={{maxHeight:'70%'}}>
                <FlatList data={invoiceItems} renderItem={(item) => {return <InvoiceListItem onClick={()=>{onListItemClick(item.item)}} itemName={item.item.itemName} itemPrice={item.item.itemPrice}/>}} keyExtractor={item => item.id.toString()}/>
            </View>
            <View style={styles.spaceBefore}>
                <Button onPress={onAddItemClick} text='Add Item'/>
            </View>
            <View style={[styles.spaceBefore, styles.spaceAfter]}>
                <Button onPress={onCalculateClick} text='Calculate'/>
            </View>
        </View>
    )
}

const InvoiceListItem = (props:{itemName:string,itemPrice:number, onClick:any}) => {
    return(
        <View style={[styles.itemcontainer, styles.spaceBefore]}>
            <View style={styles.nameContainer}>
                <Text>{props.itemName}</Text>
            </View>
            <Button onPress={props.onClick} buttonStyle={styles.priceContainer} text={props.itemPrice+' Ft'}/>
        </View>
    )
}

type InvoiceItem = {
    id:number,
    itemName:string,
    itemPrice:number,
    debters:Array<string>
}

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        alignItems:'center',
    },
    itemcontainer:{
        flexDirection:'row',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#fbf2ff',
        width: 300,
        borderRadius: 15
    },
    priceContainer:{
        width: 70,
        height:50, 
        backgroundColor:'#f3d6ff', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius:15,
        flex:3
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

export default Invoice
