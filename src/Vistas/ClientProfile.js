import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Componentes from '../Componentes/Indice';
import Colores from '../Estilos/Colores';

export default props => {
  return (
      <SafeAreaProvider style={Estilos.ContenedorApp}>
          <Componentes.EncabezadoApp />
          <View style={{flex: 10}}>
            <Componentes.PerfilCliente.Navegacion {...props} />
          </View>
          <Componentes.Navegacion />
      </SafeAreaProvider>
  );
};
// ESTILOS
const Estilos = StyleSheet.create({
  ContenedorApp: {
      flex: 1,
      backgroundColor: Colores.fondo,
  },
});

