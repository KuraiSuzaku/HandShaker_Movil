import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
} from 'react-native';
import {
    Header,
    Icon,
    Input,
} from 'react-native-elements';
//////
import Colores from '../Estilos/Colores';
//////
export default Encabezado = (props) => {
    const [search, setSearch] = useState(null);
    const navigation = useNavigation();
    // METODOS
    const Buscar = () => {
        console.log('Buscar ' + search);
    };
    const AbrirMenu = () => {
        navigation.toggleDrawer();
    };
    //////
    return(
        <Header
            backgroundColor={Colores.fondoOscuro}
            containerStyle={Estilos.Encabezado}
            leftContainerStyle={Estilos.ContenedorComponente}
            centerContainerStyle={[Estilos.ContenedorComponente, {flex: 5}]}
            rightContainerStyle={Estilos.ContenedorComponente}
            >
            <Icon
                name='bars'
                type='font-awesome'
                size={25}
                color={Colores.blanco}
                containerStyle={Estilos.ContenedorIcono}
                iconStyle={Estilos.Icono}
                onPress={() => AbrirMenu()}
                />
            <Input
                placeholder='Buscar...'
                containerStyle={Estilos.ContenedorBusqueda}
                inputContainerStyle={Estilos.Busqueda}
                inputStyle={Estilos.TextoBusqueda}
                onChangeText={(search) => setSearch(search)}
                />
            <Icon
                name='search'
                type='font-awesome'
                size={25}
                color={Colores.simbolos}
                containerStyle={Estilos.ContenedorIcono}
                iconStyle={Estilos.Icono}
                onPress={() => Buscar}
                />
        </Header>
    );
};
// ESTILOS
const Estilos = StyleSheet.create({
    Encabezado: {
        flexDirection: 'row',
    },
    ContenedorComponente: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ContenedorIcono: {
        flex: 1,
        justifyContent: 'center',
    },
    ContenedorBusqueda: {
        flex: 1,
        height: 40,
        paddingVertical: 0,
    },
    Busqueda: {
        height: 40,
        borderRadius: 20,
        backgroundColor: Colores.blanco,
        paddingHorizontal: 20,
    },
    TextoBusqueda: {
        fontSize: 18,
        padding: 0,
    },
});