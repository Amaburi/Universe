import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import SplashScreen from './Screens/Splash/Splash';
import Navigation from './navigation/index';

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Put your app initialization logic here, such as loading data or setting up services
    // When your app is ready to be rendered, set appIsReady to true
    setTimeout(() => {
      setAppIsReady(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 2000);
  }, []);

  if (!appIsReady) {
    return <SplashScreen />;
  }

  return (
    <Navigation/>
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

export default App;
