
import React, { useState, useEffect, useRef } from 'react';
import {View, Text,StyleSheet,SafeAreaView,Image,Button, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tab from '../../navigation/tabs';
import {useNavigation} from '@react-navigation/native';

import RoundButton from "../../components/button/btn";
import MusicButton from "../../components/MusicBtn/Music";





import Bg from '../../assets/space.jpg';
import Logo from '../../assets/logo.png';
import Plnt from '../../assets/plnt.png';



import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';
import audio from '../../assets/Space.mp3';


const Index = ({navigation}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  
  
  
  
  const homesc = () => {
    navigation.navigate('Main');
  };
  const aboutsc = () => {
    navigation.navigate('About');
  };
  const slideshowsc = () => {
    navigation.navigate('slideshow');
  };

  return (
    <SafeAreaView style={styles.root}>
      <Image style= {styles.styleBackground} source={Bg}></Image>
      <ImageBackground style= {styles.styleLogo} source={Plnt}>
        <Image style= {styles.stylePlnt} source={Logo}></Image>
      </ImageBackground>
      <RoundButton title="PLAY" onPress={homesc} style={{left: 140, top: 20}} />
      
      <MusicButton iconName="caretright" onPress={slideshowsc} style={{left: 140, top: 37}}/>
      <MusicButton iconName="infocirlce" onPress={aboutsc} style={{left: 200, top: -10}}/>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    backgroundColor:'#add8e6'
  },
  stylePlnt:{
    width:300,
    height:300,
    left: 50,
    top: 20,
    textAlign: "center",
  },
  appbar:{
    color:'transparent',
    backgroundColor:'#add8e6'
  },
  styleBackground:{
    position:"absolute",
    left: 0,
    top: 0,
    borderRadius: null,
    width: 430
  },
  circle: {
    width: 150,
    left:-30,
    top:110,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#FF9800',
  },
  styleLogo:{
    width:350,
    height:350,
    left: 10,
    top: 90,
    textAlign: "center",
  },
  styleEclipse1:{
    position:"absolute",
    left: -30,
    top: -30,
    borderRadius: null,
    width:150,
    height:150,
    backgroundColor:'#f1c232',
    color:'#f1c232'
  },
  stylePlay:{
    position:"relative",
    left:0,
    top:0,
    alignItems:"center",
    color: '#ffe4e1',
    fontSize:50,

    letterSpacing:0,
    fontStyle:"normal",
    textAlign: "left"
  },
  styleComponent2:{
    position:"absolute",
    left: 150,
    top: 416,
    width: 100,
    height: 100
  }
})

export default Index;