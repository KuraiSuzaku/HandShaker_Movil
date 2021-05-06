import 'react-native-gesture-handler';
import React, { useState } from 'react';
import firebase from '@react-native-firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import * as Vistas from './src/Vistas/Indice';

export default App = () => {
  const [user, setUser] = useState(null);
  const fireStorage = firebase.initializeApp();
  return (
    <NavigationContainer>
      <Vistas.Menu />
    </NavigationContainer>
  );
};
