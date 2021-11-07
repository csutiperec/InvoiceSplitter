import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import Button from './Button'
import { useHistory, useHistoryUpdateContext } from './HistoryProvider'

const InvoiceSummary = ({navigation, route}:any) => {
    const [calculationResults, setCalculationResults] = useState([] as Array<calculationResult>)
    const setHistory = useHistoryUpdateContext();
    const history = useHistory();

    useEffect(() => {
        if(route.params.mode === 'create'){
            const result = calculateResult(route.params.invoiceItems);
            setCalculationResults(result);
            const newHistory = [...history];
            const newItem = {id:route.params.saveID, date:new Date(), groupName:route.params.groupName, invoiceSummary:result};
            newHistory.splice(route.params.saveID, 1, newItem)
            setHistory(newHistory);
        }
        else if(route.params.mode === 'history')
        {
            setCalculationResults(route.params.invoiceItems);
        }
    }, [])

    const calculateResult = (invoiceItems:Array<InvoiceItem>):Array<calculationResult> => {
        const people = [] as Array<calculationResult>;
        invoiceItems.forEach(item => {
            const perPersonPrice = item.itemPrice/item.debters.length;
            item.debters.forEach(person => {
                const personInPeople = people.find((person_)=>{return person===person_.personName});
                if(personInPeople){
                    personInPeople.personPaying = personInPeople.personPaying + perPersonPrice;
                    personInPeople.itemsBought.push(item);
                }
                else{
                    people.push({
                        personName:person,
                        personPaying:perPersonPrice,
                        itemsBought:[item]
                    });
                }
            });
        });
        people.forEach(person => {
            person.personPaying= Math.round(person.personPaying);
        });
        return people;
    };    

    const onListItemClick = (item:calculationResult) => {
        navigation.navigate('PersonItems', {title:item.personName, invoiceItems:item.itemsBought})
    };

    const onFinishClick = () => {
        navigation.navigate('Main')
    };

    return (
        <View style={styles.container}>
            <View style={{maxHeight:'75%'}}>
                <FlatList data={calculationResults} renderItem={(item) => {return <ResultListItem onClick={()=>{onListItemClick(item.item)}} personName={item.item.personName} personPaying={item.item.personPaying}/>}} keyExtractor={item => item.personName}/>
            </View>
            <View style={[styles.spaceBefore, styles.spaceAfter]}>
                <Button onPress={onFinishClick} text='Finish'/>
            </View>
        </View>
    )
}

const ResultListItem = (props:{personName:string,personPaying:number, onClick:any}) => {
    return(
        <View style={[styles.itemcontainer, styles.spaceBefore]}>
            <View style={styles.nameContainer}>
                <Text>{props.personName}</Text>
            </View>
            <Button onPress={props.onClick} buttonStyle={styles.priceContainer} text={props.personPaying+' Ft'}/>
        </View>
    )
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

export default InvoiceSummary
