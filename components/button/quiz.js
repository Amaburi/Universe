import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import { Audio } from 'expo-av';

const QuizBtn = (props) => {
  const { title, onPress,style} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style = {styles.rectangle} >
          <Text style={styles.textt}> {title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    width: 209,
    height:64,
    transform:[
      {translateX: 0},
      {translateY: 0},
      {rotate: "0deg"},
    ],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)"
  },
  rectangle:{
    position: 'absolute',
    width: 209,
    height:64,
    borderRadius: 15,
    opacity:1,
    transform:[
      {translateX: 0},
      {translateY: 0},
      {rotate: "0deg"},
    ],
    shadowColor: "rgba(0,0,0,0)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: "rgba(255,255,255,1)"
  },
  textt:{
    position: 'absolute',
    width: 123,
    height:39,
    left:69,
    right: 'auto',
    top: 20,
    bottom: 'auto',
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    alignItems: 'center', // center the text vertically and horizontally
    justifyContent: 'center',
    
  },
  
});
export default QuizBtn;