import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Button from './Button';
import { useHistory } from './HistoryProvider';

const HistoryScreen = ({navigation}:any) => {
    const history = useHistory();
    return (
        <View style={styles.container}>
            <FlatList style={[styles.spaceBefore, styles.spaceAfter]} data={history} renderItem={(item)=>{return <HistoryListItem itemID={item.index} navigation={navigation} item={item.item}/>}} keyExtractor={item=>item.date.toString()}/>
        </View>
    )
};

const HistoryListItem = (props:{item:History, navigation:any, itemID:number}) =>{
    const groupName = props.item.groupName;
    const date = new Date(props.item.date);
    const onClickHandler = () => {
        props.navigation.navigate('InvoiceSummary',{mode:'history', invoiceItems:props.item.invoiceSummary, saveID:props.itemID});
    };
    return(
        <View style={[styles.itemContainer, styles.spaceAfter]}>
            <View style={styles.historyListItemName}>
                <Text>{groupName}</Text>
                <Text>{date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+'  '+date.getHours()+':'+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())}</Text>
            </View>
            <Button onPress={onClickHandler} buttonStyle={styles.historyListItemButton} text='Details'/>
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
    itemContainer: {
        flexDirection:'row',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#fbf2ff',
        width: 300,
        borderRadius: 15
    },
    historyListItemName:{
        flex:7,
        marginLeft:15
    },
    historyListItemButton:{
        width: 70,
        height:50, 
        backgroundColor:'#f3d6ff', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius:15,
        flex:3
    },
    spaceAfter:{
        marginBottom:20
    },
    spaceBefore:{
        marginTop:20
    },
}); 

type History = {
    date:Date,
    groupName:string,
    invoiceSummary:Array<calculationResult>
}
type calculationResult = {
    personName:string,
    personPaying:number,
    itemsBought:Array<InvoiceItem>
}
type InvoiceItem = {
    id:number,
    itemName:string,
    itemPrice:number,
    debters:Array<string>
}

export default HistoryScreen;
