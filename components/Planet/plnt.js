import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
import { Audio } from 'expo-av';

const Plnt = (props) => {
  const {source, onPress, style } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={source} style={[styles.Planet, style]}/>
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