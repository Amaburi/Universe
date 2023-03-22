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
import { NavigationContainer } from '@react-navigation/native';
import Bg from '../../assets/space.jpg';

import { AppBar } from '@react-native-material/core';
import Responsive from '../../Helper/Responsive';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// Custom Component
import QuizBtn from '../../components/button/quiz';
import LoveShape from '../../components/Love/love';
import QuizBtn2 from '../../components/button/quiz2';


export default function QuizScreen({ navigation }) {
  const mainsc = () => {
    navigation.navigate('Main');
  };

  return(
    <SafeAreaView style={styles.root}>
      <Image style= {styles.styleBackground} source={Bg}></Image>

      <View>
        <QuizBtn title="Level 1" onPress={mainsc} style={{left: 80, top: 280}} />
        <QuizBtn title="Level 2" onPress={mainsc} style={{left: 80, top: 360}} />
        <QuizBtn title="Level 3" onPress={mainsc} style={{left: 80, top: 450}} />
      
        <LoveShape size={30} fillColor="#FFFF00" strokeColor="#FFFF00" strokeWidth={2} style={{ left: 200, top: 90 }} />
        <LoveShape size={30} fillColor="#FFFF00" strokeColor="#FFFF00" strokeWidth={2} style={{ left: 200, top: 140 }} />
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
})