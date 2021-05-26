import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Vistas from './src/Vistas/Indice';
import * as firebase from './firebase';
import storage from '@react-native-firebase/storage';
import Home from './src/Componentes/Home/Home';

//const reference = storage().ref('imagenes/xd');
/*
listFilesAndDirectories(reference).then(() => {
  console.log('Finished listing');
});*/


export default App = () => {
  const [user, setUser] = useState({
    UserType: null,
  });
  console.log("=============================================================");
  console.log(user);
  return (
    <NavigationContainer>
      <Vistas.Menu 
        setUser={ (userLogged)=>setUser(userLogged) }
        user = {user}
        />
    </NavigationContainer>
  );
};
