import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const RoundButton = (props) => {
  const { title, onPress, style } = props;

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50, // make the border radius half of the button width/height to make it a circle
    width: 110, // change the width and height to set the size of the button
    height: 110,
    alignItems: 'center', // center the text vertically and horizontally
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RoundButton;
