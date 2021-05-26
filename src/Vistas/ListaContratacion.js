import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
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
                <View style={{ flex: 10 }}>
                    <ScrollView>
                    {
                        this.props.user.userType == 'Client' ?
                        <View style={Estilos.ClientListHeader}>
                            <View style={Estilos.Divisor} />
                            <View style={Estilos.TitleContainer}>
                                <Text style={Estilos.TitleText}>
                                    Contrataciones
                                </Text>
                            </View>
                        </View> :
                        null
                    }
                    {
                        this.props.user.userType == 'Client' ?
                        <Componentes.ListaContratacion.ListaContrataciones {...this.props} /> :
                        <Componentes.ListaContratacion.ListaTrabajador {...this.props} />
                    }
                    </ScrollView>
                </View>
                <Componentes.Navegacion />
            </SafeAreaProvider>
        );
    }
}

const Estilos = StyleSheet.create({
    ContenedorApp: {
        flex: 1,
        backgroundColor: Colors.fondo
    },
    ClientListHeader: {
        height: 80
    },
    Divisor: {
        backgroundColor: Colors.fondoOscuro,
        height: '50%'
    },
    TitleContainer: {
        marginTop: 22,
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        width: '80%',
        padding: 8,
        backgroundColor: Colors.blanco,
        borderRadius: 50,
        borderColor: Colors.etiquetas,
        borderWidth: 1,
        borderTopWidth: 0
    },
    TitleText: {
        fontWeight: 'bold',
        fontSize: 14
    }
});