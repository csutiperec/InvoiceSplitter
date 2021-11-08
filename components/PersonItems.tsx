import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

const PersonItems = ({navigation, route}:any) => {
    const [invoiceItems, setInvoiceItems] = useState([] as Array<InvoiceItem>);

    useEffect(() => {
        navigation.setOptions({title: route.params.title})
        setInvoiceItems(route.params.invoiceItems);
    }, [])

    const getDebterNr = (debters:Array<Debter>):number => {
        let returnValue = 0;
        debters.forEach(element => {
            returnValue += element.number;
        });
        return returnValue;
    };

    const getShare = (debters:Array<Debter>, name:string) => {
        const item = debters.find((i)=>{return i.name===name});
        if(item)
        {
            return item.number;
        }
        return 0;
    }

    return (
        <View style={styles.container}>
            <View>
                <FlatList data={invoiceItems} renderItem={(item) => {return <InvoiceListItem itemName={item.item.itemName} itemPrice={item.item.itemPrice} debterNr={getDebterNr(item.item.debters)} share={getShare(item.item.debters, route.params.title)}/>}} keyExtractor={item => item.id.toString()}/>
            </View>
        </View>
    )
}

const InvoiceListItem = (props:{itemName:string,itemPrice:number,debterNr:number, share:number}) => {
    return(
        <View style={[styles.itemcontainer, styles.spaceBefore]}>
            <View style={styles.nameContainer}>
                <Text>{props.itemName}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text>{Math.round(props.itemPrice)+' Ft'}</Text>
                <Text>{Math.round(props.itemPrice/props.debterNr)+' Ft * '+props.share}</Text>
            </View>
        </View>
    )
}

type InvoiceItem = {
    id:number,
    itemName:string,
    itemPrice:number,
    debters:Array<Debter>
}
type Debter = {
    name:string,
    number:number
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
