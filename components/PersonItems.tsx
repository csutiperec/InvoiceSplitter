import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

const PersonItems = ({navigation, route}:any) => {
    const [invoiceItems, setInvoiceItems] = useState([] as Array<InvoiceItem>);

    useEffect(() => {
        navigation.setOptions({title: route.params.title})
        setInvoiceItems(route.params.invoiceItems);
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <FlatList data={invoiceItems} renderItem={(item) => {return <InvoiceListItem itemName={item.item.itemName} itemPrice={item.item.itemPrice} debterNr={item.item.debters.length}/>}} keyExtractor={item => item.id.toString()}/>
            </View>
        </View>
    )
}

const InvoiceListItem = (props:{itemName:string,itemPrice:number,debterNr:number}) => {
    return(
        <View style={[styles.itemcontainer, styles.spaceBefore]}>
            <View style={styles.nameContainer}>
                <Text>{props.itemName}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text>{Math.round(props.itemPrice/props.debterNr)+' Ft * '+props.debterNr}</Text>
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
        minWidth: 70,
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

export default PersonItems
