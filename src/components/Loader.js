import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {SIZES} from '../constants';

const Loader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 10,
        width: SIZES.width,
        height: SIZES.height,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color="#FF0000" />
    </View>
  );
};

export default Loader;
