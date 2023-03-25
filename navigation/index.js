import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Index from '../Screens/Home/index';
import Main from '../Screens/Home/main';
import EarthPage from '../Screens/Planet/Earth';
import SunPage from '../Screens/Planet/Sun';
import VenusPage from '../Screens/Planet/Venus';
import MercuryPage from '../Screens/Planet/Mercury';
import MarsPage from '../Screens/Planet/Mars';
import JupiterPage from '../Screens/Planet/Jupiter';
import SaturnPage from '../Screens/Planet/Saturn';
import UranusPage from '../Screens/Planet/Uranus';
import NeptunePage from '../Screens/Planet/Neptune';
import AboutUsScreen from '../Screens/AboutUs/About';
import QuizScreen from '../Screens/Quiz/index';
import Level1 from '../Screens/Quiz/level1';
import Tmplt from '../components/Planet/tmplt';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Quizindex"
      screenOptions={{ headerShown: false, animationEnabled: false }}>        
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="About" component={AboutUsScreen} />
        <Stack.Screen name="Earth" component={EarthPage} />
        <Stack.Screen name="Sun" component={SunPage} />
        <Stack.Screen name="Venus" component={VenusPage} />
        <Stack.Screen name="Mercury" component={MercuryPage} />
        <Stack.Screen name="Mars" component={MarsPage} />
        <Stack.Screen name="Jupiter" component={JupiterPage} />
        <Stack.Screen name="Saturn" component={SaturnPage} />
        <Stack.Screen name="Uranus" component={UranusPage} />
        <Stack.Screen name="Neptune" component={NeptunePage} />
        <Stack.Screen name="Quizindex" component={QuizScreen} />
        <Stack.Screen name="lvl1" component={Level1} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
};
// export const TabNav = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Index" component={Index} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }


export default Navigation;