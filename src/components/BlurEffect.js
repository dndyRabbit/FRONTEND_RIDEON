import React from 'react';
import {View, Text, Image} from 'react-native';
import {images, SIZES} from '../constants';

const BlurEffect = () => {
  return (
    <View style={{flex: 1, position: 'absolute'}}>
      <Image
        source={images.blur}
        blurRadius={2}
        style={{
          width: SIZES.width,
          height: SIZES.height,
          resizeMode: 'cover',
          opacity: 0.8,
        }}
      />
    </View>
  );
};

export default BlurEffect;
