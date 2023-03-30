import React from 'react';
import { View,StyleSheet,Text,TouchableOpacity,onPress } from 'react-native';

const WrongScreen = ({title, onPress}) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <View style={{ flex: 1, margin: 20 }}>
        <Text style={styles.txt}>You Got it Wrong!!!</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.ready}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    ready: {
      fontSize: 24,
      fontWeight: "900",
      fontFamily: "monospace",
      color: "#fff",
      textAlign: "center",
    },
    button: {
      top: 170,
      left: 30,
      width: "80%",
      height: 70,
      backgroundColor: "rgba(217, 217, 217, 1)",
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
    },
    txt:{
      position:'absolute',
      top: 110,
      left: 30,
      fontSize:30,
      color: 'white',
      fontWeight: '500'
    }
  });
export default WrongScreen;
