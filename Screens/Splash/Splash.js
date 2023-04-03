import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator,Image } from 'react-native';
import Logo from '../../assets/logo.png';
class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style= {styles.stylePlnt} source={Logo}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stylePlnt:{
    width:500,
    height:500,
    left: -10,
    top: 20,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SplashScreen;
