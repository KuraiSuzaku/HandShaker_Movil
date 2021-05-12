import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//////
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';
//////
export default PerfilTrabajador = (props) => {
  
  // PRUEBA
    const imagenFondo = require('../../public/Images/test.jpg');
    const avatar = require('../../public/Profile/user.png');
    const valoracion = 3.5;
    const nombre = 'Armando Paredes de la Colina';
    const titulo = 'Ing. Arquitectura';
    const descripcion = 'Pues yo hago construyo cosas bien chidoris';
    const isPremium = false;
    const acercade = {
                        nombre: nombre,
                        informacion: 'Aquí estoy poniendo mi información :D MUCHOS CARACTERESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
                        imagen: require('../../public/Images/acercade_placeholder.png'),
                      }
    const contacto = {
                        correo: 'tengo_un_correo@hotmail.com',
                        telefono: '36-52-01-45',
                        celular: '+52 33-69-42-34-63',
                        domicilio: 'Háblame para contactarme! :D'
                      }
    const resenas = [
                      {
                        nombre: 'Brenda bien SAD',
                        valoracion: 2,
                        comentario: 'Esta pobre alma no gana 60K al mes como yo, ja',
                        fecha: '26/03/2021',
                        avatar: require('../../public/Profile/user.png'),
                      },
                      {
                        nombre: 'René :D',
                        valoracion: 5,
                        comentario: 'Aquí escribo mi reseña de por que esta persona debería ser contratada para todo \nLa neta que nomás por que lo conozco xd',
                        fecha: '27/03/2021',
                        avatar: require('../../public/Profile/user.png'),
                      }
                    ]
    return(
      <SafeAreaProvider style={Estilos.ContenedorApp}>
        <Componentes.EncabezadoApp/>
        <Componentes.PerfilTrabajador.Contenedor
            imagenFondo={imagenFondo}
            avatar={avatar}
            valoracion={valoracion}
            nombre={nombre}
            titulo={titulo}
            descripcion={descripcion}
            isPremium={isPremium}
            contacto={contacto}
            resenas={resenas}
            acercade={acercade}
            user = {props.user}
            />
        <Componentes.Navegacion />
      </SafeAreaProvider>
    );
}
// ESTILOS
const Estilos = StyleSheet.create({
  ContenedorApp: {
      flex: 1,
      backgroundColor: Colores.fondo,
  },
})