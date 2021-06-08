import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Components from '../Componentes/Indice';

export default class Notificaciones extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        <SafeAreaProvider>
            <Components.EncabezadoApp />
            <Components.Notificaciones.Lista {...props} />
            <Components.Navegacion />
        </SafeAreaProvider>
    }
}