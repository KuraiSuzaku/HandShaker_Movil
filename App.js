import 'react-native-gesture-handler';

import React, { useState } from 'react';
import * as Vistas from './src/Vistas/Indice';
import { NavigationContainer } from '@react-navigation/native';


export default App = () => {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      <Vistas.Menu />
    </NavigationContainer>
  );
};
