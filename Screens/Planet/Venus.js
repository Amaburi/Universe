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
import { NavigationContainer } from '@react-navigation/native';
import Bg from '../../assets/space.jpg';

import Responsive from '../../Helper/Responsive';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Venus from '../../assets/venus.png';
import axios from 'axios';
export default function VenusPage({ navigation }) {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('http://192.168.194.19:5000/api/universe')
      .then(function (response) {
        console.log('success', response.data.data[2].Planet)
        setData(response.data.data[2])
      })
      .catch(function (error) {
        console.log('error', error.response);
      })
  }, []);

  const mainsc = () => {
    navigation.navigate('Main');
  };

  return(
    <SafeAreaView>
      <Image style={stylesheet.styleBackground} source={Bg}></Image>
      <TouchableOpacity onPress={mainsc}>
        <FontAwesomeIcon icon={faHomeAlt} color="white" style={stylesheet.homeicon} size={40}/>
      </TouchableOpacity>
      <Text style={stylesheet.txtPlanet}>{data?.Planet}</Text>

      <View style={stylesheet.plnt}>
        <TouchableHighlight>
          <Image style={stylesheet.venus} source={Venus} />
        </TouchableHighlight>
      </View>

      <Text style={stylesheet.txtDesc}>{data?.description}</Text>
    </SafeAreaView>
  );
}

const stylesheet = StyleSheet.create({
  txtPlanet:{
    position: 'absolute',
    top: 210,
    left: 160,
    fontSize: 30,
    color: 'white'
  },
  venus: {
    position: 'absolute',
    left: Responsive.horizontal(30),
    top: Responsive.horizontal(-270),

    width: 270,
    height: 270,
  },
  plnt: {
    position: 'absolute',
    left: 22,
    top: 532,
    width: 250,
    height: 250,
  },
  txtDesc:{
    position: 'absolute',
    top: 510,
    left: 10,
    fontSize: 14,
    color: 'white'
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
})