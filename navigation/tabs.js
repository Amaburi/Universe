import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Index from '../Screens/Home/index';


const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (

      <Tab.Navigator>
        <Tab.Screen name="Home" component={Index} />
      </Tab.Navigator>

  );
}