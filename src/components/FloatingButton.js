import React, {useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';

const FloatingButton = ({navigation}) => {
  //next page
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('FullDataScreen')}
        style={{
          paddingHorizontal: 15,
          backgroundColor: 'red',
          padding: 5,
          borderRadius: 10,
        }}>
        <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
          Compare
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;
