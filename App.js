import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Vistas from './src/Vistas/Indice';
import socketClient  from "socket.io-client";
import {rooturl} from './src/Classes/ip'

export default App = () => {
  console.log("conexion se supone")
  var socket = socketClient (rooturl);
  socket.on('connection', () => {
  /*  if (this.state.channel) {
      this.handleChannelSelect(this.state.channel.id);
    }*/
  

  

    console.log(`I'm connected with the back-end`);
  });

 
 /* 
  socket.on("ChatChange", data => {
    console.log("aqui Chat cambio"+data);
    
  });

  socket.on('publicaciones', () => {
    /*  if (this.state.channel) {
        this.handleChannelSelect(this.state.channel.id);
      }*/
     /*
  
      console.log(`Cambio las`);
    });
  */
  const [user, setUser] = useState({
    UserType: null,
  });
  return (
    <NavigationContainer>
      <Vistas.Menu 
        setUser={ (userLogged)=>setUser(userLogged) }
        user = {user}
        />
    </NavigationContainer>
  );
};
