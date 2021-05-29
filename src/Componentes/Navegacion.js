import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
//////
import Colores from '../Estilos/Colores';
//////
export default Navegacion = (props) => {
    const navigation = useNavigation();
    // METODOS
    const Navegar = (newView) => {
        navigation.navigate(newView);
    }
    //////
    return(
        <View>
        <View style={Estilos.Navegacion}>
            <Icon
                name='home'
                type='font-awesome'
                color={Colores.simbolos}
                size={25}
                containerStyle={Estilos.ContenedorIcono}
                onPress={() => Navegar('Home')}
                />
            <Icon
                name='money'
                type='font-awesome'
                color={Colores.simbolos}
                size={25}
                containerStyle={Estilos.ContenedorIcono}
                onPress={() => Navegar('Promociones')}
                />
            <Icon
                name='envelope'
                type='font-awesome'
                color={Colores.simbolos}
                size={25}
                containerStyle={Estilos.ContenedorIcono}
                onPress={() => Navegar('ListaChats')}
                />
            <Icon
                name='bell'
                type='font-awesome'
                color={Colores.simbolos}
                size={25}
                containerStyle={Estilos.ContenedorIcono}
                onPress={() => Navegar('Notificaciones')}
                />
            <Icon
                name='question'
                type='font-awesome'
                color={Colores.simbolos}
                size={30}
                containerStyle={Estilos.ContenedorIcono}
                onPress={() => Navegar('Ayuda')}
                />
        </View>
        </View>
    );
};
// ESTILOS
const Estilos = StyleSheet.create({
    Navegacion: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colores.fondoOscuro,
    },
    ContenedorIcono: {
        padding: 5,
        margin: 5,
    },
});