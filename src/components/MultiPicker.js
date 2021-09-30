import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import {NGROK_API} from '../../api';
import {Alert, Text, View, ActivityIndicator} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
import {AuthContext} from '../context/AuthProvider';
import AsyncStorage from '@react-native-community/async-storage';

// Options data must contain 'item' & 'id' keys

function MultiPicker() {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const {multiData, loading, time} = useContext(AuthContext);

  return (
    <View style={{marginBottom: 20}}>
      <SelectBox
        label="Select week"
        inputPlaceholder="Pilih waktu..."
        options={time}
        selectedValues={selectedTeams}
        onMultiSelect={e => onMultiChange(e)}
        onTapClose={e => onMultiChange(e)}
        isMulti
        labelStyle={{fontSize: 14, fontWeight: 'bold', left: -10}}
        optionsLabelStyle={{fontSize: 12, color: '#000'}}
        listEmptyLabelStyle={{fontSize: 12, color: '#fff'}}
        hideInputFilter="false"
        containerStyle={{
          width: '105%',
          backgroundColor: 'red',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
          left: -10,
        }}
        multiListEmptyLabelStyle={{fontSize: 12}}
        arrowIconColor="#fff"
        multiOptionContainerStyle={{
          backgroundColor: '#000',

          borderBottomWidth: 0,
        }}
        multiOptionsLabelStyle={{color: '#fff'}}
      />
    </View>
  );

  async function onMultiChange(e) {
    setSelectedTeams(xorBy(selectedTeams, [e], 'id'));
    const {id, item} = e;
    axios
      .get(`${NGROK_API}/api/data/${id}`, {
        headers: {
          accessToken: await AsyncStorage.getItem('accessToken'),
        },
      })
      .then(res => {
        let data = res.data.slice(1, 5);
        let newDatas = data.map(r => {
          return r.slice(3);
        });
        multiData.push(newDatas);
        console.log(multiData);
      })
      .catch(err => {
        alert('No Data found!', 'Data doesnt exist yet.');
        console.log(err);
      });
    console.log(multiData);
    console.log(id);
  }
}

export default MultiPicker;
