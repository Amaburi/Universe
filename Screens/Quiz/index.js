import React, { Component, useRef,useState,useEffect } from 'react';
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
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// Custom Component
import QuizBtn from '../../components/button/quiz';
import Heart from '../../components/Love/love';
import { FontAwesome } from '@expo/vector-icons';
export default function QuizScreen({ navigation, route }) {
  
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizFinished2, setQuizFinished2] = useState(false);
  const [quizFinished3, setQuizFinished3] = useState(false);

  useEffect(() => {
    if (route.params && route.params.quizFinished) {
      setQuizFinished(route.params.quizFinished);
    }
    if (route.params && route.params.quizFinished2) {
      setQuizFinished2(route.params.quizFinished2);
    }
    if (route.params && route.params.quizFinished3) {
      setQuizFinished3(route.params.quizFinished3);
    }
  }, [route.params]);

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
        <FontAwesomeIcon
          icon={faHeart}
          size={50}
          style={{ color: quizFinished ? 'red' : 'white', top: 440,left: 300 }}
          
          
        />
        <FontAwesomeIcon
          icon={faHeart}
          size={50}
          style={{ color: quizFinished2 ? 'red' : 'white', top: 470,left: 300 }}
          
          
        />
        <FontAwesomeIcon
          icon={faHeart}
          size={50}
          style={{ color: quizFinished3 ? 'red' : 'white', top: 510,left: 300 }}
          
          
        />
        
        <QuizBtn title="Level 1" onPress={lvl1} style={{left: 80, top: 280}} />
        
        <QuizBtn title="Level 2" onPress={lvl2} style={{left: 80, top: 360}} />
        
        <QuizBtn title="Level 3" onPress={lvl3} style={{left: 80, top: 450}} />
      
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heart: {
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    transform: [{ rotate: '45deg' }],
    position: 'relative',
    top: -5,
    left: -5,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'grey',
  },
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