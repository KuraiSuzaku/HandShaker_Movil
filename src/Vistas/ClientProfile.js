import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Componentes from '../Componentes/Indice';
import * as Vistas from '../Vistas/Indice';
import Colores from '../Estilos/Colores';
import { useRoute } from '@react-navigation/core';

export default props => {
  const route = useRoute();

  if(route.params.profileUser)
    return(
      <Vistas.PerfilPremium {...props} />
    );
  else
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

