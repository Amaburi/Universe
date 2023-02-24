import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import JyBg from '../../assets/jynbg.png';
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={JyBg} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
