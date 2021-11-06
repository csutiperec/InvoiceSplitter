import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useGroups } from './GroupsProvider';
import Button from './Button'

const PeopleListSplittingScreen = ({navigation, route}:any) => {
    const [people, setPeople] = useState([] as Array<{id:number, name:string}>);
    const selectedGroup = route.params.selectedGroup;
    const groups = useGroups();

    useEffect(() => {
        const group = groups.find((group)=>{return group.name === selectedGroup});
        if(group)
        {
            setPeople(group.members.map((value, index)=>{return {id:index, name: value}}));
        }
    }, [selectedGroup])

    const onNewPersonClickHandler = () =>{
        navigation.navigate('AddNewPerson',{onReturn:onReturn});
    };

    const onNextClickHandler = () =>{
        if(people.length>0)
            navigation.navigate('InvoiceIn',{groupName:selectedGroup, people: people});
    };

    const onReturn = (name:string) =>{
        if(name&&name !== null&&name!==''){
            const newPerson = {id:people.length, name: name}
            const index = people.find((person)=>{return person.name===newPerson.name});
            if(index === undefined){
                const newArray = [...people];
                newArray.push(newPerson);
                setPeople(newArray);
            }
        }
    };

    return (
        <View>
            <View style={{maxHeight:'75%'}}>
                <FlatList style={styles.spaceAfter} data={people} renderItem={item => <PeopleListItem text={item.item.name}/>} keyExtractor={item => item.id.toString()}/>
            </View>
            <View style={styles.centered}>
                <View style={styles.spaceAfter}>
                    <Button onPress={onNewPersonClickHandler} text='Add Person'/>
                </View>
                <View style={styles.spaceAfter}>
                    <Button onPress={onNextClickHandler} text='Next'/>
                </View>
            </View>
        </View>
    )
}

const PeopleListItem = (props:{text:string}) => {
    return(
        <View style={{width:100, height: 50, alignSelf:'center', justifyContent:'center'}}>
            <Text style={styles.centered}>
                {props.text}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    centered:{
        alignSelf:'center', justifyContent:'center', textAlign:'center'
    },
    spaceAfter:{
        marginBottom:20
    }
});

export default PeopleListSplittingScreen
