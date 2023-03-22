import React, { useState } from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';

const MusicButton = ({title, onPress, iconName, style}) => {
  const [sound, setSound] = useState();

  

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <AntDesign name={iconName} size={24} color="black" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 10,

    borderRadius: 50, // make the border radius half of the button width/height to make it a circle
    width: 50, // change the width and height to set the size of the button
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default MusicButton;
