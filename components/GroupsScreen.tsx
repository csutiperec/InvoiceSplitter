import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import { useGroups, useGroupUpdateContext } from './GroupsProvider';

const GroupsScreen = ({navigation}:any) => {
    const groups = useGroups();
    const setGroups = useGroupUpdateContext();

    useEffect(() => {
        setGroups([{name:'group1', members:['member1','member2','member3']},{name:'group2', members:['member12','member22','member32']}]);
    }, [])

    const onNewGroupClick = () => {
        navigation.navigate('CreateGroup');
    };

    return (
        <View style={styles.container}>
            <View style={[styles.spaceAfter,styles.spaceBefore, styles.buttonContainer]}>
                <Button onPress={onNewGroupClick} text='New Group'/>
            </View>
            <View style={[styles.spaceAfter, styles.groupsContainer]}>
                <FlatList data={groups} renderItem={(item)=><GroupListItem group={item.item}/>} keyExtractor={item => item.name}/>
            </View>
        </View>
    )
}

const GroupListItem = (props:{group:{name:string, members:Array<String>}}) => {
    return(
        <View style={[styles.groupListItemContainer, styles.spaceAfter]}>
            <Text style={styles.groupListItemName}>{props.group.name}</Text>
            <Button text='Modify' buttonStyle={styles.groupListItemButton}/>
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
    spaceAfter:{
        marginBottom:20
    },
    spaceBefore:{
        marginTop:20
    },
    buttonContainer:{
        flex: 1
    },
    groupsContainer:{
        flex: 9
    },
    groupListItemContainer:{
        flexDirection:'row',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#fbf2ff',
        width: 300,
        borderRadius: 15
    },
    groupListItemName:{
        flex:7,
        marginLeft:15
    },
    groupListItemButton:{
        width: 70,
        height:50, 
        backgroundColor:'#f3d6ff', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius:15,
        flex:3
    },
});  

export default GroupsScreen;
