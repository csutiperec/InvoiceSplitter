import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native'
import { useGroups, useGroupUpdateContext } from './GroupsProvider';
import Button from './Button'

const CreateGroup = ({navigation, route}:any) => {
    const [people, setPeople] = useState([] as Array<{id:number, name:string}>);
    const [text, setText] = useState('');
    const [errorText, setErrorText] = useState('');
    const groups = useGroups();
    const setGroups = useGroupUpdateContext();

    useEffect(() => {
        if(route.params.name){
            const group = groups.find((group)=>{return group.name === route.params.name});
            if(group)
            {
                setPeople(group.members.map((value, index)=>{return {id:index, name: value}}));
                setText(route.params.name);
            }
        }
    }, [route])

    const onDeleteClickHandler = () =>{
        let i = 0;
        for( ; i < groups.length; i++ )
        {
            if(groups[i].name === route.params.name) break;
        }
        const newArray = [...groups];
        newArray.splice(i,1);
        setGroups(newArray);
        navigation.navigate('Main');
    };

    const onNewPersonClickHandler = () =>{
        navigation.navigate('AddNewPerson',{onReturn:onReturn});
    };

    const onFinishClickHandler = () =>{
        if(text&&text!=''&&people.length>0){
            const newGroup = {name:text, members:people.map(element => element.name)};
            let i = 0;
            switch (route.params.mode){
                case 'add':
                    for( i = 0; i < groups.length; i++ )
                    {
                        if(groups[i].name === newGroup.name) break;
                    }
                    if(i!==groups.length)
                    {
                        setErrorText('Group name already exists');
                        return;
                    }
                    break;
                case 'modify':
                    for( i = 0; i < groups.length; i++ )
                    {
                        if(groups[i].name === route.params.name) break;
                    }
                    break;
                default:
                    console.log('Unhandled Mode Detected');
            }
            const newArray = [...groups];
            newArray[i] = newGroup;
            setGroups(newArray);
            navigation.navigate('Main');
        }
        else{
            setErrorText('Invalid name format or too few people in group.')
        }
    };

    const onReturn = (name:string) =>{
        if(name&&name!==''){
            const newPerson = {id:people.length, name: name}
            const newArray = [...people];
            newArray.push(newPerson);
            setPeople(newArray);
        }
    };

    return (
        <View>
            <View style={[styles.spaceBefore, styles.centered]}>
                <TextInput onChangeText={text=>setText(text)} value={text} placeholder='Group Name' style={[styles.textField, styles.textFieldText]}/>
            </View>
            <Text style={[styles.centered, styles.red]}>{errorText}</Text>
            <View style={{maxHeight:'50%'}}>
                <FlatList style={styles.spaceAfter} data={people} renderItem={item => <PeopleListItem text={item.item.name}/>} keyExtractor={item => item.id.toString()}/>
            </View>
            <View style={styles.centered}>
                <View style={styles.spaceAfter}>
                    <Button onPress={onNewPersonClickHandler} text='Add Person'/>
                </View>
                <View style={styles.spaceAfter}>
                    <Button onPress={onFinishClickHandler} text='Finish Group'/>
                </View>
                {route.params.mode === 'modify' ? 
                <View style={styles.spaceAfter}>
                    <Button onPress={onDeleteClickHandler} text='Delete Group'/>
                </View>:null}
                
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
    },
    spaceBefore:{
        marginTop:20
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
    red:{color:'red'}
});

export default CreateGroup
