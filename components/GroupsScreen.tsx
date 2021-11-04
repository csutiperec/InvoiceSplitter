import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import { useGroups } from './GroupsProvider';

const GroupsScreen = ({navigation}:any) => {
    const groups = useGroups();

    const onNewGroupClick = () => {
        navigation.navigate('CreateGroup');
    };

    return (
        <View style={styles.container}>
            <View style={[styles.spaceAfter,styles.spaceBefore, styles.buttonContainer]}>
                <Button onPress={onNewGroupClick} text='New Group'/>
            </View>
            <View style={[styles.spaceAfter, styles.groupsContainer]}>
                <FlatList data={groups} renderItem={(item)=><GroupListItem group={item.item} navigation={navigation}/>} keyExtractor={item => item.name}/>
            </View>
        </View>
    )
}

const GroupListItem = (props:{group:{name:string, members:Array<String>},navigation:any}) => {
    const onModifyClick = () => {
        props.navigation.navigate('CreateGroup',{name: props.group.name, mode: 'modify'});
    };
    return(
        <View style={[styles.groupListItemContainer, styles.spaceAfter]}>
            <Text style={styles.groupListItemName}>{props.group.name}</Text>
            <Button onPress={onModifyClick} text='More' buttonStyle={styles.groupListItemButton}/>
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
