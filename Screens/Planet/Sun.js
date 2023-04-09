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

import { faCheckSquare, faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Sun from '../../assets/sun.png';
import axios from 'axios'

export default function SunPage({ navigation }) {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('https://yurekaa.my.id/api/universe')
      .then(function (response) {
        console.log('success', response.data.data[1].Planet)
        setData(response.data.data[1])
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

      <View style={stylesheet.matahari}>
        <TouchableHighlight>
          <Image style={stylesheet.sun} source={Sun} />
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
  sun: {
    position: 'absolute',
    left: Responsive.horizontal(30),
    top: Responsive.horizontal(-270),

    width: 270,
    height: 270,
  },
  matahari: {
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