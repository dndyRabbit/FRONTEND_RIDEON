import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import {NGROK_API} from '../../api';
import {Alert, Text, View, ActivityIndicator} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '../context/AuthProvider';

// Options data must contain 'item' & 'id' keys

function Picker() {
  const {singleWeek, setWeek, setData, setLoading, time, dispatch, data} =
    useContext(AuthContext);

  return (
    <View style={{marginBottom: 20}}>
      <SelectBox
        label="Pilih waktu"
        inputPlaceholder="Pilih tanggal..."
        options={time}
        value={singleWeek}
        onChange={v => onChange(v)}
        labelStyle={{fontSize: 14, fontWeight: 'bold'}}
        optionContainerStyle={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 5,
          borderRadius: 5,
          borderBottomWidth: 0,
        }}
        optionsLabelStyle={{fontSize: 12}}
        listEmptyLabelStyle={{fontSize: 12}}
        hideInputFilter="false"
        containerStyle={{
          width: '100%',
          backgroundColor: 'red',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
        }}
        arrowIconColor="#fff"
        selectedItemStyle={{fontSize: 12, color: '#fff'}}
      />
    </View>
  );

  async function onChange(v) {
    setWeek(v);
    const {id, item} = v;
    console.log(item);
    setLoading(true);

    if (!item) {
      console.log('ERROR while Fecthing');
      setLoading(false);
    } else {
      axios
        .get(`${NGROK_API}/api/data/${item}`, {
          headers: {
            accessToken: await AsyncStorage.getItem('accessToken'),
          },
        })
        .then(res => {
          setData(res.data);
          setLoading(false);
        })
        .catch(err => {
          Alert.alert('No Data found!', 'Data doesnt exist yet.');
          console.log(err);
          setLoading(false);
        });
    }
  }
}

export default Picker;
