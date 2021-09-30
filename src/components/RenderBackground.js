import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import {images, SIZES} from '../constants';

const RenderBackground = () => {
  return (
    <View
      style={{
        position: 'absolute',
        width: SIZES.width,
        height: SIZES.height,
      }}>
      <Image
        source={images.bg}
        style={{
          width: SIZES.width,
          height: 400,
          alignSelf: 'center',
          position: 'absolute',
          top: 200,
        }}
        resizeMode="contain"
      />
      <Image
        source={images.city}
        style={{
          width: SIZES.width,
          height: 400,
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 0,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default RenderBackground;
