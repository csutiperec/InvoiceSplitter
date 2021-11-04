import React from 'react'
import { View, Text } from 'react-native'
import { useGroups, useGroupUpdateContext } from './GroupsProvider';
import Button from './Button'

const PeopleListSplittingScreen = ({navigation, route}:any) => {
    const {selectedGroup} = route.params;
    const groups = useGroups();
    const setGroups = useGroupUpdateContext();

    const handleOnPress = () =>{
        setGroups([{name: 'group1', members: ['Pepo', 'Kitti', 'Barna']}, {name: 'group2', members: ['Pepo2', 'Kitti2', 'Barna2']}]);
    };
    const handleOnPress2 = () =>{
        setGroups([]);
    };

    return (
        <View>
            <Text>Selected group is {selectedGroup}</Text>
            <Button onPress={handleOnPress} />
            <Button onPress={handleOnPress2} />
        </View>
    )
}

export default PeopleListSplittingScreen