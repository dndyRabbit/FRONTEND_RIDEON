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
import {AuthContext} from '../context/AuthProvider';
import MultiPicker from '../components/MultiPicker';
import Loader from '../components/Loader';
import {images} from '../constants';
import {
  OrderNimJabar,
  NetworkImprovement,
  SpecialOrder,
  Validasi,
} from '../components/StackChart';

const FullDataScreen = () => {
  const {loading, multiData} = useContext(AuthContext);

  useEffect(() => {
    console.log(multiData);
  }, [multiData]);

  return (
    <SafeAreaView style={styles.container}>
      <MultiPicker />
      {!multiData.length <= 0 ? (
        <ScrollView>
          <OrderNimJabar datas={multiData} />
        </ScrollView>
      ) : (
        <View />
      )}

      {loading && <Loader />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default FullDataScreen;
