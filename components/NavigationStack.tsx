import React from 'react';
import MainScreen from './MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeopleListSplittingScreen from './PeopleListSplittingScreen';
import AddNewPerson from './AddNewPerson';
import CreateGroup from './CreateGroup';
import InvoiceIn from './InvoiceIn';
import Invoice from './Invoice';
import AddItemToInvoice from './AddItemToInvoice';
import InvoiceSummary from './InvoiceSummary';
import PersonItems from './PersonItems';

const NavigationStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{title:'Invoice Splitter'}}>
          <Stack.Screen name='Main' component={MainScreen}/>
          <Stack.Screen name='PeopleListSplittingScreen' component={PeopleListSplittingScreen} options={{title: 'People'}}/>
          <Stack.Screen name='AddNewPerson' component={AddNewPerson} options={{title: 'Add person to list'}}/>
          <Stack.Screen name='CreateGroup' component={CreateGroup} options={{title:'Group'}} initialParams={{name: '', mode: 'add'}}/>
          <Stack.Screen name='InvoiceIn' component={InvoiceIn} options={{title: 'Invoice In'}}/>
          <Stack.Screen name='Invoice' component={Invoice} options={{title: 'Invoice'}}/>
          <Stack.Screen name='AddItemToInvoice' component={AddItemToInvoice} options={{title: 'Add Item'}} initialParams={{itemID: -1, itemName:'', itemPrice:'', debters:[]}}/>
          <Stack.Screen name='InvoiceSummary' component={InvoiceSummary} options={{title: 'Summary'}} />
          <Stack.Screen name='PersonItems' component={PersonItems} options={{title: 'Person'}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default NavigationStack
