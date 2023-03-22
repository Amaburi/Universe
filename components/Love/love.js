import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const LoveShape = ({ size = 50, fillColor = '#FF0000', strokeColor = '#FF0000', strokeWidth = 2,style }) => {
  const scale = size / 100; // calculate scale factor based on size prop
  return (
    <View style={[styles.container, style , { transform: [{ scale }] }]}>
      <Svg height="100%" width="100%">
        <Path d="M50 80 
          C 70 60, 90 60, 90 40 
          C 90 20, 70 0, 50 20 
          C 30 0, 10 20, 10 40 
          C 10 60, 30 60, 50 80 
          Z" 
          fill={fillColor} 
          stroke={strokeColor} 
          strokeWidth={strokeWidth} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoveShape;
