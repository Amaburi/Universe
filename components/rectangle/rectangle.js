import React from "react";
import { StyleSheet, Text, View, TouchableHighlight,TouchableOpacity } from "react-native";

const Rectangle = ({ title, onPress, style }) => {
  return (
    <View style={[styles.rectangle, style]}>
      <View style={styles.container}>
        <Text style={styles.txt}>Ready for the next level?</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.ready}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: 326,
    height: 253,
    borderRadius: 35,
    backgroundColor: "rgba(42, 51, 87, 1)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ready: {
    fontSize: 24,
    fontWeight: "900",
    fontFamily: "monospace",
    color: "#fff",
    textAlign: "center",
  },
  button: {
    top: 50,
    width: "80%",
    height: 50,
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  txt:{
    fontSize:30,
    color: 'white',
    fontWeight: '500'
  }
});

export default Rectangle;
