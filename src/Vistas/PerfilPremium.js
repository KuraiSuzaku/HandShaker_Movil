import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//////
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';
//////
export default (props) => {
  // PRUEBA
  const test_props = {
    imagenFondo : require('../../public/Images/test.jpg'),
    valoracion : 2.5,
    acercade : {
                  informacion: 'Aquí estoy poniendo mi información :D MUCHOS CARACTERESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
                  imagen: require('../../public/Images/acercade_placeholder.png'),
                },
    contacto : {
                  correo: 'a17310020@cet.mx',
                  telefono: '36-52-01-45',
                  celular: '+52 33-18-07-29-45',
                  domicilio: 'Calle Paseo de Los Brezos 727C, Tabachines, 45188 Zapopan, Jal.'
                },
    resenas : [
                {
                  key: '1',
                  nombre: 'Carlos Eduardo Cervera Flota',
                  valoracion: 5,
                  comentario: 'Me parecio excelente su trabajo',
                  fecha: '10/12/2020',
                  avatar: require('../../public/Profile/user.png'),
                },
                {
                  key: '2',
                  nombre: 'Daniel Alberto Castañeda Mejía',
                  valoracion: 3,
                  comentario: 'Odie cada momento y cada aspecto de su ser.\n0/100 si pudiera la despediria yo mismo.',
                  fecha: '10/12/2020',
                  avatar: require('../../public/Profile/user.png'),
                }
              ]
  }
  //////
  return(
    <SafeAreaProvider style={Estilos.ContenedorApp}>
      <Componentes.EncabezadoApp />
      <Componentes.PerfilTrabajador.Contenedor
          {...props}
          {...test_props}
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
});
