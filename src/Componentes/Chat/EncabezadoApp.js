import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import {
    Avatar,
    Header,
    Icon,
} from 'react-native-elements';
import Colores from '../../Estilos/Colores';

export default Encabezado = ({route, navigation}) => {
    // METODOS
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
            <Text
                style={Estilos.Nombre}
                >
                    {route.params.toUser}
            </Text>
            <Avatar
                source={require('../../../public/Profile/user.png')}
                rounded
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
    Nombre: {
        color: Colores.blanco
    }
});