import React from 'react';
import MainScreen from './MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeopleListSplittingScreen from './PeopleListSplittingScreen';
import AddNewPerson from './AddNewPerson';
import CreateGroup from './CreateGroup';
import InvoiceIn from './InvoiceIn';
import InvoiceManual from './InvoiceManual';
import Invoice from './Invoice';

const NavigationStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{title:'Invoice Splitter'}}>
          <Stack.Screen name='Main' component={MainScreen}/>
          <Stack.Screen name='SplittingPeopleList' component={PeopleListSplittingScreen} options={{title: 'People'}}/>
          <Stack.Screen name='AddNewPerson' component={AddNewPerson} options={{title: 'Add person to list'}}/>
          <Stack.Screen name='CreateGroup' component={CreateGroup} options={{title:'Group'}} initialParams={{name: '', mode: 'add'}}/>
          <Stack.Screen name='InvoiceIn' component={InvoiceIn} options={{title: 'Invoice In'}}/>
          <Stack.Screen name='InvoiceManual' component={InvoiceManual} options={{title: 'Invoice Item Manual Input'}}/>
          <Stack.Screen name='Invoice' component={Invoice} options={{title: 'Invoice'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default NavigationStack
