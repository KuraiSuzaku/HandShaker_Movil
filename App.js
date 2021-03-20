import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//////
import * as Vistas from './src/Movil/Vistas/Indice';
//////
export default App = () => {
  return (
    <NavigationContainer>
      <Vistas.PerfilPremium />
    </NavigationContainer>
  );
};
