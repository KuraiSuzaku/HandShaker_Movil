import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//////
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';
//////
export default (props) => {
  return(
    <SafeAreaProvider style={Estilos.ContenedorApp}>
      <Componentes.EncabezadoApp />
      <Componentes.PerfilTrabajador.Contenedor
          {...props}
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
