import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Components from '../Componentes/Indice';
import Colores from '../Estilos/Colores';

export default class Chat extends React.Component {
    render() {
        return(
            <SafeAreaProvider style={Estilos.ContenedorApp}>
                <Components.Chat.EncabezadoApp {...this.props} />
                <Components.Chat.Chat {...this.props} />
                <Components.Navegacion />
            </SafeAreaProvider>
        );
    }
}

// ESTILOS
const Estilos = StyleSheet.create({
  ContenedorApp: {
      flex: 1,
      backgroundColor: Colores.fondo,
  },
});
