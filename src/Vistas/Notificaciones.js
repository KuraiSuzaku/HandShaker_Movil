import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from '../Estilos/Colores';
import * as Components from '../Componentes/Indice';

export default class Notificaciones extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SafeAreaProvider style={{ flex: 1, backgroundColor: Colors.fondo }}>
                <Components.EncabezadoApp />
                <Components.Notificaciones.Lista {...this.props} />
                <Components.Navegacion />
            </SafeAreaProvider>
        );
    }
}