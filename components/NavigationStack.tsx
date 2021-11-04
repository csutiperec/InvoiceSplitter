import React from 'react';
import MainScreen from './MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeopleListSplittingScreen from './PeopleListSplittingScreen';
import AddNewPersonToSplittingList from './AddNewPersonToSplittingList';

const NavigationStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{title:'Invoice Splitter'}}>
          <Stack.Screen name='Main' component={MainScreen}/>
          <Stack.Group>
            <Stack.Screen name='SplittingPeopleList' component={PeopleListSplittingScreen} options={{title: 'People'}}/>
            <Stack.Screen name='AddNewPersonToSplittingList' component={AddNewPersonToSplittingList} options={{title: 'Add person to list'}}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default NavigationStack
