import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import {BarChart, LineChart, ProgressChart} from 'react-native-chart-kit';

export const OrderNimJabar = ({datas}) => {
  //grab array data into spesific data
  let tempArr = [];
  for (let i = 1; i < datas.length; i++) {
    if (datas[i][0] === '') {
      break;
    } else {
      tempArr.push(datas[i]);
    }
  }
  //get only the "persen" value data
  const x = tempArr.map(v => {
    return v.slice(3, 4);
  });

  //get the name of the data
  const name = tempArr.map(n => {
    return n.slice(0, 1);
  });

  let newName = [];
  newName = newName.concat(...name);

  var result = newName.map(item => item.split(' ').slice(-1));

  const [config] = useState({
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 1, // optional, defaults to 2dp
    propsForLabels: {
      fontSize: 8,
      fontWeight: 'bold',
    },
    fillShadowGradientOpacity: 0.8,
    fillShadowGradient: '#FF0000',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '0.5',
      stroke: '#000',
    },
    strokeWidth: 0,

    barRadius: 0,
  });

  const data = {
    labels: result,
    datasets: [
      {
        data: x,
      },
    ],
  };

  return (
    <View style={{alignItems: 'center', marginBottom: 10}}>
      <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
        OrderNimJabar
      </Text>

      <BarChart
        data={data}
        width={Dimensions.get('window').width * 0.8}
        height={220}
        yAxisSuffix="%"
        fromZero
        showBarTops
        showValuesOnTopOfBars
        chartConfig={config}
      />
    </View>
  );
};

export const NetworkImprovement = ({datas}) => {
  let gamer = []; // get indexes of array where the value is the start for grabbing data
  for (let i = 1; i < datas.length; i++) {
    if (datas[i][0] === '') {
      var magang = datas.indexOf(datas[i]);
      magang += 1;
      gamer.push(magang);
    }
  }

  let tempArr = []; // grab data based on the index of array
  for (; gamer[0] < datas.length; gamer[0]++) {
    if (datas[gamer[0]][0] === '') {
      break;
    } else {
      tempArr.push(datas[gamer[0]]);
    }
  }

  const x = tempArr.map(v => {
    return v.slice(3, 4);
  });

  //get the name of the data
  const name = tempArr.map(n => {
    return n.slice(0, 1);
  });

  let newName = [];
  newName = newName.concat(...name);

  var result = newName.map(item => item.split(' ').slice(-1));

  const [config] = useState({
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 1, // optional, defaults to 2dp
    propsForLabels: {
      fontSize: 8,
      fontWeight: 'bold',
    },
    fillShadowGradientOpacity: 0.8,
    fillShadowGradient: '#FF0000',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '0.5',
      stroke: '#000',
    },

    barPercentage: 0.3,
    barRadius: 0,
  });

  const [progressConfig] = useState({
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',

    propsForLabels: {
      fontSize: 8,
      fontWeight: 'bold',
    },
    fillShadowGradientOpacity: 0.8,
    fillShadowGradient: '#FF0000',
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
    barRadius: 0,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [values, setValues] = useState({
    label: '',
    value: 0,
  });

  const onClickDot = e => {
    setModalVisible(true);
    const value = e.value;
    const i = e.index;
    const label = data.labels;

    setValues({label: label[i], value});
  };
  const {label, value} = values;
  var convertedValue = parseInt(value);
  if (isNaN(convertedValue)) {
    convertedValue = 0;
  } else {
    convertedValue = convertedValue / 100;
  }

  console.log(convertedValue);

  const data = {
    labels: result,
    datasets: [
      {
        data: x,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
        strokeWidth: 1, // optional
      },
    ],
  };

  const ModalDataView = () => {
    const detailValue = {
      labels: [label], // optional
      data: [convertedValue],
    };
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ProgressChart
              data={detailValue}
              width={220}
              height={220}
              strokeWidth={8}
              radius={48}
              chartConfig={progressConfig}
              hideLegend={false}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={{alignItems: 'center', marginBottom: 10}}>
      <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
        Network Improvement
      </Text>
      <LineChart
        data={data}
        width={Dimensions.get('window').width * 0.9}
        height={220}
        yAxisSuffix="%"
        fromZero
        showBarTops
        showValuesOnTopOfBars
        chartConfig={config}
        onDataPointClick={e => onClickDot(e)}
      />
      <ModalDataView />
    </View>
  );
};

export const SpecialOrder = ({datas}) => {
  let gamer = []; // get indexes of array where the value is the start for grabbing data
  for (let i = 1; i < datas.length; i++) {
    if (datas[i][0] === '') {
      var magang = datas.indexOf(datas[i]);
      magang += 1;
      gamer.push(magang);
    }
  }

  let tempArr = []; // grab data based on the index of array
  for (; gamer[1] < datas.length; gamer[1]++) {
    if (datas[gamer[1]][0] === '') {
      break;
    } else {
      tempArr.push(datas[gamer[1]]);
    }
  }

  const x = tempArr.map(v => {
    return v.slice(3, 4);
  });

  //get the name of the data
  const name = tempArr.map(n => {
    return n.slice(0, 1);
  });

  let newName = [];
  newName = newName.concat(...name);

  var result = newName.map(item => item.split(' ').slice(-1));

  const [config] = useState({
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 1, // optional, defaults to 2dp
    propsForLabels: {
      fontSize: 8,
      fontWeight: 'bold',
    },
    fillShadowGradientOpacity: 0.8,
    fillShadowGradient: '#FF0000',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '0.5',
      stroke: '#000',
    },
    strokeWidth: 0,
    barPercentage: 0.8,
    barRadius: 0,
  });

  const data = {
    labels: result,
    datasets: [
      {
        data: x,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 1, // optional
      },
    ],
  };

  return (
    <View style={{alignItems: 'center', marginBottom: 10}}>
      <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
        Special Order
      </Text>
      <BarChart
        data={data}
        width={Dimensions.get('window').width * 0.8}
        height={220}
        yAxisSuffix="%"
        fromZero
        showBarTops
        showValuesOnTopOfBars
        chartConfig={config}
      />
    </View>
  );
};

export const Validasi = ({datas}) => {
  let gamer = []; // get indexes of array where the value is the start for grabbing data
  for (let i = 1; i < datas.length; i++) {
    if (datas[i][0] === '') {
      var magang = datas.indexOf(datas[i]);
      magang += 1;
      gamer.push(magang);
    }
  }

  let tempArr = []; // grab data based on the index of array
  for (; gamer[2] < datas.length; gamer[2]++) {
    if (datas[gamer[2]][0] === '') {
      break;
    } else {
      tempArr.push(datas[gamer[2]]);
    }
  }

  console.log(gamer);

  const x = tempArr.map(v => {
    return v.slice(3, 4);
  });

  //get the name of the data
  const name = tempArr.map(n => {
    return n.slice(0, 1);
  });

  let newName = [];
  newName = newName.concat(...name);

  var result = newName.map(item => item.split(' ').slice(-1));

  const data = {
    labels: result,
    datasets: [
      {
        data: x,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 1, // optional
      },
    ],
  };
  const [config] = useState({
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 1, // optional, defaults to 2dp
    propsForLabels: {
      fontSize: 8,
      fontWeight: 'bold',
    },
    fillShadowGradientOpacity: 0.8,
    fillShadowGradient: '#FF0000',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '0.5',
      stroke: '#000',
    },
    strokeWidth: 0,
    barPercentage: 0.8,
    barRadius: 0,
  });

  return (
    <View style={{alignItems: 'center', marginBottom: 50}}>
      <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
        Validasi
      </Text>
      <BarChart
        data={data}
        width={Dimensions.get('window').width * 0.8}
        height={220}
        yAxisSuffix="%"
        fromZero
        showBarTops
        showValuesOnTopOfBars
        chartConfig={config}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
