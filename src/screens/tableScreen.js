import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../context/AuthProvider';
import {Table, Row, Rows} from 'react-native-table-component';
import Loader from '../components/Loader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Picker from '../components/Picker';
import {images} from '../constants';

const TableScreen = ({navigation}) => {
  const {data, loading, singleWeek} = useContext(AuthContext);

  let value = data.map(v => {
    return v;
  }); // value

  const timeWeek = data.map(r => {
    return r[0];
  });

  const DATA = {
    tableHead: [`${timeWeek[0]}`, 'PLAN', 'REAL', 'PERSEN'],

    tableData: value.slice(1),
  };

  const BgImage = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 100,
          alignSelf: 'center',
          zIndex: -10,
        }}>
        <Image
          source={images.nodata}
          style={{
            width: 600,
            height: 300,
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  const TableData = () => {
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={DATA.tableHead}
            style={styles.head}
            flexArr={[3, 1, 1, 1]}
            textStyle={
              ([styles.text],
              {fontWeight: 'bold', textAlign: 'center', fontSize: 10})
            }
          />
          <Rows
            data={DATA.tableData}
            textStyle={([styles.text], {fontSize: 10})}
            flexArr={[3, 1, 1, 1]}
            // style={styles.body}
          />
        </Table>
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
          marginBottom: 20,
        }}>
        <Picker />

        {data.length <= 0 ? (
          <BgImage />
        ) : (
          <ScrollView>
            <TableData />
          </ScrollView>
        )}
      </View>

      {loading && <Loader />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {fontSize: 12},
});

export default TableScreen;
