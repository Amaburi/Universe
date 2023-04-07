import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated, Dimensions } from 'react-native';
import bg from '../../assets/space.jpg'
const slides = [
    { title: 'Mercury', image: require('../../assets/mercury.png')},
    { title: 'Venus', image: require('../../assets/venus.png') },
    { title: 'Earth', image: require('../../assets/earth.png') },
    { title: 'Mars', image: require('../../assets/mars.png') },
    { title: 'Jupiter', image: require('../../assets/jupiter.png') },
    { title: 'Saturn', image: require('../../assets/saturn.png') },
    { title: 'Uranus', image: require('../../assets/uranus.png') },
    { title: 'Neptune', image: require('../../assets/Neptune.png') },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideAnimation = new Animated.Value(0);
  const windowWidth = Dimensions.get('window').width;

  const animateSlides = () => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      slideAnimation.setValue(0);
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      animateSlides();
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const currentTitle = slides[currentSlide].title;
  const currentImage = slides[currentSlide].image;

  return (
    <View style={styles.container}>
      <Image source={bg} style={styles.backgroundImage} />
      <Animated.View style={[styles.slideContainer, { transform: [{ translateY: slideAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50],
          }) }] }]}>
        <Image source={currentImage} style={[styles.slideImage, { width: windowWidth - 20 }]} />
        <Text style={styles.slideTitle}>{currentTitle}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  slideContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    height: 400,
    width: 400
  },
  slideTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color:'white',
    marginTop: 10,
  },
});

export default Slideshow;
