import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Componentes from '../Componentes/Indice';
import Colors from '../Estilos/Colores';

export default class ListaContratacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: true
        }
    }

    componentDidMount() {
        if(this.state.firstLoad) {
            /** Aquí obtiene la lista de las contrataciones */
            this.setState({
                firstLoad: false
            });
        }
    }

    render() {
        if(this.state.firstLoad)
            return( <Componentes.Loading /> );
        return(
            <SafeAreaProvider style={Estilos.ContenedorApp}>
                <Componentes.EncabezadoApp />
                {
                    this.props.user.userType == 'Client' ?
                    <Componentes.ListaContratacion.ListaCliente {...this.props} /> :
                    <Componentes.ListaContratacion.ListaTrabajador {...this.props} />
                }
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