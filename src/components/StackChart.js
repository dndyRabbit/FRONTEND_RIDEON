import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Dimensions,
  Modal,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SIZES} from '../constants';
import {AuthContext} from '../context/AuthProvider';

export const OrderNimJabar = ({datas}) => {
  // function appendArrays() {
  //   var temp = [];
  //   for (var i = 0; i < arguments.length; i++) {
  //     temp.push(arguments[i]);
  //   }
  //   return temp;
  // }

  var orderNimJabar = datas.map(r => {
    let a = [];

    a = r[0];
    return a;
  });

  var newArr = [];

  for (let x = 0; x < orderNimJabar.length; x++) {
    newArr = newArr.concat(orderNimJabar[x]);
  }

  var result = newArr.map(function (x) {
    return parseInt(x, 10);
  });

  useEffect(() => {
    console.log(result);
  }, []);

  const data = {
    labels: ['Week-1', 'Week-2'], // optional
    data: [20, 20],
  };

  const [config] = useState({
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    propsForLabels: {
      fontSize: 10,
      fontWeight: 'bold',
    },
    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '0.5',
      stroke: '#000',
    },
  });

  return (
    <View style={{alignItems: 'center', marginBottom: 50}}>
      <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
        ORDER NIM JABAR
      </Text>
      <ScrollView horizontal={true}>
        <View style={{flex: 1, backgroundColor: 'green', marginRight: 20}}>
          <Text>Order Nim Jabar</Text>
          <ProgressChart
            data={data}
            width={Dimensions.get('window').width * 0.9}
            height={220}
            strokeWidth={10}
            radius={16}
            chartConfig={config}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export const NetworkImprovement = () => {
  return <View />;
};
export const SpecialOrder = () => {
  return <View />;
};
export const Validasi = () => {
  return <View />;
};
