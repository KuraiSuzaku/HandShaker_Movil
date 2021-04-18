import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//////
import * as Vistas from './src/Movil/Vistas/Indice';
import RegistroCliente from './src/Movil/Componentes/Registro/RegistroCliente';
//////
export default App = () => {
  return (
    <RegistroCliente /> 
    // <NavigationContainer>
    //   <Vistas.PerfilPremium />
    // </NavigationContainer>
  );
};
