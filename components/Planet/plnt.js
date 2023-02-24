import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
import { Audio } from 'expo-av';

const Plnt = (props) => {
  const {source, onPress, style } = props;

  return (
    <TouchableOpacity style={[styles.Planet, style]} onPress={onPress}>
      <Image source={source}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Planet:{
    position: 'absolute',
    width: 118,
    height: 109,
  }
});

export default Plnt;