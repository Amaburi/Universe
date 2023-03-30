import React, { Component, useRef,useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import Bg from '../../assets/space.jpg';


import Responsive from '../../Helper/Responsive';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// Custom Component
import QuizBtn from '../../components/button/quiz';
import LoveShape from '../../components/Love/love';
import { FontAwesome } from '@expo/vector-icons';
export default function QuizScreen({ navigation }) {
  const mainsc = () => {
    navigation.navigate('Main');
  };
  const lvl1 = () => {
    navigation.navigate('lvl1');
  };
  const lvl2 = () => {
    navigation.navigate('lvl2');
  };
  const lvl3 = () => {
    navigation.navigate('lvl3');
  };

  return(
    <SafeAreaView style={styles.root}>
      <Image style= {styles.styleBackground} source={Bg}></Image>

      <View>

        <TouchableOpacity onPress={mainsc}>
          <FontAwesome name="home" size={40} color="white" style={styles.homeicon}/>
        </TouchableOpacity>
        <QuizBtn title="Level 1" onPress={lvl1} style={{left: 80, top: 280}} />
        <QuizBtn title="Level 2" onPress={lvl2} style={{left: 80, top: 360}} />
        <QuizBtn title="Level 3" onPress={lvl3} style={{left: 80, top: 450}} />
      
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeicon: {
    position: 'absolute',
    left: Responsive.horizontal(320),
    top: Responsive.horizontal(90),
    width: 180,
  },
  styleBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: null,
    width: 430,
  },
  homeicon:{
    position: 'absolute',
    left: 330,
    top: 120
  },
})