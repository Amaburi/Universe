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

export default function ResultScreen({ navigation, route }) {
  
    const score = route.params.score;
    console.log(score);

  const mainsc = () => {
    navigation.navigate('Main');
  };
  return(
    <View>
        <Image style={styles.styleBackground} source={Bg}></Image>
        <Text style={styles.scoreBtn}>Your Score:  {score}</Text>
        
    </View>
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
  scoreBtn:{
    fontSize:40,
    color:'white'
  }
})