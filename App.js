import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Vistas from './src/Vistas/Indice';

export default App = () => {
  const [user, setUser] = useState(null);
  console.log("=============================================================")
  console.log(user);
  return (
    <NavigationContainer>
      <Vistas.Menu setUser={ (userLogged)=>setUser(userLogged) }/>
    </NavigationContainer>
  );
};
