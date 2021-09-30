import AppNavigator from './AppNavigator';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../context/AuthProvider';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Routes;
