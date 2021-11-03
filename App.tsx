import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text } from 'react-native';
import NewSplitScreen from './components/NewSplitScreen';
import HistoryScreen from './components/HistoryScreen';
import GroupsScreen from './components/GroupsScreen';
import AboutScreen from './components/AboutScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const navBarOutOfFocusColor = '#808080';
const navBarFocusColor = '#ff00bf';

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{title:'Invoice Splitter'}} initialRouteName='History'>
        <Tab.Screen 
          name='History' 
          component={HistoryScreen} 
          options={
            {
              tabBarLabel:({focused})=>(
                <Text
                  style={{
                    fontSize:11,
                    color: focused? navBarFocusColor : navBarOutOfFocusColor
                  }}
                >History</Text>), 
              tabBarIcon:({focused})=>(
                <Image 
                  source={require('./assets/history.png')}
                  resizeMode='contain'
                  style={{
                    width:20,
                    height:20,
                    tintColor: focused? navBarFocusColor : navBarOutOfFocusColor
                  }}/>
              )
            }
        }/>
        <Tab.Screen 
          name='Groups' 
          component={GroupsScreen} 
          options={
            {
              tabBarLabel:({focused})=>(
                <Text
                  style={{
                    fontSize:11,
                    color: focused? navBarFocusColor : navBarOutOfFocusColor
                  }}
                >Groups</Text>), 
              tabBarIcon:({focused})=>(
                <Image 
                  source={require('./assets/group.png')}
                  resizeMode='contain'
                  style={{
                    width:20,
                    height:20,
                    tintColor: focused? navBarFocusColor : navBarOutOfFocusColor
                  }}/>
              )
            }
        }/>
        <Tab.Screen 
          name='NewSplit' 
          component={NewSplitScreen} 
          options={
            {
              tabBarLabel:({focused})=>(
                <Text
                  style={{
                    fontSize:11,
                    color: focused? navBarFocusColor : navBarOutOfFocusColor
                  }}
                >New Split</Text>), 
              tabBarIcon:({focused})=>(
                <Image 
                  source={require('./assets/invoice.png')}
                  resizeMode='contain'
                  style={{
                    width:20,
                    height:20,
                    tintColor: focused? navBarFocusColor : navBarOutOfFocusColor
                  }}/>
              )
            }
        }/>
        <Tab.Screen 
          name='About' 
          component={AboutScreen} 
          options={
            {
              tabBarLabel:({focused})=>(
                <Text
                  style={{
                    fontSize:11,
                    color: focused? navBarFocusColor : navBarOutOfFocusColor
                  }}
                >About</Text>), 
              tabBarIcon:({focused})=>(
                <Image 
                  source={require('./assets/about.png')}
                  resizeMode='contain'
                  style={{
                    width:20,
                    height:20,
                    tintColor: focused? navBarFocusColor : navBarOutOfFocusColor
                  }}/>
              )
            }
        }/>


      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}
