import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Button from './Button'

const Invoice = ({navigation, route}:any) => {
    const [invoiceItems, setInvoiceItems] = useState([] as Array<InvoiceItem>)

    useEffect(() => {
        setInvoiceItems([
            {id:0, itemName:'item1', itemPrice:1, debters:['1', '2', '3']},
            {id:1, itemName:'item2', itemPrice:1, debters:['1', '2', '3']},
            {id:2, itemName:'item3', itemPrice:1, debters:['1', '2', '3']},
            {id:3, itemName:'item4', itemPrice:1, debters:['1', '2', '3']},
            {id:4, itemName:'item5', itemPrice:1, debters:['1', '2', '3']},
        ]);
    }, [])

    return (
        <View style={styles.container}>
            <View style={{maxHeight:'70%'}}>
                <FlatList data={invoiceItems} renderItem={(item) => {return <InvoiceListItem itemName={item.item.itemName} itemPrice={item.item.itemPrice}/>}} keyExtractor={item => item.id.toString()}/>
            </View>
            <View style={styles.spaceBefore}>
                <Button text='Add Item'/>
            </View>
            <View style={[styles.spaceBefore, styles.spaceAfter]}>
                <Button text='Calculate'/>
            </View>
        </View>
    )
}

const InvoiceListItem = (props:{itemName:string,itemPrice:number}) => {
    return(
        <View style={[styles.itemcontainer, styles.spaceBefore]}>
            <View style={styles.nameContainer}>
                <Text>{props.itemName}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text>{props.itemPrice} Ft</Text>
            </View>
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
