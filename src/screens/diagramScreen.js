import React, {useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  NetworkImprovement,
  OrderNimJabar,
  SpecialOrder,
  Validasi,
} from '../components/Chart';
import {AuthContext} from '../context/AuthProvider';
import Picker from '../components/Picker';
import Loader from '../components/Loader';
import {images} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DiagramScreen = ({navigation}) => {
  const {data, loading, singleWeek, getTime, dispatch} =
    useContext(AuthContext);

  const ComparisonScreenButton = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('FullData')}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,

          padding: 5,
          paddingHorizontal: 15,
          backgroundColor: '#FF0000',
          borderRadius: 5,
        }}>
        <Text style={{fontSize: 14, color: '#fff', fontWeight: 'bold'}}>
          Comparison
        </Text>
      </TouchableOpacity>
    );
  };

  const BgImage = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 100,
          alignSelf: 'center',
        }}>
        <Image
          source={images.choosetime}
          style={{
            width: 300,
            height: 300,
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          alignSelf: 'flex-start',
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Icon name="keyboard-backspace" color="#000" size={25} />
        <Text style={{color: '#000', fontSize: 14, marginLeft: 5}}>Back</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          padding: 20,
          paddingVertical: 0,
        }}>
        <Picker />

        {!data.length <= 0 ? (
          <ScrollView>
            <View style={{marginBottom: 20, flex: 1}}>
              <OrderNimJabar datas={data} />

              <NetworkImprovement datas={data} />

              <SpecialOrder datas={data} />
              <Validasi datas={data} />
            </View>
          </ScrollView>
        ) : (
          <BgImage />
        )}
      </View>

      {loading && <Loader />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default DiagramScreen;
