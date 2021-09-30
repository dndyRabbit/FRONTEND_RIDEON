import React, {createContext, useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {NGROK_API} from '../../api';
// import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children, navigation}) => {
  const [user, setUser] = useState({
    name: 'guest',
    status: false,
  });
  const firstUpdate = useRef(true);

  const [data, setData] = useState([]);
  const [multiData, setMultiData] = useState([]);

  const [searchData, setSearchData] = useState([]);

  const [singleWeek, setWeek] = useState({});
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const [time, setTime] = useState([]);

  // const isFocused = useIsFocused();

  useEffect(() => {
    const fetchTimeData = async () => {
      axios
        .get(`${NGROK_API}/api/getTime`, {
          headers: {
            accessToken: await AsyncStorage.getItem('accessToken'),
          },
        })
        .then(res => {
          setTime(res.data);
        });
    };
    fetchTimeData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        data,
        setData,
        singleWeek,
        setWeek,
        loading,
        setLoading,
        setTime,
        time,
        multiData,
        setMultiData,
        setSearchData,
        searchData,
        refresh,
        setRefresh,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
