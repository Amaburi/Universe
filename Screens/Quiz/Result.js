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
import { AppLoading } from 'expo';
import Bg from '../../assets/space.jpg';
import * as Font from 'expo-font';
async function loadFonts() {
  await Font.loadAsync({
    'times-roman': require('../../assets/fonts/Poppins-Regular.ttf'),
  });
}

import Responsive from '../../Helper/Responsive';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// Custom Component
import QuizBtn from '../../components/button/quiz';
import LoveShape from '../../components/Love/love';
import Rectangle from '../../components/rectangle/rectangle';

export default function ResultScreen({ navigation, route }) {
  
    const quizFinished = route.params.quizFinished;
    const quizFinished2 = route.params.quizFinished2;
    const quizFinished3 = route.params.quizFinished3;
    const score = route.params.score;
    console.log(score);

    const quizsc = () => {
      
      navigation.navigate('Quizindex', { quizFinished: quizFinished, quizFinished2: quizFinished2, quizFinished3:quizFinished3 });

    };
    
  
  return(
    <View>
        <Image style={styles.styleBackground} source={Bg}></Image>
        <Text style={styles.txtt}>Congrats!! For Completing the Quiz!!</Text>
        <Text style={styles.scoreBtn}>Your Score:  {score}</Text>

        <Rectangle title="Ready?" onPress={quizsc} style={{top: 300, left:30}}/>
        
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
  txtt:{
    position: 'absolute',
    top:100,
    left:10,
    fontSize:25,
    color:'white',
    fontFamily: 'monospace',
  },
  scoreBtn:{
    position: 'absolute',
    top:200,
    left:10,
    fontSize:25,
    color:'white',
    fontFamily: 'monospace',
  }
})