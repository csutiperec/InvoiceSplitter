import React from 'react';
import MainScreen from './MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeopleListSplittingScreen from './PeopleListSplittingScreen';

const NavigationStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{title:'Invoice Splitter'}}>
          <Stack.Screen name='Main' component={MainScreen}/>
          <Stack.Group>
            <Stack.Screen name='SplittingPeopleList' component={PeopleListSplittingScreen} options={{title: 'People'}}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default NavigationStack
