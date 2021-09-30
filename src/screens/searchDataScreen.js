import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Loader from '../components/Loader';
import {images, SIZES} from '../constants';
import {AuthContext} from '../context/AuthProvider';
import {NGROK_API} from '../../api';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchDataScreen = ({navigation}) => {
  const {searchData, setSearchData, setLoading, loading} =
    useContext(AuthContext);

  const [search, dispatch] = useState('');

  const [searched, setSearched] = useState('');

  const fetchSearchData = async () => {
    setLoading(true);
    setSearched(search);

    if (!searched) {
      console.log(searched);
      setLoading(false);
    } else {
      axios
        .get(`${NGROK_API}/api/search/${searched}`, {
          headers: {
            accessToken: await AsyncStorage.getItem('accessToken'),
          },
        })
        .then(res => {
          setSearchData(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  const RenderJudulObject = () => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Text style={[styles.textStyle1, {fontWeight: 'bold'}]}>SID </Text>
        <Text style={[styles.textStyle2, {fontWeight: 'bold'}]}>SITENAME </Text>
        <Text style={[styles.textStyle1, {fontWeight: 'bold'}]}>STO </Text>
        <Text style={[styles.textStyle2, {fontWeight: 'bold'}]}>
          HOSTNAME METRO{' '}
        </Text>
        <Text style={[styles.textStyle1, {fontWeight: 'bold'}]}>
          PORT METRO{' '}
        </Text>
        <Text style={[styles.textStyle2, {fontWeight: 'bold'}]}>
          CAPACITY UPLINK GPON{' '}
        </Text>
        <Text style={[styles.textStyle1, {fontWeight: 'bold'}]}>IP OLT </Text>
        <Text style={[styles.textStyle2, {fontWeight: 'bold'}]}>
          HOSTNAME GPON
        </Text>
        <Text style={[styles.textStyle1, {fontWeight: 'bold'}]}>PORT OLT </Text>
        <Text style={[styles.textStyle2, {fontWeight: 'bold'}]}>IP ONT </Text>
        <Text style={[styles.textStyle1, {fontWeight: 'bold'}]}>SN </Text>
        <Text style={[styles.textStyle2, {fontWeight: 'bold'}]}>TYPE ONT </Text>
        <Text style={[styles.textStyle1, {fontWeight: 'bold'}]}>PORT ONT </Text>
        <Text style={[styles.textStyle2, {fontWeight: 'bold'}]}>
          MERK GPON{' '}
        </Text>
        <Text style={[styles.textStyle1, {fontWeight: 'bold'}]}>MACUPDATE</Text>
        <Text style={[styles.textStyle2, {fontWeight: 'bold'}]}>MACMETRO </Text>
        <Text style={[styles.textStyle1, {fontWeight: 'bold'}]}>MACZTE </Text>
        <Text style={[styles.textStyle2, {fontWeight: 'bold'}]}>
          MACHUAWEI{' '}
        </Text>
      </View>
    );
  };

  const RenderValueObject = () => {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.textStyle1}>
          {searchData.length != 0 && searchData[0].SID}
        </Text>
        <Text style={styles.textStyle2}>
          {searchData.length != 0 && searchData[0].SITENAME}
        </Text>
        <Text style={styles.textStyle1}>
          {searchData.length != 0 && searchData[0].STO}
        </Text>
        <Text style={styles.textStyle2}>
          {searchData.length != 0 && searchData[0].HOSTNAME_METRO}
        </Text>
        <Text style={styles.textStyle1}>
          {searchData.length != 0 && searchData[0].PORT_METRO}
        </Text>
        <Text style={styles.textStyle2}>
          {searchData.length != 0 && searchData[0].CAPACITY_UPLINK_GPON}
        </Text>
        <Text style={styles.textStyle1}>
          {searchData.length != 0 && searchData[0].IP_OLT}
        </Text>
        <Text style={styles.textStyle2}>
          {searchData.length != 0 && searchData[0].HOSTNAME_GPON}
        </Text>
        <Text style={styles.textStyle1}>
          {searchData.length != 0 && searchData[0].PORT_OLT}
        </Text>
        <Text style={styles.textStyle2}>
          {searchData.length != 0 && searchData[0].IP_ONT}
        </Text>
        <Text style={styles.textStyle1}>
          {searchData.length != 0 && searchData[0].SN}
        </Text>
        <Text style={styles.textStyle2}>
          {searchData.length != 0 && searchData[0].TYPE_ONT}
        </Text>
        <Text style={styles.textStyle1}>
          {searchData.length != 0 && searchData[0].PORT_ONT}
        </Text>
        <Text style={styles.textStyle2}>
          {searchData.length != 0 && searchData[0].MERK_GPON}
        </Text>
        <Text style={styles.textStyle1}>
          {searchData.length != 0 && searchData[0].MACUPDATE}
        </Text>
        <Text style={styles.textStyle2}>
          {searchData.length != 0 && searchData[0].MACMETRO}
        </Text>
        <Text style={styles.textStyle1}>
          {searchData.length != 0 && searchData[0].MACZTE}
        </Text>
        <Text style={styles.textStyle2}>
          {searchData.length != 0 && searchData[0].MACHUAWEI}
        </Text>
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          padding: 10,
        }}>
        <Text
          style={{alignSelf: 'flex-start', color: '#000', fontWeight: 'bold'}}>
          Search Data :
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start',
          }}>
          <TextInput
            style={styles.input}
            onChangeText={e => dispatch(e)}
            value={search}
            placeholderTextColor="grey"
            placeholder="Search data...."
          />
          <TouchableOpacity
            onPress={fetchSearchData}
            style={{
              padding: 5,
              backgroundColor: 'red',
              alignItems: 'center',
              borderRadius: 30,
              justifyContent: 'center',
            }}>
            <Icon name="magnify" color="#fff" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderData = () => {
    return (
      <View style={{flex: 1, backgroundColor: 'transparent'}}>
        <ScrollView>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
              }}>
              <RenderJudulObject />
              <RenderValueObject />
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          alignSelf: 'flex-start',

          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Icon name="keyboard-backspace" color="#000" size={25} />
        <Text style={{color: '#000', fontSize: 14, marginLeft: 5}}>Back</Text>
      </TouchableOpacity>

      {renderSearch()}

      {searchData.length <= 0 ? <View /> : renderData()}

      {loading ? <Loader /> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingBottom: 20,
  },
  input: {
    height: 40,
    marginRight: 5,
    marginVertical: 5,
    borderWidth: 1,
    width: '85%',
    color: '#000',
    borderRadius: 30,
    paddingLeft: 15,
  },
  textStyle1: {
    fontSize: 12,
    padding: 10,
    backgroundColor: 'red',
    color: '#fff',
    borderRightColor: '#fff',
    borderRightWidth: 1,
  },
  textStyle2: {
    fontSize: 12,
    color: '#000',

    padding: 10,
    backgroundColor: '#fff',
    borderRightColor: 'red',
    borderRightWidth: 1,
  },
});

export default SearchDataScreen;
