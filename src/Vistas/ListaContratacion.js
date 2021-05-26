import React from 'react';
import { ActivityIndicator } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Componentes from '../Componentes/Indice';
import Colors from '../Estilos/Colores';

export default class ListaContratacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firsLoad: true
        }
    }

    componentDidMount() {
        if(this.state.firsLoad) {
            /** Aquí obtiene la lista de las contrataciones */
        }
    }

    render() {
        if(this.state.firsLoad)
            return( <ActivityIndicator size='large' /> );
        return(
            <SafeAreaProvider style={Estilos.ContenedorApp}>
                <Componentes.EncabezadoApp />
                <Componentes.ListaContratacion.Lista
                    {...props}
                    />
                <Componentes.Navegacion />
            </SafeAreaProvider>
        );
    }
}

const Estilos = StyleSheet.create({
    ContenedorApp: {
        flex: 1,
        backgroundColor: Colors.fondo
    }
});