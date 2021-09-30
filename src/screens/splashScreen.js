import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Image, Animated} from 'react-native';
import RenderBackground from '../components/RenderBackground';
import {images, SIZES} from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import {NGROK_API} from '../../api';
import axios from 'axios';

const SplashScreen = ({navigation}) => {
  const animation = React.useRef(new Animated.Value(0)).current;
  const [username] = useState('telkom');

  useEffect(() => {
    loginAsGuest();
    console.log(username);
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.replace('Home');
    }, 1650);
  }, []);

  const loginAsGuest = async () => {
    await axios
      .post(`${NGROK_API}/api/auth`, {username})
      .then(respone => {
        if (respone.data.error) {
          alert(respone.data.error);
        } else {
          AsyncStorage.setItem('accessToken', respone.data.token);
        }
        console.log(respone.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <RenderBackground />
      <Animated.View
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          opacity: animation,
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [-200, -150],
              }),
            },
          ],
        }}>
        <Image
          source={images.logo2}
          style={{width: 500, height: 200}}
          resizeMode="contain"
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.padding * 2,
  },
});

export default SplashScreen;
