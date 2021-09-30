import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import BlurEffect from '../components/BlurEffect';
import RenderBackground from '../components/RenderBackground';
import {images} from '../constants';
import {AuthContext} from '../context/AuthProvider';

const Home = ({navigation}) => {
  const {time} = useContext(AuthContext);

  const RenderNavigationPage = () => {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'row',
        }}>
        {/* Option Left */}
        <View
          style={{
            flex: 1,
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() =>
              Object.keys(time).length === 0
                ? alert('fetch data first!')
                : navigation.navigate('TableScreen')
            }
            style={{
              alignItems: 'center',
              height: 100,
              justifyContent: 'center',
              padding: 10,
              borderRadius: 5,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              marginBottom: 50,
            }}>
            <Image
              source={images.buttonbg2}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: 5,
                top: -30,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                color: '#000',
                position: 'absolute',
                bottom: 20,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Table Data
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Object.keys(time).length === 0
                ? alert('Data doesnt exist yet, please wait a moment')
                : navigation.navigate('DiagramScreen')
            }
            style={{
              alignItems: 'center',
              height: 100,
              justifyContent: 'center',
              padding: 10,
              borderRadius: 5,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Image
              source={images.buttonbg1}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: 5,
                top: -30,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                color: '#000',
                position: 'absolute',
                bottom: 20,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Diagram Data
            </Text>
          </TouchableOpacity>
        </View>

        {/* Option Right */}
        <View
          style={{
            flex: 1,
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchDataScreen')}
            style={{
              alignItems: 'center',
              height: 100,
              justifyContent: 'center',
              padding: 10,
              borderRadius: 5,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              marginBottom: 50,
            }}>
            <Image
              source={images.buttonbg3}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: 5,
                top: -30,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                color: '#000',
                position: 'absolute',
                bottom: 20,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Search Data
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <RenderBackground />
      <BlurEffect />

      {/* Logo and Title */}
      <View
        style={{
          width: '100%',
          padding: 10,
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Image
          source={images.logo2}
          style={{
            width: '100%',
            height: 250,
            resizeMode: 'contain',
          }}
        />
      </View>

      <RenderNavigationPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default Home;
