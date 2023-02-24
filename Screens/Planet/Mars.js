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

export default function MarsPage({ navigation }) {
  const mainsc = () => {
    navigation.navigate('Main');
  };

  return(
    <SafeAreaView>
      <Image style={stylesheet.styleBackground} source={Bg}></Image>
      <TouchableOpacity onPress={mainsc}>
        <FontAwesomeIcon icon={faHomeAlt} color="white" style={stylesheet.homeicon} size={40}/>
      </TouchableOpacity>
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