import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Vistas from './src/Vistas/Indice';


export default App = () => {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      <Vistas.Menu />
    </NavigationContainer>

  );
};
