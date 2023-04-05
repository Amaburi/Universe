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
import Earth from '../../assets/earth.png';
import Sun from '../../assets/sun.png';
import Venus from '../../assets/venus.png';
import Mercury from '../../assets/mercury.png';
import Mars from '../../assets/mars.png';
import Jupiter from '../../assets/jupiter.png';
import Saturn from '../../assets/saturn.png';
import Uranus from '../../assets/uranus.png';
import Neptune from '../../assets/Neptune.png';
import Logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Responsive from '../../Helper/Responsive';

import { FontAwesome } from '@expo/vector-icons';

export default function Main({ navigation }) {
  const homesc = () => {
    navigation.navigate('Home');
  };
  const earth = () => {
    navigation.navigate('Earth');
  };
  const sun = () => {
    navigation.navigate('Sun');
  };
  const venus = () => {
    navigation.navigate('Venus');
  };
  const mercury = () => {
    navigation.navigate('Mercury');
  };
  const mars = () => {
    navigation.navigate('Mars');
  };
  const jupiter = () => {
    navigation.navigate('Jupiter');
  };
  const saturn = () => {
    navigation.navigate('Saturn');
  };
  const uranus = () => {
    navigation.navigate('Uranus');
  };
  const neptune = () => {
    navigation.navigate('Neptune');
  };
  const quizsc = () =>{
    navigation.navigate('Quizindex');
  }
  // 
  return (
    <SafeAreaView>
      <Image style={stylesheet.styleBackground} source={Bg}></Image>
      <View>
        <TouchableHighlight onPress={quizsc}> 
        
          <FontAwesome name="gamepad" size={40} color="white" style={stylesheet.quizicon} />
        </TouchableHighlight>
      </View>
      <View>
        <Text style={stylesheet.welcometounibox}>Welcome To Unibox</Text>
      </View>
      <View>
        <Text style={stylesheet.chooseplanet}>Choose Your Best PLanet Box</Text>
      </View>

      <View style={stylesheet.bumi}>
        <TouchableHighlight onPress={earth}>
          <Image style={stylesheet.earth} source={Earth} />
        </TouchableHighlight>
      </View>

      <View>
        <Text style={stylesheet.textEarth}>Earth</Text>
      </View>
      <View>
        <Text style={stylesheet.textSun}>Sun</Text>
      </View>
      <View>
        <Text style={stylesheet.textVenus}>Venus</Text>
      </View>
      <View>
        <Text style={stylesheet.textMercury}>Mercury</Text>
      </View>
      <View>
        <Text style={stylesheet.textMars}>Mars</Text>
      </View>
      <View>
        <Text style={stylesheet.textJupiter}>Jupiter</Text>
      </View>
      <View>
        <Text style={stylesheet.textSaturn}>Saturn</Text>
      </View>
      <View>
        <Text style={stylesheet.textUranus}>Uranus</Text>
      </View>
      <View>
        <Text style={stylesheet.textNeptune}>Neptune</Text>
      </View>

      <View style={stylesheet.matahari}>
        <TouchableHighlight onPress={sun}>
          <Image style={stylesheet.sun} source={Sun} />
        </TouchableHighlight>
      </View>
      <View style={stylesheet.vee}>
        <TouchableHighlight onPress={venus}>
          <Image style={stylesheet.venus} source={Venus} />
        </TouchableHighlight>
      </View>
      <View style={stylesheet.mer}>
        <TouchableHighlight onPress={mercury}>
          <Image style={stylesheet.mercury} source={Mercury} />
        </TouchableHighlight>
      </View>
      <View style={stylesheet.mar}>
        <TouchableHighlight onPress={mars}>
          <Image style={stylesheet.mars} source={Mars} />
        </TouchableHighlight>
      </View>
      <View style={stylesheet.jup}>
        <TouchableHighlight onPress={jupiter}>
          <Image style={stylesheet.jupiter} source={Jupiter} />
        </TouchableHighlight>
      </View>
      <View style={stylesheet.saturn}>
        <TouchableHighlight onPress={saturn}>
          <Image style={stylesheet.saturnus} source={Saturn} />
        </TouchableHighlight>
      </View>
      <View style={stylesheet.ur}>
        <TouchableHighlight onPress={uranus}>
          <Image style={stylesheet.uranus} source={Uranus} />
        </TouchableHighlight>
      </View>
      <View style={stylesheet.nep}>
        <TouchableHighlight onPress={neptune}>
          <Image style={stylesheet.neptune} source={Neptune} />
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
const stylesheet = StyleSheet.create({
  earth: {
    position: 'absolute',
    left: Responsive.horizontal(-35),
    top: Responsive.horizontal(-300),

    width: 118,
    height: 109,
  },
  bumi: {
    position: 'absolute',
    left: 22,
    top: 532,
    width: 118,
    height: 109,
  },
  //
  sun: {
    position: 'absolute',
    left: Responsive.horizontal(-35),
    top: Responsive.horizontal(-280),

    width: 118,
    height: 109,
  },
  matahari: {
    position: 'absolute',
    left: 160,
    top: 510,
    width: 118,
    height: 109,
  },
  //
  venus: {
    position: 'absolute',
    top: Responsive.horizontal(-280),
    left: Responsive.horizontal(-40),
    width: 118,
    height: 109,
  },
  vee: {
    position: 'absolute',
    left: 300,
    top: 510,
    width: 118,
    height: 109,
  },
  //
  mercury: {
    position: 'absolute',
    left: Responsive.horizontal(-30),
    top: Responsive.horizontal(-115),


    width: 118,
    height: 109,
  },
  mer: {
    position: 'absolute',
    left: 22,
    top: 532,
    width: 118,
    height: 109,
  },
  //
  mars: {
    position: 'absolute',
    left: Responsive.horizontal(110),
    top: Responsive.horizontal(-110),

    width: 118,
    height: 109,
  },
  mar: {
    position: 'absolute',
    left: 22,
    top: 532,
    width: 118,
    height: 109,
  },
  //
  jupiter: {
    position: 'absolute',
    left: Responsive.horizontal(235),
    top: Responsive.horizontal(-110),

    width: 118,
    height: 109,
  },
  jup: {
    position: 'absolute',
    left: 22,
    top: 532,
    width: 118,
    height: 109,
  },
  //
  saturnus: {
    position: 'absolute',
    left: Responsive.horizontal(-30),
    top: Responsive.horizontal(50),

    width: 118,
    height: 109,
  },
  saturn: {
    position: 'absolute',
    left: 22,
    top: 532,
    width: 118,
    height: 109,
  },
  //
  uranus: {
    position: 'absolute',
    left: Responsive.horizontal(110),
    top: Responsive.horizontal(55),

    width: 118,
    height: 109,
  },
  ur: {
    position: 'absolute',
    left: 22,
    top: 532,
    width: 118,
    height: 109,
  },
  // 
  neptune: {
    position: 'absolute',
    left: Responsive.horizontal(240),
    top: Responsive.horizontal(55),

    width: 118,
    height: 109,
  },
  nep: {
    position: 'absolute',
    left: 22,
    top: 532,
    width: 118,
    height: 109,
  },
  //

  textEarth: {
    position: 'absolute',
    left: Responsive.horizontal(15),
    top: Responsive.horizontal(340),
    width: 170,
    color: 'rgba(255,255,255,1)',
    fontSize: 19,
    letterSpacing: 0,
    fontStyle: 'bold',
    fontFamily: 'monospace',
  },
  textSun: {
    position: 'absolute',
    left: Responsive.horizontal(160),
    top: Responsive.horizontal(340),
    width: 170,
    color: 'rgba(255,255,255,1)',
    fontSize: 19,
    letterSpacing: 0,
    fontStyle: 'bold',
    fontFamily: 'monospace',
  },
  textVenus: {
    position: 'absolute',
    left: Responsive.horizontal(280),
    top: Responsive.horizontal(345),
    width: 170,
    color: 'rgba(255,255,255,1)',
    fontSize: 19,
    letterSpacing: 0,
    fontStyle: 'bold',
    fontFamily: 'monospace',
    
  },
  textMercury: {
    position: 'absolute',
    left: Responsive.horizontal(15),
    top: Responsive.horizontal(530),
    width: 170,
    color: 'rgba(255,255,255,1)',
    fontSize: 19,
    letterSpacing: 0,
    fontStyle: 'bold',
    fontFamily: 'monospace',
  },
  textMars: {
    position: 'absolute',
    left: Responsive.horizontal(160),
    top: Responsive.horizontal(530),
    width: 170,
    color: 'rgba(255,255,255,1)',
    fontSize: 19,
    letterSpacing: 0,
    fontStyle: 'bold',
    fontFamily: 'monospace',
  },
  textJupiter: {
    position: 'absolute',
    left: Responsive.horizontal(270),
    top: Responsive.horizontal(530),
    width: 170,
    color: 'rgba(255,255,255,1)',
    fontSize: 19,
    letterSpacing: 0,
    fontStyle: 'bold',
    fontFamily: 'monospace',
  },
  textSaturn: {
    position: 'absolute',
    left: Responsive.horizontal(20),
    top: Responsive.horizontal(690),
    width: 170,
    color: 'rgba(255,255,255,1)',
    fontSize: 19,
    letterSpacing: 0,
    fontStyle: 'bold',
    fontFamily: 'monospace',
  },
  textUranus: {
    position: 'absolute',
    left: Responsive.horizontal(160),
    top: Responsive.horizontal(690),
    width: 170,
    color: 'rgba(255,255,255,1)',
    fontSize: 19,
    letterSpacing: 0,
    fontStyle: 'bold',
    fontFamily: 'monospace',
  },
  textNeptune: {
    position: 'absolute',
    left: Responsive.horizontal(270),
    top: Responsive.horizontal(690),
    width: 170,
    color: 'rgba(255,255,255,1)',
    fontSize: 19,
    letterSpacing: 0,
    fontStyle: 'bold',
    fontFamily: 'monospace',
  },
  //
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  quizicon:{
    position: 'absolute',
    left: 330,
    top: 120
  },
  welcometounibox: {
    position: 'absolute',
    left: 0,
    top: 90,
    width: 170,
    color: 'rgba(255,255,255,1)',
    fontSize: 19,
    letterSpacing: 0,
    fontStyle: 'bold',
    textAlign: 'left',
    fontFamily: 'monospace',
  },
  chooseplanet: {
    position: 'absolute',
    left: 0,
    top: 150,
    width: 200,
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    letterSpacing: 0,
    fontStyle: 'bold',
    textAlign: 'left',
    fontFamily: 'monospace',
  },
  styleBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: null,
    width: 430,
  },
});
