import React, { Component, useRef } from 'react';
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

export default function Tmplt({ navigation }) {
  const [sound, setSound] = useState();

  async function getPermission() {
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== 'granted') {
    alert('We need permission to play audio!');
    }
  }
  const playSound = async () => {
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('We need permission to play audio!');
      return;
    }

    // Load and play audio
    const { sound } = await Audio.Sound.createAsync(
      require('../../Screens/Home/Space.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
    }
  };



  const mainsc = () => {
    navigation.navigate('Main');
  };

  return(
    <SafeAreaView style={styles.root}>
      <Image style= {styles.styleBackground} source={Bg}></Image>
      <Image style= {styles.styleLogo} source={Logo}></Image>
      
      <RoundButton title="PLAY" onPress={homesc} style={{left: 140}} />
      
      <MusicButton iconName="caretright" onPress={playSound} style={{left: 140, top: 20}}/>
      <MusicButton iconName="infocirlce" onPress={aboutsc} style={{left: 200, top: -27}}/>
      
    </SafeAreaView>
  );
}

const stylesheet = StyleSheet.create({
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