import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import * as Vistas from './src/Vistas/Indice';
import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; 

const AppNavigator = createStackNavigator({  
      //Home: Vistas.Home, AQUI HAY QUE PONER EL INICIO 
      PerfilPremium: Vistas.PerfilPremium,
      PerfilTrabajador: Vistas.PerfilTrabajador,
      Contratacion: Vistas.Contratacion,  
  },  
  {  
      initialRouteName: 'PerfilTrabajador'  
  }  
);

const AppContainer = createAppContainer(AppNavigator);  

export default App = () => {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      <Vistas.Menu />
    </NavigationContainer>
  );
};
