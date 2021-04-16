import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colores from '../../Estilos/Colores';
import * as Components from '../Indice';

const TabBar = createMaterialTopTabNavigator();

export default props => {
    return(
        <TabBar.Navigator
            initialRouteName='publico'
            lazy={true}
            tabBarOptions={{
                style: Estilos.BarraPestañas,
                tabStyle: Estilos.Pestañas,
                labelStyle: Estilos.EtiquetasPestañas,
                activeTintColor: Colores.simbolos,
                inactiveTintColor: Colores.negro,
            }}
        >
            <TabBar.Screen
                name='publico'
                component={Components.PerfilCliente.ClientEditPublic}
                options={{
                    title: 'Perfil Público'
                }}
            />
            <TabBar.Screen
                name='privado'
                component={Components.PerfilCliente.ClientEditPrivate}
                options={{
                    title: 'Información Privada'
                }}
            />
        </TabBar.Navigator>
    );
};
// ESTILOS
const Estilos = StyleSheet.create({
    BarraPestañas: {
        height: 20,
        backgroundColor: Colores.fondo,
        borderBottomWidth: 1,
    },
    EtiquetasPestañas: {
        fontSize: 9,
        fontWeight: 'bold',
    },
    Pestañas: {
        padding: 0,
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
});