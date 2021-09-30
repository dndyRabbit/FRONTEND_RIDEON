import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  Home,
  FullDataScreen,
  TableScreen,
  DiagramScreen,
  SearchDataScreen,
} from '../screens';

const AppNavigator = () => {
  const Stack = createStackNavigator();

  const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={Home} />

        <Stack.Screen name="TableScreen" component={TableStack} />
        <Stack.Screen name="SearchDataScreen" component={SearchDatastack} />
        <Stack.Screen name="DiagramScreen" component={DiagramStack} />
      </Stack.Navigator>
    );
  };
  const TableStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Table" component={TableScreen} />
      </Stack.Navigator>
    );
  };
  const SearchDatastack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SearchData" component={SearchDataScreen} />
      </Stack.Navigator>
    );
  };

  const DiagramStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Diagram" component={DiagramScreen} />
        <Stack.Screen name="FullData" component={FullDataScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splashscreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
