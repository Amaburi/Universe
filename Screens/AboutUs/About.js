import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { faCheckSquare, faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Responsive from '../../Helper/Responsive';


const AboutUsScreen = ({navigation}) => {
  const homesc = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={homesc}>
        <Image
        source={require('../../assets/logo.png')}
        style={styles.image}
        />
      </TouchableOpacity>
      
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        This is an application for our school project, this team insist
        of 3 people first one is me, Arsyad as backend and the frontend and second one is regita as 
        the one that create the design of this app and third one is alben his role same as regita.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeicon: {
    position: 'absolute',
    left: Responsive.horizontal(320),
    top: Responsive.horizontal(90),
    width: 180,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default AboutUsScreen;
