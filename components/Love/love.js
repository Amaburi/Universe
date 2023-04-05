import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

export default function Heart({ isCleared }) {
  const [isLiked, setIsLiked] = useState(false);

  const handlePress = () => {
    setIsLiked(isLiked);
  };

  const color = isCleared ? (isLiked ? 'red' : 'white') : 'gray';

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{ width: 30, height: 30, backgroundColor: 'transparent' }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 10,
            width: 10,
            height: 20,
            backgroundColor: color,
            transform: [{ rotate: '45deg' }],
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 10,
            height: 20,
            backgroundColor: color,
            transform: [{ rotate: '-45deg' }],
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
