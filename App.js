import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Vistas from './src/Vistas/Indice';
import socketClient  from "socket.io-client";
import {SERVER} from './src/Classes/ip'
import { MessageNotification } from './src/services/LocalPushController'
import { NewHiringNotification } from './src/services/LocalPushController'

import * as Componentes from './src//Componentes/Indice';


export default App = () => {



  console.log("inicio");

  const [user, setUser] = useState({
    UserType: null,
  });

  console.disableYellowBox = true;
  console.log("conexion se supone")
  var socket = socketClient (SERVER);
  socket.on('connection', () => {
  /*  if (this.state.channel) {
      this.handleChannelSelect(this.state.channel.id);
    }*/
  

  
    LocalNotification()
    console.log(`I'm connected with the back-end`);
  });


  socket.on("ChatChange", data => {
    console.log("aqui Chat cambio * "+data+" nombre  "+user.Email);
    
    MessageNotification(user,data)
  });


  socket.on("HiringChange", data => {
    console.log("Tienes nueva contratacion ");
    
    NewHiringNotification(user,data)
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
    

 return (
    <NavigationContainer>
      <Vistas.Menu 
        setUser={ (userLogged)=>setUser(userLogged) }
        user = {user}
        />
    </NavigationContainer>
  );


};
